import { motion } from "framer-motion";

function Hero() {
  const services = [
    { id: "01", label: "Development", title: "Full Stack Solutions" },
    { id: "02", label: "Design", title: "UI/UX Systems" },
    { id: "03", label: "Content", title: "Video & Brand Visuals" },
  ];

  return (
    <>
      {/* ================= AGENCY HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-white flex items-center font-sans">
        
        {/* SHARP GRID OVERLAY - Increased opacity for a technical feel */}
        <div
          className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* REDUCED BLUR AMBIENT LIGHTS - Sharper contrast */}
        <div className="pointer-events-none absolute -top-24 right-[6%] h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[4%] h-[380px] w-[380px] rounded-full bg-white/5 blur-[80px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-8 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-12">
          
          {/* LEFT SIDE - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* TOP LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-[2px] w-12 bg-amber-400" />
              <p className="text-[12px] sm:text-[13px] uppercase tracking-[0.5em] font-bold text-white">
                Hi, I am
              </p>
            </motion.div>

            {/* NAME - High Visibility */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="leading-[0.85] uppercase"
            >
              <span className="block text-[15vw] sm:text-[88px] md:text-[110px] xl:text-[145px] font-black tracking-[-0.04em] text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                Vinod
              </span>
              <span className="block text-[15vw] sm:text-[88px] md:text-[110px] xl:text-[145px] font-black tracking-[-0.04em] bg-gradient-to-r from-[#FFF] via-[#f7d774] to-[#fbbf24] bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
                Kumar
              </span>
            </motion.h1>

            {/* AGENCY LINE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8"
            >
              <div className="inline-flex items-center rounded-sm border-l-4 border-amber-400 bg-white/10 px-5 py-2">
                <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.4em] font-black text-white">
                  VK Digital Solutions
                </span>
              </div>
            </motion.div>

            {/* DESCRIPTION - Brightened for readability */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 max-w-2xl text-[16px] leading-8 text-white font-medium md:text-[19px] drop-shadow-md"
            >
              We build <span className="text-amber-400">premium digital experiences</span> for brands and startups through strategic development, refined design systems, and high-converting visual storytelling.
            </motion.p>

            {/* ROLE STRIP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {["Full Stack Development", "UI/UX Design", "Video Editing"].map((role, idx) => (
                <span key={idx} className="rounded-sm border border-white/30 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                  {role}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-sm bg-amber-400 px-10 py-4 text-[11px] font-black uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-white hover:-translate-y-1 shadow-lg"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border-2 border-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
              >
                Contact Agency
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Capabilities (Blur Removed, Contrast Increased) */}
          <div className="lg:col-span-5 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="w-full rounded-xl border-2 border-white/20 bg-[#0a0a0a]/80 p-6 shadow-2xl backdrop-blur-none"
            >
              <div className="mb-6 flex items-center justify-between border-b border-white/20 pb-5">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-amber-400">
                    Capabilities
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white uppercase tracking-tight">
                    Service Overview
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-sm border border-emerald-500 bg-emerald-500/20 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-400">
                    Available
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {services.map((item, i) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <span className="text-[11px] font-mono font-bold text-amber-400">
                            {item.id}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                            {item.label}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-white">
                          {item.title}
                        </h4>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 text-white group-hover:border-amber-400 group-hover:text-amber-400 transition-colors">
                        →
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* AGENCY NOTE - High Contrast */}
              <div className="mt-6 rounded-lg border-t-2 border-amber-400/50 bg-white/5 p-5">
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-amber-400">
                  Agency Note
                </p>
                <p className="mt-3 text-[15px] font-bold leading-relaxed text-white">
                  We create professional brand-first digital systems that look elegant, feel modern, and perform with purpose.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;