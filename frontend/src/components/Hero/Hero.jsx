import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Imported for premium visual look
import Reveal from "../Reveal";
import MagneticButton from "../MagneticButton";

function Hero() {
  const services = [
    { id: "01", label: "Development", title: "Full Stack Solutions" },
    { id: "02", label: "Design", title: "UI/UX Systems" },
    { id: "03", label: "Content", title: "Video & Brand Visuals" },
  ];

  return (
    <>
      {/* ================= AGENCY HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-white flex items-center font-sans py-20 lg:py-0">
        
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

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-8 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-12">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* TOP LABEL */}
            <Reveal>
              <div className="mb-4 md:mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.45em] text-white/80">
                  Hi, I am
                </p>
              </div>
            </Reveal>

            {/* NAME */}
            <Reveal>
              <h1 className="leading-[0.95] md:leading-[0.9] uppercase">
                <span className="block text-[44px] sm:text-[88px] md:text-[110px] xl:text-[138px] font-black tracking-[-0.06em] text-white">
                  Vinod
                </span>
                <span className="block text-[44px] sm:text-[88px] md:text-[110px] xl:text-[138px] font-black tracking-[-0.06em] bg-gradient-to-r from-[#fff4d6] via-[#f7d774] to-[#d89b1d] bg-clip-text text-transparent">
                  Kumar
                </span>
              </h1>
            </Reveal>

            {/* AGENCY LINE */}
            <Reveal delay={0.15}>
              <div className="mt-5 md:mt-6">
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.05] px-4 py-2">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-white/90 font-medium">
                    TRIVEKSA ARC
                  </span>
                </div>
              </div>
            </Reveal>

            {/* DESCRIPTION */}
            <Reveal delay={0.25}>
              <p className="mt-6 max-w-2xl text-[14px] md:text-[17px] leading-relaxed md:leading-8 text-white/80 font-light">
                Triveksa Arc is a creative technology brand focused on building modern digital experiences, scalable platforms, and premium visual identities for the next generation of businesses.
              </p>
            </Reveal>

            {/* ROLE STRIP */}
            <Reveal delay={0.35}>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-2.5 md:gap-3">
                <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-amber-200 font-bold">
                  Full Stack Development
                </span>
                <span className="rounded-full border border-white/20 bg-white/[0.05] px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-white/90">
                  UI/UX Design
                </span>
                <span className="rounded-full border border-white/20 bg-white/[0.05] px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-white/90">
                  Video Editing
                </span>
              </div>
            </Reveal>

            {/* CTA BUTTONS */}
            <Reveal delay={0.45}>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
                <MagneticButton
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-amber-300/30 bg-gradient-to-r from-[#f8d36a] to-[#d89b1d] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.28em] text-black shadow-[0_12px_32px_rgba(216,155,29,0.3)] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  View Projects
                </MagneticButton>

                <MagneticButton
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/[0.1] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-white/[0.15] w-full sm:w-auto"
                >
                  Let's Build
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE - CAPABILITIES CARD */}
          <div className="lg:col-span-5 flex items-center w-full">
            <Reveal delay={0.3} className="w-full">
              <div className="w-full rounded-[28px] border border-white/10 bg-black p-4 shadow-[0_25px_60px_rgba(0,0,0,0.3)] md:p-6">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/60 font-bold">
                      Core Expertise
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white tracking-tight">
                      Service Overview
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-emerald-300 font-bold">
                      Available
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {services.map((item, i) => (
                    <motion.a
                      href="#projects"
                      key={item.id}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + i * 0.12, duration: 0.6 }}
                      className="group block rounded-[22px] border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 md:p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-amber-300/40 hover:bg-white/[0.07] hover:shadow-[0_10px_30px_rgba(245,201,106,0.03)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <span className="text-[10px] font-mono font-bold text-amber-400">
                              {item.id}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-medium">
                              {item.label}
                            </span>
                          </div>

                          <h4 className="text-base md:text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-200">
                            {item.title}
                          </h4>
                        </div>

                        {/* PREMIUM ELEVATED ARROW BUTTON BLOCK */}
                        <div className="flex h-10 w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-white/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-amber-400 group-hover:bg-amber-400/10 group-hover:text-amber-400">
                          <ArrowUpRight size={18} className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;