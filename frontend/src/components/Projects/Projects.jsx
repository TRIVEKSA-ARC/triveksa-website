import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";
import Reveal from "../Reveal";

const PROJECT_THEMES = {
  web: {
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.25)", 
    shadow: {
      boxShadow: "0 25px 50px -12px rgba(6,182,212,0.25)",
    },
    borderHover: "hover:border-cyan-400/40",
  },
  uiux: {
    color: "from-purple-400 to-pink-500",
    glow: "rgba(192,132,252,0.25)",
    shadow: {
      boxShadow: "0 25px 50px -12px rgba(168,85,247,0.25)",
    },
    borderHover: "hover:border-purple-400/40",
  },
  editing: {
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.22)",
    shadow: {
      boxShadow: "0 25px 50px -12px rgba(245,158,11,0.25)",
    },
    borderHover: "hover:border-amber-400/40",
  },
};

// --- RING CAROUSEL ROW COMPONENT ---
const ProjectSection = ({ title, items = [], theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // If there are no items, render nothing gracefully
  if (items.length === 0) return null;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="mb-20 md:mb-32 w-full relative overflow-visible">
      {/* HEADER */}
      <div className="mx-auto mb-10 max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <span className={`h-px w-12 bg-gradient-to-r ${theme.color}`} />
          <motion.h3
            className={`text-[11px] md:text-[12px] font-bold uppercase tracking-[0.42em] bg-gradient-to-r ${theme.color} bg-clip-text text-transparent`}
          >
            {title}
          </motion.h3>
        </motion.div>
      </div>

      {/* 3D CAROUSEL CONTAINER */}
      <div className="relative w-full h-[540px] md:h-[480px] flex items-center justify-center overflow-visible select-none">
        
        {/* Glow backdrop behind the active ring center */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[140px] opacity-40 pointer-events-none transition-all duration-1000 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: theme.glow }}
        />

        {/* Perspective Chamber */}
        <div 
          className="relative w-full max-w-7xl h-full flex items-center justify-center"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {items.map((item, index) => {
            // Determine relative math distance inside the ring arrangement
            let offset = index - activeIndex;
            
            // Core wrapping algorithm logic for endless circular flow
            if (offset < -1) offset += items.length;
            if (offset > 1) offset -= items.length;

            // Only render visible items within immediate layout scope (Left, Center, Right)
            const isVisible = Math.abs(offset) <= 1;
            if (!isVisible) return null;

            return (
              <ProjectCard
                key={item._id || index}
                item={item}
                theme={theme}
                offset={offset}
                isActive={offset === 0}
              />
            );
          })}
        </div>

        {/* SLIDER CONTROLS */}
        {items.length > 1 && (
          <>
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-12 z-40 h-14 w-14 flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/60 text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-12 z-40 h-14 w-14 flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/60 text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// --- PERSPECTIVE 3D INNER-RING CARD COMPONENT ---
const ProjectCard = ({ item, theme, offset, isActive }) => {
  // Angle rotation flipped to form a deep curve inward
  const rotateY = -offset * 25; 
  
  // horizontal distribution spacing
  const translateX = offset * 96; 
  
  // Depth Correction: Pushes the active middle card inside/backwards (-160px)
  // while the side pieces sit forward (-40px) to form the inner cylinder wall shape
  const translateZ = isActive ? -160 : -40; 
  
  const opacity = isActive ? 1 : 0.55;
  const zIndex = isActive ? 30 : 10;

  return (
    <motion.div
      style={{ transformStyle: "preserve-3d" }}
      initial={false}
      animate={{
        x: `${translateX}%`,
        z: translateZ,
        rotateY: rotateY,
        opacity: opacity,
        scale: isActive ? 1 : 0.84,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 26,
      }}
      className={`absolute w-[90%] sm:w-[450px] md:w-[850px] shrink-0 rounded-[32px] md:rounded-[40px] border border-white/[0.08] bg-[#0F1016]/90 backdrop-blur-3xl p-6 md:p-8 ${theme.borderHover} transition-colors duration-500 flex flex-col md:flex-row gap-6 md:gap-8 items-center ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
      style={{
        zIndex: zIndex,
        boxShadow: isActive ? theme.shadow.boxShadow : "0 10px 30px rgba(0,0,0,0.5)",
      }}
    >
      {/* Left Side: Premium Image Container */}
      <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-[16/11] bg-[#171926] rounded-[24px] md:rounded-[30px] border border-white/5 p-2 flex items-center justify-center overflow-hidden shrink-0 group relative">
        <img
          src={item.img?.startsWith("http") ? item.img : "/placeholder.png"}
          alt={item.title}
          className="h-full w-full object-cover rounded-[18px] md:rounded-[24px] transition duration-700 group-hover:scale-[1.04]"
        />
        {/* Colorful Gradient overlay to enrich dark images */}
        <div className={`absolute inset-0 bg-gradient-to-t ${theme.color} opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none`} />
      </div>

      {/* Right Side: Information Layout Matrix */}
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-1">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[8px] md:text-[9px] font-extrabold uppercase tracking-[0.22em] text-amber-400">
              Featured Experience
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-white/60">
              {item.category || "Web"}
            </span>
          </div>

          <h4 className="text-[24px] md:text-[32px] font-bold tracking-tight text-white leading-tight mb-3 line-clamp-1">
            {item.title}
          </h4>

          <p className="text-[13px] md:text-[14px] leading-relaxed text-[#94A3B8] font-medium mb-5 line-clamp-2">
            {item.desc}
          </p>

          {/* Meta Information Details Grid */}
          <div className="grid grid-cols-3 gap-2 border-t border-b border-white/5 py-4 mb-5 text-[11px]">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-0.5">Industry</span>
              <span className="font-semibold text-[#F1F5F9] truncate block">{item.industry || "Digital Solutions"}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-0.5">Core Focus</span>
              <span className="font-semibold text-[#F1F5F9] truncate block">{item.goal || "Premium Experience"}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-amber-400 block mb-0.5">Impact</span>
              <span className="font-bold text-amber-400 truncate block">{item.result || "Conversion Optimized"}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-auto">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${theme.color} px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-95`}
          >
            Explore Experience <Plus size={12} className="text-white" />
          </a>

          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#16171D] text-[#94A3B8] transition duration-300 hover:text-white ${theme.borderHover}`}
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
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
    <section id="projects" className="relative overflow-hidden bg-transparent py-20 md:py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 md:mb-16 px-4 text-center">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                <p className="text-[10px] md:text-[12px] uppercase tracking-[0.42em] text-white/90">
                  Curated Projects
                </p>
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              </div>

              <h2 className="text-[32px] md:text-[64px] font-bold tracking-[-0.04em] leading-none text-white">
                SELECTED{" "}
                <span className="bg-gradient-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                  WORK
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[11px] md:text-[14px] uppercase tracking-[0.22em] leading-relaxed text-white/70">
                A refined collection of development, design, and editing projects crafted with detail and purpose
              </p>
            </div>
          </Reveal>
        </header>

        {/* SLIDER ROW CATEGORIES */}
        <ProjectSection title="WEB / APP Development" items={projects.web || []} theme={PROJECT_THEMES.web} />
        <ProjectSection title="UI / UX Design" items={projects.uiux || []} theme={PROJECT_THEMES.uiux} />
        <ProjectSection title="Motion & Editing" items={projects.editing || []} theme={PROJECT_THEMES.editing} />
      </div>
    </section>
  );
}

export default Projects;