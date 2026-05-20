import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[140px]" />

      {/* Animated Spaceship */}
      <motion.div
        initial={{ x: -500, y: -120, rotate: -20, opacity: 0 }}
        animate={{
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Rocket */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-[90px]"
        >
          🚀
        </motion.div>

        {/* Brand */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="mt-6 bg-gradient-to-r from-[#fff4d6] via-[#f7d774] to-[#d89b1d] bg-clip-text text-4xl font-black uppercase tracking-[0.2em] text-transparent md:text-6xl"
        >
          VK DIGITAL
        </motion.h1>

        {/* Loading Bar */}
        <div className="mt-10 h-[4px] w-[240px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className="h-full w-[50%] bg-gradient-to-r from-amber-300 to-yellow-500"
          />
        </div>

        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-white/60">
          Loading Experience
        </p>
      </motion.div>
    </motion.div>
  );
}

export default LoadingScreen;