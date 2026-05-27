import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  ExternalLink,
  Target,
  BarChart3,
  Briefcase,
} from "lucide-react";
import { useProjects } from "../../context/ProjectContext";
import Reveal from "../Reveal";

const PROJECT_THEMES = {
  web: {
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(6,182,212,0.35)",
    accent: "from-cyan-400 to-blue-500",
    badge: "text-cyan-300 border-cyan-400/20 bg-cyan-400/10",
    result: "text-cyan-400",
    shadow: "shadow-[0_0_35px_rgba(6,182,212,0.18)]",
  },
  uiux: {
    color: "from-purple-400 to-pink-500",
    glow: "rgba(168,85,247,0.35)",
    accent: "from-purple-400 to-pink-500",
    badge: "text-purple-300 border-purple-400/20 bg-purple-400/10",
    result: "text-purple-400",
    shadow: "shadow-[0_0_35px_rgba(168,85,247,0.18)]",
  },
  editing: {
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245,158,11,0.35)",
    accent: "from-amber-400 to-orange-500",
    badge: "text-amber-300 border-amber-400/20 bg-amber-400/10",
    result: "text-amber-400",
    shadow: "shadow-[0_0_35px_rgba(245,158,11,0.18)]",
  },
};

// --- CINEMATIC HERO FEATURED PROJECT ---
const HeroFeaturedProject = ({ project, theme }) => {
  if (!project) return null;

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 mb-16 md:mb-28">
      <Reveal>
        <div className="relative w-full rounded-[28px] md:rounded-[36px] border border-white/10 bg-[#0B0D14]/80 backdrop-blur-2xl p-6 md:p-10 overflow-hidden group shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
          <div
            className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[120px] pointer-events-none transition duration-500 group-hover:opacity-80"
            style={{ backgroundColor: theme?.glow || "rgba(245,158,11,0.15)" }}
          />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-1/2 aspect-[16/10] bg-[#141622] rounded-[20px] md:rounded-[24px] border border-white/5 p-2 flex items-center justify-center overflow-hidden transition duration-500 group-hover:border-white/10 shrink-0"
            >
              <img
                src={project.img?.startsWith("http") ? project.img : "/placeholder.png"}
                alt={project.title}
                className="h-full w-full object-cover rounded-[16px] transition duration-700 group-hover:scale-[1.02]"
              />
            </a>

            <div className="w-full lg:w-1/2 flex flex-col justify-between h-full align-stretch">
              <div>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400">
                    Featured Experience
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/60">
                    {project.category || "Case Study"}
                  </span>
                </div>

                <h3 className="text-[28px] md:text-[42px] font-bold tracking-tight text-white leading-tight mb-4">
                  {project.title}
                </h3>

                <p className="text-[14px] md:text-[16px] leading-relaxed text-[#94A3B8] font-medium mb-6">
                  {project.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-white/5 py-5 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-1">
                      Industry
                    </span>
                    <span className="text-[13px] font-semibold text-[#F1F5F9]">
                      {project.industry || "Digital Solutions"}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-1">
                      Core Focus
                    </span>
                    <span className="text-[13px] font-semibold text-[#F1F5F9]">
                      {project.goal || "Premium Experience"}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 block mb-1">
                      Business Impact
                    </span>
                    <span className="text-[13px] font-bold text-amber-400">
                      {project.result || "Conversion Optimized"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-black shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition hover:bg-neutral-200 hover:scale-[1.02]"
                >
                  Explore Experience <Plus size={14} className="text-black" />
                </a>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#16171D] text-[#94A3B8] transition duration-300 hover:text-white hover:border-white/30"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

const PremiumProjectCard = ({ item, index, theme }) => {
  const categoryLabel =
    item.category ||
    (index % 3 === 0 ? "Client Project" : index % 3 === 1 ? "Case Study" : "UI Concept");

  return (
    <Reveal key={item._id} delay={index * 0.1}>
      <motion.a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4 }}
        className={`group relative h-auto min-h-[510px] w-[82vw] sm:w-[350px] md:h-[590px] md:w-[370px] lg:w-[385px] shrink-0 snap-center md:snap-start overflow-hidden rounded-[24px] md:rounded-[28px] border border-white/10 bg-[#0B0D14]/95 backdrop-blur-xl flex flex-col p-3.5 md:p-4 shadow-[0_22px_60px_rgba(0,0,0,0.35)] ${theme.shadow}`}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[24px] md:rounded-[28px] ring-1 ring-white/5 z-20" />

        <div
          className="pointer-events-none absolute -top-24 right-[-20%] h-48 w-48 rounded-full blur-[90px] opacity-60 transition duration-500 group-hover:opacity-90"
          style={{ backgroundColor: theme.glow }}
        />

        <div className="relative h-[190px] md:h-[45%] w-full bg-[#141622] rounded-[18px] md:rounded-[20px] border border-white/5 p-2 flex items-center justify-center overflow-hidden transition duration-500 group-hover:border-white/15 shrink-0">
          <div className="absolute inset-3 rounded-[14px] border border-white/5 bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] z-0" />

          <img
            src={item.img?.startsWith("http") ? item.img : "/placeholder.png"}
            alt={item.title}
            className="relative z-10 h-full w-full object-cover rounded-[14px] transition duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4">
            <span
              className={`rounded-full border px-3 py-1 text-[8px] md:text-[9px] uppercase tracking-[0.28em] backdrop-blur-xl font-bold ${theme.badge}`}
            >
              {categoryLabel}
            </span>

            <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[8px] md:text-[9px] uppercase tracking-[0.24em] text-white/60">
              {item.categoryShort || "Live"}
            </span>
          </div>
        </div>

        <div className="flex-1 w-full px-1 pt-4 pb-1 flex flex-col justify-between gap-4 relative z-10">
          <div>
            <h4 className="text-[20px] md:text-[22px] font-bold tracking-tight text-[#F8FAFC] line-clamp-1">
              {item.title}
            </h4>

            <p className="mt-2 line-clamp-3 text-[12px] md:text-[13px] leading-relaxed text-[#94A3B8] group-hover:text-[#CBD5E1] transition duration-300 font-medium">
              {item.desc}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 border-t border-white/5 pt-4">
              <div className="flex items-start gap-2.5 text-[11px] md:text-[12px] text-white/55">
                <Briefcase size={13} className="text-white/35 shrink-0 mt-[1px]" />
                <span className="truncate">
                  <strong className="text-white/70 font-medium">Industry:</strong>{" "}
                  {item.industry || "Digital Content"}
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-[11px] md:text-[12px] text-white/55">
                <Target size={13} className="text-white/35 shrink-0 mt-[1px]" />
                <span className="truncate">
                  <strong className="text-white/70 font-medium">Objective:</strong>{" "}
                  {item.goal || "Experience Strategy"}
                </span>
              </div>

              <div className={`flex items-start gap-2.5 text-[11px] md:text-[12px] font-medium ${theme.result}`}>
                <BarChart3 size={13} className="shrink-0 mt-[1px]" />
                <span className="truncate">{item.result || "Premium visual impact"}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto pt-2">
            <span
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${theme.accent} px-4 py-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition duration-300 group-hover:brightness-110`}
            >
              {item.category === "Case Study" ? "View Case Study" : "Explore Experience"}
              <Plus size={12} className="text-white/90" />
            </span>

            <span className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/10 bg-[#16171D] text-[#94A3B8] backdrop-blur-xl transition duration-300 group-hover:bg-[#1E2028] group-hover:text-white group-hover:border-white/30">
              <ExternalLink size={14} />
            </span>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 z-10"
          style={{ boxShadow: `inset 0 0 80px ${theme.glow}` }}
        />
      </motion.a>
    </Reveal>
  );
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
    <div className="mb-14 md:mb-28 w-full">
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

      <div className="mx-auto max-w-7xl px-4 md:px-12 relative w-full">
        <button
          onClick={() => slide("left")}
          className="hidden md:flex absolute -left-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex flex-row items-stretch gap-4 md:gap-6 overflow-x-auto flex-nowrap snap-x snap-mandatory pb-6 md:pb-8 scroll-smooth px-2 md:px-0"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {items.map((item, index) => (
            <PremiumProjectCard
              key={item._id || `${item.title}-${index}`}
              item={item}
              index={index}
              theme={theme}
            />
          ))}
        </div>

        <button
          onClick={() => slide("right")}
          className="hidden md:flex absolute -right-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <ChevronRight size={20} />
        </button>

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

  const featuredHeroProject =
    projects.web?.find((p) => p.isHero) ||
    projects.uiux?.find((p) => p.isHero) ||
    projects.web?.[0] ||
    projects.uiux?.[0];

  return (
    <section id="projects" className="relative overflow-hidden bg-transparent py-12 md:py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 md:mb-24 px-4 text-center">
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

        <HeroFeaturedProject project={featuredHeroProject} theme={PROJECT_THEMES.web} />

        <ProjectSection
          title="Development"
          items={projects.web || []}
          theme={PROJECT_THEMES.web}
        />

        <ProjectSection
          title="UI / UX Design"
          items={projects.uiux || []}
          theme={PROJECT_THEMES.uiux}
        />

        <ProjectSection
          title="Motion & Editing"
          items={projects.editing || []}
          theme={PROJECT_THEMES.editing}
        />
      </div>
    </section>
  );
}

export default Projects;