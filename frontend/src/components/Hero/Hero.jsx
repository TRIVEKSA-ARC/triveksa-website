import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      {/* min-h-screen with flex-col and justify-between ensures content fills the entire screen from top to bottom */}
      <section className="relative min-h-screen overflow-hidden bg-transparent text-white flex flex-col items-center justify-between py-12 md:py-20">
        
        {/* SOFT OVERLAY REMOVED FOR MAX VISIBILITY */}
        <div className="absolute inset-0 bg-black/0 z-[1]" />

        {/* COLOR ACCENTS */}
        <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
          <div className="absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-cyan-400/20 blur-[90px]" />
          <div className="absolute right-[10%] top-[24%] h-52 w-52 rounded-full bg-fuchsia-500/20 blur-[110px]" />
          <div className="absolute bottom-[18%] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-400/20 blur-[120px]" />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 w-full max-w-[1600px] px-6 sm:px-8 md:px-10 h-full flex flex-col justify-center gap-y-12 md:gap-y-16">
          
          <div className="mx-auto w-full border border-white/5 bg-transparent px-4 py-2 sm:px-6 md:px-8 lg:px-10">
            
            {/* TOP MINI LABEL - REDESIGNED WITH BIG VISIBLE HIGHLIGHTERS */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-12 flex items-center justify-center gap-6 md:gap-10"
            >
              {/* Left Highlighter - Thick and Vibrant */}
              <span className="h-4 md:h-6 w-24 md:w-48 rounded-full bg-gradient-to-r from-amber-400/60 to-yellow-300 shadow-[0_0_30px_rgba(251,191,36,0.5)]" />
              
              <p className="text-[18px] md:text-[32px] font-bold uppercase tracking-[0.4em] text-white drop-shadow-lg">
                Hi, I am
              </p>
              
              {/* Right Highlighter - Thick and Vibrant */}
              <span className="h-4 md:h-6 w-24 md:w-48 rounded-full bg-gradient-to-l from-amber-400/60 to-yellow-300 shadow-[0_0_30px_rgba(251,191,36,0.5)]" />
            </motion.div>

            {/* MAIN NAME - SCALED FOR IMPACT */}
            <motion.h1
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center leading-[0.88] mb-10 md:mb-14"
            >
              <span className="block whitespace-nowrap font-black uppercase tracking-tight text-[16vw] sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[170px]">
                <span className="text-white mr-4 md:mr-8 drop-shadow-[0_4px_20px_rgba(255,255,255,0.2)]">
                  Vinod
                </span>
                <span className="bg-gradient-to-r from-[#fff7cc] via-[#fcd34d] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(245,158,11,0.3)]">
                  Kumar
                </span>
              </span>
            </motion.h1>

            {/* ROLES PANEL - BETTER PADDING AND SPACING */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto max-w-5xl rounded-full border border-white/20 bg-black/30 px-6 py-4 md:px-12 md:py-5 mb-8 md:mb-12 shadow-2xl backdrop-blur-md"
            >
              <p className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] sm:text-[14px] md:text-[16px] uppercase tracking-[0.35em]">
                <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent font-bold">
                  Full Stack Developer
                </span>
                <span className="text-white/30 text-xl">✦</span>
                <span className="bg-gradient-to-r from-sky-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                  UI/UX Designer
                </span>
                <span className="text-white/30 text-xl">✦</span>
                <span className="bg-gradient-to-r from-pink-200 via-rose-400 to-pink-600 bg-clip-text text-transparent font-bold">
                  Video Editor
                </span>
              </p>
            </motion.div>

            {/* SINGLE LINE DESCRIPTION - STYLE MATCHED TO ROLES FOR VISIBILITY */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.8 }}
              className="mb-10 md:mb-16"
            >
              <p className="mx-auto max-w-6xl text-center text-[12px] sm:text-[14px] md:text-[18px] uppercase tracking-[0.4em] text-white/90 font-semibold">
                Building Modern Digital Experiences & Conversion-Focused Products
              </p>
            </motion.div>

            {/* AVAILABILITY AND BUTTONS - POSITIONED AT THE BOTTOM AREA */}
            <div className="flex flex-col items-center gap-y-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48 }}
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-black/40 px-6 py-3 text-[11px] md:text-[13px] uppercase tracking-[0.3em] text-white shadow-[0_0_30px_rgba(16,185,129,0.2)] backdrop-blur-md">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                  </span>
                  Available for Freelance Projects
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <a
                  href="#projects"
                  className="group relative inline-flex min-w-[200px] items-center justify-center overflow-hidden rounded-full border border-yellow-300/50 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 px-8 py-4 text-[12px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-black shadow-[0_20px_50px_rgba(245,158,11,0.3)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(245,158,11,0.4)]"
                >
                  <span className="relative">Explore Work →</span>
                </a>

                <a
                  href="#contact"
                  className="group relative inline-flex min-w-[200px] items-center justify-center overflow-hidden rounded-full border border-cyan-300/40 bg-cyan-400/10 px-8 py-4 text-[12px] md:text-[14px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/60 hover:bg-cyan-400/25"
                >
                  <span className="relative">Book a Project ✦</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;