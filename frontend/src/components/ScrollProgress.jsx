import { motion, useSpring, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        top-0
        left-0
        w-full
        h-[4px]
        origin-left
        z-[999999]
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-amber-300
        shadow-[0_0_25px_rgba(56,189,248,0.9)]
      "
    />
  );
}

export default ScrollProgress;