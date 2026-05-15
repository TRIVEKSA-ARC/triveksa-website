import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= AGENCY DASHBOARD HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-white flex flex-col justify-between p-4 md:p-8 lg:p-10 font-sans">
        
        {/* DASHBOARD GRID OVERLAY - Refined for clarity */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px), linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
        {/* LIGHT LEAKS - Increased intensity slightly for "Cinematic" feel */}
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-amber-600/10 blur-[120px] pointer-events-none" />

        {/* --- HEADER NAVIGATION --- */}
        <div className="relative z-10 w-full flex justify-between items-start border-b border-white/10 pb-6 backdrop-blur-[4px]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50">System Protocol</span>
            <span className="text-[12px] font-mono text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">v2.0.26_STABLE</span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-8">
            <div className="hidden md:flex flex-col items-end gap-1">
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/50">Node Status</span>
              <div className="flex items-center gap-2">
                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                 <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80">Online & Ready</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- MAIN DASHBOARD CONTENT --- */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-grow py-12 md:py-20">
          
          {/* LEFT SIDE: Identity & Roles */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6"
            >
              <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-[12px] md:text-[15px] font-bold uppercase tracking-[0.6em] text-blue-400 drop-shadow-md">
                Digital Solutions Architect
              </span>
            </motion.div>

            {/* STYLISH TYPOGRAPHY: High visibility with text-shadow */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[14vw] lg:text-[110px] xl:text-[145px] font-black leading-[0.85] tracking-tight uppercase"
            >
              <span className="text-white inline-block drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">Vinod</span> 
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-br from-white via-amber-200 to-amber-500 bg-clip-text text-transparent italic font-extrabold pr-4 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                  Kumar
                </span>
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "100%" }}
                   transition={{ delay: 1, duration: 1 }}
                   className="absolute bottom-4 left-0 h-[3px] bg-gradient-to-r from-amber-500 to-transparent"
                />
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-white/90 text-sm md:text-xl leading-relaxed tracking-wide font-light border-l-2 border-amber-500/50 pl-6 backdrop-blur-[2px]"
            >
              Synthesizing <span className="text-white font-bold drop-shadow-sm">Full-Stack Logic</span> with <span className="text-white font-bold drop-shadow-sm">Cinematic Aesthetic</span>. We build digital conversion engines that define the next generation of brand experiences.
            </motion.div>
          </div>

          {/* RIGHT SIDE: Service Modules */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            {[
              { id: "01", label: "Architecture", title: "Full Stack Dev", color: "border-amber-400/40" },
              { id: "02", label: "Experience", title: "UI/UX Design", color: "border-blue-400/40" },
              { id: "03", label: "Visuals", title: "Video Editing", color: "border-fuchsia-400/40" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.15) }}
                whileHover={{ x: -10, backgroundColor: "rgba(255,255,255,0.07)" }}
                className={`p-6 border-l-4 ${item.color} bg-black/20 backdrop-blur-xl flex justify-between items-center group transition-all cursor-pointer rounded-r-lg`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[9px] font-mono text-amber-400/60">{item.id}</span>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">{item.label}</p>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-amber-400 transition-colors drop-shadow-md">{item.title}</h3>
                </div>
                <div className="h-10 w-10 flex items-center justify-center border border-white/20 rounded-full group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                  <span className="text-white group-hover:translate-x-1 transition-all">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- FOOTER ACTIONS --- */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 pb-4 gap-8 backdrop-blur-[2px]">
          <div className="flex flex-wrap justify-center gap-6">
            {/* Primary Button: Glowing Glass */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="relative px-12 py-4 overflow-hidden group rounded-full transition-all"
            >
              <div className="absolute inset-0 bg-amber-500 transition-all group-hover:bg-amber-400" />
              <span className="relative z-10 text-black font-black uppercase text-[12px] tracking-[0.3em]">
                Access Files
              </span>
            </motion.a>

            {/* Secondary Button: Ghost Glass */}
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-12 py-4 border-2 border-white/20 backdrop-blur-md rounded-full font-black uppercase text-[12px] tracking-[0.3em] hover:border-white/60 transition-all"
            >
              Connect
            </motion.a>
          </div>

          {/* Copyright/Signature instead of the removed data center info */}
          <div className="text-[10px] tracking-[0.5em] uppercase text-white/40 font-bold">
            © 2026 VK.STUDIOS / ALL RIGHTS RESERVED
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero;