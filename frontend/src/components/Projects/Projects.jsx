import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ExternalLink } from "lucide-react";
import { useProjects } from "../../context/ProjectContext";

/* ================= PROJECT SECTION ================= */

const PROJECT_THEMES = {
  web: {
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(6,182,212,0.45)",
    borderBase: "border-cyan-400/30",
    borderHover: "group-hover:border-cyan-400",
    badge: "Core_Node",
    badgeBg: "bg-cyan-950/50",
    badgeBorder: "border-cyan-400/50",
    badgeTextColor: "text-cyan-200",
    badgeDot: "bg-cyan-400",
  },
  uiux: {
    color: "from-purple-400 to-pink-500",
    glow: "rgba(168,85,247,0.45)",
    borderBase: "border-purple-400/30",
    borderHover: "group-hover:border-purple-400",
    badge: "UI_System",
    badgeBg: "bg-purple-950/50",
    badgeBorder: "border-purple-400/50",
    badgeTextColor: "text-purple-200",
    badgeDot: "bg-purple-400",
  },
  editing: {
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245,158,11,0.45)",
    borderBase: "border-amber-400/30",
    borderHover: "group-hover:border-amber-400",
    badge: "VFX_Render",
    badgeBg: "bg-amber-950/50",
    badgeBorder: "border-amber-400/50",
    badgeTextColor: "text-amber-200",
    badgeDot: "bg-amber-400",
  },
};

const ProjectSection = ({ title, items = [], theme }) => {
  const scrollRef = useRef(null);

  const slide = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="mb-28 w-full">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 px-6">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-sm font-bold uppercase tracking-[0.4em] bg-gradient-to-r ${theme.color} bg-clip-text text-transparent`}
        >
          {title}
        </motion.h3>
        <div className={`mt-3 h-px w-16 bg-gradient-to-r ${theme.color}`} />
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto snap-x snap-mandatory px-6 py-4"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item) => (
            <motion.a
              key={item._id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={`snap-start shrink-0 w-95 h-95 relative rounded-3xl overflow-hidden bg-white/[0.01] border ${theme.borderBase} p-2.5 backdrop-blur-md group will-change-transform transition-all duration-500 ${theme.borderHover} hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}
            >
              {/* BACK NEON GLOW AURAS */}
              <div
                className={`absolute -inset-1 -z-10 bg-gradient-to-tr ${theme.color} rounded-3xl opacity-20 blur-xl transition duration-700 group-hover:opacity-50 group-hover:blur-2xl`}
              />

              {/* IMAGE BASE FRAME AND CONTENT WRAPPER */}
              <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-transparent">
                
                {/* PROJECT IMAGE RENDERING */}
                <img
                  src={item.img?.startsWith("http") ? item.img : "/placeholder.png"}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                />

                {/* LOCALIZED CAPTION TEXT CONTRAST UNDERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* VIBRANT GLOWING FLOATING TOP BADGE */}
                <div className={`absolute left-4 top-4 flex items-center gap-2 rounded-full border ${theme.badgeBorder} ${theme.badgeBg} px-3 py-1 backdrop-blur-md`}>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${theme.badgeDot} opacity-75`}></span>
                    <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${theme.badgeDot}`}></span>
                  </span>
                  <span className={`text-[8px] font-bold uppercase tracking-[0.25em] ${theme.badgeTextColor}`}>
                    {theme.badge}
                  </span>
                </div>

                {/* CONTENT LAYER */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end z-10">
                  <h4 className="text-[14px] font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {item.title}
                  </h4>

                  <p className="text-[11px] text-white/90 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] line-clamp-2">
                    {item.desc}
                  </p>

                  {/* ACTIONS BAR */}
                  <div className="mt-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span
                      className={`flex items-center gap-2 bg-gradient-to-r ${theme.color} px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg`}
                    >
                      View <Plus size={14} />
                    </span>

                    <ExternalLink
                      size={16}
                      className="text-white/90 hover:text-white transition drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>

              </div>

              {/* NEON NESTED ACCENTS FRAMES OUTSIDE CARD */}
              <div className={`absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 ${theme.borderBase} rounded-tl-xl transition-all duration-500 ${theme.borderHover}`} />
              <div className={`absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 ${theme.borderBase} rounded-br-xl transition-all duration-500 ${theme.borderHover}`} />

            </motion.a>
          ))}
        </div>

        {/* LEFT ARROW BUTTON */}
        <button
          onClick={() => slide("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 border border-white/10 hover:border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-black transition flex items-center justify-center z-20 shadow-xl"
        >
          <ChevronLeft size={18} />
        </button>

        {/* RIGHT ARROW BUTTON */}
        <button
          onClick={() => slide("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 border border-white/10 hover:border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-black transition flex items-center justify-center z-20 shadow-xl"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

/* ================= MAIN ================= */
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
    <section id="projects" className="relative py-32 text-white overflow-hidden">
      
      {/* BACKGROUND GRAPHIC FLARES */}
      <div className="pointer-events-none absolute left-[-10%] top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-5%] bottom-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-amber-500/5 to-orange-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        
        {/* CINEMATIC MAIN SECTION HEADER */}
        <header className="mb-24 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            SELECTED{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-extrabold">
              WORK
            </span>
          </motion.h2>

          <div className="flex flex-col items-center">
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.42em] text-amber-300/90">
              Curated Projects
            </p>

            <div className="group cursor-pointer mt-3">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
            </div>
          </div>
        </header>

        {/* SECTION CATEGORIES */}
        <ProjectSection 
          title="Development" 
          items={projects.web} 
          theme={PROJECT_THEMES.web}
        />
        <ProjectSection 
          title="UI / UX Design" 
          items={projects.uiux} 
          theme={PROJECT_THEMES.uiux}
        />
        <ProjectSection 
          title="Motion & Editing" 
          items={projects.editing} 
          theme={PROJECT_THEMES.editing}
        />
      </div>
    </section>
  );
}

export default Projects;