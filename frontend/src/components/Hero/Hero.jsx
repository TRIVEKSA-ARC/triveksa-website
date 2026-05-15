import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white flex items-center justify-center py-20">
        
        {/* --- DYNAMIC COLORFUL BACKGROUND --- */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Top Right Glow */}
          <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-amber-500/10 blur-[120px] animate-pulse" />
          {/* Bottom Left Glow */}
          <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[120px]" />
          {/* Center Mesh Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05)_0%,transparent_70%)]" />
        </div>

        {/* --- CONTENT --- */}
        <div className="relative z-10 w-full max-w-[1400px] px-6">
          <div className="flex flex-col items-center text-center">
            
            {/* 1. INTRO BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-md mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-[10px] md:text-[12px] font-medium uppercase tracking-[0.4em] text-amber-200/80">
                Crafting Digital Excellence
              </span>
            </motion.div>

            {/* 2. MASSIVE SCALE HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl"
            >
              <span className="block font-black uppercase tracking-[-0.04em] leading-[0.85] text-[18vw] sm:text-[120px] md:text-[160px] lg:text-[200px]">
                {/* VINOD */}
                <span className="block text-white drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                  Vinod
                </span>
                {/* KUMAR WITH COLOR GRADIENT */}
                <span className="block bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_20px_50px_rgba(251,191,36,0.2)]">
                  Kumar
                </span>
              </span>
            </motion.h1>

            {/* 3. ROLES (COLORFUL ACCENTS) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8"
            >
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-amber-400/50" />
                <span className="text-[11px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-amber-400">Full Stack</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-sky-400/50" />
                <span className="text-[11px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-sky-400">UI/UX Designer</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-pink-400/50" />
                <span className="text-[11px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-pink-400">Video Editor</span>
              </div>
            </motion.div>

            {/* 4. IMPACT DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 max-w-2xl text-[14px] md:text-[18px] font-light leading-relaxed text-gray-400 tracking-wide"
            >
              I build <span className="text-white font-medium">high-performance</span> web applications and 
              <span className="text-white font-medium"> cinematic visuals</span> that help brands scale and dominate their industry.
            </motion.p>

            {/* 5. PRIMARY ACTION BUTTONS (CTA FOCUS) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center gap-6"
            >
              {/* PRIMARY CTA */}
              <a
                href="#projects"
                className="group relative flex items-center justify-center overflow-hidden rounded-full bg-white px-12 py-5 text-[12px] font-black uppercase tracking-[0.2em] text-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">Launch Portfolio →</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-amber-200 to-yellow-400 transition-transform duration-500 group-hover:translate-x-0" />
              </a>

              {/* SECONDARY CTA */}
              <a
                href="#contact"
                className="group flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-12 py-5 text-[12px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/40"
              >
                Let's Talk ✦
              </a>
            </motion.div>

          </div>
        </div>

        {/* --- BOTTOM DECORATIVE ELEMENT --- */}
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#050505] to-transparent z-20" />
      </section>
    </>
  );
}

export default Hero;