import React, { useEffect } from "react";
import { createPortal } from "react-dom"; 
import { AnimatePresence, motion } from "framer-motion";
import { X, Briefcase, Video, Settings, Maximize2 } from "lucide-react";

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
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 md:p-10 w-screen h-screen"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl max-h-[calc(100vh-3rem)] lg:max-h-[80vh] overflow-y-auto lg:overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/15 bg-[#060709] shadow-[0_0_1px_rgba(255,255,255,0.4),0_30px_70px_rgba(0,0,0,0.95)]"
          >
            {/* Premium Gold Ambient Backlight Flare */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
              style={{
                background: "radial-gradient(circle at 85% 15%, #D4AF37, transparent 55%)",
              }}
            />

            {/* Luxury Minimalist Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 z-30 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/90 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 backdrop-blur-xl"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Content Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10 w-full lg:h-full items-stretch">
              
              {/* Left Column: Framed Cinematic Video Container */}
              <div className="lg:col-span-7 relative aspect-video lg:aspect-auto lg:h-[80vh] min-h-[240px] sm:min-h-[380px] bg-black border-b border-white/10 lg:border-b-0 lg:border-r border-white/10">
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
                    Loading video player...
                  </div>
                )}
              </div>

              {/* Right Column: High-End Spacious Content Container */}
              <div className="lg:col-span-5 flex flex-col justify-start p-6 sm:p-10 md:p-12 lg:p-14 lg:max-h-[80vh] lg:overflow-y-auto scrollbar-none">
                
                {/* Header Information Block */}
                <div className="space-y-4">
                  {/* Luxury Gold Label Accent */}
                  <div>
                    <span className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/5 px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.08)]">
                      Featured Project
                    </span>
                  </div>

                  {/* Clean Crisp White Premium Header - Fixed visual height range to anchor titles */}
                  <div className="min-h-[40px] sm:min-h-[52px] flex items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.2] pr-8 lg:pr-0 line-clamp-2">
                      {project.title}
                    </h2>
                  </div>

                  {/* Description Box with Safe Minimum Dynamic Boundary Height to prevent metadata jumps */}
                  <div className="min-h-[64px] sm:min-h-[80px] lg:min-h-[84px] flex items-start">
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-300/90 font-light line-clamp-3">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Separated Content Segment Block */}
                <div className="border-t border-white/10 pt-6 mt-6 space-y-5">
                  
                  {/* Video Format Layout Row */}
                  <div className="flex items-center justify-between text-xs sm:text-sm gap-4 py-1">
                    <span className="text-slate-400 font-medium flex items-center gap-2.5 shrink-0">
                      <Briefcase size={15} className="text-amber-400" /> Video Format
                    </span>
                    <span className="text-white font-medium text-right max-w-[180px] sm:max-w-[240px] truncate">
                      {project.type || "Commercial / Social Delivery"}
                    </span>
                  </div>

                  {/* Frame Dimensions Layout Row */}
                  <div className="flex items-center justify-between text-xs sm:text-sm gap-4 py-1">
                    <span className="text-slate-400 font-medium flex items-center gap-2.5 shrink-0">
                      <Maximize2 size={15} className="text-amber-400" /> Aspect Ratio
                    </span>
                    <span className="text-white font-medium text-right">
                      {project.aspectRatio || "Dynamic Delivery (16:9 / 9:16)"}
                    </span>
                  </div>

                  {/* Production Tech Chips Row */}
                  <div className="flex items-start justify-between text-xs sm:text-sm gap-4 py-1">
                    <span className="text-slate-400 font-medium flex items-center gap-2.5 mt-1 shrink-0">
                      <Settings size={15} className="text-amber-400" /> Production Tech
                    </span>
                    <div className="flex flex-wrap gap-2 justify-end max-w-[220px] sm:max-w-[280px]">
                      {toolsList.map((tool, index) => (
                        <span key={index} className="rounded border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-slate-200 font-normal whitespace-nowrap shadow-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post-Production Scope Selection Row */}
                  <div className="flex items-start justify-between text-xs sm:text-sm gap-4 py-1">
                    <span className="text-slate-400 font-medium flex items-center gap-2.5 mt-1 shrink-0">
                      <Video size={15} className="text-amber-400" /> Post Scope
                    </span>
                    <div className="flex flex-wrap gap-2 justify-end max-w-[220px] sm:max-w-[300px]">
                      <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 font-normal whitespace-nowrap shadow-sm">Creative Editing</span>
                      <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 font-normal whitespace-nowrap shadow-sm">Color Grading</span>
                      <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 font-normal whitespace-nowrap shadow-sm">Sound Design</span>
                    </div>
                  </div>

                </div>
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