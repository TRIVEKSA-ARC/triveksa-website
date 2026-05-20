import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[99999] h-[3px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-300 shadow-[0_0_18px_rgba(56,189,248,0.8)]"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}

export default ScrollProgress;