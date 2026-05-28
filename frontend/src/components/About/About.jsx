import { motion } from "framer-motion";
import { useAbout } from "../../context/AboutContext";
import Reveal from "../Reveal";

/* ================= TEXT RENDER HELPER ================= */
const renderStyledText = (text, gradient = false) => {
  if (!text) return null;

  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <motion.span
        key={index}
        initial={{ opacity: 0.6, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={
          gradient
            ? "bg-gradient-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent font-bold"
            : "text-white font-semibold"
        }
      >
        {part}
      </motion.span>
    ) : (
      part
    )
  );
};

function About() {
  const { about, loading } = useAbout();

  if (loading) {
    return (
      <section className="py-32 text-center text-white/60">
        Loading About...
      </section>
    );
  }

  const data = about || {
    subtitle: "About Executive",
    paragraph1: "Focused on building **scalable digital systems**, premium web experiences, and modern visual identities for startups and global brands.",
    paragraph2: "Bridging the gap between pure engineering and high-fidelity design, the goal is always to engineer products that ensure high conversion and strict performance standards.",
    paragraph3: "",
    highlightText: "Engineering systems that balance **impeccable aesthetics** with **real-world commercial leverage**.",
    services: ["Full-Stack Development", "UI/UX Systems", "Brand Identities", "Creative Technology"],
    image: null,
    location: "INDIA",
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent px-5 py-16 text-white md:px-8 lg:px-10 md:py-24"
    >
      {/* RESTRAINED LUXURY AMBIENT BACKGROUND LIGHTS */}
      <div className="pointer-events-none absolute right-[-10%] top-10 h-[500px] w-[500px] rounded-full bg-amber-500/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute left-[-8%] bottom-0 h-[350px] w-[350px] rounded-full bg-neutral-500/[0.04] blur-[120px]" />

      {/* GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-center">
        
        {/* RIGHT — IMAGE PROFILE CARD */}
        <div className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end w-full">
          <Reveal delay={0.25} className="w-full flex justify-center">
            <div className="group relative w-full max-w-[360px] md:max-w-[400px]">
              
              {/* RESTRAINED, MATTE GLOW AURA BEHIND THE CARD */}
              <div className="absolute -inset-px -z-10 bg-gradient-to-tr from-amber-400/10 to-white/5 rounded-3xl opacity-40 blur-xl transition duration-700 group-hover:opacity-70" />

              {/* CLEAN GLASS CARD CONTAINER */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-neutral-950/40 p-2 md:p-2.5 backdrop-blur-xl transition-all duration-700 group-hover:border-amber-400/30 group-hover:shadow-[0_30px_80px_rgba(216,155,29,0.1)]">
                
                {/* INNER IMAGE BASE FRAME (CLEAN & TRANQUIL ORIGINAL VIEW) */}
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

        {/* LEFT — CONTENT */}
        <div className="relative order-2 lg:order-1 lg:col-span-7">
          
          {/* SUBTITLE */}
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
              <span className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.42em] text-amber-300/90">
                {data.subtitle || "About Me"}
              </span>
            </div>
          </Reveal>

          {/* DECORATIVE QUOTE */}
          <span className="pointer-events-none absolute -top-8 -left-2 select-none text-[80px] md:text-[140px] leading-none text-white/[0.02] font-serif">
            “
          </span>

          {/* MAIN TEXT BLOCK */}
          <div className="relative z-10 space-y-5 md:space-y-7">
            {[data.paragraph1, data.paragraph2, data.paragraph3].filter(Boolean).map((text, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="max-w-3xl text-[14px] md:text-[17px] leading-relaxed md:leading-8 text-white/80 font-light">
                  {renderStyledText(text)}
                </p>
              </Reveal>
            ))}

            {/* AGENCY MISSION BREAKOUT (WHY TRIVIXA) */}
            <Reveal delay={0.35}>
              <div className="mt-6 border-l border-amber-400/30 pl-4 md:pl-5 py-1">
                <p className="text-[10px] uppercase tracking-[0.34em] text-amber-400/70 font-bold mb-1.5">
                  Agency Mission
                </p>
                <p className="text-[13px] md:text-[15px] leading-relaxed text-white/70 italic font-light max-w-2xl">
                  At Trivixa, the focus is on combining technology, design, and storytelling to create modern digital experiences that elevate brands online.
                </p>
              </div>
            </Reveal>

            {/* HIGHLIGHT TEXT */}
            {data.highlightText && (
              <Reveal delay={0.4}>
                <p className="max-w-3xl pt-2 text-[22px] sm:text-[26px] leading-tight md:text-[36px] font-bold tracking-[-0.03em] text-white">
                  {renderStyledText(data.highlightText, true)}
                </p>
              </Reveal>
            )}
          </div>

          {/* HIGH CONTRAST SERVICES CHIPS */}
          <Reveal delay={0.5}>
            <div className="mt-8 flex flex-wrap gap-2.5 md:gap-3">
              {data.services.map((service) => (
                <motion.span
                  key={service}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="rounded-full border border-white/25 bg-white/[0.06] px-4 py-2 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.28em] text-white backdrop-blur-md transition-all duration-300 hover:border-amber-300/40 hover:bg-amber-300/[0.08] hover:shadow-[0_8px_20px_rgba(245,201,106,0.05)]"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

export default About;