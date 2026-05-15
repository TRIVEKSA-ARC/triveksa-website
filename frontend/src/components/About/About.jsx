import { motion } from "framer-motion";
import { useAbout } from "../../context/AboutContext";

/* ================= TEXT RENDER HELPER ================= */
const renderStyledText = (text, gradient = false) => {
  if (!text) return null;

  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <motion.span
        key={index}
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        className={
          gradient
            ? "bg-gradient-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent font-extrabold tracking-tight"
            : "text-amber-300 font-bold"
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
      <section className="h-[60vh] flex items-center justify-center bg-transparent">
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[11px] uppercase tracking-[1.2em] text-white/40"
        >
          Loading_Persona
        </motion.div>
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
    <section id="about" className="relative overflow-hidden bg-transparent px-6 py-32 text-white md:px-12 lg:py-48">
      
      {/* LUXURY AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute right-[-5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-white/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-12">
          
          {/* LEFT: MINIMALIST CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            {/* ELEGANT SUBTITLE */}
            <div className="mb-10 flex items-center gap-6">
              <span className="h-[1px] w-8 bg-amber-400/60" />
              <span className="text-[11px] font-medium uppercase tracking-[0.6em] text-amber-200/70">
                {data.subtitle}
              </span>
            </div>

            {/* CINEMATIC HEADLINE */}
            <h2 className="mb-12 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              {renderStyledText(data.highlightText, true)}
            </h2>

            {/* BODY TEXT - CLEAN FLOW */}
            <div className="space-y-10 border-l border-white/5 pl-10">
              {[data.paragraph1, data.paragraph2, data.paragraph3].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                  className="max-w-2xl text-[17px] font-light leading-[1.8] text-white/60 md:text-[19px]"
                >
                  {renderStyledText(text)}
                </motion.p>
              ))}
            </div>

            {/* SERVICE TAGS - PILL STYLE */}
            <div className="mt-16 flex flex-wrap gap-3">
              {data.services.map((service, i) => (
                <motion.span
                  key={i}
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="cursor-default rounded-full border border-white/10 bg-white/[0.03] px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 backdrop-blur-md transition-all hover:text-amber-300 hover:border-amber-300/30"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: FLOATING CINEMATIC CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative order-1 lg:order-2 lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-[460px]">
              
              {/* SOFT GLOW BEHIND IMAGE */}
              <div className="absolute inset-0 -z-10 scale-95 bg-amber-500/10 blur-[80px]" />

              {/* IMAGE FRAME */}
              <div className="group relative aspect-[3.8/5] overflow-hidden rounded-[2rem] border border-white/10 p-3 backdrop-blur-sm transition-all duration-700 hover:border-amber-400/20">
                
                {/* INNER IMAGE CONTAINER */}
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  {data.image?.url && (
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                      src={data.image.url}
                      alt="Vinod Kumar"
                      className="h-full w-full object-cover transition-all duration-1000 grayscale-[20%] group-hover:grayscale-0"
                    />
                  )}
                  
                  {/* OVERLAY GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* MINIMALIST TAGS */}
                <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
                  {/* LOCATION */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-[1px] w-6 bg-amber-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">
                      {data.location || "INDIA"}
                    </span>
                  </motion.div>

                  {/* AVAILABILITY LIGHT */}
                  <div className="flex items-center gap-3 self-start rounded-full bg-black/40 px-4 py-1.5 backdrop-blur-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-400/90">Active</span>
                  </div>
                </div>
              </div>

              {/* DECORATIVE ACCENTS */}
              <div className="absolute -left-6 -top-6 text-[80px] font-serif leading-none text-white/[0.03] select-none italic">
                About
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;