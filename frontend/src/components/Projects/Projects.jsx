import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";

/* ================= PROJECT SECTION ================= */

// Safety check: if category or items don't exist yet, don't render items

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
    // Calculate precise slide scroll step based on the new larger card container dimensions
    const scrollAmount = scrollRef.current.clientWidth * 0.5;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-24 w-full">
      {/* HEADER */}
      <div className="mx-auto mb-8 max-w-7xl px-6">
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

      {/* ================= SLIDER WRAPPER ================= */}
      <div className="relative w-full px-6">
        <div
          ref={scrollRef}
          className="flex flex-row items-stretch gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item) => (
            <motion.a
              key={item._id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative h-[500px] w-[85vw] md:h-[540px] md:w-[calc(50%-12px)] shrink-0 snap-start overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0A0C] shadow-[0_24px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl will-change-transform flex flex-col p-4"
            >
              {/* SOFT INTERNAL FRAME BORDER */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10 z-20" />

              {/* IMAGE WRAPPER - PREMIUM WITH WHITE BACKDROP PANEL */}
              <div className="relative h-[58%] w-full bg-[#ffee00] rounded-[20px] border border-white/5 p-4 flex items-center justify-center overflow-hidden transition duration-500 group-hover:border-white/15">
                {/* Clean White Backplate Border/Shadow Effect Behind Image */}
                <div className="absolute inset-3 rounded-[14px] bg-white/[0.04] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.02)] z-0" />
                
                <img
                  src={item.img?.startsWith("http") ? item.img : "/placeholder.png"}
                  alt={item.title}
                  className="relative z-10 h-full w-full object-contain rounded-[12px] transition duration-700 group-hover:scale-[1.03]"
                />
                
                {/* TOP BADGE */}
                <div className="absolute left-6 top-6 z-10">
                  <span className="rounded-full border border-white/15 bg-black/90 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-white backdrop-blur-xl">
                    Featured Project
                  </span>
                </div>
              </div>

              {/* DESCRIPTION BOX - CLEANLY NESTED UNDERNEATH WITH CUSTOM COLORS */}
              <div className="flex-1 w-full px-2 pt-5 pb-2 flex flex-col justify-between bg-transparent">
                <div>
                  {/* Styled Project Title */}
                  <h4 className="text-[20px] md:text-[23px] font-bold tracking-tight text-[#E8EDF2] line-clamp-1">
                    {item.title}
                  </h4>

                  {/* Styled Project Description */}
                  <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-[#94A3B8] group-hover:text-[#B4C6DC] transition duration-300 font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* ACTIONS - View Button Styled from reference */}
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D668FF] to-[#A02CFF] px-5 py-2 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_6px_25px_rgba(180,60,255,0.25)] transition hover:brightness-110`}
                  >
                    View <Plus size={16} className="text-white/90" />
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#161618] text-[#94A3B8] backdrop-blur-xl transition duration-300 group-hover:bg-[#1C1C1F] group-hover:text-white group-hover:border-white/20">
                    <ExternalLink size={18} />
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
          ))}
        </div>

        {/* LEFT ARROW ARROW CONTROL BUTTON */}
        <button
          onClick={() => slide("left")}
          className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/75 backdrop-blur-xl transition hover:bg-white hover:text-black shadow-lg"
        >
          <ChevronLeft size={18} />
        </button>

        {/* RIGHT ARROW ARROW CONTROL BUTTON */}
        <button
          onClick={() => slide("right")}
          className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/75 backdrop-blur-xl transition hover:bg-white hover:text-black shadow-lg"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

/* ================= MAIN ================= */
function Projects() {
  const { projects, loading } = useProjects();

  // Guard clause to handle loading state from context
  if (loading) {
    return (
      <section className="py-32 text-center text-white/50">
        Loading projects...
      </section>
    );
  }

  return (
    <section id="projects" className="relative overflow-hidden bg-transparent py-24 text-white">
      {/* AMBIENT LIGHT */}
      <div className="pointer-events-none absolute left-[-8%] top-10 h-[320px] w-[320px] rounded-full bg-white/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] top-28 h-[420px] w-[420px] rounded-full bg-amber-400/8 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <header className="mb-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-14 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <p className="text-[11px] md:text-[12px] uppercase tracking-[0.42em] text-white/90">
                Curated Projects
              </p>
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </div>

            <motion.h2 className="text-[38px] md:text-[64px] font-bold tracking-[-0.04em] leading-none text-white">
              SELECTED{" "}
              <span className="bg-linear-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                WORK
              </span>
            </motion.h2>

            <p className="mx-auto mt-5 max-w-2xl text-[13px] md:text-[14px] uppercase tracking-[0.28em] leading-7 text-white/90">
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