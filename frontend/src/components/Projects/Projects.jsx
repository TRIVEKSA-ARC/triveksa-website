import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";
import Reveal from "../Reveal";

const PROJECT_THEMES = {
  web: {
    color: "from-cyan-400 via-indigo-400 to-blue-500",
    glow: "rgba(34,211,238,0.35)",
    shadow: "0 40px 80px -15px rgba(6,182,212,0.45), 0 0 50px -10px rgba(6,182,212,0.2)",
    borderHover: "hover:border-cyan-400/60",
  },
  uiux: {
    color: "from-fuchsia-400 via-purple-400 to-pink-500",
    glow: "rgba(192,132,252,0.35)",
    shadow: "0 40px 80px -15px rgba(168,85,247,0.45), 0 0 50px -10px rgba(168,85,247,0.2)",
    borderHover: "hover:border-purple-400/60",
  },
  editing: {
    color: "from-amber-400 via-orange-400 to-rose-500",
    glow: "rgba(251,191,36,0.32)",
    shadow: "0 40px 80px -15px rgba(245,158,11,0.45), 0 0 50px -10px rgba(245,158,11,0.2)",
    borderHover: "hover:border-amber-400/60",
  },
};

const ProjectSection = ({ title, items = [], theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="mb-20 md:mb-32 w-full relative px-4 sm:px-6 md:px-12 lg:px-16" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="mx-auto mb-10 max-w-7xl px-2">
        <div className="flex items-center gap-4">
          <span className={`h-px w-16 bg-gradient-to-r ${theme.color}`} />
          <h3 className={`text-[11px] md:text-[13px] font-bold uppercase tracking-[0.45em] bg-gradient-to-r ${theme.color} bg-clip-text text-transparent`}>{title}</h3>
        </div>
      </div>

      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[160px] opacity-40" style={{ backgroundColor: theme.glow }} />
        
        <div className="relative w-full max-w-[1120px] h-full flex items-center justify-center">
          {items.map((item, index) => (
            <ProjectCard 
              key={item._id || index} 
              item={item} 
              theme={theme} 
              isActive={index === activeIndex} 
            />
          ))}
        </div>

        {/* Controls */}
        <button onClick={handlePrev} className="absolute left-0 z-50 p-4 rounded-full bg-neutral-900/80 border border-white/10 hover:bg-white hover:text-black transition-all">
          <ChevronLeft />
        </button>
        <button onClick={handleNext} className="absolute right-0 z-50 p-4 rounded-full bg-neutral-900/80 border border-white/10 hover:bg-white hover:text-black transition-all">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

const ProjectCard = ({ item, theme, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 100 }}
      animate={{ 
        opacity: isActive ? 1 : 0.4, 
        scale: isActive ? 1 : 0.8, 
        x: isActive ? 0 : 200,
        zIndex: isActive ? 20 : 10 
      }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className={`absolute w-full max-w-[1120px] rounded-[40px] border border-white/10 bg-[#0A0B10]/95 backdrop-blur-3xl p-10 flex gap-10 ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
      style={{ boxShadow: isActive ? theme.shadow : "none" }}
    >
      <div className="w-1/2 aspect-video bg-[#12131A] rounded-[32px] border border-white/10 p-2 overflow-hidden">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-[24px]" />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <h4 className="text-3xl font-bold text-white mb-4">{item.title}</h4>
        <p className="text-slate-200 mb-6">{item.desc}</p>
        <a href={item.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${theme.color} px-6 py-3 font-black uppercase text-white w-max`}>
          Explore <Plus size={16} />
        </a>
      </div>
    </motion.div>
  );
};

function Projects() {
  const { projects, loading } = useProjects();
  if (loading) return <section className="py-32 text-center">Loading...</section>;
  return (
    <section className="py-20 text-white">
      <header className="text-center mb-20"><h2 className="text-6xl font-bold">SELECTED WORK</h2></header>
      {Object.entries(projects).map(([key, list]) => (
        <ProjectSection key={key} title={key} items={list} theme={PROJECT_THEMES[key]} />
      ))}
    </section>
  );
}

export default Projects;