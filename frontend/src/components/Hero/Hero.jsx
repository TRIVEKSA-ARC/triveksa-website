import { motion } from "framer-motion";
import { 
  Rocket, 
  FolderGit2, 
  Wrench, 
  CheckCircle2, 
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

  // Updated to premium agency marketing hooks instead of software tool lists
  const agencyHooks = [
    "Premium Digital Branding", "High-Converting UX", "Scalable Business Growth", 
    "Custom Web Architecture", "Data-Driven Strategy", "Elite Product Design"
  ];

  return (
    <>
      {/* ================= PREMIUM AGENCY HERO ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-[#F5F5F2] flex items-center font-sans pt-8 pb-36 md:pt-24 md:pb-40 tracking-[-0.01em]">
        
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

                    {/* CLEANED BOTTOM CARD META BANNER */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#12151C]/95 p-3.5 rounded-lg border border-[#2B2F38] shadow-xl backdrop-blur-xl z-20 text-[9px]">
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

            {/* CTA BUTTON BLOCK - DYNAMIC LIVE PULSING */}
            <div className="mb-[40px] w-full">
              <Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl items-center">
                  {/* GOLD ACTION BUTTON with Active Pulse-Glow */}
                  <MagneticButton
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#E8C66A] via-[#F3DA93] to-[#B88728] px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-black shadow-[0_0_20px_rgba(232,198,106,0.35)] w-full transition-all duration-300 hover:scale-[1.03] animate-[pulse_2.5s_infinite_ease-in-out]"
                  >
                    <Rocket size={13} className="animate-bounce" />
                    Discovery Call
                  </MagneticButton>

                  {/* PREMIUM GLASS BUTTON 1 with Micro-Glow border */}
                  <MagneticButton
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(205,163,73,0.4)] bg-[rgba(18,21,28,0.7)] px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F5F5F2] w-full transition-all duration-300 hover:bg-[rgba(205,163,73,0.15)] hover:border-[#E8C66A] hover:shadow-[0_0_15px_rgba(232,198,106,0.15)]"
                  >
                    <FolderGit2 size={13} className="text-[#E8C66A]" />
                    View Projects
                  </MagneticButton>

                  {/* PREMIUM GLASS BUTTON 2 with Micro-Glow border */}
                  <MagneticButton
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(205,163,73,0.4)] bg-[rgba(18,21,28,0.7)] px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F5F5F2] w-full transition-all duration-300 hover:bg-[rgba(205,163,73,0.15)] hover:border-[#E8C66A] hover:shadow-[0_0_15px_rgba(232,198,106,0.15)]"
                  >
                    <Wrench size={13} className="text-[#E8C66A]" />
                    View Services
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            {/* COMBINED STATISTICS AND TRUST CHIP BAR TO THE RIGHT SIDE */}
            <div className="mb-[32px] w-full max-w-2xl flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              {/* TRUST CHIPS (LEFT ALIGNED IN FLEX CONTAINER) */}
              <Reveal>
                <div className="flex flex-wrap gap-2 max-w-xs sm:max-w-md">
                  {["MERN Stack", "UI/UX Designs", "Video Editing", "Branding"].map((chip) => (
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

              {/* STATS CONTAINERS SHIFTED AND RIGHT ALIGNED */}
              <Reveal>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full md:w-auto">
                  {stats.map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-b from-[#161922] to-[#0D1017] border border-[#232836] rounded-xl p-3 text-center min-w-[85px] sm:min-w-[100px] group transition-all duration-300 hover:from-[#1D1A15] hover:to-[#12151C] hover:border-[#E8C66A] shadow-md"
                    >
                      <div className="text-xl sm:text-2xl font-black bg-gradient-to-r from-[#FFF] to-[#E8C66A] bg-clip-text text-transparent">{stat.value}</div>
                      <div className="text-[7px] sm:text-[8px] uppercase tracking-[0.15em] text-[#9C9C9C] mt-0.5 font-bold group-hover:text-white transition-colors">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>

          {/* DESKTOP EXCLUSIVE RIGHT SIDE PROFILE CARD */}
          <div className="hidden lg:col-span-5 lg:flex justify-end items-center w-full order-2 pl-6 pb-60 ">
            <Reveal className="w-full flex justify-end">
              <div className="group relative w-full max-w-[400px]">
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

                  {/* REMOVED TEXT BLOCKS HERE FOR PURE LOOK — ONLY KEEPING LOCATION & STATUS */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-[#12151C]/95 p-4 rounded-xl border border-[#2B2F38] shadow-2xl backdrop-blur-2xl z-20">
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
            </Reveal>
          </div>
        </div>

        {/* ANIMATED SCROLL TO EXPLORE FOOTER */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-40 pointer-events-none z-10">
          <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] font-bold text-[#F5F5F2]">Scroll to Explore</p>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={12} className="text-[#CDA349]" />
          </motion.div>
        </div>

      </section>

      {/* ================= INFINITE TICKER MARQUEE BANNER ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-transparent via-[#12151C]/80 to-transparent border-y border-white/[0.04] py-3 backdrop-blur-sm z-10 -mt-20">
        <div className="flex w-max items-center">
          <motion.div 
            className="flex whitespace-nowrap gap-16 text-[11px] font-black uppercase tracking-[0.3em] text-[#F5F5F2]/40 px-8"
            animate={{ x: [0, "-33.33%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...Array(3)].map((_, mainIdx) => (
              <div key={mainIdx} className="flex gap-16">
                {agencyHooks.map((hook, hookIdx) => (
                  <span key={hookIdx} className="hover:text-[#CDA349] transition-colors duration-300 select-none">
                    {hook}
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