import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] overflow-hidden text-white flex items-center justify-center">
        
        {/* DARK CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-[1]" />

        {/* SOFT GOLD GLOW - REDUCED OPACITY */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.04),transparent_70%)] z-[1]" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 w-full max-w-7xl px-6">
          
          {/* MAIN GLASS CARD CONTAINER */}
          <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-black/20 backdrop-blur-[10px] px-6 py-16 shadow-[0_0_60px_rgba(0,0,0,0.45)] text-center">

            {/* INTRO LINE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 flex items-center justify-center gap-4"
            >
              <span className="h-[1px] w-10 md:w-12 bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
              <p className="uppercase text-[12px] md:text-[16px] tracking-[0.5em] text-gray-300">
                Hi, I am
              </p>
              <span className="h-[1px] w-10 md:w-12 bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
            </motion.div>

            {/* NAME (SMALLER & SOFTER GLOW) */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative overflow-hidden leading-[0.9]"
            >
              <span className="block text-center font-black uppercase tracking-tight text-[15vw] sm:text-[80px] md:text-[110px] lg:text-[140px]">
                <span className="inline-block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  Vinod
                </span>
                {" "}
                <span className="inline-block text-transparent bg-gradient-to-b from-yellow-100 via-yellow-300 to-amber-500 bg-clip-text drop-shadow-[0_0_12px_rgba(251,191,36,0.18)]">
                  Kumar
                </span>
              </span>
            </motion.h1>

            {/* SUBTITLE (REDUCED WIDTH) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 flex items-center justify-center gap-4"
            >
              <p className="max-w-xl mx-auto text-[10px] md:text-[13px] uppercase tracking-[0.4em] leading-relaxed text-gray-400">
                Building modern digital experiences for brands, startups, and businesses
              </p>
            </motion.div>

            {/* ROLES BAR (REDUCED WIDTH) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto mt-6 max-w-2xl rounded-full border border-white/5 bg-black/40 backdrop-blur-xl px-6 py-3 shadow-[0_0_30px_rgba(0,0,0,0.2)]"
            >
              <p className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[9px] md:text-[10px] uppercase tracking-[0.3em]">
                <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent font-medium">
                  Full Stack Developer
                </span>
                <span className="text-white/10">•</span>
                <span className="bg-gradient-to-r from-sky-200 to-blue-400 bg-clip-text text-transparent font-medium">
                  UI/UX Designer
                </span>
                <span className="text-white/10">•</span>
                <span className="bg-gradient-to-r from-pink-200 to-rose-400 bg-clip-text text-transparent font-medium">
                  Video Editor
                </span>
              </p>
            </motion.div>

            {/* AVAILABILITY BADGE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-5 py-1.5 text-[9px] uppercase tracking-[0.3em] text-gray-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for Freelance
            </motion.div>

            {/* CTA BUTTONS (SMALLER & COMPACT) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 flex flex-wrap justify-center gap-4"
            >
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full border border-white/10 bg-black/30 backdrop-blur-xl px-8 py-3 text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
              >
                Explore Work →
              </a>

              <a
                href="#contact"
                className="group relative overflow-hidden rounded-full border border-white/10 bg-black/30 backdrop-blur-xl px-8 py-3 text-[10px] uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]"
              >
                Contact Me ✦
              </a>
            </motion.div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero;