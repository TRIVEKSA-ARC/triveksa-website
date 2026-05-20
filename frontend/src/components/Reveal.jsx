import { motion } from "framer-motion";

function Reveal({
  children,
  delay = 0,
  y = 80,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;