import React, { useEffect } from "react";
import { createPortal } from "react-dom"; 
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Briefcase, Video, Settings } from "lucide-react";

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
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-7xl max-h-[calc(100vh-2rem)] lg:max-h-[85vh] overflow-y-auto lg:overflow-hidden rounded-2xl sm:rounded-[32px] md:rounded-[40px] border border-white/10 bg-[#0A0B10]/95 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.7)] scrollbar-none"
          >
            {/* 5. Gradient Glow Background Layer */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(245,158,11,.3), transparent 50%)",
              }}
            />

            {/* 6. Premium Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white hover:bg-white hover:text-black transition shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <X size={18} />
            </button>

            {/* 2. Side-by-Side Responsive Grid System Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 w-full lg:h-full items-stretch">
              
              {/* Left Side: Video Container */}
              <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[220px] sm:min-h-[360px] lg:min-h-[500px] bg-black border-b border-white/5 lg:border-b-0 lg:border-r">
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

              {/* 3. Right Side: Premium Specification Layout Content Box Container */}
              <div className="flex flex-col justify-between p-6 sm:p-8 md:p-12 bg-transparent lg:max-h-[85vh] lg:overflow-y-auto scrollbar-none">
                <div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    {project.category || "Project Case Study"}
                  </span>

                  {/* 4. Extra Bold Premium Title Scaling Size */}
                  <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight pr-8 lg:pr-0">
                    {project.title}
                  </h2>

                  <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 font-normal">
                    {project.desc}
                  </p>

                  {/* Structured Client Metadata Spec Grid */}
                  <div className="mt-6 sm:mt-8 border-t border-b border-white/5 py-4 sm:py-6 space-y-3 sm:space-y-4">
                    {/* Client row */}
                    <div className="flex items-center justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2 shrink-0">
                        <Briefcase size={16} className="text-amber-500/80" /> Client Type
                      </span>
                      <span className="text-white font-semibold text-right max-w-[180px] sm:max-w-[240px] truncate">
                        {project.client || "Commercial / Brand"}
                      </span>
                    </div>

                    {/* Tools Used row */}
                    <div className="flex items-start justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2 mt-0.5 shrink-0">
                        <Settings size={16} className="text-amber-500/80" /> Tools Used
                      </span>
                      <div className="flex flex-wrap gap-1.5 justify-end max-w-[180px] sm:max-w-[240px]">
                        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/90">
                          DaVinci Resolve
                        </span>
                      </div>
                    </div>

                    {/* Skills Demonstrated row */}
                    <div className="flex items-start justify-between text-xs sm:text-sm gap-4">
                      <span className="text-slate-400 font-medium flex items-center gap-2 mt-0.5 shrink-0">
                        <Video size={16} className="text-amber-500/80" /> Skills
                      </span>
                      <div className="flex flex-wrap gap-1.5 justify-end max-w-[200px] sm:max-w-[260px]">
                        <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-xs text-slate-300">Video Editing</span>
                        <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-xs text-slate-300">Color Grading</span>
                        <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-xs text-slate-300">Storytelling</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium External Call to Action Segment */}
                {project.url && (
                  <div className="mt-6 sm:mt-8 lg:mt-12">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-amber-500 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-black hover:bg-amber-400 active:scale-95 transition-all duration-200 shadow-[0_4px_20px_rgba(245,158,11,0.25)] group"
                    >
                      View on YouTube
                      <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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