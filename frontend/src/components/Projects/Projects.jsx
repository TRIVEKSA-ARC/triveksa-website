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
    scrollRef.current.scrollBy({
      left: dir === "left" ? -260 : 260,
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

      {/* ================= SLIDER ================= */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-2"
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
              className="group relative h-[450px] w-[320px] md:h-[500px] md:w-[360px] shrink-0 snap-start overflow-hidden rounded-[24px] border border-white/10 bg-[#050507] shadow-[0_24px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl will-change-transform flex flex-col text-left"
            >
              {/* SOFT INTERNAL FRAME BORDER */}
              <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-white/10 z-20" />

              {/* IMAGE WRAPPER - MATTE DARK PORT/COVER VIEW */}
              <div className="relative h-[55%] w-full bg-[#0d0d11] overflow-hidden">
                <img
                  src={item.img?.startsWith("http") ? item.img : "/placeholder.png"}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                
                {/* TOP BADGE */}
                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A0A0C]/80 border border-white/10 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {title}
                  </span>
                </div>
              </div>

              {/* DESCRIPTION BOX - PREMIUM ACCENT AND TYPOGRAPHY */}
              <div className="flex-1 w-full p-6 flex flex-col justify-between bg-gradient-to-b from-transparent to-white/[0.01]">
                <div>
                  <h4 className="text-[20px] font-bold tracking-tight text-white line-clamp-1 group-hover:text-white transition duration-300">
                    {item.title}
                  </h4>

                  <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-white/50 group-hover:text-white/70 transition duration-300">
                    {item.desc}
                  </p>
                </div>

                {/* PREMIUM ACTIONS AREA */}
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-[12px] font-medium text-white/40 group-hover:text-white/80 transition duration-300 flex items-center gap-1">
                    Preview collection
                  </span>

                  <span className="flex items-center gap-1 text-[13px] font-medium text-white/80 group-hover:text-white transition duration-300">
                    View <ChevronRight size={14} className="transform group-hover:translate-x-1 transition duration-300" />
                  </span>
                </div>
              </div>

              {/* HIGH-END AMBIENT GLOW ON HOVER */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 z-10"
                style={{
                  boxShadow: `inset 0 0 40px ${theme.glow}`,
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={() => slide("left")}
          className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/75 backdrop-blur-xl transition hover:bg-white hover:text-black"
        >
          <ChevronLeft size={18} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => slide("right")}
          className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/75 backdrop-blur-xl transition hover:bg-white hover:text-black"
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