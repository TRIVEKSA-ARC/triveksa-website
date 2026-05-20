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
      className="relative overflow-hidden bg-transparent px-6 py-24 text-white md:px-8 lg:px-10"
    >
      {/* VIBRANT AMBIENT BACKGROUND LIGHTS */}
      <div className="pointer-events-none absolute right-[-10%] top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-amber-500/15 to-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-[-8%] bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[110px]" />

      {/* GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-center">
        
        {/* LEFT — CONTENT */}
        <div className="relative order-2 lg:order-1 lg:col-span-7">
          
          {/* SUBTITLE */}
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
              <span className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.42em] text-amber-300/90">
                {data.subtitle}
              </span>
            </div>
          </Reveal>

          {/* DECORATIVE QUOTE */}
          <span className="pointer-events-none absolute -top-10 -left-2 select-none text-[100px] md:text-[140px] leading-none text-white/[0.04] font-serif">
            “
          </span>

          {/* MAIN TEXT BLOCK */}
          <div className="relative z-10 space-y-7">
            {[data.paragraph1, data.paragraph2, data.paragraph3].map((text, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="max-w-3xl text-[15px] md:text-[17px] leading-8 text-white/92 font-light">
                  {renderStyledText(text)}
                </p>
              </Reveal>
            ))}

            {/* HIGHLIGHT TEXT */}
            <Reveal delay={0.4}>
              <p className="max-w-3xl pt-2 text-[28px] leading-[1.2] md:text-[40px] font-bold tracking-[-0.03em] text-white">
                {renderStyledText(data.highlightText, true)}
              </p>
            </Reveal>
          </div>

          {/* SERVICES */}
          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap gap-3">
              {data.services.map((service) => (
                <motion.span
                  key={service}
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                  }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] text-white/78 backdrop-blur-xl transition hover:border-amber-300/25 hover:bg-amber-300/[0.06] hover:text-white"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* RIGHT — IMAGE PROFILE CARD */}
        <div className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
          <Reveal delay={0.25}>
            <div className="group relative w-full max-w-[400px]">
              
              {/* COLORFUL GLOW AURAS BEHIND THE CARD */}
              <div className="absolute -inset-1 -z-10 bg-gradient-to-tr from-cyan-400 via-amber-400 to-indigo-500 rounded-3xl opacity-30 blur-2xl transition duration-700 group-hover:opacity-60 group-hover:blur-3xl" />

              {/* LIGHT COLORFUL GLASS CARD CONTAINER */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/20 bg-white/40 p-2.5 backdrop-blur-xl transition-all duration-700 group-hover:border-cyan-400/40 group-hover:shadow-[0_30px_80px_rgba(34,211,238,0.25)]">
                
                {/* INNER IMAGE BASE FRAME */}
                <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-black/[0.02]">
                  {data.image?.url && (
                    <img
                      src={data.image.url}
                      alt="VK Profile Visual"
                      className="h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    />
                  )}
                </div>

                {/* VIBRANT GLOWING FLOATING TOP BADGE */}
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/50 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-200">
                    Core_Node
                  </span>
                </div>

                {/* INTEGRATED BOTTOM METADATA OVERLAY */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                  <div className="h-px w-full bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />
                  
                  <div className="flex items-center justify-between">
                    <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/90">
                        Operational Base
                      </p>
                      <p className="mt-0.5 text-[13px] font-semibold tracking-wide text-yellow-400">
                        {data.location || "INDIA"}
                      </p>
                    </div>

                    <div className="text-right desert-shadow drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/90">
                        Status
                      </p>
                      <p className="mt-0.5 text-[13px] font-bold tracking-wide text-emerald-500 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">
                        ACTIVE
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* NEON NESTED DESIGN ACCENTS FRAME OUTSIDE */}
              <div className="absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-cyan-400/40 rounded-tl-xl transition-all duration-500 group-hover:-left-4 group-hover:-top-4 group-hover:border-cyan-400" />
              <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-amber-400/40 rounded-br-xl transition-all duration-500 group-hover:-right-4 group-hover:-bottom-4 group-hover:border-amber-400" />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

export default About;