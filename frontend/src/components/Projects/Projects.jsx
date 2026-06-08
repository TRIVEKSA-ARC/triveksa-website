import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50; 
    if (info.offset.x < -swipeThreshold) handleNext();
    else if (info.offset.x > swipeThreshold) handlePrev();
  };

  return (
    <div className="mb-20 md:mb-32 w-full relative overflow-visible px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="mx-auto mb-10 md:mb-14 max-w-7xl px-2">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4">
          <span className={`h-px w-16 bg-gradient-to-r ${theme.color}`} />
          <h3 className={`text-[11px] md:text-[13px] font-bold uppercase tracking-[0.45em] bg-gradient-to-r ${theme.color} bg-clip-text text-transparent`}>{title}</h3>
        </motion.div>
      </div>

      <div className="relative w-full h-[660px] sm:h-[600px] md:h-[580px] lg:h-[540px] flex flex-col items-center justify-center overflow-visible select-none mx-auto max-w-[1400px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="absolute w-[280px] h-[280px] md:w-[550px] md:h-[550px] rounded-full blur-[100px] md:blur-[160px] opacity-40 pointer-events-none transition-all duration-1000 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: theme.glow }} />

        <div className="relative w-full h-full flex items-center justify-center touch-pan-y" style={{ perspective: "1800px", transformStyle: "preserve-3d" }}>
          {items.map((item, index) => {
            let offset = index - activeIndex;
            if (items.length > 2) { if (offset < -1) offset += items.length; if (offset > 1) offset -= items.length; }
            else if (items.length === 2) { if (offset < -0.5) offset += 2; if (offset > 0.5) offset -= 2; }
            if (Math.abs(offset) > 1) return null;
            return <ProjectCard key={item._id || index} item={item} theme={theme} offset={offset} isActive={offset === 0} onDragEnd={handleDragEnd} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ item, theme, offset, isActive, onDragEnd }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      style={{ transformStyle: "preserve-3d" }}
      initial={false}
      animate={{
        x: `${offset * 106}%`,
        z: isActive ? -100 : -50,
        rotateY: -offset * 22,
        opacity: isActive ? 1 : 0.35,
        scale: isActive ? 1 : 0.80,
      }}
      transition={{ type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.85 }}
      // FIX: Disable auto-listener and trigger manual drag only on background
      drag={isActive ? "x" : false}
      dragListener={false} 
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
      onPointerDown={(e) => {
        // Only trigger drag if clicking the card body, not buttons/links
        if (isActive && !e.target.closest("a") && !e.target.closest("button")) {
          cardRef.current?.startDrag(e);
        }
      }}
      onDragEnd={onDragEnd}
      className={`absolute w-full md:w-[960px] lg:w-[1120px] shrink-0 rounded-[32px] md:rounded-[40px] border border-white/10 bg-[#0A0B10]/95 backdrop-blur-3xl p-5 md:p-10 ${theme.borderHover} flex flex-col md:flex-row gap-6 md:gap-10 items-center ${isActive ? "pointer-events-auto cursor-grab active:cursor-grabbing" : "pointer-events-none"}`}
      style={{ zIndex: isActive ? 30 : 10, boxShadow: isActive ? theme.shadow.boxShadow : "0 20px 50px rgba(0,0,0,0.7)" }}
    >
      <div className="w-full md:w-1/2 aspect-[16/10] bg-[#12131A] rounded-[24px] border border-white/10 p-2 overflow-hidden relative group">
        <img src={item.img || "/placeholder.png"} alt={item.title} className="h-full w-full object-cover rounded-[16px]" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
        <h4 className="text-[24px] md:text-[36px] font-bold text-white mb-4">{item.title}</h4>
        <p className="text-[14px] text-slate-200 mb-6">{item.desc}</p>
        
        {/* Buttons now clickable because they don't trigger the drag listener */}
        <div className="flex items-center gap-4 mt-auto pointer-events-auto">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-full bg-gradient-to-r ${theme.color} text-[10px] font-black uppercase text-white hover:scale-105 transition`}>
            Explore Experience <Plus size={12} className="inline ml-1" />
          </a>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 bg-[#111218] text-white hover:bg-white hover:text-black">
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;