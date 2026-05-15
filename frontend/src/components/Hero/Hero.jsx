import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= AGENCY DASHBOARD HERO ================= */}
      {/* Changed bg-[#050505] to bg-transparent to let your background image show through */}
      <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-white flex flex-col justify-between p-4 md:p-8 lg:p-10">
        
        {/* DASHBOARD GRID OVERLAY - Technical feel with lower opacity for image clarity */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px), linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
        {/* SUBTLE LIGHT LEAKS - Softened to complement the background image */}
        <div className="absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-[140px] pointer-events-none" />

        {/* --- HEADER NAVIGATION STYLE TOP BAR --- */}
        <div className="relative z-10 w-full flex justify-between items-start border-b border-white/5 pb-6 backdrop-blur-[2px]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/30">System Protocol</span>
            <span className="text-[12px] font-mono text-emerald-400/80">v2.0.26_STABLE</span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-8">
            <div className="hidden md:flex flex-col items-end gap-1">
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/30">Node Status</span>
              <div className="flex items-center gap-2">
                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-emerald-100/70">Online & Ready</span>
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
              <span className="text-[12px] md:text-[15px] font-bold uppercase tracking-[0.6em] text-blue-400/90">
                Digital Solutions Architect
              </span>
            </motion.div>

            {/* STYLISH TYPOGRAPHY: Improved spacing and gradient transitions */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[14vw] lg:text-[110px] xl:text-[145px] font-black leading-[0.85] tracking-tight uppercase"
            >
              <span className="text-white inline-block drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">Vinod</span> 
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-br from-white via-amber-200/80 to-amber-500/60 bg-clip-text text-transparent italic font-extrabold pr-4 drop-shadow-2xl">
                  Kumar
                </span>
                {/* Decorative underline for agency feel */}
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "100%" }}
                   transition={{ delay: 1, duration: 1 }}
                   className="absolute bottom-4 left-0 h-[2px] bg-gradient-to-r from-amber-500/40 to-transparent"
                />
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-white/70 text-sm md:text-xl leading-relaxed tracking-wide font-light border-l-2 border-white/10 pl-6"
            >
              Synthesizing <span className="text-white font-semibold">Full-Stack Logic</span> with <span className="text-white font-semibold">Cinematic Aesthetic</span>. We build digital conversion engines that define the next generation of brand experiences.
            </motion.div>
          </div>

          {/* RIGHT SIDE: Service Modules (Transparent Glass Cards) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            {[
              { id: "01", label: "Architecture", title: "Full Stack Dev", color: "border-amber-400/20" },
              { id: "02", label: "Experience", title: "UI/UX Design", color: "border-blue-400/20" },
              { id: "03", label: "Visuals", title: "Video Editing", color: "border-fuchsia-400/20" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (i * 0.15) }}
                whileHover={{ x: -10, backgroundColor: "rgba(255,255,255,0.03)" }}
                className={`p-6 border-l-2 ${item.color} bg-white/[0.02] backdrop-blur-md flex justify-between items-center group transition-all cursor-pointer`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[9px] font-mono text-white/30">{item.id}</span>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{item.label}</p>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-amber-400 transition-colors">{item.title}</h3>
                </div>
                <div className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-full group-hover:border-white/40 transition-all">
                  <span className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- FOOTER ACTIONS --- */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-8 backdrop-blur-[1px]">
          <div className="flex gap-6">
            <motion.a
              whileHover={{ y: -4 }}
              href="#projects"
              className="px-10 py-4 bg-white text-black font-black uppercase text-[12px] tracking-[0.3em] rounded-sm hover:bg-amber-400 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            >
              Access Files
            </motion.a>
            <motion.a
              whileHover={{ y: -4 }}
              href="#contact"
              className="px-10 py-4 border border-white/10 font-black uppercase text-[12px] tracking-[0.3em] rounded-sm hover:bg-white/5 hover:border-white/30 transition-all"
            >
              Connect
            </motion.a>
          </div>

          <div className="flex gap-16 text-[10px] tracking-[0.4em] uppercase text-white/30 font-bold">
            <div className="flex flex-col gap-2">
              <span className="text-[8px] text-white/20">Data Center</span>
              <span className="text-white/80">Remote / HQ</span>
            </div>
            <div className="flex flex-col gap-2 text-right md:text-left">
              <span className="text-[8px] text-white/20">Deployment</span>
              <span className="text-amber-400/80 animate-pulse italic text-[11px]">ACTIVE_Q2</span>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero;