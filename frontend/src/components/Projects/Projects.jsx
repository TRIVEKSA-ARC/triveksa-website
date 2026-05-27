import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";
import Reveal from "../Reveal";

const PROJECT_THEMES = {
  web: {
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.25)", // Deep cyan neon backglow
    shadow: "shadow-[0_30px_70px_rgba(6,182,212,0.15)]", // Premium matching interactive shadows
    shadowHover: "hover:shadow-[0_30px_80px_rgba(59,130,246,0.25)]",
    borderHover: "hover:border-cyan-500/30",
  },
  uiux: {
    color: "from-purple-400 to-pink-500",
    glow: "rgba(192,132,252,0.25)", // Deep luxury purple backglow
    shadow: "shadow-[0_30px_70px_rgba(168,85,247,0.12)]",
    shadowHover: "hover:shadow-[0_30px_80px_rgba(236,72,153,0.22)]",
    borderHover: "hover:border-purple-500/30",
  },
  editing: {
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.22)", // Deep warning cinematic amber backglow
    shadow: "shadow-[0_30px_70px_rgba(245,158,11,0.12)]",
    shadowHover: "hover:shadow-[0_30px_80px_rgba(249,115,22,0.22)]",
    borderHover: "hover:border-amber-500/30",
  },
};

// --- CINEMATIC HERO FEATURED PROJECT ---
const HeroFeaturedProject = ({ project, theme }) => {
  if (!project) return null;

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 mb-16 md:mb-28">
      <Reveal>
        <div className={`relative w-full rounded-[28px] md:rounded-[36px] border border-white/10 bg-[#0B0D14]/80 backdrop-blur-2xl p-6 md:p-10 overflow-hidden group ${theme.shadow} ${theme.shadowHover} ${theme.borderHover} transition-all duration-500`}>
          {/* Subtle Dynamic Theme Backglow */}
          <div 
            className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[120px] pointer-events-none transition duration-500 group-hover:opacity-100 opacity-70"
            style={{ backgroundColor: theme?.glow || "rgba(34,211,238,0.2)" }}
          />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Box: Cinematic Image Preview */}
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`w-full lg:w-1/2 aspect-[16/10] bg-[#141622] rounded-[20px] md:rounded-[24px] border border-white/5 p-2 flex items-center justify-center overflow-hidden transition duration-500 ${theme.borderHover} shrink-0`}
            >
              <img
                src={project.img?.startsWith("http") ? project.img : "/placeholder.png"}
                alt={project.title}
                className="h-full w-full object-cover rounded-[16px] transition duration-700 group-hover:scale-[1.02]"
              />
            </a>

            {/* Right Box: Strategic Value Messaging */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between h-full align-stretch">
              <div>
                <div className="flex items-center gap-3 mb-4">
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

                {/* Metrics Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-white/5 py-5 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-1">Industry</span>
                    <span className="text-[13px] font-semibold text-[#F1F5F9]">{project.industry || "Digital Solutions"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-1">Core Focus</span>
                    <span className="text-[13px] font-semibold text-[#F1F5F9]">{project.goal || "Premium Experience"}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 block mb-1">Business Impact</span>
                    <span className="text-[13px] font-bold text-amber-400">{project.result || "Conversion Optimized"}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto pt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-black shadow-md transition hover:bg-neutral-200 hover:scale-[1.02]"
                >
                  Explore Experience <Plus size={14} className="text-black" />
                </a>

                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#16171D] text-[#94A3B8] transition duration-300 hover:text-white ${theme.borderHover}`}
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

// --- ROW PROJECT CARD COMPONENT ---
const ProjectSection = ({ title, items = [], theme }) => {
  const scrollRef = useRef(null);

  const slide = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="mb-14 md:mb-28 w-full relative">
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
            className={`text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.42em] bg-gradient-to-r ${theme.color} bg-clip-text text-transparent`}
          >
            {title}
          </motion.h3>
        </motion.div>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 relative w-full">
        
        {/* DESKTOP ARROW LEFT */}
        <button
          onClick={() => slide("left")}
          className="hidden md:flex absolute -left-16 top-1/2 z-30 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 backdrop-blur-xl transition duration-300 hover:bg-neutral-900 hover:text-white hover:scale-105"
        >
          <ChevronLeft size={20} />
        </button>

        {/* CARDS TRACK */}
        <div
          ref={scrollRef}
          className="flex flex-row items-stretch gap-6 overflow-x-auto flex-nowrap snap-x snap-mandatory pb-6 md:pb-8 scroll-smooth px-2 md:px-0"
          style={{ 
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch" 
          }}
        >
          {items.map((item, index) => (
            <div key={item._id || index} className="w-full shrink-0 snap-center snap-always">
              <Reveal delay={index * 0.1}>
                <div
                  className={`group relative w-full overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/10 bg-[#0B0D14]/80 backdrop-blur-2xl p-5 md:p-7 ${theme.shadow} ${theme.shadowHover} ${theme.borderHover} transition-all duration-500 flex flex-col md:flex-row gap-6 md:gap-8 items-center`}
                >
                  {/* Premium Theme Hover Backglow */}
                  <div 
                    className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-0 transition duration-500 group-hover:opacity-70"
                    style={{ backgroundColor: theme?.glow }}
                  />

                  {/* Left Side: Image Preview */}
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-full md:w-1/2 aspect-[16/10] bg-[#141622] rounded-[18px] md:rounded-[22px] border border-white/5 p-2 flex items-center justify-center overflow-hidden transition duration-500 ${theme.borderHover} shrink-0`}
                  >
                    <img
                      src={item.img?.startsWith("http") ? item.img : "/placeholder.png"}
                      alt={item.title}
                      className="h-full w-full object-cover rounded-[14px] transition duration-700 group-hover:scale-[1.02]"
                    />
                  </a>

                  {/* Right Side: Information Matrix */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between h-full align-stretch">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.22em] text-amber-400">
                          Featured Experience
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-white/60">
                          {item.category || "Web"}
                        </span>
                      </div>

                      <h4 className="text-[22px] md:text-[28px] font-bold tracking-tight text-white stroke-none leading-tight mb-2.5 line-clamp-1">
                        {item.title}
                      </h4>

                      <p className="text-[12px] md:text-[13px] leading-relaxed text-[#94A3B8] font-medium mb-4 line-clamp-2">
                        {item.desc}
                      </p>

                      {/* Meta Parameters Grid Layout */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-b border-white/5 py-3.5 mb-4 text-[11px]">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-0.5">Industry</span>
                          <span className="font-semibold text-[#F1F5F9] truncate block">{item.industry || "Digital Solutions"}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-0.5">Core Focus</span>
                          <span className="font-semibold text-[#F1F5F9] truncate block">{item.goal || "Premium Experience"}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-amber-400 block mb-0.5">Business Impact</span>
                          <span className="font-bold text-amber-400 truncate block">{item.result || "Conversion Optimized"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="flex items-center justify-between mt-auto pt-1">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-black shadow-sm transition hover:bg-neutral-200 hover:scale-[1.01]"
                      >
                        Explore Experience <Plus size={12} className="text-black" />
                      </a>

                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#16171D] text-[#94A3B8] transition duration-300 hover:text-white ${theme.borderHover}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* DESKTOP ARROW RIGHT */}
        <button
          onClick={() => slide("right")}
          className="hidden md:flex absolute -right-16 top-1/2 z-30 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/80 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black hover:scale-105"
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

  const featuredHeroProject = 
    projects.web?.find(p => p.isHero) || 
    projects.uiux?.find(p => p.isHero) || 
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
              <span className="bg-gradient-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                WORK
              </span>
            </motion.h2>

            <p className="mx-auto mt-4 max-w-2xl text-[11px] md:text-[14px] uppercase tracking-[0.22em] leading-relaxed text-white/70">
              A refined collection of development, design, and editing projects crafted with detail and purpose
            </p>
          </motion.div>
        </header>

        {/* FEATURED PREMIUM HERO ACTION MODULE */}
        <HeroFeaturedProject project={featuredHeroProject} theme={PROJECT_THEMES.web} />

        {/* SLIDER ROW CATEGORIES */}
        <ProjectSection title="Development" items={projects.web || []} theme={PROJECT_THEMES.web} />
        <ProjectSection title="UI / UX Design" items={projects.uiux || []} theme={PROJECT_THEMES.uiux} />
        <ProjectSection title="Motion & Editing" items={projects.editing || []} theme={PROJECT_THEMES.editing} />
      </div>
    </section>
  );
}

export default Projects;