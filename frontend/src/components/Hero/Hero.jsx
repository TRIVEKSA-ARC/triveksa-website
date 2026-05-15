import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] overflow-hidden text-white">
        
        {/* DARK CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-[1]" />

        {/* SOFT GOLD GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)] z-[1]" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[90vh] items-center px-6">
          <div className="mx-auto w-full max-w-7xl text-center">

            {/* INTRO LINE (REPLACED "HI I AM") */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center justify-center gap-4"
            >
              <span className="h-[1px] w-10 md:w-14 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
              <p className="uppercase text-[14px] md:text-[20px] tracking-[0.5em] text-gray-200">
                Hi, I am
              </p>
              <span className="h-[1px] w-10 md:w-14 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            </motion.div>

            {/* NAME (UPDATED TYPOGRAPHY) */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative overflow-hidden leading-[0.9]"
            >
              <span className="block text-center font-black uppercase tracking-tight text-[18vw] sm:text-[100px] md:text-[130px] lg:text-[180px]">
                <span className="inline-block text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                  Vinod
                </span>
                {" "}
                <span className="inline-block text-transparent bg-gradient-to-b from-yellow-200 via-yellow-300 to-amber-500 bg-clip-text drop-shadow-[0_0_35px_rgba(251,191,36,0.45)]">
                  Kumar
                </span>
              </span>
            </motion.h1>

            {/* SUBTITLE (POSITIONING SHIFT) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 flex items-center justify-center gap-4"
            >
              <span className="hidden md:block h-[1px] w-14 bg-yellow-400/70" />
              <p className="max-w-2xl text-[10px] md:text-[14px] uppercase tracking-[0.4em] leading-relaxed text-gray-300">
                Building modern digital experiences for brands, startups, and businesses
              </p>
              <span className="hidden md:block h-[1px] w-14 bg-yellow-400/70" />
            </motion.div>

            {/* ROLES BAR (UPGRADED GLASSMORPHISM) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mx-auto mt-10 max-w-4xl rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-8 py-4 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <p className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.3em]">
                <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent font-semibold">
                  Full Stack Developer
                </span>
                <span className="text-white/20">•</span>
                <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent font-semibold">
                  UI/UX Designer
                </span>
                <span className="text-white/20">•</span>
                <span className="bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent font-semibold">
                  Video Editor
                </span>
              </p>
            </motion.div>

            {/* AVAILABILITY BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-6 py-2 text-[10px] uppercase tracking-[0.35em] text-white backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Available for Freelance
            </motion.div>

            {/* CTA BUTTONS (UPGRADED HOVER) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
            >
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]"
              >
                Explore Work →
              </a>

              <a
                href="#contact"
                className="group relative overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur-xl px-10 py-4 text-[11px] uppercase tracking-[0.25em] text-white transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]"
              >
                Contact Me ✦
              </a>
            </motion.div>

            {/* STATS SECTION */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 flex flex-wrap justify-center gap-4"
            >
              {[
                "10+ Projects",
                "MERN Stack",
                "Secure Systems",
                "Creative Studio",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-white/10 bg-black/40 px-6 py-3 text-[9px] md:text-[11px] uppercase tracking-[0.25em] text-gray-200 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-300">
            Scroll
          </p>
          <div className="mt-2 h-10 w-[1px] bg-gradient-to-b from-yellow-400 to-transparent mx-auto" />
        </motion.div>

      </section>
    </>
  );
}

export default Hero;