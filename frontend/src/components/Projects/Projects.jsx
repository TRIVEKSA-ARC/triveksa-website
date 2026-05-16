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
              className="group relative h-[420px] w-[320px] md:h-[460px] md:w-[360px] shrink-0 snap-start overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_50px_rgba(0,0,0,0.20)] backdrop-blur-xl will-change-transform"
            >
              {/* SOFT FRAME */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/8" />

              {/* IMAGE WRAPPER - CLEAR, ORIGINAL SIZE, NO ZOOM CROPPING */}
              <div className="absolute inset-0 bg-[#0A0A0C] flex items-center justify-center p-1">
                <img
                  src={item.img?.startsWith("http") ? item.img : "/placeholder.png"}
                  alt={item.title}
                  className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              {/* LIGHT HOVER GLOW ONLY */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: `inset 0 0 60px ${theme.glow}`,
                }}
              />

              {/* TOP BADGE */}
              <div className="absolute left-5 top-5 z-10">
                <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/85 backdrop-blur-xl">
                  Featured Project
                </span>
              </div>

              {/* TRANSPARENT TEXT BOX */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                <div className="rounded-[22px] border border-white/10 bg-black/[0.18] p-5 backdrop-blur-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20">
                  <h4 className="text-[18px] md:text-[20px] font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-white/90">
                    {item.desc}
                  </p>

                  {/* ACTIONS */}
                  <div className="mt-5 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r ${theme.color} px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_8px_20px_rgba(0,0,0,0.16)]`}
                    >
                      View <Plus size={14} />
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/85 backdrop-blur-xl transition duration-300 group-hover:bg-black/30 group-hover:text-white">
                      <ExternalLink size={18} />
                    </span>
                  </div>
                </div>
              </div>
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
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <p className="text-[11px] md:text-[12px] uppercase tracking-[0.42em] text-white/55">
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

            <p className="mx-auto mt-5 max-w-2xl text-[13px] md:text-[14px] uppercase tracking-[0.28em] leading-7 text-white/45">
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