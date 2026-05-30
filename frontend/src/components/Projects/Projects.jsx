import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";
import Reveal from "../Reveal";

const PROJECT_THEMES = {
  web: {
    color: "from-cyan-400 via-indigo-400 to-blue-500",
    glow: "rgba(34,211,238,0.28)", 
    shadow: {
      boxShadow: "0 30px 60px -15px rgba(6,182,212,0.3)",
    },
    borderHover: "hover:border-cyan-400/50",
  },
  uiux: {
    color: "from-fuchsia-400 via-purple-400 to-pink-500",
    glow: "rgba(192,132,252,0.28)",
    shadow: {
      boxShadow: "0 30px 60px -15px rgba(168,85,247,0.3)",
    },
    borderHover: "hover:border-purple-400/50",
  },
  editing: {
    color: "from-amber-400 via-orange-400 to-rose-500",
    glow: "rgba(251,191,36,0.25)",
    shadow: {
      boxShadow: "0 30px 60px -15px rgba(245,158,11,0.3)",
    },
    borderHover: "hover:border-amber-400/50",
  },
};

// --- RING CAROUSEL ROW COMPONENT ---
const ProjectSection = ({ title, items = [], theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef(null);

  // Fallback / safety check
  if (!items || items.length === 0) return null;

  // Infinite Seamless Loop Auto-Play Management
  useEffect(() => {
    if (!isHovered && items.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }, 4500); // Transitions to next card smoothly every 4.5 seconds
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isHovered, items.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="mb-24 md:mb-36 w-full relative overflow-visible">
      {/* HEADER */}
      <div className="mx-auto mb-12 max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <span className={`h-px w-16 bg-gradient-to-r ${theme.color}`} />
          <motion.h3
            className={`text-[11px] md:text-[13px] font-bold uppercase tracking-[0.45em] bg-gradient-to-r ${theme.color} bg-clip-text text-transparent`}
          >
            {title}
          </motion.h3>
        </motion.div>
      </div>

      {/* 3D CAROUSEL CANVAS CHAMBER */}
      <div 
        className="relative w-full h-[620px] md:h-[560px] flex items-center justify-center overflow-visible select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* Cinematic Backdrop Radial Glow Mesh */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[160px] opacity-35 pointer-events-none transition-all duration-1000 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: theme.glow }}
        />

        {/* Perspective Deck */}
        <div 
          className="relative w-full max-w-7xl h-full flex items-center justify-center"
          style={{ perspective: "1600px", transformStyle: "preserve-3d" }}
        >
          {items.map((item, index) => {
            let offset = index - activeIndex;
            
            // True Infinite circular Ring Math Calculation Logic
            if (offset < -1) offset += items.length;
            if (offset > 1) offset -= items.length;

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

        {/* PREMIUM CONTROLS */}
        {items.length > 1 && (
          <>
            {/* Left Control Trigger */}
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1, x: -6 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-4 md:left-8 z-40 h-16 w-16 flex items-center justify-center rounded-full border border-white/[0.08] bg-neutral-950/60 text-white backdrop-blur-2xl transition-colors duration-300 hover:bg-white hover:text-black shadow-2xl"
            >
              <ChevronLeft size={26} />
            </motion.button>

            {/* Right Control Trigger */}
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1, x: 6 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-4 md:right-8 z-40 h-16 w-16 flex items-center justify-center rounded-full border border-white/[0.08] bg-neutral-950/60 text-white backdrop-blur-2xl transition-colors duration-300 hover:bg-white hover:text-black shadow-2xl"
            >
              <ChevronRight size={26} />
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
};

// --- PERSPECTIVE 3D INNER-RING CARD COMPONENT ---
const ProjectCard = ({ item, theme, offset, isActive }) => {
  // Configured variables for ultra-premium sizing matrix layout
  const rotateY = -offset * 24; 
  const translateX = offset * 102; // Pushes adjacent panels comfortably outward to prevent overlap
  const translateZ = isActive ? -140 : -40; // Immersive concave structural depth alignment
  
  const opacity = isActive ? 1 : 0.40;
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
        scale: isActive ? 1 : 0.82,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 24,
      }}
      className={`absolute w-[92%] sm:w-[500px] md:w-[1000px] shrink-0 rounded-[40px] md:rounded-[48px] border border-white/[0.06] bg-[#0A0B10]/95 backdrop-blur-3xl p-6 md:p-10 ${theme.borderHover} transition-colors duration-500 flex flex-col md:flex-row gap-8 md:gap-10 items-center ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
      style={{
        zIndex: zIndex,
        boxShadow: isActive ? theme.shadow.boxShadow : "0 15px 45px rgba(0,0,0,0.6)",
      }}
    >
      {/* Left Side: Premium Image Container */}
      <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-[16/10] bg-[#12131A] rounded-[28px] md:rounded-[36px] border border-white/[0.05] p-2.5 flex items-center justify-center overflow-hidden shrink-0 group relative shadow-inner">
        <img
          src={item.img && item.img.startsWith("http") ? item.img : "/placeholder.png"}
          alt={item.title}
          className="h-full w-full object-cover rounded-[20px] md:rounded-[28px] transition duration-700 group-hover:scale-[1.05]"
        />
        {/* Dynamic Gradient Shifter overlay to enrich image surfaces */}
        <div className={`absolute inset-0 bg-gradient-to-tr ${theme.color} opacity-0 group-hover:opacity-15 transition duration-500 pointer-events-none`} />
      </div>

      {/* Right Side: Information Layout Matrix */}
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-2">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className={`rounded-full bg-gradient-to-r ${theme.color} p-[1px]`}>
              <span className="block rounded-full bg-[#0A0B10] px-4 py-1 text-[9px] font-black uppercase tracking-[0.25em] text-white">
                Featured Experience
              </span>
            </span>
            <span className="rounded-full border border-white/[0.08] bg-white/5 px-4 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
              {item.category || "Web"}
            </span>
          </div>

          <h4 className="text-[26px] md:text-[38px] font-bold tracking-tight text-white leading-tight mb-4 line-clamp-1">
            {item.title}
          </h4>

          <p className="text-[14px] md:text-[15px] leading-relaxed text-[#94A3B8] font-normal mb-6 line-clamp-3">
            {item.desc}
          </p>

          {/* Premium Meta Information Details Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-b border-white/[0.06] py-5 mb-6 text-[12px]">
            <div>
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/40 block mb-1">Industry</span>
              <span className="font-semibold text-[#E2E8F0] truncate block">{item.industry || "Digital Solutions"}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-[0.15em] text-white/40 block mb-1">Core Focus</span>
              <span className="font-semibold text-[#E2E8F0] truncate block">{item.goal || "Premium Experience"}</span>
            </div>
            <div>
              <span className={`text-[9px] uppercase tracking-[0.15em] bg-gradient-to-r ${theme.color} bg-clip-text text-transparent font-bold block mb-1`}>Impact</span>
              <span className="font-bold text-white truncate block">{item.result || "Conversion Optimized"}</span>
            </div>
          </div>
        </div>

        {/* Footer Interaction Elements */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r ${theme.color} px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-97`}
          >
            Explore Experience <Plus size={14} className="text-white" />
          </a>

          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-[#111218] text-[#94A3B8] transition duration-300 hover:text-white hover:bg-white/5 ${theme.borderHover}`}
          >
            <ExternalLink size={18} />
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
      <section className="py-32 text-center text-white/40 tracking-widest text-xs uppercase">
        Loading Masterpieces...
      </section>
    );
  }

  return (
    <section id="projects" className="relative overflow-hidden bg-transparent py-24 md:py-36 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 md:mb-20 px-4 text-center">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                <p className="text-[10px] md:text-[13px] uppercase tracking-[0.45em] text-white/80">
                  Curated Projects
                </p>
                <span className="h-px w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              </div>

              <h2 className="text-[36px] md:text-[72px] font-bold tracking-[-0.04em] leading-none text-white">
                SELECTED{" "}
                <span className="bg-gradient-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                  WORK
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[11px] md:text-[14px] uppercase tracking-[0.25em] leading-relaxed text-white/60">
                A refined collection of development, design, and editing projects crafted with detail and purpose
              </p>
            </div>
          </Reveal>
        </header>

        {/* CAROUSEL INSTANCES CATEGORIZED ARRAY */}
        <ProjectSection title="WEB / APP Development" items={projects.web || []} theme={PROJECT_THEMES.web} />
        <ProjectSection title="UI / UX Design" items={projects.uiux || []} theme={PROJECT_THEMES.uiux} />
        <ProjectSection title="Motion & Editing" items={projects.editing || []} theme={PROJECT_THEMES.editing} />
      </div>
    </section>
  );
}

export default Projects;