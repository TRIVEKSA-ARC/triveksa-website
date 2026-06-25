import { motion } from "framer-motion";
import { 
  Rocket, 
  FolderGit2, 
  Download, 
  Wrench, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ArrowDown 
} from "lucide-react";
import Reveal from "../Reveal";
import MagneticButton from "../MagneticButton";
import { useAbout } from "../../context/AboutContext";

function Hero() {
  const { about } = useAbout();

  const data = about || {
    image: null,
    location: "INDIA",
  };

  // Upgraded Premium Statistics Config 
  const stats = [
    { value: "99%", label: "CSAT Score" },
    { value: "100%", label: "Responsive" },
    { value: "24/7", label: "Support" },
    { value: "Fast", label: "Delivery" }
  ];

  // Tech Stack Items for Marquee
  const techStack = ["React", "Node.js", "Express", "MongoDB", "Figma", "Framer Motion", "GSAP"];

  return (
    <>
      {/* ================= PREMIUM AGENCY HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-white flex items-center font-sans pt-28 pb-16 lg:pt-32 tracking-[-0.01em]">
        
        {/* DESIGNER BACKGROUND SUITE (ANIMATED ATMOSPHERE) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Rotating Cosmic Glow Base */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -right-[20%] sm:-top-[20%] sm:-right-[10%] h-[400px] sm:h-[700px] w-[400px] sm:w-[700px] rounded-full bg-amber-500/[0.04] blur-[100px] sm:blur-[150px]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[10%] -left-[20%] sm:-left-[10%] h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-blue-500/[0.03] blur-[90px] sm:blur-[130px]"
          />
          
          {/* Subtle Particles / Slow Floating Stars */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* SUBTLE GRID OVERLAY */}
        <div
          className="absolute inset-0 z-0 opacity-[0.04] sm:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-8 lg:px-12 items-center">
          
          {/* LEFT SIDE & MAIN HEADER ARCHITECTURE */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 order-1">

            <div className="flex flex-col space-y-3 sm:space-y-4">
              {/* UPGRADED INTRO LABEL */}
              <Reveal>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-amber-400 to-transparent" />
                  <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.42em] text-[#D4AF37] font-bold drop-shadow-md leading-relaxed">
                    Founder • Full Stack Developer • Creative Designer
                  </p>
                </div>
              </Reveal>

              {/* NAME MATRIX */}
              <Reveal>
                <div className="leading-[0.95] sm:leading-[0.9] uppercase pt-1">
                  <span className="block text-[46px] sm:text-[88px] md:text-[105px] xl:text-[120px] font-black tracking-[-0.04em] text-[#FFFFFF] drop-shadow-sm">
                    Vinod
                  </span>
                  <span className="block text-[46px] sm:text-[88px] md:text-[105px] xl:text-[120px] font-black tracking-[-0.04em] bg-gradient-to-r from-[#fff4d6] via-[#f7d774] to-[#d89b1d] bg-clip-text text-transparent filter drop-shadow-sm">
                    Kumar
                  </span>
                </div>
              </Reveal>
            </div>

            {/* INTERACTIVE PROFILE CARD — MOVED UP FOR LUXURY MOBILE FLOW */}
            <div className="block lg:hidden order-2 my-2 w-full max-w-[340px] mx-auto">
              <Reveal delay={0.1}>
                <div className="group relative w-full">
                  <div className="absolute -inset-px -z-10 bg-gradient-to-tr from-amber-400/20 to-white/5 rounded-3xl opacity-40 blur-lg" />
                  <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/40 p-2 backdrop-blur-2xl">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.15rem] bg-neutral-900 border border-white/5 flex flex-row">
                      <motion.div 
                        className="flex h-full w-[400%] flex-nowrap flex-shrink-0"
                        animate={{ x: ["0%", "0%", "-25%", "-25%", "-50%"] }}
                        transition={{ times: [0, 0.35, 0.45, 0.85, 1], ease: "easeInOut", duration: 20, repeat: Infinity }}
                      >
                        <div className="h-full w-1/4 flex-shrink-0 bg-neutral-950 relative">
                          <img src="/Logo.png" alt="Trivixa Arc Logo" className="h-full w-full object-cover select-none" />
                        </div>
                        <div className="h-full w-1/4 flex-shrink-0 relative">
                          {data.image?.url ? (
                            <img src={data.image.url} alt="Vinod Kumar Profile" className="h-full w-full object-cover select-none" />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center text-white/20 text-[10px] tracking-widest uppercase">Profile Visual</div>
                          )}
                        </div>
                        <div className="h-full w-1/4 flex-shrink-0 bg-neutral-950 relative">
                          <img src="/Logo.png" alt="Trivixa Arc Logo" className="h-full w-full object-cover select-none" />
                        </div>
                        <div className="h-full w-1/4 flex-shrink-0 relative">
                          {data.image?.url ? (
                            <img src={data.image.url} alt="Vinod Kumar Profile" className="h-full w-full object-cover select-none" />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center text-white/20 text-[10px] tracking-widest uppercase">Profile Visual</div>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-neutral-950/80 px-2.5 py-1 backdrop-blur-xl z-20">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                      </span>
                      <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/90">Founder Profile</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex flex-col bg-neutral-950/90 p-3 rounded-xl border border-white/10 shadow-xl backdrop-blur-xl z-20 space-y-2">
                      <div>
                        <h4 className="text-xs font-bold text-white tracking-wide">Vinod Kumar</h4>
                        <p className="text-[9px] uppercase tracking-[0.1em] text-amber-400 mt-0.5 font-medium">Full Stack Dev • Designer</p>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[9px]">
                        <div>
                          <p className="font-bold text-zinc-500 uppercase tracking-wider text-[7px]">Location</p>
                          <p className="font-bold text-white mt-0.5">{data.location || "INDIA"}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-zinc-500 uppercase tracking-wider text-[7px]">Status</p>
                          <p className="font-extrabold text-emerald-400 flex items-center gap-1 mt-0.5 justify-end">
                            <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" /> Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* REPLACED SERVICE STRIP */}
            <Reveal delay={0.12}>
              <div className="flex flex-col space-y-1.5 border-l-2 border-amber-400/40 pl-3 sm:pl-4 py-0.5 order-3">
                <span className="text-[11px] sm:text-[14px] uppercase tracking-[0.15em] sm:tracking-[0.22em] text-[#FFFFFF] font-bold leading-snug">
                  Full Stack Developer • UI/UX Designer • Creative Technologist
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-400 font-medium">
                  Helping Brands Build Modern Digital Products
                </span>
              </div>
            </Reveal>

            {/* REPLACED OPTIMIZED DESCRIPTION */}
            <Reveal delay={0.18}>
              <p className="max-w-xl text-[14px] sm:text-[17px] leading-relaxed md:leading-7 text-[#F5F5F2] font-normal drop-shadow-sm order-4">
                I help businesses and startups build premium websites, intuitive user experiences, and powerful digital brands that create lasting impressions and drive business growth.
              </p>
            </Reveal>

            {/* REPLACED TRUST CHIPS */}
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-2 order-5">
                {["MERN Stack", "Responsive Design", "UI/UX Systems", "Video Editing", "Branding"].map((chip) => (
                  <span 
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-md px-3 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#D6D9E0] font-medium"
                  >
                    <CheckCircle2 size={11} className="text-amber-400 shrink-0" />
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* ADDED STATISTICS BAR */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl order-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="border border-white/5 bg-neutral-950/20 backdrop-blur-xl rounded-xl p-3 sm:p-4 text-center transition-all duration-300 hover:border-amber-400/20">
                    <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-zinc-400 mt-0.5 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* EXPANDED REPOSITIONED CTA BLOCK */}
            <Reveal delay={0.36}>
              <div className="flex flex-col space-y-3 pt-1 order-7">
                {/* Row 1 */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <MagneticButton
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-transparent bg-gradient-to-r from-[#f8d36a] to-[#d89b1d] px-6 py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-black shadow-lg w-full sm:w-auto transition-all duration-300 hover:brightness-110"
                  >
                    <Rocket size={13} />
                    Book Discovery Call
                  </MagneticButton>

                  <MagneticButton
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md px-6 py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white w-full sm:w-auto transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20"
                  >
                    <FolderGit2 size={13} className="text-amber-400" />
                    View Projects
                  </MagneticButton>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <MagneticButton
                    href="/portfolio.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md px-6 py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D6D9E0] w-full sm:w-auto transition-all duration-300 hover:bg-white/[0.06]"
                  >
                    <Download size={13} />
                    Download Portfolio
                  </MagneticButton>

                  <MagneticButton
                    href="#services"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md px-6 py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#D6D9E0] w-full sm:w-auto transition-all duration-300 hover:bg-white/[0.06]"
                  >
                    <Wrench size={13} />
                    View Services
                  </MagneticButton>
                </div>
              </div>
            </Reveal>

            {/* FLOATING GLASS SOCIAL MATRIX */}
            <Reveal delay={0.42}>
              <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 order-8">
                {[
                  { icon: <Github size={14} />, url: "https://github.com" },
                  { icon: <Linkedin size={14} />, url: "https://linkedin.com" },
                  { icon: <Instagram size={14} />, url: "https://instagram.com" },
                  { icon: <Youtube size={14} />, url: "https://youtube.com" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="h-9 w-9 flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/40 backdrop-blur-xl text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 shadow-md transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </Reveal>

            {/* ADDED HORIZONTAL TECH STACK MARQUEE */}
            <Reveal delay={0.48}>
              <div className="pt-5 border-t border-white/5 max-w-xl overflow-hidden w-full relative order-9">
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
                <motion.div 
                  animate={{ x: [0, -800] }}
                  transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                  className="flex gap-8 whitespace-nowrap text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold"
                >
                  {[...techStack, ...techStack].map((tech, idx) => (
                    <span key={idx} className="hover:text-amber-400 transition-colors duration-300">{tech}</span>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          </div>

          {/* DESKTOP EXCLUSIVE LAYOUT MATRIX */}
          <div className="hidden lg:col-span-5 lg:flex justify-center lg:justify-end items-center w-full order-2">
            <Reveal delay={0.25} className="w-full flex justify-center lg:justify-end">
              <div className="group relative w-full max-w-[390px]">
                <div className="absolute -inset-px -z-10 bg-gradient-to-tr from-amber-400/20 to-white/5 rounded-3xl opacity-40 blur-xl transition duration-700 group-hover:opacity-60" />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/40 p-2.5 backdrop-blur-3xl transition-all duration-700 group-hover:border-amber-400/40 group-hover:shadow-[0_20px_50px_rgba(216,155,29,0.1)]">
                  
                  <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-neutral-900 border border-white/5 flex flex-row">
                    <motion.div 
                      className="flex h-full w-[400%] flex-nowrap flex-shrink-0"
                      animate={{ x: ["0%", "0%", "-25%", "-25%", "-50%"] }}
                      transition={{ times: [0, 0.35, 0.45, 0.85, 1], ease: "easeInOut", duration: 20, repeat: Infinity }}
                    >
                      <div className="h-full w-1/4 flex-shrink-0 bg-neutral-950 relative">
                        <img src="/Logo.png" alt="Trivixa Arc Logo" className="h-full w-full object-cover filter drop-shadow-md select-none" />
                      </div>
                      <div className="h-full w-1/4 flex-shrink-0 relative">
                        {data.image?.url ? (
                          <img src={data.image.url} alt="Vinod Kumar Profile" className="h-full w-full object-cover opacity-100 select-none" />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">Profile Visual</div>
                        )}
                      </div>
                      <div className="h-full w-1/4 flex-shrink-0 bg-neutral-950 relative">
                        <img src="/Logo.png" alt="Trivixa Arc Logo" className="h-full w-full object-cover filter drop-shadow-md select-none" />
                      </div>
                      <div className="h-full w-1/4 flex-shrink-0 relative">
                        {data.image?.url ? (
                          <img src={data.image.url} alt="Vinod Kumar Profile" className="h-full w-full object-cover opacity-100 select-none" />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">Profile Visual</div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-neutral-950/80 px-3.5 py-1.5 backdrop-blur-xl shadow-lg z-20">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/90">Founder Profile</span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex flex-col bg-neutral-950/95 p-4 rounded-xl border border-white/10 shadow-2xl backdrop-blur-2xl z-20 space-y-2.5">
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">Vinod Kumar</h4>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-amber-400 mt-0.5 font-semibold">Full Stack Dev • Creative Designer</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/5 pt-2.5">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-500">Location</p>
                        <p className="text-[11px] font-bold text-white tracking-wide mt-0.5">{data.location || "INDIA"}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-500">Status</p>
                        <p className="text-[11px] font-extrabold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ANIMATED SCROLL TO EXPLORE FOOTER */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-40 pointer-events-none z-10">
          <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] font-semibold text-white">Scroll to Explore</p>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={12} className="text-amber-400" />
          </motion.div>
        </div>

      </section>
    </>
  );
}

export default Hero;