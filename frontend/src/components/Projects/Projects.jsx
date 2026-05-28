import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";
import Reveal from "../Reveal";

const PROJECT_THEMES = {
  web: {
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.18)", 
    // Pure structural dark shadows + a soft, rounded bottom-cast radial light drop
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

  // Clone item list to create an infinite, seamless loop standard
  const extendedItems = items.length > 1 ? [...items, ...items] : items;

  useEffect(() => {
    if (!scrollRef.current || items.length <= 1 || isHovered) return;

    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const firstChild = container.firstElementChild;
      const scrollAmount = firstChild ? firstChild.clientWidth + 24 : container.clientWidth;
      
      // Halfway marks the total span boundary of original items
      const originalWidthBoundary = scrollAmount * items.length;

      // When reaching or passing original items window context, reset position seamlessly to start
      if (container.scrollLeft >= originalWidthBoundary - 10) {
        container.scrollTo({
          left: container.scrollLeft - originalWidthBoundary + scrollAmount,
          behavior: "auto", // Instant context shift with zero visual lag
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, [items.length, isHovered]);

  const slide = (dir) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstChild = container.firstElementChild;
    const scrollAmount = firstChild ? firstChild.clientWidth + 24 : container.clientWidth;
    const originalWidthBoundary = scrollAmount * items.length;

    if (dir === "right") {
      if (container.scrollLeft >= originalWidthBoundary - 10) {
        // Adjust scroll position layout silently before moving forward
        container.scrollTo({
          left: container.scrollLeft - originalWidthBoundary,
          behavior: "auto",
        });
        setTimeout(() => {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }, 10);
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft <= 10) {
        container.scrollTo({
          left: originalWidthBoundary,
          behavior: "auto",
        });
        setTimeout(() => {
          container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }, 10);
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-row items-stretch gap-6 overflow-x-auto flex-nowrap snap-x snap-mandatory pb-6 md:pb-12 scroll-smooth px-2 md:px-0"
          style={{ 
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch" 
          }}
        >
          {extendedItems.map((item, index) => {
            // Manage state of local element hovering for custom style assignment object
            const [localHover, setLocalHover] = useState(false);

            return (
              <div key={`${item._id || index}-${index}`} className="w-full shrink-0 snap-center snap-always">
                <div
                  onMouseEnter={() => setLocalHover(true)}
                  onMouseLeave={() => setLocalHover(false)}
                  style={localHover ? theme.shadowHover : theme.shadow}
                  className={`group relative w-full overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/[0.08] bg-[#0B0D14]/85 backdrop-blur-2xl p-5 md:p-7 ${theme.borderHover} transition-all duration-500 flex flex-col md:flex-row gap-6 md:gap-8 items-center`}
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
              </div>
            );
          })}
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

  return (
    <section id="projects" className="relative overflow-hidden bg-transparent py-12 md:py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 md:mb-24 px-4 text-center">
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
        <ProjectSection title="Development" items={projects.web || []} theme={PROJECT_THEMES.web} />
        <ProjectSection title="UI / UX Design" items={projects.uiux || []} theme={PROJECT_THEMES.uiux} />
        <ProjectSection title="Motion & Editing" items={projects.editing || []} theme={PROJECT_THEMES.editing} />
      </div>
    </section>
  );
}

export default Projects;