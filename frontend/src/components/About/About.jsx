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
    subtitle: "About Me",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    highlightText: "",
    services: [],
    image: null,
    location: "",
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent px-5 py-16 text-white md:px-8 lg:px-10 md:py-24"
    >
      {/* VIBRANT AMBIENT BACKGROUND LIGHTS */}
      <div className="pointer-events-none absolute right-[-10%] top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-amber-500/15 to-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-[-8%] bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[110px]" />

      {/* GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-center">
        
        {/* RIGHT — IMAGE PROFILE CARD (Placed Order-1 on mobile so it stays on top, snaps to Order-2 on desktop) */}
        <div className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end w-full">
          <Reveal delay={0.25} className="w-full flex justify-center">
            <div className="group relative w-full max-w-[360px] md:max-w-[400px]">
              
              {/* COLORFUL GLOW AURAS BEHIND THE CARD */}
              <div className="absolute -inset-1 -z-10 bg-gradient-to-tr from-cyan-400 via-amber-400 to-indigo-500 rounded-3xl opacity-30 blur-2xl transition duration-700 group-hover:opacity-60 group-hover:blur-3xl" />

              {/* LIGHT COLORFUL GLASS CARD CONTAINER */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 md:p-2.5 backdrop-blur-xl transition-all duration-700 group-hover:border-cyan-400/40 group-hover:shadow-[0_30px_80px_rgba(34,211,238,0.25)]">
                
                {/* INNER IMAGE BASE FRAME */}
                <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-black/20">
                  {data.image?.url && (
                    <img
                      src={data.image.url}
                      alt="VK Profile Visual"
                      className="h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    />
                  )}
                </div>

                {/* FLOATING TOP BADGE */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/70 px-3 py-1 backdrop-blur-md">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                  </span>
                  <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-200">
                    Core_Node
                  </span>
                </div>

                {/* BOTTOM METADATA OVERLAY */}
                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-2 md:gap-3 bg-black/40 p-3 rounded-xl backdrop-blur-sm md:bg-transparent md:p-0 md:backdrop-blur-none">
                  <div className="hidden md:block h-px w-full bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />
                  
                  <div className="flex items-center justify-between">
                    <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      <p className="text-[8px] md:text-[9px] font-medium uppercase tracking-[0.3em] text-white/80">
                        Operational Base
                      </p>
                      <p className="mt-0.5 text-[11px] md:text-[13px] font-semibold tracking-wide text-yellow-400">
                        {data.location || "INDIA"}
                      </p>
                    </div>

                    <div className="text-right drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      <p className="text-[8px] md:text-[9px] font-medium uppercase tracking-[0.3em] text-white/80">
                        Status
                      </p>
                      <p className="mt-0.5 text-[11px] md:text-[13px] font-bold tracking-wide text-emerald-400">
                        ACTIVE
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* NEON DESIGN ACCENTS */}
              <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-cyan-400/40 rounded-tl-lg md:-left-3 md:-top-3 md:h-8 md:w-8" />
              <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-amber-400/40 rounded-br-lg md:-right-3 md:-bottom-3 md:h-8 md:w-8" />
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
                {data.subtitle}
              </span>
            </div>
          </Reveal>

          {/* DECORATIVE QUOTE */}
          <span className="pointer-events-none absolute -top-8 -left-2 select-none text-[80px] md:text-[140px] leading-none text-white/[0.03] font-serif">
            “
          </span>

          {/* MAIN TEXT BLOCK */}
          <div className="relative z-10 space-y-5 md:space-y-7">
            {[data.paragraph1, data.paragraph2, data.paragraph3].map((text, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="max-w-3xl text-[14px] md:text-[17px] leading-relaxed md:leading-8 text-white/90 font-light">
                  {renderStyledText(text)}
                </p>
              </Reveal>
            ))}

            {/* HIGHLIGHT TEXT */}
            <Reveal delay={0.4}>
              <p className="max-w-3xl pt-2 text-[22px] sm:text-[28px] leading-tight md:text-[40px] font-bold tracking-[-0.03em] text-white">
                {renderStyledText(data.highlightText, true)}
              </p>
            </Reveal>
          </div>

          {/* SERVICES */}
          <Reveal delay={0.5}>
            <div className="mt-8 flex flex-wrap gap-2.5 md:gap-3">
              {data.services.map((service) => (
                <motion.span
                  key={service}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/80 backdrop-blur-xl transition hover:border-amber-300/25 hover:bg-amber-300/[0.06]"
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