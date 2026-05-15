import { motion } from "framer-motion";
import { useAbout } from "../../context/AboutContext";

/* ================= TEXT RENDER HELPER ================= */
const renderStyledText = (text, gradient = false) => {
  if (!text) return null;

  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <motion.span
        key={index}
        className={
          gradient
            ? "bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent font-black"
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
      <div className="h-screen flex items-center justify-center bg-black">
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-amber-500 tracking-[0.5em] text-xs font-black uppercase"
        >
          Initializing Identity...
        </motion.div>
      </div>
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
    <section id="about" className="relative min-h-screen bg-black py-24 px-6 overflow-hidden">
      
      {/* BACKGROUND ARCHITECTURE */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* SECTION HEADER */}
        <div className="mb-16">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-[2px] bg-amber-500 mb-4"
          />
          <span className="text-amber-500 tracking-[0.6em] text-[10px] uppercase font-black">
            {data.subtitle} // 01
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: THE GLASS TEXT ENGINE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="relative p-8 md:p-12 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden">
              {/* Scanning Light Effect */}
              <motion.div 
                animate={{ y: [-100, 600] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-transparent via-amber-500/5 to-transparent pointer-events-none"
              />

              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-white">
                  {renderStyledText(data.highlightText, true)}
                </h2>

                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />

                <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                  {[data.paragraph1, data.paragraph2, data.paragraph3].map((text, i) => (
                    <p key={i}>{renderStyledText(text)}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* SERVICES CHIPS */}
            <div className="flex flex-wrap gap-3">
              {data.services.map((s, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] uppercase tracking-widest text-gray-300 font-bold hover:border-amber-500/50 transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: THE VISUAL TERMINAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative group w-full max-w-[450px]">
              
              {/* Animated Border Frame */}
              <div className="absolute inset-0 border border-amber-500/20 rounded-[2.5rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700" />
              
              <div className="relative aspect-[4/5] bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                {data.image?.url && (
                  <img 
                    src={data.image.url} 
                    className="w-full h-full object-cover opacity-80 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    alt="VK Profile"
                  />
                )}
                
                {/* HUD Elements */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="p-2 border-t-2 border-l-2 border-amber-500 w-8 h-8" />
                    <div className="text-[10px] text-amber-500/50 font-mono">ID_0923_ACTIVE</div>
                  </div>
                  
                  {/* Status Card */}
                  <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                    <div className="relative h-10 w-10 flex items-center justify-center">
                      <div className="absolute inset-0 bg-amber-500/20 animate-ping rounded-full" />
                      <div className="h-3 w-3 bg-amber-500 rounded-full" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Current Node</p>
                      <p className="text-xs text-white font-bold uppercase tracking-widest">{data.location || "Remote / HQ"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;