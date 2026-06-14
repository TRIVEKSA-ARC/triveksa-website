import React, { useEffect } from "react";
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

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Dynamically resolve the safe video link based on the selected project object
  const videoSrc = project ? getYoutubeEmbedUrl(project.url) : "";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
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
            className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0B10]/95 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.7)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white hover:bg-white hover:text-black transition"
            >
              <X size={18} />
            </button>

            {/* Video Container */}
            <div className="relative w-full aspect-video bg-black">
              {videoSrc ? (
                <iframe
                  src={videoSrc}
                  title={project.title || "Project Video Player"}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm">
                  No video available for this project.
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                {project.category || "Project Details"}
              </span>

              <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-300">
                {project.desc}
              </p>

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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;