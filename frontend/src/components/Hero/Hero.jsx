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

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-8 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-12">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* TOP LABEL */}
            <Reveal>
              <div className="mb-4 md:mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.45em] text-white/80">
                  Founder of TRIVIXA ARC
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
                    Creative Developer • Digital Systems Designer • Founder of Trivixa Arc
                  </span>
                </div>
              </div>
            </Reveal>

            {/* DESCRIPTION */}
            <Reveal delay={0.25}>
              <p className="mt-6 max-w-xl text-[14px] md:text-[17px] leading-relaxed md:leading-8 text-white/80 font-light">
                Building premium digital platforms, modern interfaces, and creative systems for ambitious brands and startups.
              </p>
            </Reveal>

            {/* ROLE STRIP / TRUST SIGNAL */}
            <Reveal delay={0.35}>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-2.5 md:gap-3">
                <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-amber-200 font-bold">
                  Web Platforms
                </span>
                <span className="rounded-full border border-white/20 bg-white/[0.05] px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-white/90">
                  UI Systems
                </span>
                <span className="rounded-full border border-white/20 bg-white/[0.05] px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-white/90">
                  Creative Branding
                </span>
                <span className="rounded-full border border-white/20 bg-white/[0.05] px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-white/90">
                  Digital Experiences
                </span>
              </div>
            </Reveal>

            {/* CTA BUTTONS */}
            <Reveal delay={0.45}>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
                <MagneticButton
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-amber-300/30 bg-gradient-to-r from-[#f8d36a] to-[#d89b1d] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.28em] text-black shadow-[0_12px_32px_rgba(216,155,29,0.3)] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Book a Project Call
                </MagneticButton>

                <MagneticButton
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/[0.1] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:bg-white/[0.15] w-full sm:w-auto"
                >
                  Explore Selected Work
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE — NOW THE PREMIUM IMAGE PROFILE CARD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center w-full">
            <Reveal delay={0.25} className="w-full flex justify-center lg:justify-end">
              <div className="group relative w-full max-w-[360px] md:max-w-[400px]">
                
                {/* RESTRAINED, MATTE GLOW AURA BEHIND THE CARD */}
                <div className="absolute -inset-px -z-10 bg-gradient-to-tr from-amber-400/10 to-white/5 rounded-3xl opacity-40 blur-xl transition duration-700 group-hover:opacity-70" />

                {/* CLEAN GLASS CARD CONTAINER */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/40 p-2 md:p-2.5 backdrop-blur-xl transition-all duration-700 group-hover:border-amber-400/30 group-hover:shadow-[0_30px_80px_rgba(216,155,29,0.1)]">
                  
                  {/* INNER IMAGE BASE FRAME */}
                  <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-neutral-900">
                    {data.image?.url ? (
                      <img
                        src={data.image.url}
                        alt="Vinod Kumar Profile"
                        className="h-full w-full object-cover opacity-100"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">
                        Profile Visual
                      </div>
                    )}
                  </div>

                  {/* FLOATING TOP BADGE */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                    </span>
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.25em] text-white/90">
                      Founder Profile
                    </span>
                  </div>

                  {/* BOTTOM METADATA OVERLAY */}
                  <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2 md:gap-3 bg-black/60 p-4 rounded-xl backdrop-blur-md md:bg-black/40">
                    <div className="hidden md:block h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] md:text-[9px] font-medium uppercase tracking-[0.3em] text-white/50">
                          Location
                        </p>
                        <p className="mt-0.5 text-[11px] md:text-[12px] font-semibold tracking-wider text-white">
                          {data.location || "INDIA"}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[8px] md:text-[9px] font-medium uppercase tracking-[0.3em] text-white/50">
                          Status
                        </p>
                        <p className="mt-0.5 text-[11px] md:text-[12px] font-bold tracking-wider text-emerald-400">
                          Available for Projects
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