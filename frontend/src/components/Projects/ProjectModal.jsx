import React, { useEffect } from "react";
import { createPortal } from "react-dom"; 
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Briefcase, Video, Settings, Maximize2 } from "lucide-react";

/**
 * Smart parser that converts standard YouTube links or direct embed strings
 * into privacy-enhanced, tracking-safe embed URLs.
 */
function getYoutubeEmbedUrl(url) {
  if (!url) return "";

  if (url.includes("youtube.com/embed/") || url.includes("youtube-nocookie.com/embed/")) {
    return url.replace("youtube.com", "youtube-nocookie.com");
  }

  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regExp);

  return match
    ? `https://www.youtube-nocookie.com/embed/${match[1]}`
    : "";
}

function ProjectModal({ project, onClose }) {
  // Handle closing modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.documentElement.classList.add("modal-open");
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.classList.remove("modal-open");
    };
  }, [project, onClose]);

  // Dynamically resolve the safe video link based on the selected project object
  const videoSrc = project ? getYoutubeEmbedUrl(project.url) : "";

  // Helper to fallback safely if simple data strings are missing
  const tools = project?.tools || "Premiere Pro, After Effects, DaVinci Resolve";
  const toolsList = tools.split(",").map(item => item.trim());

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 w-screen h-screen"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.97,
              y: 20,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1] // Ultra smooth premium ease curve
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl max-h-[calc(100vh-3rem)] lg:max-h-[88vh] overflow-y-auto lg:overflow-hidden rounded-[32px] border border-white/20 bg-[#060709] shadow-[0_0_1px_rgba(255,255,255,0.4),0_30px_70px_rgba(0,0,0,0.95),0_0_80px_rgba(212,175,55,0.04)] scrollbar-none"
          >
            {/* Premium Gold Ambient Backlight Flare */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle at 85% 15%, #D4AF37, transparent 50%)",
              }}
            />

            {/* Luxury Minimalist Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 sm:right-8 sm:top-8 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/90 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-2xl backdrop-blur-xl"
            >
              <X size={20} strokeWidth={2} />
            </button>

            {/* Balanced Side-by-Side Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 w-full lg:h-full items-stretch">
              
              {/* Left Column: Framed Cinematic Video Container */}
              <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[400px] lg:min-h-[550px] bg-black border-b border-white/10 lg:border-b-0 lg:border-r border-white/10">
                {videoSrc ? (
                  <iframe
                    src={videoSrc}
                    title={project.title || "Project Video Player"}
                    className="absolute inset-0 h-full w-full border-0 block"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-wider uppercase">
                    Loading content stream...
                  </div>
                )}
              </div>

              {/* Right Column: High-End Spacious Content Container */}
              <div className="flex flex-col justify-between p-8 sm:p-12 md:p-16 bg-transparent lg:max-h-[88vh] lg:overflow-y-auto scrollbar-none">
                <div>
                  {/* Luxury Gold Label Accent */}
                  <span className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/5 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.3em] text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                    Featured Project
                  </span>

                  {/* Clean Crisp White Premium Header */}
                  <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] pr-10 lg:pr-4">
                    {project.title}
                  </h2>

                  <p className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base leading-relaxed text-slate-300/90 font-normal max-w-xl">
                    {project.desc}
                  </p>

                  {/* Highly Spaced & Organized Metadata Segment */}
                  <div className="mt-10 sm:mt-12 border-t border-b border-white/10 py-6 sm:py-8 space-y-6">
                    
                    {/* Video Format Layout Row */}
                    <div className="flex items-center justify-between text-xs sm:text-sm gap-6">
                      <span className="text-slate-400 font-medium flex items-center gap-3 shrink-0">
                        <Briefcase size={16} className="text-amber-400" /> Video Format
                      </span>
                      <span className="text-white font-semibold text-right max-w-[200px] sm:max-w-[260px] truncate tracking-wide">
                        {project.type || "Commercial / Social Delivery"}
                      </span>
                    </div>

                    {/* Frame Dimensions Layout Row */}
                    <div className="flex items-center justify-between text-xs sm:text-sm gap-6">
                      <span className="text-slate-400 font-medium flex items-center gap-3 shrink-0">
                        <Maximize2 size={16} className="text-amber-400" /> Layout / Aspect Ratio
                      </span>
                      <span className="text-white font-semibold text-right tracking-wide">
                        {project.aspectRatio || "Dynamic Delivery (16:9 / 9:16)"}
                      </span>
                    </div>

                    {/* Production Tech Chips Row */}
                    <div className="flex items-start justify-between text-xs sm:text-sm gap-6">
                      <span className="text-slate-400 font-medium flex items-center gap-3 mt-1 shrink-0">
                        <Settings size={16} className="text-amber-400" /> Production Tech
                      </span>
                      <div className="flex flex-wrap gap-2 justify-end max-w-[200px] sm:max-w-[260px]">
                        {toolsList.map((tool, index) => (
                          <span key={index} className="rounded-md border border-white/20 bg-white/5 px-3 py-1 text-xs text-white font-medium transition-all duration-300 hover:border-amber-400/50 hover:text-amber-400">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Post-Production Scope Selection Row */}
                    <div className="flex items-start justify-between text-xs sm:text-sm gap-6">
                      <span className="text-slate-400 font-medium flex items-center gap-3 mt-1 shrink-0">
                        <Video size={16} className="text-amber-400" /> Post-Production Scope
                      </span>
                      <div className="flex flex-wrap gap-2 justify-end max-w-[220px] sm:max-w-[280px]">
                        <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 font-medium">Creative Editing</span>
                        <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 font-medium">Color Grading</span>
                        <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 font-medium">Sound Design</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ultra-Premium White Action Trigger */}
                {project.url && (
                  <div className="mt-10 sm:mt-12 lg:mt-16">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl border border-white bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300 px-8 py-4 text-xs sm:text-sm font-bold active:scale-[0.98] shadow-[0_4px_30px_rgba(255,255,255,0.15)] group tracking-wide uppercase"
                    >
                      Play Video Content
                      <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default ProjectModal;