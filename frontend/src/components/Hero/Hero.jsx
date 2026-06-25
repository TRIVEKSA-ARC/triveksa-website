import { motion } from "framer-motion";
import { 
  Rocket, 
  FolderGit2, 
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
    { value: "99%", label: "Satisfaction" },
    { value: "100%", label: "Responsive" },
    { value: "24/7", label: "Support" },
    { value: "Fast", label: "Delivery" }
  ];

  // Technologies list for the infinite marquee banner
  const technologies = [
    "Framer Motion", "GSAP", "React", "Node.js", "Express", "MongoDB", "Figma"
  ];

  return (
    <>
      {/* ================= PREMIUM AGENCY HERO ================= */}
      {/* Fix 3: Updated padding from py-16 md:py-24 to pt-16 pb-36 md:pt-24 md:pb-40 */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#07090F] text-[#F5F5F2] flex items-center font-sans pt-16 pb-36 md:pt-24 md:pb-40 tracking-[-0.01em]">
        
        {/* DESIGNER BACKGROUND SUITE (ANIMATED ATMOSPHERE) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Rotating Cosmic Glow Base */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -right-[20%] sm:-top-[20%] sm:-right-[10%] h-[400px] sm:h-[700px] w-[400px] sm:w-[700px] rounded-full bg-[#CDA349]/[0.05] blur-[100px] sm:blur-[150px]"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[10%] -left-[20%] sm:-left-[10%] h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-blue-500/[0.03] blur-[90px] sm:blur-[130px]"
          />
          
          {/* Subtle Particles / Slow Floating Stars */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.15, 0.5, 0.15],
                scale: [1, 1.2, 1]
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
          className="absolute inset-0 z-0 opacity-[0.03] sm:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Fix 7: Changed lg:gap-8 to lg:gap-16 */}
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-12 items-center">
          
          {/* LEFT SIDE & MAIN HEADER ARCHITECTURE */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 w-full">

            {/* SMALL LABEL */}
            <div className="mb-[28px]">
              <Reveal>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#E8C66A] to-transparent" />
                  <p className="text-[10px] sm:text-[13px] uppercase tracking-[0.3em] sm:tracking-[0.42em] text-[#9C9C9C] font-bold drop-shadow-md leading-relaxed">
                    Founder • Creative Technologist
                  </p>
                </div>
              </Reveal>
            </div>

            {/* LUXURY NAME MATRIX */}
            <div className="mb-[24px]">
              <Reveal>
                <div className="leading-[0.82] uppercase tracking-[-0.06em]">
                  <span className="block text-[48px] sm:text-[88px] md:text-[110px] xl:text-[132px] font-black text-[#F5F5F2] drop-shadow-sm">
                    Vinod
                  </span>
                  <span className="block text-[48px] sm:text-[88px] md:text-[110px] xl:text-[132px] font-black bg-gradient-to-r from-[#FFF7E2] via-[#E8C66A] to-[#B88728] bg-clip-text text-transparent filter drop-shadow-sm">
                    Kumar
                  </span>
                </div>
              </Reveal>
            </div>

            {/* INTERACTIVE PROFILE CARD — MOBILE VIEW */}
            <div className="block lg:hidden my-6 w-full max-w-[360px] mx-auto">
              <Reveal delay={0.1}>
                <div className="group relative w-full">
                  <div className="absolute -inset-px -z-10 bg-gradient-to-tr from-[#CDA349]/20 to-white/5 rounded-3xl opacity-40 blur-lg" />
                  <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-3xl border border-[#2B2F38] bg-[#12151C]/60 p-2 backdrop-blur-2xl">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.15rem] bg-[#07090F] border border-white/5 flex flex-row">
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

                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-[#07090F]/80 px-2.5 py-1 backdrop-blur-xl z-20">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CDA349] opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#CDA349]"></span>
                      </span>
                      <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/90">Founder Profile</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex flex-col bg-[#12151C]/95 p-3 rounded-lg border border-[#2B2F38] shadow-xl backdrop-blur-xl z-20 space-y-2">
                      <div>
                        <h4 className="text-xs font-bold text-[#F5F5F2] tracking-wide">Vinod Kumar</h4>
                        <p className="text-[9px] uppercase tracking-[0.1em] text-[#CDA349] mt-0.5 font-medium">Full Stack Dev • Designer</p>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[9px]">
                        <div>
                          <p className="font-bold text-zinc-500 uppercase tracking-wider">Location</p>
                          <p className="font-bold text-[#F5F5F2] mt-0.5">{data.location || "INDIA"}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-zinc-500 uppercase tracking-wider">Status</p>
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

            {/* ROLE STRIP */}
            <div className="mb-[40px]">
              <Reveal>
                <div className="flex flex-col space-y-1.5 border-l-2 border-[#CDA349] pl-3 sm:pl-4 py-0.5">
                  <span className="text-[12px] sm:text-[16px] uppercase tracking-[0.15em] sm:tracking-[0.22em] text-[#F5F5F2] font-extrabold leading-snug">
                    Full Stack Developer • UI/UX Designer
                  </span>
                  <span className="text-[10px] sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#E8C66A] font-medium">
                    Helping Brands Build Modern Digital Products
                  </span>
                </div>
              </Reveal>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-[36px]">
              <Reveal>
                <p className="max-w-2xl text-[14px] sm:text-[18px] leading-relaxed md:leading-8 text-[#D8DADF] font-normal drop-shadow-sm">
                  I help businesses and startups build premium websites, intuitive user experiences, and powerful digital brands that create lasting impressions and drive business growth.
                </p>
              </Reveal>
            </div>

            {/* CTA BUTTON BLOCK */}
            <div className="mb-[40px] w-full">
              <Reveal>
                <div className="flex flex-wrap gap-3.5 items-center">
                  {/* GOLD ACTION BUTTON */}
                  <MagneticButton
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-transparent bg-gradient-to-r from-[#E8C66A] to-[#B88728] px-7 py-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-black shadow-xl w-full sm:w-auto transition-transform hover:scale-[1.02]"
                  >
                    <Rocket size={13} />
                    Book Discovery Call
                  </MagneticButton>

                  {/* PREMIUM GLASS BUTTON 1 */}
                  <MagneticButton
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(20,20,20,0.55)] px-7 py-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#F5F5F2] w-full sm:w-auto transition-all duration-300 hover:bg-[rgba(205,163,73,0.08)] hover:border-[#CDA349]"
                  >
                    <FolderGit2 size={13} className="text-[#CDA349]" />
                    View Projects
                  </MagneticButton>

                  {/* PREMIUM GLASS BUTTON 2 */}
                  <MagneticButton
                    href="#services"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(20,20,20,0.55)] px-7 py-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#F5F5F2] w-full sm:w-auto transition-all duration-300 hover:bg-[rgba(205,163,73,0.08)] hover:border-[#CDA349]"
                  >
                    <Wrench size={13} className="text-[#CDA349]" />
                    View Services
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            {/* STATISTICS BAR */}
            <div className="mb-[32px] w-full">
              <Reveal>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl w-full">
                  {stats.map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#12141A]/90 border border-[#222631] rounded-xl p-3 sm:p-4 text-center group transition-all duration-300 hover:bg-[#CDA34920] hover:border-[#CDA349]"
                    >
                      <div className="text-2xl sm:text-3xl font-black text-[#F5F5F2]">{stat.value}</div>
                      <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-[#909090] mt-0.5 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* TRUST CHIPS */}
            <div className="mb-[32px]">
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  {["MERN Stack", "Responsive Design", "UI/UX Systems", "Video Editing", "Branding"].map((chip) => (
                    <span 
                      key={chip}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#2B2F38] bg-[#12151C] px-3.5 py-1.5 text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#DADADA] font-semibold transition-all duration-300 hover:bg-[#1B1E25] hover:border-[#CDA349]"
                    >
                      <CheckCircle2 size={12} className="text-[#CDA349] shrink-0" />
                      {chip}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* PREMIUM SOCIAL MATRIX */}
            {/* Fix 4: Added mt-8 to add spacing above social icons */}
            <div className="mt-8">
              <Reveal>
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  {[
                    { icon: <Github size={16} />, url: "https://github.com" },
                    { icon: <Linkedin size={16} />, url: "https://linkedin.com" },
                    { icon: <Instagram size={16} />, url: "https://instagram.com" },
                    { icon: <Youtube size={16} />, url: "https://youtube.com" }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="h-10 w-10 flex items-center justify-center rounded-full border border-[#2D2D2D] bg-[#181818] text-[#B8B8B8] hover:bg-[#CDA349] hover:text-[#111111] hover:border-transparent shadow-md transition-all duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>

          {/* DESKTOP EXCLUSIVE RIGHT SIDE PROFILE CARD */}
          {/* Fix 1 & 6: Removed lg:pt-1, changed pl-4 to pl-6, max-w-[420px] to max-w-[400px], and added negative top margins -mt-16 xl:-mt-20 */}
          <div className="hidden lg:col-span-5 lg:flex justify-end items-start w-full order-2 pl-6 pb-20">
            <Reveal className="w-full flex justify-end">
              <div className="group relative w-full max-w-[400px] -mt-16 xl:-mt-20">
                <div className="absolute -inset-px -z-10 bg-gradient-to-tr from-[#CDA349]/20 to-white/5 rounded-3xl opacity-40 blur-xl transition duration-700 group-hover:opacity-60" />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#2B2F38] bg-[#12151C] p-2.5 backdrop-blur-3xl transition-all duration-700 group-hover:border-[#CDA349] group-hover:shadow-[0_30px_80px_rgba(205,163,73,0.1)]">
                  
                  <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-[#07090F] border border-white/5 flex flex-row">
                    <motion.div 
                      className="flex h-full w-[400%] flex-nowrap flex-shrink-0"
                      animate={{ x: ["0%", "0%", "-25%", "-25%", "-50%"] }}
                      transition={{ times: [0, 0.35, 0.45, 0.85, 1], ease: "easeInOut", duration: 20, repeat: Infinity }}
                    >
                      <div className="h-full w-1/4 flex-shrink-0 bg-[#07090F] relative">
                        <img src="/Logo.png" alt="Trivixa Arc Logo" className="h-full w-full object-cover filter drop-shadow-md select-none" />
                      </div>
                      <div className="h-full w-1/4 flex-shrink-0 relative">
                        {data.image?.url ? (
                          <img src={data.image.url} alt="Vinod Kumar Profile" className="h-full w-full object-cover opacity-100 select-none" />
                        ) : (
                          <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center text-white/20 text-xs tracking-widest uppercase">Profile Visual</div>
                        )}
                      </div>
                      <div className="h-full w-1/4 flex-shrink-0 bg-[#07090F] relative">
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

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#07090F]/80 px-3.5 py-1.5 backdrop-blur-xl shadow-lg z-20">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CDA349] opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CDA349]"></span>
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/90">Founder Profile</span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex flex-col bg-[#12151C]/95 p-4 rounded-xl border border-[#2B2F38] shadow-2xl backdrop-blur-2xl z-20 space-y-3">
                    <div>
                      <h4 className="text-sm font-bold text-[#F5F5F2] tracking-wide">Vinod Kumar</h4>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#CDA349] mt-0.5 font-semibold">Full Stack Developer • Creative Designer</p>
                      <p className="text-[9px] text-zinc-400 tracking-wider font-medium">UI/UX Specialist</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
                      <div>
                        <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#909090]">Location</p>
                        <p className="text-[11px] font-bold text-[#F5F5F2] tracking-wide mt-0.5">{data.location || "INDIA"}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#909090]">Status</p>
                        <p className="text-[11px] font-extrabold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for New Projects
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Fix 5: Raised the scroll indicator from bottom-4 to bottom-6 */}
        {/* ANIMATED SCROLL TO EXPLORE FOOTER */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-40 pointer-events-none z-10">
          <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] font-bold text-[#F5F5F2]">Scroll to Explore</p>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={12} className="text-[#CDA349]" />
          </motion.div>
        </div>

      </section>

      {/* Fix 2 (Option A): Moved the infinite marquee banner entirely outside the Hero <section> component */}
      {/* ================= INFINITE TICKER MARQUEE BANNER ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-transparent via-[#12151C]/80 to-transparent border-y border-white/[0.04] py-3 backdrop-blur-sm z-10 -mt-20">
        <div className="flex w-max items-center">
          <motion.div 
            className="flex whitespace-nowrap gap-16 text-[11px] font-black uppercase tracking-[0.3em] text-[#F5F5F2]/40 px-8"
            animate={{ x: [0, "-33.33%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {/* Loop 3 times to ensure perfect infinite visual scrolling */}
            {[...Array(3)].map((_, mainIdx) => (
              <div key={mainIdx} className="flex gap-16">
                {technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="hover:text-[#CDA349] transition-colors duration-300 select-none">
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;