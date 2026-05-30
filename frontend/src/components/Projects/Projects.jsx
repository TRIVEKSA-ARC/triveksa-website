import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";
import Reveal from "../Reveal";

const PROJECT_THEMES = {
  web: {
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.18)", 
    shadow: {
      boxShadow: "0 6px 18px rgba(0,0,0,0.45), 0 18px 40px rgba(0,0,0,0.38)",
      backgroundImage: "radial-gradient(circle at 50% 120%, rgba(6,182,212,0.12) 0%, rgba(0,0,0,0) 70%)"
    },
    shadowHover: {
      boxShadow: "0 10px 24px rgba(0,0,0,0.55), 0 24px 60px rgba(0,0,0,0.45)",
      backgroundImage: "radial-gradient(circle at 50% 120%, rgba(34,211,238,0.22) 0%, rgba(0,0,0,0) 70%)"
    },
    borderHover: "hover:border-cyan-500/30",
  },
  uiux: {
    color: "from-purple-400 to-pink-500",
    glow: "rgba(192,132,252,0.18)",
    shadow: {
      boxShadow: "0 6px 18px rgba(0,0,0,0.45), 0 18px 40px rgba(0,0,0,0.38)",
      backgroundImage: "radial-gradient(circle at 50% 120%, rgba(168,85,247,0.11) 0%, rgba(0,0,0,0) 70%)"
    },
    shadowHover: {
      boxShadow: "0 10px 24px rgba(0,0,0,0.55), 0 24px 60px rgba(0,0,0,0.45)",
      backgroundImage: "radial-gradient(circle at 50% 120%, rgba(192,132,252,0.20) 0%, rgba(0,0,0,0) 70%)"
    },
    borderHover: "hover:border-purple-500/30",
  },
  editing: {
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251,191,36,0.15)",
    shadow: {
      boxShadow: "0 6px 18px rgba(0,0,0,0.45), 0 18px 40px rgba(0,0,0,0.38)",
      backgroundImage: "radial-gradient(circle at 50% 120%, rgba(245,158,11,0.11) 0%, rgba(0,0,0,0) 70%)"
    },
    shadowHover: {
      boxShadow: "0 10px 24px rgba(0,0,0,0.55), 0 24px 60px rgba(0,0,0,0.45)",
      backgroundImage: "radial-gradient(circle at 50% 120%, rgba(251,191,36,0.20) 0%, rgba(0,0,0,0) 70%)"
    },
    borderHover: "hover:border-amber-500/30",
  },
};

// --- ROW PROJECT CARD COMPONENT ---
const ProjectSection = ({ title, items = [], theme }) => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback layout when there are no items
  if (!items.length) return null;

  // Duplicate elements to ensure smooth continuous scroll tracking bounds
  const extendedItems = items.length > 1 ? [...items, ...items, ...items] : items;

  useEffect(() => {
    if (!scrollRef.current || items.length <= 1 || isHovered) return;

    const container = scrollRef.current;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const firstChild = container.firstElementChild;
      const cardWidth = firstChild ? firstChild.clientWidth : 380;
      const scrollAmount = cardWidth + 32; // card size + gap
      const originalWidthBoundary = scrollAmount * items.length;

      if (container.scrollLeft >= originalWidthBoundary * 2) {
        container.scrollTo({
          left: container.scrollLeft - originalWidthBoundary,
          behavior: "auto",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [items.length, isHovered]);

  const slide = (dir) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstChild = container.firstElementChild;
    const cardWidth = firstChild ? firstChild.clientWidth : 380;
    const scrollAmount = cardWidth + 32; 

    if (dir === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-14 md:mb-24 w-full relative">
      {/* HEADER */}
      <div className="mx-auto mb-8 max-w-7xl px-6 md:px-8">
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
      <div className="relative w-full overflow-visible px-4 md:px-12">
        
        {/* DESKTOP ARROW LEFT */}
        <button
          onClick={() => slide("left")}
          className="hidden md:flex absolute left-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/80 backdrop-blur-xl transition duration-300 hover:bg-neutral-900 hover:text-white hover:scale-105"
        >
          <ChevronLeft size={20} />
        </button>

        {/* CARDS TRACK (Perspective wrapper added for 3D Ring Effect) */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-row items-stretch gap-8 overflow-x-auto flex-nowrap pb-10 scroll-smooth no-scrollbar mask-carousel-edges"
          style={{ 
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            perspective: "1200px" // Creates the dimensional 3D depth field context
          }}
        >
          {extendedItems.map((item, index) => (
            <ProjectCard 
              key={`${item._id || index}-${index}`} 
              item={item} 
              theme={theme} 
              containerRef={scrollRef}
            />
          ))}
        </div>

        {/* DESKTOP ARROW RIGHT */}
        <button
          onClick={() => slide("right")}
          className="hidden md:flex absolute right-4 top-1/2 z-30 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/80 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black hover:scale-105"
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

// --- ISOLATED CARD STATE COMPONENT WITH RING ROTATION ---
const ProjectCard = ({ item, theme, containerRef }) => {
  const cardRef = useRef(null);
  const [localHover, setLocalHover] = useState(false);

  // Hooking up scroll position relative to parent window track matrix
  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // 3D Ring Curves Transformations map outputs based on container alignment
  const rotateY = useTransform(scrollXProgress, [0, 0.5, 1], [30, 0, -30]);
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const z = useTransform(scrollXProgress, [0, 0.5, 1], [-80, 0, -80]);

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        rotateY, 
        scale, 
        z,
        transformStyle: "preserve-3d"
      }}
      className="w-[320px] sm:w-[360px] md:w-[380px] shrink-0 pointer-events-auto"
    >
      <motion.div
        onMouseEnter={() => setLocalHover(true)}
        onMouseLeave={() => setLocalHover(false)}
        whileHover={{ y: -8, scale: 1.01 }}
        style={localHover ? theme.shadowHover : theme.shadow}
        className={`group relative w-full overflow-hidden rounded-[32px] md:rounded-[40px] border border-white/[0.06] bg-[#0E1017]/90 backdrop-blur-3xl transition-all duration-500 flex flex-col`}
      >
        {/* Cleo Orange/Theme Ambient Radial Backglow */}
        <div 
          className="absolute -right-16 -top-16 w-72 h-72 rounded-full blur-[110px] pointer-events-none opacity-0 transition duration-700 group-hover:opacity-60"
          style={{ backgroundColor: theme?.glow }}
        />

        {/* Structural Image Container - Cleo Style Aspect Ratio Layout */}
        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full aspect-[4/5] bg-[#131520] relative flex items-center justify-center overflow-hidden shrink-0"
        >
          <img
            src={item.img?.startsWith("http") ? item.img : "/placeholder.png"}
            alt={item.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          {/* Card Dark Gradient Content Overlay Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-[#0B0D14]/40 to-transparent" />
          
          {/* Content Matrix Container placed over the lower section of the card element */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-3">
              <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.22em] text-amber-400">
                Featured
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[8px] uppercase tracking-[0.15em] text-white/70">
                {item.category || "Project"}
              </span>
            </div>

            <h4 className="text-[22px] md:text-[24px] font-bold tracking-tight text-white leading-tight mb-2 line-clamp-1">
              {item.title}
            </h4>

            <p className="text-[12px] leading-relaxed text-[#94A3B8] font-normal mb-4 line-clamp-2">
              {item.desc}
            </p>

            {/* Micro Meta metrics rows layout blocks */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-white/50 border-t border-white/5 pt-3">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-white/40 mr-1.5">Focus:</span>
                <span className="font-medium text-white/80">{item.goal || "Premium Layout"}</span>
              </div>
            </div>
          </div>
        </a>

        {/* Dynamic Interactive Drawer Actions Bar */}
        <div className="bg-[#0B0D14] p-4 px-6 flex items-center justify-between border-t border-white/[0.04]">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:text-amber-400"
          >
            Explore Project <Plus size={12} />
          </a>

          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#16171D] text-[#94A3B8] transition duration-300 hover:text-white ${theme.borderHover}`}
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </motion.div>
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
        <header className="mb-16 md:mb-24 px-4 text-center">
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

              <p className="mx-auto mt-4 max-w-2xl text-[11px] md:text-[13px] uppercase tracking-[0.22em] leading-relaxed text-white/60">
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