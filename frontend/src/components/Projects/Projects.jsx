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


// --- RING CAROUSEL ROW COMPONENT ---
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


  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };


  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };


  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50; 
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };


  return (
    <div className="mb-20 md:mb-32 w-full relative overflow-visible px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="mx-auto mb-10 md:mb-14 max-w-7xl px-2">
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


      <div 
        className="relative w-full h-[660px] sm:h-[600px] md:h-[580px] lg:h-[540px] flex flex-col items-center justify-center overflow-visible mx-auto max-w-[1400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="absolute w-[280px] h-[280px] md:w-[550px] md:h-[550px] rounded-full blur-[100px] md:blur-[160px] opacity-40 pointer-events-none transition-all duration-1000 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: theme.glow }}
        />


        <div 
          className="relative w-full h-full flex items-center justify-center touch-pan-y"
          style={{ perspective: "1800px", transformStyle: "preserve-3d" }}
        >
          {items.map((item, index) => {
            let offset = index - activeIndex;
            if (items.length > 2) {
              if (offset < -1) offset += items.length;
              if (offset > 1) offset -= items.length;
            } else if (items.length === 2) {
              if (offset < -0.5) offset += 2;
              if (offset > 0.5) offset -= 2;
            }


            const isVisible = Math.abs(offset) <= 1;
            if (!isVisible) return null;


            return (
              <ProjectCard
                key={item._id || index}
                item={item}
                theme={theme}
                offset={offset}
                isActive={offset === 0}
                onDragEnd={handleDragEnd}
                setActiveIndex={() => setActiveIndex(index)}
              />
            );
          })}
        </div>


        {items.length > 1 && (
          <>
            <motion.button
              onClick={handlePrev}
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                x: isHovered ? -8 : -30,
                scale: isHovered ? 1 : 0.9,
                pointerEvents: isHovered ? "auto" : "none"
              }}
              whileHover={{ scale: 1.08, x: -14 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="hidden md:flex absolute md:left-2 lg:-left-6 z-50 h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-neutral-950/80 text-white/90 backdrop-blur-2xl transition-colors duration-300 hover:bg-white hover:text-black hover:border-white shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            >
              <ChevronLeft size={26} />
            </motion.button>


            <motion.button
              onClick={handleNext}
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                x: isHovered ? 8 : 30,
                scale: isHovered ? 1 : 0.9,
                pointerEvents: isHovered ? "auto" : "none"
              }}
              whileHover={{ scale: 1.08, x: 14 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="hidden md:flex absolute md:right-2 lg:-right-6 z-50 h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-neutral-950/80 text-white/90 backdrop-blur-2xl transition-colors duration-300 hover:bg-white hover:text-black hover:border-white shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            >
              <ChevronRight size={26} />
            </motion.button>


            <div className="flex md:hidden items-center justify-center gap-6 mt-4 z-50 relative">
              <button
                onClick={handlePrev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0B0D14]/95 text-white active:scale-95 transition backdrop-blur-md shadow-lg"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-bold">
                {activeIndex + 1} / {items.length}
              </span>
              <button
                onClick={handleNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0B0D14]/95 text-white active:scale-95 transition backdrop-blur-md shadow-lg"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


const ProjectCard = ({ item, theme, offset, isActive, onDragEnd, setActiveIndex }) => {
  const rotateY = -offset * 22; 
  const translateX = offset * 106; 
  const translateZ = isActive ? -100 : -50; 
  
  const opacity = isActive ? 1 : 0.35;
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
        scale: isActive ? 1 : 0.80,
      }}
      transition={{
        type: "tween",
        ease: [0.25, 1, 0.5, 1],
        duration: 0.85, 
      }}
      drag={isActive ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
      onDragEnd={onDragEnd}
      onClick={setActiveIndex}
      className={`absolute w-full md:w-[960px] lg:w-[1120px] shrink-0 rounded-[32px] md:rounded-[40px] border border-white/10 bg-[#0A0B10]/95 backdrop-blur-3xl p-5 sm:p-6 md:p-8 lg:p-10 ${theme.borderHover} transition-colors duration-500 flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-center ${isActive ? "pointer-events-auto cursor-grab active:cursor-grabbing" : "pointer-events-auto cursor-pointer"} select-auto`}
      style={{
        zIndex: zIndex,
        boxShadow: isActive ? theme.shadow.boxShadow : "0 20px 50px rgba(0,0,0,0.7)",
      }}
    >
      <div className="w-full md:w-[48%] lg:w-1/2 aspect-[16/10] bg-[#12131A] rounded-[22px] md:rounded-[32px] border border-white/10 p-2 flex items-center justify-center overflow-hidden shrink-0 group relative shadow-2xl">
        <img
          src={item.img && item.img.startsWith("http") ? item.img : "/placeholder.png"}
          alt={item.title}
          className="h-full w-full object-cover rounded-[16px] md:rounded-[24px] transition duration-700 group-hover:scale-[1.04] pointer-events-auto"
        />
        <div className={`absolute inset-0 bg-gradient-to-tr ${theme.color} opacity-0 group-hover:opacity-20 transition duration-500 pointer-events-none`} />
      </div>


      <div className="w-full md:w-[52%] lg:w-1/2 flex flex-col justify-between h-full py-1 pointer-events-auto">
        <div>
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <span className={`rounded-full bg-gradient-to-r ${theme.color} p-[1px]`}>
              <span className="block rounded-full bg-[#0A0B10] px-3 py-0.5 text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] text-white">
                Featured Experience
              </span>
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.18em] text-white">
              {item.category || "Web"}
            </span>
          </div>


          <h4 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold tracking-tight text-white leading-tight mb-2 md:mb-3 lg:mb-4 line-clamp-1">
            {item.title}
          </h4>


          <p className="text-[12px] md:text-[14px] lg:text-[15px] leading-relaxed text-slate-200 font-normal mb-4 md:mb-5 lg:mb-6 line-clamp-2 md:line-clamp-3">
            {item.desc}
          </p>


          <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-b border-white/10 py-3 md:py-4 lg:py-5 mb-4 md:mb-5 lg:mb-6 text-[10px] md:text-[11px] lg:text-[12px]">
            <div>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-white/50 block mb-1">Industry</span>
              <span className="font-bold text-white truncate block">{item.industry || "Digital Solutions"}</span>
            </div>
            <div>
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-white/50 block mb-1">Core Focus</span>
              <span className="font-bold text-white truncate block">{item.goal || "Premium Experience"}</span>
            </div>
            <div>
              <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.15em] bg-gradient-to-r ${theme.color} bg-clip-text text-transparent font-black block mb-1`}>Impact</span>
              <span className="font-black text-white truncate block">{item.result || "Conversion Optimized"}</span>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-between mt-auto pt-1">
          <a
            href={item.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              window.open(item.url || "#", "_blank", "noopener,noreferrer");
            }}
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${theme.color} px-4 py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-97 pointer-events-auto`}
          >
            Explore Experience <Plus size={12} className="text-white" />
          </a>


          <a 
            href={item.url || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              window.open(item.url || "#", "_blank", "noopener,noreferrer");
            }}
            className={`flex h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 items-center justify-center rounded-full border border-white/20 bg-[#111218] text-white transition duration-300 hover:bg-white hover:text-black ${theme.borderHover} pointer-events-auto`}
          >
            <ExternalLink size={14} />
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
    <section id="projects" className="relative overflow-hidden bg-transparent py-20 md:py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 md:mb-16 lg:mb-20 px-4 text-center">
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


        <ProjectSection title="WEB / APP Development" items={projects.web || []} theme={PROJECT_THEMES.web} />
        <ProjectSection title="UI / UX Design" items={projects.uiux || []} theme={PROJECT_THEMES.uiux} />
        <ProjectSection title="Motion & Editing" items={projects.editing || []} theme={PROJECT_THEMES.editing} />
      </div>
    </section>
  );
}


export default Projects;