import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen overflow-hidden bg-transparent text-white flex items-center justify-center pb-16">
        
        {/* SOFT OVERLAY ONLY - KEEP BG VISIBLE */}
        <div className="absolute inset-0 bg-black/2 z-[1]" />

        {/* COLOR ACCENTS */}
        <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
          <div className="absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-cyan-400/20 blur-[90px]" />
          <div className="absolute right-[10%] top-[24%] h-52 w-52 rounded-full bg-fuchsia-500/20 blur-[110px]" />
          <div className="absolute bottom-[18%] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-400/20 blur-[120px]" />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 w-full max-w-[1600px] px-6 sm:px-8 md:px-10">
          
          {/* MAIN HERO WRAP */}
          <div className="mx-auto w-full rounded-[36px] border border-white/10 bg-black/10 px-4 py-10 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
            
            {/* TOP MINI LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center justify-center gap-4"
            >
              <span className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              <p className="text-[12px] md:text-[18px] uppercase tracking-[0.55em] text-white/80">
                Hi, I am
              </p>
              <span className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </motion.div>

            {/* MAIN NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center leading-[0.88]"
            >
              <span className="block whitespace-nowrap font-black uppercase tracking-[-0.075em] text-[16vw] sm:text-[88px] md:text-[120px] lg:text-[160px] xl:text-[190px]">
                <span className="text-white drop-shadow-[0_10px_30px_rgba(255,255,255,0.12)]">
                  Vinod
                </span>
                <span className="bg-gradient-to-r from-[#fff7cc] via-[#fcd34d] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(245,158,11,0.18)]">
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
              <p className="mx-auto max-w-4xl text-center text-[12px] sm:text-[13px] md:text-[15px] uppercase tracking-[0.34em] leading-[1.8] text-white/80">
                Building modern digital experiences for brands
              </p>
            </motion.div>

            {/* ROLES PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto mt-8 max-w-4xl rounded-full border border-white/15 bg-black/20 px-5 py-4 md:px-8"
            >
              <p className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.28em]">
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

            {/* CTA MESSAGE */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.8 }}
              className="mt-8"
            >
              <p className="mx-auto max-w-2xl text-center text-sm md:text-base text-white/70">
                Helping brands and businesses turn ideas into fast, modern, and conversion-focused digital products.
              </p>
            </motion.div>

            {/* AVAILABILITY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.48 }}
              className="mt-6 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-black/25 px-5 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/90 shadow-[0_0_24px_rgba(16,185,129,0.12)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                Available for Freelance Projects
              </div>
            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex min-w-[210px] items-center justify-center overflow-hidden rounded-full border border-yellow-300/40 bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 px-9 py-4 text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.26em] text-black shadow-[0_18px_40px_rgba(245,158,11,0.28)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(245,158,11,0.35)]"
              >
                <span className="relative">Explore Work →</span>
              </a>

              <a
                href="#contact"
                className="group relative inline-flex min-w-[210px] items-center justify-center overflow-hidden rounded-full border border-cyan-300/25 bg-cyan-400/10 px-9 py-4 text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.26em] text-white backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-cyan-400/18"
              >
                <span className="relative">Book a Project ✦</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;