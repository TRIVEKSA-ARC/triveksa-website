import { motion } from "framer-motion";
import { useAbout } from "../../context/AboutContext";

/* ================= TEXT RENDER HELPER ================= */
const renderStyledText = (text, gradient = false) => {
  if (!text) return null;

  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <motion.span
        key={index}
        initial={{ opacity: 0.6 }}
        whileInView={{ opacity: 1 }}
        className={
          gradient
            ? "bg-gradient-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent font-black tracking-tight"
            : "text-amber-400 font-bold"
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
      <section className="h-[60vh] flex flex-col items-center justify-center bg-transparent">
        <motion.div 
          animate={{ scale: [0.95, 1, 0.95], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-amber-500 tracking-[1em] text-[10px] font-black uppercase"
        >
          Synchronizing_Identity
        </motion.div>
      </section>
    );
  }

  const data = about || {
    subtitle: "System Core",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    highlightText: "",
    services: [],
    image: null,
    location: "",
  };

  return (
    <section id="about" className="relative overflow-hidden bg-transparent px-6 py-32 text-white md:px-12">
      
      {/* AMBIENT BACKGROUND ELEMENTS */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden opacity-40">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* LEFT: CONTENT ARCHITECTURE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            {/* SUBTITLE TERMINAL STYLE */}
            <div className="mb-12 flex items-center gap-4">
              <div className="flex gap-1">
                <div className="h-1 w-1 bg-amber-500" />
                <div className="h-1 w-1 bg-amber-500/40" />
                <div className="h-1 w-1 bg-amber-500/10" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.8em] text-amber-500/80">
                {data.subtitle} // DATA_NODE_01
              </span>
            </div>

            {/* MAIN HEADLINE */}
            <h2 className="mb-10 text-4xl font-black leading-[1.1] tracking-tighter md:text-6xl lg:text-7xl">
              {renderStyledText(data.highlightText, true)}
            </h2>

            {/* BODY TEXT WITH REFINED TYPOGRAPHY */}
            <div className="relative space-y-8 pl-8 before:absolute before:left-0 before:top-2 before:h-[90%] before:w-px before:bg-gradient-to-b before:from-amber-500/50 before:to-transparent">
              {[data.paragraph1, data.paragraph2, data.paragraph3].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="max-w-2xl text-[16px] font-light leading-relaxed text-white/60 md:text-[18px]"
                >
                  {renderStyledText(text)}
                </motion.p>
              ))}
            </div>

            {/* SERVICE TAGS - MINI CHIPS */}
            <div className="mt-12 flex flex-wrap gap-2">
              {data.services.map((service, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, borderColor: "rgba(245, 158, 11, 0.5)" }}
                  className="rounded-sm border border-white/10 bg-white/[0.02] px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-white/40 transition-all hover:text-white"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: THE VISUAL TERMINAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative order-1 lg:order-2 lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-[440px]">
              
              {/* DECORATIVE OUTER ELEMENTS */}
              <div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-amber-500/20 rounded-tr-[3rem]" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-amber-500/20 rounded-bl-[3rem]" />

              {/* MAIN IMAGE CONTAINER */}
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 bg-[#0a0a0a] shadow-2xl backdrop-blur-3xl transition-all duration-700 hover:border-amber-500/30">
                
                {/* SCANNING EFFECT overlay */}
                <motion.div 
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute left-0 z-10 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent shadow-[0_0_15px_#f59e0b]"
                />

                {data.image?.url && (
                  <img
                    src={data.image.url}
                    alt="VK Profile"
                    className="h-full w-full object-cover opacity-80 grayscale-[40%] transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                )}

                {/* HUD INTERFACE ELEMENTS */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="text-[10px] font-mono text-amber-500/50">ID // {new Date().getFullYear()}</div>
                    <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]" />
                  </div>

                  <div className="space-y-4">
                    {/* STATUS CHIP */}
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-xl">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Available_for_Projects</span>
                    </div>

                    {/* LOCATION CARD */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-2xl transition-all group-hover:bg-amber-500/[0.05]">
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">Operational_Base</p>
                      <p className="mt-1 text-sm font-bold tracking-widest text-white">{data.location || "REMOTE / HQ"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING GEOMETRY */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -right-8 bottom-20 -z-10 h-32 w-32 rounded-full border border-dashed border-white/10" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;