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
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 w-screen h-screen"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1]
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl max-h-[calc(100vh-2rem)] lg:max-h-[85vh] overflow-y-auto lg:overflow-hidden rounded-2xl sm:rounded-[32px] md:rounded-[40px] border-2 border-white/40 bg-[#07080c]/95 backdrop-blur-3xl shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(255,255,255,0.05)] scrollbar-none"
          >
            {/* Ambient Backlight Glow Layer */}
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle at 75% 25%, rgba(255,255,255,0.5), transparent 50%)",
              }}
            />

            {/* Premium Solid White Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-white bg-white text-black hover:bg-transparent hover:text-white hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Side-by-Side Responsive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 w-full lg:h-full items-stretch">
              
              {/* Left Side: Video Aspect Container */}
              <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[220px] sm:min-h-[360px] lg:min-h-[500px] bg-black border-b border-white/10 lg:border-b-0 lg:border-r border-white/20">
                {videoSrc ? (
                  <iframe
                    src={videoSrc}
                    title={project.title || "Project Video Player"}
                    className="absolute inset-0 h-full w-full border-0 block"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm">
                    No video available for this project.
                  </div>
                )}
              </div>

              {/* Right Side: Premium Content Container */}
              <div className="flex flex-col justify-between p-6 sm:p-8 md:p-12 bg-transparent lg:max-h-[85vh] lg:overflow-y-auto scrollbar-none">
                <div>
                  <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Featured Project
                  </span>

                  {/* Extra Bold Premium Title */}
                  <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight pr-8 lg:pr-0">
                    {project.title}
                  </h2>

                  <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 font-normal">
                    {project.desc}
                  </p>

                  {/* Static, Universal Video Metadata Layout Grid */}
                  <div className="mt-6 sm:mt-8 border-t border-b border-white/10 py-4 sm:py-6 space-y-4">
                    
                    {/* Project Format Row */}
                    <div className="flex items-center justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                        <Briefcase size={16} className="text-white/70" /> Video Format
                      </span>
                      <span className="text-white font-semibold text-right max-w-[180px] sm:max-w-[240px] truncate">
                        {project.type || "Commercial / Social Delivery"}
                      </span>
                    </div>

                    {/* Frame Dimensions Row */}
                    <div className="flex items-center justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                        <Maximize2 size={16} className="text-white/70" /> Layout / Aspect Ratio
                      </span>
                      <span className="text-white font-semibold text-right">
                        {project.aspectRatio || "Dynamic Delivery (16:9 / 9:16)"}
                      </span>
                    </div>

                    {/* Production Tech Row */}
                    <div className="flex items-start justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2 mt-0.5 shrink-0">
                        <Settings size={16} className="text-white/70" /> Production Tech
                      </span>
                      <div className="flex flex-wrap gap-1.5 justify-end max-w-[180px] sm:max-w-[240px]">
                        {toolsList.map((tool, index) => (
                          <span key={index} className="rounded-md border border-white/20 bg-white/5 px-2 py-0.5 text-xs text-white/90">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Creative Post-Production Scope Row */}
                    <div className="flex items-start justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2 mt-0.5 shrink-0">
                        <Video size={16} className="text-white/70" /> Post-Production Scope
                      </span>
                      <div className="flex flex-wrap gap-1.5 justify-end max-w-[200px] sm:max-w-[260px]">
                        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-200">Creative Editing</span>
                        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-200">Color Grading</span>
                        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-200">Sound Design</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium External Call to Action Element */}
                {project.url && (
                  <div className="mt-6 sm:mt-8 lg:mt-12">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl border-2 border-white bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold active:scale-98 shadow-[0_4px_30px_rgba(255,255,255,0.1)] group"
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