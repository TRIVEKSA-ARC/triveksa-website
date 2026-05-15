import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[95vh] overflow-hidden bg-[#030303] text-white flex items-center justify-center">
        
        {/* CINEMATIC BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 z-0">
          {/* Main Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,20,20,0),#030303)]" />
          
          {/* Animated Ambient Light */}
          <motion.div 
            animate={{ 
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full" 
          />
        </div>

        {/* CONTENT AREA */}
        <div className="relative z-10 w-full max-w-7xl px-6">
          <div className="mx-auto flex flex-col items-center">

            {/* TOP LABEL */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.6em" }}
              transition={{ duration: 1.5 }}
              className="mb-8 overflow-hidden"
            >
              <span className="text-[10px] md:text-[12px] uppercase text-yellow-500/80 font-light">
                Digital Architect & Visionary
              </span>
            </motion.div>

            {/* MAIN TYPOGRAPHY HEADLINE */}
            <div className="relative mb-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center font-extralight tracking-[-0.04em] leading-[0.85]"
              >
                <span className="block text-[16vw] sm:text-[100px] md:text-[140px] lg:text-[170px] text-white/90">
                  Vinod
                </span>
                <span className="block text-[16vw] sm:text-[100px] md:text-[140px] lg:text-[170px] font-black italic text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-500 drop-shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                  Kumar
                </span>
              </motion.h1>
              
              {/* Decorative Accent Line */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 1, duration: 1 }}
                className="h-[1px] bg-yellow-500/50 mt-4 mx-auto"
              />
            </div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-xl text-center text-[13px] md:text-[16px] font-light leading-relaxed text-gray-400 tracking-wide"
            >
              Crafting premium digital solutions through <span className="text-white">scalable code</span>, 
              <br className="hidden md:block" /> intentional <span className="text-white">design</span>, and cinematic <span className="text-white">storytelling</span>.
            </motion.p>

            {/* ROLES CHIPS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              {["Full Stack", "UI/UX", "Visual Arts"].map((role, i) => (
                <div key={i} className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  {role}
                </div>
              ))}
            </motion.div>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center gap-8"
            >
              <a
                href="#projects"
                className="group relative flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white transition-all hover:text-yellow-400"
              >
                <span className="w-12 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-yellow-400 transition-all duration-500" />
                View Collection
              </a>

              <a
                href="#contact"
                className="px-10 py-4 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-yellow-400 hover:scale-105 active:scale-95"
              >
                Get In Touch
              </a>
            </motion.div>

          </div>
        </div>

        {/* SIDE DECORATIVE MESH */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.03),transparent_50%)]" />

      </section>
    </>
  );
}

export default Hero;