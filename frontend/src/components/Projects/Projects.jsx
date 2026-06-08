import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";
import Reveal from "../Reveal";

const PROJECT_THEMES = {
  web: {
    color: "from-cyan-400 via-indigo-400 to-blue-500",
    glow: "rgba(34,211,238,0.35)", 
    shadow: {
      boxShadow: "0 40px 80px -15px rgba(6,182,212,0.45), 0 0 50px -10px rgba(6,182,212,0.2)",
    },
    borderHover: "hover:border-cyan-400/60",
  },
  uiux: {
    color: "from-fuchsia-400 via-purple-400 to-pink-500",
    glow: "rgba(192,132,252,0.35)",
    shadow: {
      boxShadow: "0 40px 80px -15px rgba(168,85,247,0.45), 0 0 50px -10px rgba(168,85,247,0.2)",
    },
    borderHover: "hover:border-purple-400/60",
  },
  editing: {
    color: "from-amber-400 via-orange-400 to-rose-500",
    glow: "rgba(251,191,36,0.32)",
    shadow: {
      boxShadow: "0 40px 80px -15px rgba(245,158,11,0.45), 0 0 50px -10px rgba(245,158,11,0.2)",
    },
    borderHover: "hover:border-amber-400/60",
  },
};

const ProjectSection = ({ title, items = [], theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef(null);

  if (!items || items.length === 0) return null;

  useEffect(() => {
    if (!isHovered && items.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }, 5500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isHovered, items.length]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="mb-16 md:mb-32 w-full relative px-2 sm:px-6">
      <div className="mx-auto mb-8 md:mb-14 max-w-7xl px-2">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4">
          <span className={`h-px w-10 md:w-16 bg-gradient-to-r ${theme.color}`} />
          <motion.h3 className={`text-[10px] md:text-[13px] font-bold uppercase tracking-[0.3em] bg-gradient-to-r ${theme.color} bg-clip-text text-transparent`}>
            {title}
          </motion.h3>
        </motion.div>
      </div>

      <div className="relative w-full h-[520px] sm:h-[580px] md:h-[540px] flex items-center justify-center overflow-visible select-none" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="absolute w-[200px] h-[200px] md:w-[550px] md:h-[550px] rounded-full blur-[80px] md:blur-[160px] opacity-30 pointer-events-none" style={{ backgroundColor: theme.glow }} />

        <div className="relative w-full h-full flex items-center justify-center">
          {items.map((item, index) => {
            let offset = index - activeIndex;
            if (items.length > 2) {
              if (offset < -1) offset += items.length;
              if (offset > 1) offset -= items.length;
            } else if (items.length === 2) {
              if (offset < -0.5) offset += 2;
              if (offset > 0.5) offset -= 2;
            }
            if (Math.abs(offset) > 1) return null;
            return <ProjectCard key={item._id || index} item={item} theme={theme} offset={offset} isActive={offset === 0} onSwipeLeft={handleNext} onSwipeRight={handlePrev} />;
          })}
        </div>

        {items.length > 1 && (
          <div className="absolute inset-x-0 bottom-[-50px] md:bottom-auto flex justify-between px-4 z-[1000]">
            <button onClick={handlePrev} className="h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full border border-white/10 bg-neutral-950/80 text-white backdrop-blur-xl shadow-2xl hover:bg-white hover:text-black transition-all"><ChevronLeft size={20} /></button>
            <button onClick={handleNext} className="h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full border border-white/10 bg-neutral-950/80 text-white backdrop-blur-xl shadow-2xl hover:bg-white hover:text-black transition-all"><ChevronRight size={20} /></button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ item, theme, offset, isActive, onSwipeLeft, onSwipeRight }) => {
  return (
    <motion.div
      drag={isActive ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(e, { offset: dragOffset }) => {
        if (dragOffset.x > 50) onSwipeRight();
        else if (dragOffset.x < -50) onSwipeLeft();
      }}
      style={{
        zIndex: isActive ? 100 : 1,
        x: offset * (typeof window !== 'undefined' ? window.innerWidth * 0.9 : 800),
        touchAction: "pan-y",
      }}
      className={`absolute w-[92vw] md:w-[960px] lg:w-[1120px] shrink-0 rounded-[24px] md:rounded-[40px] border border-white/10 bg-[#0A0B10]/95 backdrop-blur-3xl p-5 md:p-10 ${theme.borderHover} transition-all duration-500 flex flex-col md:flex-row gap-6 items-center overflow-hidden ${isActive ? "opacity-100" : "opacity-40 pointer-events-none"}`}
    >
      <div className="absolute inset-[6px] rounded-[20px] md:rounded-[32px] border border-white/[0.05] pointer-events-none" />
      
      <div className="w-full md:w-[48%] aspect-[16/10] bg-[#12131A] rounded-[16px] md:rounded-[32px] border border-white/10 p-1 flex items-center justify-center overflow-hidden shrink-0 relative">
        <img src={item.img && item.img.startsWith("http") ? item.img : "/placeholder.png"} alt={item.title} className="h-full w-full object-cover rounded-[14px] md:rounded-[24px]" />
      </div>

      <div className="w-full md:w-[52%] flex flex-col h-full py-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-0.5 rounded-full border border-white/10 text-[8px] uppercase tracking-widest text-white/70`}>{item.category || "Web"}</span>
        </div>
        <h4 className="text-[20px] md:text-[36px] font-bold text-white leading-tight mb-2 line-clamp-1">{item.title}</h4>
        <p className="text-[12px] md:text-[15px] text-white/60 mb-6 line-clamp-3">{item.desc}</p>
        
        <div className="mt-auto flex items-center gap-4">
          <a href={item.url || "#"} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${theme.color} px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.1em] text-white`}>Explore <Plus size={12} /></a>
          <a href={item.url || "#"} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full border border-white/10 bg-[#111218] text-white hover:bg-white hover:text-black transition-all`}><ExternalLink size={14} /></a>
        </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  const { projects, loading } = useProjects();
  if (loading) return <section className="py-20 text-center text-white/40 uppercase tracking-widest text-xs">Loading...</section>;
  return (
    <section id="projects" className="relative overflow-hidden bg-transparent py-16 md:py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 px-4 text-center">
          <Reveal>
            <h2 className="text-[32px] md:text-[72px] font-bold tracking-[-0.02em]">SELECTED <span className="text-amber-400">WORK</span></h2>
          </Reveal>
        </header>
        <ProjectSection title="WEB / APP" items={projects.web || []} theme={PROJECT_THEMES.web} />
        <ProjectSection title="UI / UX" items={projects.uiux || []} theme={PROJECT_THEMES.uiux} />
        <ProjectSection title="MOTION" items={projects.editing || []} theme={PROJECT_THEMES.editing} />
      </div>
    </section>
  );
}

export default Projects;