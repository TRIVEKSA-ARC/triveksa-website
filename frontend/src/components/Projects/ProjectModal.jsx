import React, { useEffect } from "react";
import { createPortal } from "react-dom"; 
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

/**
 * Smart parser that converts standard YouTube links or direct embed strings
 * into privacy-enhanced, tracking-safe embed URLs.
 */
function getYoutubeEmbedUrl(url) {
  if (!url) return "";

  // 1. If the admin panel already has a full embed link, use it but enforce privacy domain
  if (url.includes("youtube.com/embed/") || url.includes("youtube-nocookie.com/embed/")) {
    return url.replace("youtube.com", "youtube-nocookie.com");
  }

  // 2. Otherwise, parse standard watch (v=) or share (youtu.be) links
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
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 w-screen h-screen"
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
            
            className="relative w-full max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-[#0A0B10]/95 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.7)]"
          >
            {/* 5. Gradient Glow Background Layer */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(245,158,11,.3), transparent 50%)",
              }}
            />

            {/* 6. Premium Close Button (h-12 w-12, custom white shadow glow) */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white hover:bg-white hover:text-black transition shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <X size={20} />
            </button>

            {/* 2. Side-by-Side Responsive Grid System Layout */}
            <div className="grid lg:grid-cols-2 relative z-10 w-full h-full items-stretch">
              
              {/* Left Side: Video Container (min-h-[500px] on desktop layouts) */}
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] bg-black">
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

              {/* 3. Right Side: Content Box Container (p-8 md:p-12 centered spacing overrides) */}
              <div className="flex flex-col justify-center p-8 md:p-12 bg-transparent">
                <div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    {project.category || "Project Details"}
                  </span>

                  {/* 4. Extra Bold Premium Title Scaling Size (text-4xl md:text-6xl) */}
                  <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                    {project.title}
                  </h2>

                  <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-300 font-normal">
                    {project.desc}
                  </p>
                </div>

                {/* Skills Section */}
                <div className="mt-8">
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                    Skills Demonstrated
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
                      Video Editing
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
                      Storytelling
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
                      Motion Graphics
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
                      Color Grading
                    </span>
                  </div>
                </div>

                {/* Tools Section */}
                <div className="mt-6">
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                    Tools Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
                      DaVinci Resolve
                    </span>
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