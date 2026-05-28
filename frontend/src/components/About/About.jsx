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
      {/* FIX ✅ 7️⃣: CINEMATIC LEFT GRADIENT OVERLAY FOR READABILITY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent z-0" />

      {/* RESTRAINED LUXURY AMBIENT BACKGROUND LIGHTS */}
      <div className="pointer-events-none absolute right-[-10%] top-10 h-[500px] w-[500px] rounded-full bg-amber-500/[0.06] blur-[140px] z-0" />
      <div className="pointer-events-none absolute left-[-8%] bottom-0 h-[350px] w-[350px] rounded-full bg-neutral-500/[0.04] blur-[120px] z-0" />

      {/* GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-center relative z-10">
        
        {/* RIGHT — PROFILE CARD GRID WITH DETACHED BLUR IMAGE DESIGN */}
        {/* FIX ✅ 8️⃣: APPLIED lg:mt-10 FOR LOWER BALANCE ALIGNMENT */}
        <div className="relative order-1 lg:order-2 lg:col-span-5 flex flex-col sm:flex-row items-center w-full justify-center lg:justify-end gap-6 lg:mt-10">
          
          {/* LEFT CHUNK: PROFILE IMAGE CONTAINER */}
          {data.image && (
            <Reveal delay={0.2} className="w-full max-w-[340px] sm:w-[45%]">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group/img relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
              >
                {/* GLASS BLUR TEXT OVERLAYS */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/90 font-bold">
                    Founder Profile
                  </span>
                </div>

                <img
                  src={data.image}
                  alt="Vinod Kumar"
                  className="h-full w-full object-cover object-center grayscale contrast-[1.05] transition-transform duration-700 ease-out group-hover/img:scale-105 group-hover/img:grayscale-0"
                />

                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-xl bg-black/40 backdrop-blur-md p-2.5 border border-white/10">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.15em] text-white/50 font-bold">Location</p>
                    <p className="text-[10px] text-white font-semibold mt-0.5">{data.location || "INDIA"}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] uppercase tracking-[0.15em] text-white/50 font-bold">Status</p>
                    <p className="text-[10px] text-emerald-400 font-semibold mt-0.5 animate-pulse">Available for Projects</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              </motion.div>
            </Reveal>
          )}

          {/* RIGHT CHUNK: CORE EXPERTISE CAPABILITIES CARD */}
          {/* FIX ✅ 4️⃣: UPDATED MAX WIDTH FROM max-w-[380px] TO max-w-[430px] FOR BETTER PROPORTIONS */}
          <Reveal delay={0.3} className={`w-full ${data.image ? "max-w-[430px] sm:w-[55%]" : "max-w-[450px] lg:max-w-none"}`}>
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group/card relative w-full rounded-[28px] border border-white/10 bg-black p-4 shadow-[0_8px_24px_rgba(0,0,0,0.45),0_24px_60px_rgba(0,0,0,0.38),0_50px_90px_rgba(168,85,247,0.08)] md:p-5 overflow-hidden"
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

                {!data.image && (
                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.22em] text-emerald-300 font-bold">
                      Available
                    </span>
                  </div>
                )}
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
                    className="group block rounded-[22px] border border-white/10 bg-white/[0.03] backdrop-blur-md p-3.5 md:p-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-amber-300/40 hover:bg-white/[0.07] hover:shadow-[0_10px_30px_rgba(245,201,106,0.03)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-1.5 flex items-center gap-3">
                          <span className="text-[10px] font-mono font-bold text-amber-400">
                            {item.id}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-medium">
                            {item.label}
                          </span>
                        </div>

                        <h4 className="text-sm md:text-base font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-200">
                          {item.title}
                        </h4>
                      </div>

                      {/* PREMIUM ELEVATED ARROW BUTTON BLOCK */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-white/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-amber-400 group-hover:bg-amber-400/10 group-hover:text-amber-400">
                        <ArrowUpRight size={16} className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* NOTE */}
              <div className="relative z-10 mt-4 rounded-[22px] border border-white/10 bg-black/[0.06] p-3.5 md:p-4">
                <p className="text-[10px] uppercase tracking-[0.34em] text-white/50 font-bold">
                  Note
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/80 font-medium">
                  Trivixa Arc combines technology, design, and digital creativity to craft premium web experiences, scalable platforms, and modern brand systems built for long-term growth and real-world impact.
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* LEFT — CONTENT */}
        <div className="relative order-2 lg:order-1 lg:col-span-7">
          {/* FIX ✅ 1️⃣: REMOVED THE absolute INNER BACKDROP BOX COMPLETELY TO RESTORE DEPTH */}
          
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
          {/* FIX ✅ 5️⃣: OPTIMIZED SPACING DOWN TO space-y-4 md:space-y-5 */}
          <div className="relative z-10 space-y-4 md:space-y-5">
            {/* MAIN HEADLINE */}
            {/* FIX ✅ 2️⃣: ADJUSTED FROM md:text-[52px] TO TAILORED BALANCED SIZES md:text-[44px] xl:text-[48px] */}
            <Reveal delay={0.05}>
              <h2 className="max-w-2xl text-[30px] sm:text-[38px] md:text-[44px] xl:text-[48px] leading-[1.05] tracking-[-0.05em] font-bold text-white">
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

            {/* FIX ✅ 3️⃣: REPETITIVE HIGHLIGHT BLOCK REMOVED FOR CLEANER LUXURY LOOK */}
          </div>

          {/* HIGH CONTRAST SERVICES CHIPS */}
          {/* FIX ✅ 5️⃣: ADJUSTED TOP MARGIN SPACING FROM mt-10 TO mt-7 */}
          <Reveal delay={0.5}>
            <div className="mt-7 flex flex-wrap gap-2.5 md:gap-3">
              {data.services.map((service) => (
                <motion.span
                  key={service}
                  whileHover={{ y: -2, scale: 1.02 }}
                  {/* FIX ✅ 6️⃣: REDUCED SHAPE INTENSITY WITH TO CLEANER bg-white/[0.02] AND border-white/10 */}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.28em] text-white backdrop-blur-md transition-all duration-300 hover:border-amber-300/40 hover:bg-amber-300/[0.08] hover:shadow-[0_8px_20px_rgba(245,201,106,0.05)]"
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