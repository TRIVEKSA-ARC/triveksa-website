import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* ================= AGENCY DASHBOARD HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white flex flex-col justify-between p-4 md:p-8 lg:p-10">
        
        {/* DASHBOARD GRID OVERLAY - Technical feel */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        {/* BLOOM ACCENTS */}
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

        {/* --- HEADER NAVIGATION STYLE TOP BAR --- */}
        <div className="relative z-10 w-full flex justify-between items-start border-b border-white/10 pb-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Terminal Version</span>
            <span className="text-[12px] font-mono text-emerald-400">v2.0.26_STABLE</span>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-8">
            <div className="hidden md:flex flex-col items-end gap-1">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Current Status</span>
              <div className="flex items-center gap-2">
                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[11px] uppercase tracking-widest font-medium">Accepting Projects</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- MAIN DASHBOARD CONTENT --- */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-grow py-12">
          
          {/* LEFT SIDE: Identity & Roles */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-blue-500" />
              <span className="text-[14px] md:text-[18px] font-semibold uppercase tracking-[0.5em] text-blue-400">
                Digital Architect
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[12vw] lg:text-[100px] xl:text-[130px] font-black leading-[0.9] tracking-tighter uppercase"
            >
              Vinod <br />
              <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent italic">Kumar</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl text-white/60 text-sm md:text-lg leading-relaxed tracking-wide font-light"
            >
              Engineering high-performance digital ecosystems where <span className="text-white font-medium">Design</span> meets <span className="text-white font-medium">Conversion</span>. Specializing in Full-stack infrastructure and cinematic video editing for global brands.
            </motion.div>
          </div>

          {/* RIGHT SIDE: Service Modules (Dashboard Cards) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            {[
              { label: "Engineering", title: "Full Stack Dev", color: "border-amber-500/30", bg: "bg-amber-500/5" },
              { label: "Experience", title: "UI/UX Design", color: "border-blue-500/30", bg: "bg-blue-500/5" },
              { label: "Content", title: "Video Editing", color: "border-purple-500/30", bg: "bg-purple-500/5" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * i }}
                className={`p-6 border ${item.color} ${item.bg} backdrop-blur-md rounded-xl flex justify-between items-end group hover:bg-white/5 transition-colors`}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{item.label}</p>
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                </div>
                <span className="text-white/20 group-hover:text-white transition-colors">→</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- FOOTER ACTIONS --- */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-6">
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-8 py-4 bg-white text-black font-bold uppercase text-[11px] tracking-[0.2em] rounded-sm hover:bg-blue-500 hover:text-white transition-all"
            >
              Open Portfolio
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-8 py-4 border border-white/20 font-bold uppercase text-[11px] tracking-[0.2em] rounded-sm hover:border-white transition-all"
            >
              Request Quote
            </motion.a>
          </div>

          <div className="flex gap-12 text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium">
            <div className="flex flex-col gap-1">
              <span>Location</span>
              <span className="text-white">Global / Remote</span>
            </div>
            <div className="flex flex-col gap-1 text-right md:text-left">
              <span>Availability</span>
              <span className="text-white italic">Q2 — 2026</span>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Hero;