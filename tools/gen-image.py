#!/usr/bin/env python3
"""MOMO Air Care brand image generator (Gemini image API, stdlib only).

Usage:
  python3 tools/gen-image.py --prompt "..." --out public/brand/x.png [--ref public/momo-giraffe.png ...] [--model gemini-2.5-flash-image]

Reads GEMINI_API_KEY from env or .env.local. Never prints the key.
"""
import argparse, base64, json, mimetypes, os, sys, urllib.request

def load_key():
    key = os.environ.get('GEMINI_API_KEY')
    if key:
        return key
    envfile = os.path.join(os.path.dirname(__file__), '..', '.env.local')
    try:
        for line in open(envfile):
            line = line.strip()
            if line.startswith('GEMINI_API_KEY='):
                return line.split('=', 1)[1].strip()
    except FileNotFoundError:
        pass
    sys.exit('GEMINI_API_KEY not found')

def part_for_image(path):
    mime = mimetypes.guess_type(path)[0] or 'image/png'
    data = base64.b64encode(open(path, 'rb').read()).decode()
    return {'inline_data': {'mime_type': mime, 'data': data}}

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--prompt', required=True)
    ap.add_argument('--out', required=True)
    ap.add_argument('--ref', action='append', default=[])
    ap.add_argument('--model', default='gemini-2.5-flash-image')
    ap.add_argument('--aspect', default=None, help='e.g. 16:9, 4:3, 1:1')
    args = ap.parse_args()

    parts = [part_for_image(r) for r in args.ref]
    parts.append({'text': args.prompt})

    payload = {'contents': [{'parts': parts}]}
    if args.aspect:
        payload['generationConfig'] = {'imageConfig': {'aspectRatio': args.aspect}}
    body = json.dumps(payload).encode()
    req = urllib.request.Request(
        f'https://generativelanguage.googleapis.com/v1beta/models/{args.model}:generateContent',
        data=body,
        headers={'Content-Type': 'application/json', 'X-goog-api-key': load_key()},
    )
    try:
        resp = json.load(urllib.request.urlopen(req, timeout=180))
    except urllib.error.HTTPError as e:
        sys.exit(f'HTTP {e.code}: {e.read()[:300]}')

    for part in resp.get('candidates', [{}])[0].get('content', {}).get('parts', []):
        blob = part.get('inline_data') or part.get('inlineData')
        if blob:
            os.makedirs(os.path.dirname(args.out) or '.', exist_ok=True)
            open(args.out, 'wb').write(base64.b64decode(blob['data']))
            print(f'saved {args.out} ({os.path.getsize(args.out)//1024} KB)')
            return
    sys.exit('no image in response: ' + json.dumps(resp)[:400])

if __name__ == '__main__':
    main()
