import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#070707] text-white flex items-center justify-center">
        
        {/* BACKGROUND BASE */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_25%),linear-gradient(180deg,#050505_0%,#0a0a0a_45%,#050505_100%)]" />

        {/* GRID TEXTURE */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/70 z-[1]" />

        {/* GOLD AMBIENT GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_55%)] z-[1]" />

        {/* SIDE BLUR LIGHTS */}
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-amber-400/10 blur-[120px] z-[1]" />
        <div className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-yellow-300/10 blur-[120px] z-[1]" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-8">
          
          {/* MAIN PREMIUM CARD */}
          <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            
            {/* TOP MINI LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center justify-center gap-4"
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              <p className="text-[12px] md:text-[13px] uppercase tracking-[0.45em] text-white/65">
                Hi, I am
              </p>
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            </motion.div>

            {/* MAIN NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center leading-[0.88]"
            >
              <span className="block font-black uppercase tracking-[-0.04em] text-[17vw] sm:text-[86px] md:text-[118px] lg:text-[148px]">
                <span className="inline-block text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.08)]">
                  Vinod
                </span>{" "}
                <span className="inline-block bg-gradient-to-b from-[#fff4cc] via-[#fcd34d] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(245,158,11,0.16)]">
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
              <p className="mx-auto max-w-2xl text-center text-[12px] md:text-[13px] uppercase tracking-[0.32em] leading-[1.9] text-white/50">
                Building modern digital experiences for brands, startups, and businesses
              </p>
            </motion.div>

            {/* ROLES PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto mt-8 max-w-3xl rounded-full border border-white/10 bg-black/30 px-5 py-3 md:px-7 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.22)]"
            >
              <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.28em]">
                <span className="bg-gradient-to-r from-amber-100 via-yellow-300 to-amber-500 bg-clip-text text-transparent font-semibold">
                  Full Stack Developer
                </span>
                <span className="text-white/15">✦</span>
                <span className="bg-gradient-to-r from-sky-100 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold">
                  UI/UX Designer
                </span>
                <span className="text-white/15">✦</span>
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
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-5 py-2 text-[10px] uppercase tracking-[0.28em] text-white/70 shadow-[0_0_20px_rgba(16,185,129,0.08)]">
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
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-amber-300/20 bg-gradient-to-r from-[#1a1a1a] to-[#101010] px-8 py-3.5 text-[11px] uppercase tracking-[0.26em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-0.5 hover:border-amber-300/40 hover:shadow-[0_18px_40px_rgba(245,158,11,0.18)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-300/0 via-amber-300/10 to-amber-300/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative">Explore Work →</span>
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/12 bg-white/[0.03] px-8 py-3.5 text-[11px] uppercase tracking-[0.26em] text-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/8 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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