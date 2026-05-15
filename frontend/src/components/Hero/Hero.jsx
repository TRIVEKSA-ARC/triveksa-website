import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] overflow-hidden bg-transparent text-white flex items-center justify-center pt-28 md:pt-32 lg:pt-36">
        
        {/* SOFT OVERLAY ONLY - KEEP BG VISIBLE */}
        <div className="absolute inset-0 bg-black/20 z-[1]" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-8">
          
          {/* MAIN CARD */}
          <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-transparent px-6 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16">
            
            {/* TOP MINI LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center justify-center gap-4"
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              <p className="text-[12px] md:text-[13px] uppercase tracking-[0.45em] text-white/75">
                Hi, I am
              </p>
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </motion.div>

            {/* MAIN NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center leading-[0.9]"
            >
              <span className="block whitespace-nowrap font-black uppercase tracking-[-0.06em] text-[12vw] sm:text-[72px] md:text-[96px] lg:text-[132px]">
                <span className="text-white drop-shadow-[0_8px_24px_rgba(255,255,255,0.10)]">
                  Vinod
                </span>
                <span className="bg-gradient-to-b from-[#fff4cc] via-[#fcd34d] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_10px_28px_rgba(245,158,11,0.16)]">
                  Kumar
                </span>
              </span>
            </motion.h1>

            {/* SUBTITLE */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6"
            >
              <p className="mx-auto max-w-2xl text-center text-[11px] md:text-[13px] uppercase tracking-[0.30em] leading-[1.9] text-white/75">
                Building modern digital experiences for brands, startups, and businesses
              </p>
            </motion.div>

            {/* ROLES PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto mt-8 max-w-3xl rounded-full border border-white/10 bg-black/20 px-5 py-3 md:px-7"
            >
              <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.28em]">
                <span className="bg-gradient-to-r from-amber-100 via-yellow-300 to-amber-500 bg-clip-text text-transparent font-semibold">
                  Full Stack Developer
                </span>
                <span className="text-white/20">✦</span>
                <span className="bg-gradient-to-r from-sky-100 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold">
                  UI/UX Designer
                </span>
                <span className="text-white/20">✦</span>
                <span className="bg-gradient-to-r from-pink-100 via-rose-300 to-pink-500 bg-clip-text text-transparent font-semibold">
                  Video Editor
                </span>
              </p>
            </motion.div>

            {/* AVAILABILITY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-7 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-black/20 px-5 py-2 text-[10px] uppercase tracking-[0.28em] text-white/85">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                Available for Freelance
              </div>
            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-9 flex flex-wrap justify-center gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-amber-300/25 bg-black/20 px-8 py-3.5 text-[11px] uppercase tracking-[0.26em] text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-amber-300/50 hover:bg-amber-400/10"
              >
                <span className="relative">Explore Work →</span>
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-black/20 px-8 py-3.5 text-[11px] uppercase tracking-[0.26em] text-white/90 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
              >
                <span className="relative">Contact Me ✦</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;