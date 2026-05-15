import { motion } from "framer-motion";

function Hero() {
  // Smooth scroll handler for buttons
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= VK DIGITAL SOLUTIONS HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-white flex flex-col justify-between p-6 md:p-12 lg:p-16 font-sans">
        
        {/* DYNAMIC BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 z-0">
          {/* Subtle Grid with Radial Fade */}
          <div 
            className="absolute inset-0 opacity-[0.15]" 
            style={{ 
              backgroundImage: `linear-gradient(#ffffff1a 1px, transparent 1px), linear-gradient(90deg, #ffffff1a 1px, transparent 1px)`, 
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }} 
          />
          
          {/* Cinematic Glows */}
          <div className="absolute top-[-20%] left-[-10%] h-[800px] w-[800px] rounded-full bg-blue-500/10 blur-[150px] animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-amber-500/10 blur-[150px]" />
        </div>

        {/* --- TOP NAV BAR --- */}
        <div className="relative z-10 w-full flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="h-8 w-8 bg-white flex items-center justify-center rounded-sm">
              <span className="text-black font-black text-xs">VK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 leading-none">VK Digital</span>
              <span className="text-[12px] font-bold tracking-[0.1em] text-emerald-400">SOLUTIONS</span>
            </div>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
             <div className="flex flex-col items-end">
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">Current Phase</span>
                <span className="text-[11px] font-mono text-amber-200">PRODUCTION_READY</span>
             </div>
          </div>
        </div>

        {/* --- CENTER CONTENT --- */}
        <div className="relative z-10 flex flex-col items-start justify-center flex-grow py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-amber-500" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.8em] text-amber-500/90">
              Est. 2026 / Agency
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] lg:text-[120px] xl:text-[160px] font-black leading-[0.8] tracking-tighter uppercase mb-8"
          >
            <span className="text-white drop-shadow-2xl">CRAFTING</span>
            <br />
            <span className="bg-gradient-to-r from-white via-white/80 to-amber-500 bg-clip-text text-transparent italic pr-8">
              DIGITAL EDGE
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-lg md:text-2xl text-white/60 font-light leading-relaxed mb-12 border-l border-white/20 pl-8"
          >
            We don't just build websites. We engineer <span className="text-white font-medium">high-conversion ecosystems</span> through code and cinematic motion.
          </motion.p>

          {/* LUXURY CTA BUTTONS */}
          <div className="flex flex-wrap gap-6">
            <motion.a
              onClick={(e) => scrollToSection(e, 'projects')}
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-5 bg-white text-black font-black uppercase text-[11px] tracking-[0.4em] rounded-sm transition-all overflow-hidden group"
            >
              <div className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-black">Access Files</span>
            </motion.a>

            <motion.a
              onClick={(e) => scrollToSection(e, 'contact')}
              href="#contact"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="px-10 py-5 border border-white/20 backdrop-blur-md font-black uppercase text-[11px] tracking-[0.4em] rounded-sm transition-all flex items-center gap-4 group"
            >
              <span>Connect</span>
              <div className="h-1 w-1 rounded-full bg-amber-500 group-hover:w-4 transition-all" />
            </motion.a>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-8 md:mb-0">
            {[
              { label: "Logic", val: "Full-Stack" },
              { label: "Visuals", val: "4K Motion" },
              { label: "Growth", val: "SEO Engine" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">{stat.label}</span>
                <span className="text-sm font-bold text-white/80">{stat.val}</span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 rotate-90 mb-4 origin-center">Scroll</span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-amber-500 to-transparent" />
          </motion.div>
        </div>

      </section>
    </>
  );
}

export default Hero;