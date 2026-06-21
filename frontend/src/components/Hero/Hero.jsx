import { motion } from "framer-motion";
import Reveal from "../Reveal";
import MagneticButton from "../MagneticButton";
import { useAbout } from "../../context/AboutContext";

function Hero() {
  const { about } = useAbout();

  // Safely grab live background variables, keeping default values as structural lockups
  const data = about || {
    image: null,
    location: "INDIA",
  };

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

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-8 lg:px-12 items-center">
          
          {/* LEFT SIDE — CONTENT ARCHITECTURE */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-7">
            
            {/* VISUALLY HIDDEN SEO H1 FOR SEARCH ENGINES */}
            <h1 className="sr-only">
              TRIVEKSA ARC - Web Development, UI/UX Design and Branding Agency
            </h1>

            <div className="flex flex-col space-y-3 md:space-y-4">
              {/* TOP LABEL (UPDATED FOR HEADING HIERARCHY) */}
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
                  <h2 className="text-[11px] sm:text-[12px] uppercase tracking-[0.45em] text-amber-400 font-semibold drop-shadow-md">
                    Founder of TRIVEKSA ARC
                  </h2>
                </div>
              </Reveal>

              {/* NAME */}
              <Reveal>
                <div className="leading-[0.95] md:leading-[0.9] uppercase">
                  <span className="block text-[48px] sm:text-[88px] md:text-[110px] xl:text-[138px] font-black tracking-[-0.05em] text-white drop-shadow-sm">
                    Vinod
                  </span>
                  <span className="block text-[48px] sm:text-[88px] md:text-[110px] xl:text-[138px] font-black tracking-[-0.05em] bg-gradient-to-r from-[#fff4d6] via-[#f7d774] to-[#d89b1d] bg-clip-text text-transparent filter drop-shadow-sm">
                    Kumar
                  </span>
                </div>
              </Reveal>
            </div>

            {/* AGENCY LINE — IMPROVED PREMIUM BADGE STYLE */}
            <Reveal delay={0.15}>
              <div className="flex flex-col space-y-1.5 border-l-2 border-amber-400/40 pl-4 py-0.5">
                <span className="text-[12px] sm:text-[14px] uppercase tracking-[0.25em] text-white font-bold">
                  Web Development • UI/UX Design • Branding
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/60 font-medium">
                  Building Modern Digital Experiences
                </span>
              </div>
            </Reveal>

            {/* DESCRIPTION */}
            <Reveal delay={0.25}>
              <p className="max-w-xl text-[15px] md:text-[18px] leading-relaxed md:leading-8 text-white font-light drop-shadow-sm">
                Building premium digital platforms, modern interfaces, and creative systems for ambitious brands and startups.
              </p>
            </Reveal>

            {/* ROLE STRIP / TRUST SIGNAL */}
            <Reveal delay={0.35}>
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                <span className="rounded-full border border-white bg-slate-800 px-4 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-slate-100 font-bold ">
                  Web Platforms
                </span>
                <span className="rounded-full border border-white bg-slate-800 px-4 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-slate-100 font-medium ">
                  UI Systems
                </span>
                <span className="rounded-full border border-white bg-slate-800 px-4 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-slate-100 font-medium ">
                  Creative Branding
                </span>
                <span className="rounded-full border border-white bg-slate-800 px-4 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-slate-100 font-medium ">
                  Digital Experiences
                </span>
              </div>
            </Reveal>

            {/* CTA BUTTONS */}
            <Reveal delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <MagneticButton
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white bg-gradient-to-r from-[#f8d36a] to-[#d89b1d] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-black shadow-[0_12px_32px_rgba(216,155,29,0.25)] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Book a Project Call
                </MagneticButton>

                <MagneticButton
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white bg-black/[0.06] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white  transition-all duration-300 hover:bg-slate-800  w-full sm:w-auto"
                >
                  Explore Selected Work
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE — LARGER PROFILE CARD CONFIGURATION */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center w-full">
            <Reveal delay={0.25} className="w-full flex justify-center lg:justify-end">
              <div className="group relative w-full max-w-[390px] md:max-w-[440px]">
                
                {/* RESTRAINED, MATTE GLOW AURA BEHIND THE CARD */}
                <div className="absolute -inset-px -z-10 bg-gradient-to-tr from-amber-400/20 to-white/5 rounded-3xl opacity-40 blur-xl transition duration-700 group-hover:opacity-60" />

                {/* CLEAN GLASS CARD CONTAINER */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/50 p-2 md:p-2.5 backdrop-blur-2xl transition-all duration-700 group-hover:border-amber-400/40 group-hover:shadow-[0_30px_80px_rgba(216,155,29,0.15)]">
                  
                  {/* INNER IMAGE BASE FRAME (INFINITE SLIDER MATRIX) */}
                  <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-neutral-900 border border-white/5 flex flex-row">
                    <motion.div 
                      className="flex h-full w-[400%] flex-nowrap flex-shrink-0"
                      animate={{
                        x: ["0%", "0%", "-25%", "-25%", "-50%"]
                      }}
                      transition={{
                        times: [0, 0.35, 0.45, 0.85, 1],
                        ease: "easeInOut",
                        duration: 20,
                        repeat: Infinity,
                      }}
                    >
                      {/* === SET 1 === */}
                      {/* SLIDE 1 — LOGO */}
                      <div className="h-full w-1/4 flex-shrink-0 bg-neutral-950 relative">
                        <img
                          src="/Logo.png"
                          alt="Trivixa Arc Logo"
                          className="h-full w-full object-cover filter drop-shadow-md select-none"
                        />
                      </div>

                      {/* SLIDE 2 — PROFILE IMAGE */}
                      <div className="h-full w-1/4 flex-shrink-0 relative">
                        {data.image?.url ? (
                          <img
                            src={data.image.url}
                            alt="Vinod Kumar Profile"
                            className="h-full w-full object-cover opacity-100 select-none"
                          />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                            Profile Visual
                          </div>
                        )}
                      </div>

                      {/* === SET 2 (DUPLICATED MATRIX FOR SEAMLESS INF-LOOP) === */}
                      {/* SLIDE 3 — LOGO DUPLICATE */}
                      <div className="h-full w-1/4 flex-shrink-0 bg-neutral-950 relative">
                        <img
                          src="/Logo.png"
                          alt="Trivixa Arc Logo"
                          className="h-full w-full object-cover filter drop-shadow-md select-none"
                        />
                      </div>

                      {/* SLIDE 4 — PROFILE IMAGE DUPLICATE */}
                      <div className="h-full w-1/4 flex-shrink-0 relative">
                        {data.image?.url ? (
                          <img
                            src={data.image.url}
                            alt="Vinod Kumar Profile"
                            className="h-full w-full object-cover opacity-100 select-none"
                          />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                            Profile Visual
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* FLOATING TOP BADGE */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-neutral-950/70 px-3.5 py-1.5 backdrop-blur-xl shadow-lg z-20">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400"></span>
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/90">
                      Founder Profile
                    </span>
                  </div>

                  {/* BOTTOM METADATA OVERLAY — HIGHLY OPTIMIZED CONTRAST */}
                  <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 bg-slate-800 p-4 rounded-xl border border-white shadow-xl backdrop-blur-xl z-20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                          Location
                        </p>
                        <p className="mt-1 text-[12px] md:text-[13px] font-bold tracking-wider text-white">
                          {data.location || "INDIA"}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                          Status
                        </p>
                        <p className="mt-1 text-[12px] md:text-[13px] font-extrabold tracking-wider text-green-400 flex items-center justify-end gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Available
                        </p>
                      </div>
                    </div>
                  </div>

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