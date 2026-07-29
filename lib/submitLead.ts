// Lead delivery used by the homepage booking wizard.
// Path: try /api/quote (validation + rate limiting on the server). FormSubmit
// rejects Vercel datacenter IPs, so on fallback the browser posts the
// server-validated payload directly — see AI_HANDOFF.md "Lead Delivery".
export async function submitLead(
  payload: Record<string, unknown>,
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => null);
    if (res.ok && json?.ok) return { ok: true };
    if (json?.fallback && json?.payload) {
      const direct = await fetch('https://formsubmit.co/ajax/moses.lishaa@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(json.payload),
      });
      const dj = await direct.json().catch(() => null);
      if (dj && (dj.success === true || dj.success === 'true')) return { ok: true };
      return { ok: false };
    }
    return { ok: false, error: typeof json?.error === 'string' ? json.error : undefined };
  } catch {
    return { ok: false };
  }
}
