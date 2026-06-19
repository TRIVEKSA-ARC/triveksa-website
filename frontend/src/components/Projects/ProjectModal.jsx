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
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-3 sm:p-6 w-screen h-screen"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 15,
            }}
            transition={{
              duration: 0.3,
              ease: [0.19, 1, 0.22, 1] // High-end cinematic easing
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl max-h-[calc(100vh-2rem)] lg:max-h-[85vh] overflow-y-auto lg:overflow-hidden rounded-3xl border border-white/30 bg-[#0b0c10] shadow-[0_0_1px_rgba(255,255,255,0.6),0_20px_50px_rgba(0,0,0,0.9),0_0_60px_rgba(255,255,255,0.03)] scrollbar-none"
          >
            {/* High-End Ambient Background Glow Layer */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.7), transparent 45%)",
              }}
            />

            {/* Premium Dynamic Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 z-30 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-md"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Side-by-Side Responsive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 w-full lg:h-full items-stretch">
              
              {/* Left Side: Video Aspect Container */}
              <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[240px] sm:min-h-[380px] lg:min-h-[520px] bg-black border-b border-white/10 lg:border-b-0 lg:border-r border-white/10">
                {videoSrc ? (
                  <iframe
                    src={videoSrc}
                    title={project.title || "Project Video Player"}
                    className="absolute inset-0 h-full w-full border-0 block"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-sm">
                    No video content loaded.
                  </div>
                )}
              </div>

              {/* Right Side: Premium Typography Container */}
              <div className="flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-transparent lg:max-h-[85vh] lg:overflow-y-auto scrollbar-none">
                <div>
                  <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    Featured Project
                  </span>

                  {/* High-Contrast Bold Title */}
                  <h2 className="mt-4 sm:mt-5 text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] pr-8 lg:pr-0">
                    {project.title}
                  </h2>

                  <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 font-light">
                    {project.desc}
                  </p>

                  {/* Clean Uniform Metadata Layout Grid */}
                  <div className="mt-8 sm:mt-10 border-t border-b border-white/10 py-5 sm:py-7 space-y-5">
                    
                    {/* Project Format Row */}
                    <div className="flex items-center justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2.5 shrink-0">
                        <Briefcase size={16} className="text-cyan-400" /> Video Format
                      </span>
                      <span className="text-white font-semibold text-right max-w-[180px] sm:max-w-[240px] truncate">
                        {project.type || "Commercial / Social Delivery"}
                      </span>
                    </div>

                    {/* Frame Dimensions Row */}
                    <div className="flex items-center justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2.5 shrink-0">
                        <Maximize2 size={16} className="text-cyan-400" /> Layout / Aspect Ratio
                      </span>
                      <span className="text-white font-semibold text-right">
                        {project.aspectRatio || "Dynamic Delivery (16:9 / 9:16)"}
                      </span>
                    </div>

                    {/* Production Tech Row */}
                    <div className="flex items-start justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2.5 mt-1 shrink-0">
                        <Settings size={16} className="text-cyan-400" /> Production Tech
                      </span>
                      <div className="flex flex-wrap gap-1.5 justify-end max-w-[180px] sm:max-w-[240px]">
                        {toolsList.map((tool, index) => (
                          <span key={index} className="rounded-md border border-white/20 bg-white/5 px-2.5 py-1 text-xs text-white font-medium transition-all duration-200 hover:border-white/40">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Post-Production Scope Row */}
                    <div className="flex items-start justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2.5 mt-1 shrink-0">
                        <Video size={16} className="text-cyan-400" /> Post-Production Scope
                      </span>
                      <div className="flex flex-wrap gap-1.5 justify-end max-w-[200px] sm:max-w-[260px]">
                        <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200 font-medium">Creative Editing</span>
                        <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200 font-medium">Color Grading</span>
                        <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200 font-medium">Sound Design</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium High-Contrast Call to Action */}
                {project.url && (
                  <div className="mt-8 sm:mt-10 lg:mt-12">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-white bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300 px-6 py-3.5 text-xs sm:text-sm font-bold active:scale-[0.98] shadow-[0_4px_25px_rgba(255,255,255,0.15)] group"
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