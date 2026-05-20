import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";
import Reveal from "../Reveal";

/* ================= PROJECT SECTION ================= */

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

  const slide = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-20 md:mb-28 w-full">
      {/* HEADER */}
      <div className="mx-auto mb-6 md:mb-10 max-w-7xl px-6 md:px-8">
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

      {/* ================= SLIDER WRAPPER CONTAINER ================= */}
      <div className="mx-auto max-w-7xl px-4 md:px-12 relative w-full">
        
        {/* LEFT ARROW CONTROL BUTTON - Hidden on Mobile Touch Screens */}
        <button
          onClick={() => slide("left")}
          className="hidden md:flex absolute -left-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <ChevronLeft size={20} />
        </button>

        {/* HORIZONTAL CARDS TRACK CONTAINER */}
        <div
          ref={scrollRef}
          className="flex flex-row items-stretch gap-4 md:gap-6 overflow-x-auto flex-nowrap snap-x snap-mandatory pb-8 scroll-smooth px-2 md:px-0"
          style={{ 
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch" 
          }}
        >
          {items.map((item, index) => (
            <Reveal key={item._id} delay={index * 0.1}>
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[460px] w-[85vw] sm:w-[340px] md:h-[510px] md:w-[360px] lg:w-[376px] shrink-0 snap-center md:snap-start overflow-hidden rounded-[24px] md:rounded-[28px] border border-cyan-500/10 bg-[#0B0D14] shadow-[0_20px_50px_rgba(56,189,248,0.15)] backdrop-blur-xl will-change-transform flex flex-col p-3 md:p-4"
              >
                {/* SOFT INTERNAL FRAME BORDER */}
                <div className="pointer-events-none absolute inset-0 rounded-[24px] md:rounded-[28px] ring-1 ring-white/5 z-20" />

                {/* IMAGE WRAPPER */}
                <div className="relative h-[55%] w-full bg-[#141622] rounded-[18px] md:rounded-[20px] border border-white/5 p-2 flex items-center justify-center overflow-hidden transition duration-500 group-hover:border-cyan-500/20">
                  <div className="absolute inset-3 rounded-[14px] bg-white/[0.01] border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.4)] z-0" />
                  
                  <img
                    src={item.img?.startsWith("http") ? item.img : "/placeholder.png"}
                    alt={item.title}
                    className="relative z-10 h-full w-full object-contain rounded-[14px] transition duration-700 group-hover:scale-[1.03]"
                  />
                  
                  {/* TOP BADGE */}
                  <div className="absolute left-4 top-4 md:left-6 md:top-6 z-10">
                    <span className="rounded-full border border-white/10 bg-black/80 px-2.5 py-1 text-[8px] md:text-[9px] uppercase tracking-[0.28em] text-white/90 backdrop-blur-xl">
                      Featured
                    </span>
                  </div>
                </div>

                {/* DESCRIPTION BOX */}
                <div className="flex-1 w-full px-1 md:px-2 pt-4 md:pt-5 pb-1 flex flex-col justify-between bg-transparent">
                  <div>
                    <h4 className="text-[18px] md:text-[22px] font-bold tracking-tight text-[#F1F5F9] line-clamp-1">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 md:mt-2 line-clamp-2 text-[13px] md:text-[14px] leading-6 text-[#94A3B8] group-hover:text-[#CBD5E1] transition duration-300 font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-3 md:mt-4 flex items-center justify-between">
                    <span
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D668FF] to-[#A02CFF] px-4 md:px-5 py-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_25px_rgba(180,60,255,0.25)] transition hover:brightness-110"
                    >
                      View <Plus size={14} className="text-white/90" />
                    </span>

                    <span className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full border border-white/10 bg-[#16171D] text-[#94A3B8] backdrop-blur-xl transition duration-300 group-hover:bg-[#1E2028] group-hover:text-white group-hover:border-cyan-500/30">
                      <ExternalLink size={16} />
                    </span>
                  </div>
                </div>

                {/* LIGHT HOVER GLOW LAYEOVER */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 z-10"
                  style={{
                    boxShadow: `inset 0 0 60px ${theme.glow}`,
                  }}
                />
              </motion.a>
            </Reveal>
          ))}
        </div>

        {/* RIGHT ARROW CONTROL BUTTON - Hidden on Mobile Touch Screens */}
        <button
          onClick={() => slide("right")}
          className="hidden md:flex absolute -right-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </div>
  );
};

/* ================= MAIN ================= */
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
    <section id="projects" className="relative overflow-hidden bg-transparent py-16 md:py-24 text-white">
      {/* AMBIENT LIGHT */}
      <div className="pointer-events-none absolute left-[-8%] top-10 h-[320px] w-[320px] rounded-full bg-white/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] top-28 h-[420px] w-[420px] rounded-full bg-amber-400/8 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <header className="mb-14 md:mb-20 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-4 md:mb-6 flex items-center justify-center gap-3 md:gap-4">
              <span className="h-px w-10 md:w-14 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <p className="text-[10px] md:text-[12px] uppercase tracking-[0.42em] text-white/90">
                Curated Projects
              </p>
              <span className="h-px w-10 md:w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>

            <motion.h2 className="text-[32px] md:text-[64px] font-bold tracking-[-0.04em] leading-none text-white">
              SELECTED{" "}
              <span className="bg-linear-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                WORK
              </span>
            </motion.h2>

            <p className="mx-auto mt-4 max-w-2xl text-[11px] md:text-[14px] uppercase tracking-[0.22em] md:tracking-[0.28em] leading-6 md:leading-7 text-white/90 low-weight">
              A refined collection of development, design, and editing projects crafted with detail and purpose
            </p>
          </motion.div>
        </header>

        <ProjectSection
          title="Development"
          items={projects.web}
          theme={PROJECT_THEMES.web}
        />
        <ProjectSection
          title="UI / UX Design"
          items={projects.uiux}
          theme={PROJECT_THEMES.uiux}
        />
        <ProjectSection
          title="Motion & Editing"
          items={projects.editing}
          theme={PROJECT_THEMES.editing}
        />
      </div>
    </section>
  );
}

export default Projects;