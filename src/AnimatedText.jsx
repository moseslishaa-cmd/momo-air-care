import { motion } from 'framer-motion';

const pathVariants = {
  hidden:  { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
};

export function AnimatedText({ children }) {
  return <>{children}</>;
}
