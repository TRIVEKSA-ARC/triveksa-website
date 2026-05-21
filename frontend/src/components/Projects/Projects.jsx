import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";
import Reveal from "../Reveal";

const PROJECT_THEMES = {
  web: {
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(6,182,212,0.35)",
  },
  uiux: {
    color: "from-purple-400 to-pink-500",
    glow: "rgba(168,85,247,0.35)",
  },
  editing: {
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245,158,11,0.35)",
  },
};

const ProjectSection = ({ title, items = [], theme }) => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Fallback if items are empty to prevent infinite loop errors
  if (!items || items.length === 0) return null;

  // Duplicate items array to ensure a seamless visual infinite loop track
  const loopItems = [...items, ...items];

  const slide = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-14 md:mb-28 w-full">
      {/* HEADER */}
      <div className="mx-auto mb-6 max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <span className={`h-px w-12 bg-gradient-to-r ${theme.color}`} />
          <motion.h3
            className={`text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.42em] bg-linear-to-r ${theme.color} bg-clip-text text-transparent`}
          >
            {title}
          </motion.h3>
        </motion.div>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="mx-auto max-w-7xl px-4 md:px-12 relative w-full overflow-hidden">
        
        {/* DESKTOP ARROW LEFT */}
        <button
          onClick={() => slide("left")}
          className="hidden md:flex absolute -left-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <ChevronLeft size={20} />
        </button>

        {/* INFINITE MARQUEE CARDS TRACK */}
        <div
          className="overflow-hidden w-full relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            ref={scrollRef}
            className="flex flex-row items-stretch gap-4 md:gap-6 w-max pb-6 md:pb-8"
            animate={isPaused ? "paused" : "animate"}
            variants={{
              animate: {
                // Adjust x translation to perfectly shift back to zero once original length concludes
                x: [0, `-${50}%`],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: items.length * 7, // Dynamically calculates speed relative to item volume
                    ease: "linear",
                  },
                },
              },
              paused: {
                x: undefined, // Smoothly halts Framer Motion execution coordinates on mouseEnter
              },
            }}
          >
            {loopItems.map((item, index) => (
              <Reveal key={`${item._id}-${index}`} delay={(index % items.length) * 0.1}>
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-auto min-h-[410px] w-[82vw] sm:w-[340px] md:h-[510px] md:w-[360px] lg:w-[376px] shrink-0 overflow-hidden rounded-[24px] md:rounded-[28px] border border-cyan-500/10 bg-[#0B0D14] shadow-[0_20px_50px_rgba(56,189,248,0.15)] backdrop-blur-xl flex flex-col p-3.5 md:p-4"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[24px] md:rounded-[28px] ring-1 ring-white/5 z-20" />

                  {/* IMAGE FRAME */}
                  <div className="relative h-[200px] md:h-[55%] w-full bg-[#141622] rounded-[18px] md:rounded-[20px] border border-white/5 p-2 flex items-center justify-center overflow-hidden transition duration-500 group-hover:border-cyan-500/20 shrink-0">
                    <div className="absolute inset-3 rounded-[14px] bg-white/[0.01] border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.4)] z-0" />
                    
                    <img
                      src={item.img?.startsWith("http") ? item.img : "/placeholder.png"}
                      alt={item.title}
                      className="relative z-10 h-full w-full object-cover rounded-[14px] transition duration-700 group-hover:scale-[1.03]"
                    />
                    
                    <div className="absolute left-4 top-4 z-10">
                      <span className="rounded-full border border-white/10 bg-black/80 px-2.5 py-1 text-[8px] md:text-[9px] uppercase tracking-[0.28em] text-white/90 backdrop-blur-xl">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* DESCRIPTION BOX */}
                  <div className="flex-1 w-full px-1 pt-4 pb-1 flex flex-col justify-between gap-4">
                    <div>
                      <h4 className="text-[18px] md:text-[22px] font-bold tracking-tight text-[#F1F5F9] line-clamp-1">
                        {item.title}
                      </h4>

                      <p className="mt-2 line-clamp-2 text-[13px] md:text-[14px] leading-relaxed text-[#94A3B8] group-hover:text-[#CBD5E1] transition duration-300 font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center justify-between mt-auto">
                      <span
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D668FF] to-[#A02CFF] px-4 py-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_25px_rgba(180,60,255,0.25)] transition hover:brightness-110"
                      >
                        View <Plus size={14} className="text-white/90" />
                      </span>

                      <span className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-white/10 bg-[#16171D] text-[#94A3B8] backdrop-blur-xl transition duration-300 group-hover:bg-[#1E2028] group-hover:text-white group-hover:border-cyan-500/30">
                        <ExternalLink size={16} />
                      </span>
                    </div>
                  </div>

                  {/* LIGHT HOVER GLOW */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 z-10"
                    style={{ boxShadow: `inset 0 0 60px ${theme.glow}` }}
                  />
                </motion.a>
              </Reveal>
            ))}
          </motion.div>
        </div>

        {/* DESKTOP ARROW RIGHT */}
        <button
          onClick={() => slide("right")}
          className="hidden md:flex absolute -right-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <ChevronRight size={20} />
        </button>

        {/* UNIFORM MOBILE CONTROLS FOOTER */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-2">
          <button
            onClick={() => slide("left")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0B0D14] text-white/80 active:scale-95 transition"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium">
            Swipe or Tap
          </span>
          <button
            onClick={() => slide("right")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0B0D14] text-white/80 active:scale-95 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};

function Projects() {
  const { projects, loading } = useProjects();

  if (loading) {
    return (
      <section className="py-32 text-center text-white/50">
        Loading projects...
      </section>
    );
  }

  return (
    <section id="projects" className="relative overflow-hidden bg-transparent py-12 md:py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 md:mb-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <p className="text-[10px] md:text-[12px] uppercase tracking-[0.42em] text-white/90">
                Curated Projects
              </p>
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>

            <motion.h2 className="text-[32px] md:text-[64px] font-bold tracking-[-0.04em] leading-none text-white">
              SELECTED{" "}
              <span className="bg-linear-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                WORK
              </span>
            </motion.h2>

            <p className="mx-auto mt-4 max-w-2xl text-[11px] md:text-[14px] uppercase tracking-[0.22em] leading-relaxed text-white/70">
              A refined collection of development, design, and editing projects crafted with detail and purpose
            </p>
          </motion.div>
        </header>

        <ProjectSection title="Development" items={projects.web} theme={PROJECT_THEMES.web} />
        <ProjectSection title="UI / UX Design" items={projects.uiux} theme={PROJECT_THEMES.uiux} />
        <ProjectSection title="Motion & Editing" items={projects.editing} theme={PROJECT_THEMES.editing} />
      </div>
    </section>
  );
}

export default Projects;