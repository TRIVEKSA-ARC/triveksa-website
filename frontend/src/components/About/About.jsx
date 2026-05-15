import { motion } from "framer-motion";
import { useAbout } from "../../context/AboutContext";

/* ================= TEXT RENDER HELPER ================= */
const renderStyledText = (text, gradient = false) => {
  if (!text) return null;

  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <motion.span
        key={index}
        initial={{ opacity: 0.6, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={
          gradient
            ? "bg-gradient-to-r from-[#f8d36a] via-[#f7d774] to-[#d89b1d] bg-clip-text text-transparent font-bold drop-shadow-[0_0_15px_rgba(216,155,29,0.3)]"
            : "text-white font-semibold"
        }
      >
        {part}
      </motion.span>
    ) : (
      part
    )
  );
};

function About() {
  const { about, loading } = useAbout();

  if (loading) {
    return (
      <section className="py-32 text-center text-white/60 font-sans tracking-widest uppercase text-xs">
        <div className="flex items-center justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          Loading Identity...
        </div>
      </section>
    );
  }

  const data = about || {
    subtitle: "About Me",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    highlightText: "",
    services: [],
    image: null,
    location: "",
  };

  return (
    <section
      id="about"
      className="relative bg-transparent text-white py-32 px-6 overflow-hidden font-sans"
    >
      {/* AMBIENT BACKGROUND ELEMENTS */}
      <div className="pointer-events-none absolute top-1/4 -left-24 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-[120px]" />
      
      {/* SUBTLE GRID OVERLAY (Matches Hero) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* LEFT — CONTENT (Col 7) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          {/* Subtitle / Label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
            <motion.p 
               initial={{ opacity: 0, letterSpacing: "0.6em" }}
               whileInView={{ opacity: 1, letterSpacing: "0.45em" }}
               transition={{ duration: 0.8 }}
               className="text-[11px] uppercase tracking-[0.45em] text-amber-400/90 font-black"
            >
              {data.subtitle}
            </motion.p>
          </div>

          {/* MAIN TEXT BODY */}
          <div className="space-y-8 relative">
             {/* Large Decorative Mark */}
            <span className="absolute -top-16 -left-10 text-[180px] text-white/[0.03] font-black select-none pointer-events-none">
              VK
            </span>

            <div className="space-y-6 text-[16px] md:text-[19px] leading-[1.8] text-white/70 font-light relative z-10">
              {[data.paragraph1, data.paragraph2, data.paragraph3].map(
                (text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.15, duration: 0.7 }}
                  >
                    {renderStyledText(text)}
                  </motion.p>
                )
              )}
            </div>

            {/* HIGHLIGHT TEXT - Premium Cinematic Typography */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white font-black text-3xl md:text-5xl tracking-tight leading-tight pt-4"
            >
              {renderStyledText(data.highlightText, true)}
            </motion.p>
          </div>

          {/* SERVICES - Professional Tags */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {data.services.map((service) => (
              <motion.span
                key={service}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-xl transition-all duration-300"
              >
                {service}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — IMAGE (Col 5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative group">
            {/* Elegant Background Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-amber-500/20 rounded-[32px] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            
            {/* Glass Container for Image */}
            <div className="relative w-[280px] h-[380px] md:w-[380px] md:h-[480px] p-3 bg-white/[0.03] border border-white/10 rounded-[32px] backdrop-blur-sm overflow-hidden shadow-2xl">
              <div className="w-full h-full overflow-hidden rounded-[24px] relative">
                {data.image?.url ? (
                  <img
                    src={data.image.url}
                    alt="Vinod Kumar"
                    className="h-full w-full object-cover grayscale-[20%] contrast-[110%] transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-900 flex items-center justify-center italic text-white/20">
                    Image Pending
                  </div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-8 right-8 bg-black/60 border border-white/10 backdrop-blur-md py-3 px-6 rounded-2xl flex items-center gap-3 shadow-2xl"
              >
                <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/90">
                  {data.location || "Available Globally"}
                </span>
              </motion.div>
            </div>

            {/* Corner Accent */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-amber-400/40 rounded-tr-3xl" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;