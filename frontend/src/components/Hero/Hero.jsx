import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= AGENCY HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-white flex flex-col justify-center p-6 md:p-12 lg:p-20">
        
        {/* SUBTLE OVERLAY - Ensuring text readability over your background image */}
        <div className="absolute inset-0 z-0 bg-black/20 pointer-events-none" />

        {/* --- MAIN CONTENT --- */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto">
          
          {/* LEFT SIDE: Identity & Headline */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <span className="h-[2px] w-8 bg-blue-500" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-blue-400">
                Full-Stack Architect
              </span>
            </motion.div>

            {/* NAME IN SINGLE LINE - Stylish & Beautiful */}
            <motion.h1 
              initial={{ opacity: 0, s: 0.9 }}
              animate={{ opacity: 1, s: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[10vw] lg:text-[80px] xl:text-[100px] font-black leading-tight tracking-tighter uppercase whitespace-nowrap"
            >
              Vinod <span className="bg-gradient-to-r from-white via-white/80 to-blue-400/60 bg-clip-text text-transparent italic drop-shadow-2xl">Kumar</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl text-white/60 text-base md:text-xl leading-relaxed tracking-wide font-light border-l border-white/20 pl-6"
            >
              Engineering high-performance digital ecosystems where <span className="text-white font-medium">Design</span> meets <span className="text-white font-medium">Logic</span>. Specialized in premium UI/UX and cinematic video production.
            </motion.p>

            {/* REDESIGNED BEAUTIFUL BUTTONS (CTA) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5 mt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="relative overflow-hidden group px-8 py-4 bg-white text-black font-bold uppercase text-[11px] tracking-[0.2em] rounded-full transition-all"
              >
                <span className="relative z-10">Explore Work</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,1)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 border border-white/30 backdrop-blur-md font-bold uppercase text-[11px] tracking-[0.2em] rounded-full hover:bg-white/5 transition-all"
              >
                Start a Project
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Service Modules (CTA CARDS) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {[
              { title: "Full Stack Dev", sub: "Web Engineering", icon: "01" },
              { title: "UI/UX Design", sub: "Digital Experience", icon: "02" },
              { title: "Video Editing", sub: "Cinematic Content", icon: "03" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * i }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="p-6 cursor-pointer rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl flex items-center justify-between group hover:border-blue-500/50 hover:bg-white/10 transition-all shadow-2xl"
              >
                <div className="flex items-center gap-6">
                  <span className="text-blue-500/50 font-mono text-sm group-hover:text-blue-400">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">{item.sub}</p>
                  </div>
                </div>
                <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-0.5 transition-transform">
                      <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SCROLL INDICATOR --- */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
        >
          <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-white to-transparent" />
        </motion.div>

      </section>
    </>
  );
}

export default Hero;