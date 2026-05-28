import { motion } from "framer-motion";
import { useAbout } from "../../context/AboutContext";
import Reveal from "../Reveal";
import { ArrowUpRight } from "lucide-react";

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

  const servicesItems = [
    { id: "01", label: "Development", title: "Full Stack Solutions" },
    { id: "02", label: "Design", title: "UI/UX Systems" },
    { id: "03", label: "Content", title: "Video & Brand Visuals" },
  ];

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
        
        {/* RIGHT — NOW CORE EXPERTISE CAPABILITIES CARD */}
        <div className="relative order-1 lg:order-2 lg:col-span-5 flex items-center w-full justify-center lg:justify-end">
          <Reveal delay={0.3} className="w-full max-w-[450px] lg:max-w-none">
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group/card relative w-full rounded-[28px] border border-white/10 bg-black p-4 shadow-[0_8px_24px_rgba(0,0,0,0.45),0_24px_60px_rgba(0,0,0,0.38),0_50px_90px_rgba(168,85,247,0.08)] md:p-6 overflow-hidden"
            >
              {/* SUBTLE INTERACTIVE RADIAL HIGHLIGHT ON HOVER */}
              <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-r from-amber-400/20 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
              
              <div className="relative z-10 mb-4 flex items-center justify-between border-b border-white/10 pb-4">
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

              <div className="relative z-10 space-y-3">
                {servicesItems.map((item, i) => (
                  <motion.a
                    href="#projects"
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
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
                        <ArrowUpRight size={18} className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* NOTE */}
              <div className="relative z-10 mt-4 rounded-[22px] border border-white/10 bg-black/[0.06] p-4 md:p-5">
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/50 font-bold">
                  Note
                </p>
                <p className="mt-2 text-xs md:text-sm leading-relaxed text-white/80 font-medium">
                  Trivixa Arc combines technology, design, and digital creativity to craft premium web experiences, scalable platforms, and modern brand systems built for long-term growth and real-world impact.
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* LEFT — CONTENT */}
        <div className="relative order-2 lg:order-1 lg:col-span-7">
          <div className="absolute inset-0 rounded-[40px] bg-black/18 backdrop-blur-[2px]" />
          
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
            {/* MAIN HEADLINE */}
            <Reveal delay={0.05}>
              <h2 className="max-w-2xl text-[30px] sm:text-[38px] md:text-[52px] leading-[1.05] tracking-[-0.05em] font-bold text-white">
                Premium Digital Experiences Engineered For Modern Brands
              </h2>
            </Reveal>

            {/* PARAGRAPHS */}
            {[data.paragraph1, data.paragraph2]
              .filter(Boolean)
              .map((text, i) => (
                <Reveal key={i} delay={0.12 + i * 0.1}>
                  <p
                    className={`max-w-2xl text-[14px] md:text-[17px] leading-relaxed md:leading-8 font-light ${
                      i === 0 ? "text-white/72" : "text-white/65"
                    }`}
                  >
                    {renderStyledText(text)}
                  </p>
                </Reveal>
              ))}

            {/* AGENCY MISSION */}
            <Reveal delay={0.35}>
              <div className="mt-6 border-l border-amber-400/30 pl-4 md:pl-5 py-1">
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.34em] text-amber-400/70">
                  Agency Mission
                </p>
                <p className="max-w-2xl text-[13px] md:text-[15px] leading-relaxed text-white/70 italic font-light">
                  Every project is crafted with a balance of aesthetics, usability, and scalable engineering to create digital experiences that feel premium and perform efficiently.
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
            <div className="mt-10 flex flex-wrap gap-2.5 md:gap-3">
              {data.services.map((service) => (
                <motion.span
                  key={service}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.28em] text-white backdrop-blur-md transition-all duration-300 hover:border-amber-300/40 hover:bg-amber-300/[0.08] hover:shadow-[0_8px_20px_rgba(245,201,106,0.05)]"
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