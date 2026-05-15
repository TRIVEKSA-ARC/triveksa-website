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
        
        {/* SUBTLE GRID OVERLAY */}
        <div
          className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* SOFT AMBIENT LIGHTS */}
        <div className="pointer-events-none absolute -top-24 right-[6%] h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[4%] h-[380px] w-[380px] rounded-full bg-neutral-300/10 blur-[130px]" />
        <div className="pointer-events-none absolute top-[35%] left-[45%] h-[280px] w-[280px] rounded-full bg-yellow-200/5 blur-[100px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-8 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-12">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* TOP LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.45em] text-white/60">
                Hi, I am
              </p>
            </motion.div>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="leading-[0.9] uppercase"
            >
              <span className="block text-[15vw] sm:text-[88px] md:text-[110px] xl:text-[138px] font-black tracking-[-0.06em] text-white">
                Vinod
              </span>
              <span className="block text-[15vw] sm:text-[88px] md:text-[110px] xl:text-[138px] font-black tracking-[-0.06em] bg-gradient-to-r from-[#fff4d6] via-[#f7d774] to-[#d89b1d] bg-clip-text text-transparent">
                Kumar
              </span>
            </motion.h1>

            {/* AGENCY LINE */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6"
            >
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-white/70">
                  VK Digital Solutions
                </span>
              </div>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-7 max-w-2xl text-[15px] leading-8 text-white/72 md:text-[17px]"
            >
              We build premium digital experiences for brands, startups, and modern businesses through strategic development, refined design systems, and high-converting visual storytelling.
            </motion.p>

            {/* ROLE STRIP */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-amber-200">
                Full Stack Development
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/75">
                UI/UX Design
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/75">
                Video Editing
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-amber-300/30 bg-gradient-to-r from-[#f8d36a] to-[#d89b1d] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.28em] text-black shadow-[0_12px_32px_rgba(216,155,29,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(216,155,29,0.32)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
              >
                Contact Agency
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="w-full rounded-[28px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.28)] md:p-5"
            >
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                    Agency Capabilities
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Service Overview
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                    Available
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {services.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.12, duration: 0.6 }}
                    className="group rounded-[22px] border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:border-amber-300/20 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <span className="text-[10px] font-mono text-amber-300/70">
                            {item.id}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                            {item.label}
                          </span>
                        </div>

                        <h4 className="text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-200">
                          {item.title}
                        </h4>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 group-hover:border-amber-300/30 group-hover:bg-amber-300/10 group-hover:text-amber-200">
                        →
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-[22px] border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.02] p-5">
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/40">
                  Agency Note
                </p>
                <p className="mt-3 text-sm leading-7 text-white/68">
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