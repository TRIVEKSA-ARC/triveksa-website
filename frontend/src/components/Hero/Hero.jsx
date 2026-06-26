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
      <section className="relative min-h-screen w-full overflow-hidden bg-transparent text-[#F5F5F2] flex items-center font-sans pt-12 pb-24 md:pt-28 md:pb-32 tracking-[-0.01em]">
        
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

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 md:px-10 lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:px-12 items-center">
          
          {/* LEFT SIDE & MAIN HEADER ARCHITECTURE */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 w-full">

            {/* SMALL LABEL */}
            <div className="mb-6">
              <Reveal>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#E8C66A] to-transparent" />
                  <p className="text-[10px] sm:text-[12px] uppercase tracking-[0.35em] sm:tracking-[0.45em] text-[#A3A3A3] font-bold drop-shadow-md leading-relaxed">
                    Founder • Creative Technologist
                  </p>
                </div>
              </Reveal>
            </div>

            {/* LUXURY NAME MATRIX */}
            <div className="mb-6">
              <Reveal>
                <div className="leading-[0.85] uppercase tracking-[-0.05em] font-sans">
                  <span className="block text-[52px] sm:text-[85px] md:text-[105px] xl:text-[120px] font-black text-[#F5F5F2] drop-shadow-sm">
                    Vinod
                  </span>
                  <span className="block text-[52px] sm:text-[85px] md:text-[105px] xl:text-[120px] font-black bg-gradient-to-r from-[#FFF7E2] via-[#E8C66A] to-[#B88728] bg-clip-text text-transparent filter drop-shadow-sm">
                    Kumar
                  </span>
                </div>
              </Reveal>
            </div>

            {/* INTERACTIVE PROFILE CARD — MOBILE VIEW ONLY */}
            <div className="block lg:hidden my-8 w-full max-w-[350px] mx-auto">
              <Reveal delay={0.1}>
                <div className="group relative w-full">
                  <div className="absolute -inset-px -z-10 bg-gradient-to-tr from-[#CDA349]/20 to-white/5 rounded-3xl opacity-40 blur-lg" />
                  <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-3xl border border-[#2B2F38] bg-[#12151C]/60 p-2.5 backdrop-blur-2xl">
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

                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-[#07090F]/80 px-3 py-1 backdrop-blur-xl z-20">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CDA349] opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#CDA349]"></span>
                      </span>
                      <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/90">Founder Profile</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#12151C]/95 p-3 rounded-lg border border-[#2B2F38] shadow-xl backdrop-blur-xl z-20 text-[9px]">
                      <div>
                        <p className="font-bold text-zinc-500 uppercase tracking-wider text-[7px]">Location</p>
                        <p className="font-bold text-[#F5F5F2] mt-0.5">{data.location || "INDIA"}</p>
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
              </Reveal>
            </div>

            {/* ROLE STRIP */}
            <div className="mb-8">
              <Reveal>
                <div className="flex flex-col space-y-2 border-l-2 border-[#CDA349] pl-4 py-0.5">
                  <span className="text-[13px] sm:text-[15px] xl:text-[17px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#F5F5F2] font-extrabold leading-snug">
                    Full Stack Developer • UI/UX Designer
                  </span>
                  <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E8C66A] font-medium">
                    Helping Brands Build Modern Digital Products
                  </span>
                </div>
              </Reveal>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-8">
              <Reveal>
                <p className="max-w-xl text-[14px] sm:text-[16px] xl:text-[17px] leading-relaxed md:leading-7 text-[#C4C6CC] font-normal font-sans">
                  I help businesses and startups build premium websites, intuitive user experiences, and powerful digital brands that create lasting impressions and drive business growth.
                </p>
              </Reveal>
            </div>

            {/* CTA BUTTON BLOCK — REDESIGNED INTO 1 SOLID ROW */}
            <div className="mb-10 w-full">
              <Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl items-center">
                  <MagneticButton
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-[#E8C66A] via-[#F3DA93] to-[#B88728] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-black shadow-[0_0_20px_rgba(232,198,106,0.25)] w-full transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Rocket size={12} className="animate-pulse" />
                    Discovery Call
                  </MagneticButton>

                  <MagneticButton
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(205,163,73,0.3)] bg-[rgba(18,21,28,0.6)] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F5F5F2] w-full transition-all duration-300 hover:bg-[rgba(205,163,73,0.12)] hover:border-[#E8C66A]"
                  >
                    <FolderGit2 size={12} className="text-[#E8C66A]" />
                    View Projects
                  </MagneticButton>

                  <MagneticButton
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(205,163,73,0.3)] bg-[rgba(18,21,28,0.6)] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F5F5F2] w-full transition-all duration-300 hover:bg-[rgba(205,163,73,0.12)] hover:border-[#E8C66A]"
                  >
                    <Wrench size={12} className="text-[#E8C66A]" />
                    View Services
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            {/* TRUST CHIP BAR */}
            <div className="w-full max-w-xl">
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  {["MERN Stack", "UI/UX Designs", "Video Editing", "Branding"].map((chip) => (
                    <span 
                      key={chip}
                      className="inline-flex items-center gap-2 rounded-full border border-[#232730] bg-[#0F1117] px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-[#D1D1D1] font-semibold transition-all duration-300 hover:border-[#CDA349]/60 hover:text-white"
                    >
                      <CheckCircle2 size={11} className="text-[#CDA349] shrink-0" />
                      {chip}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>

          {/* DESKTOP EXCLUSIVE RIGHT SIDE PROFILE & STATISTICS BLOCK */}
          <div className="hidden lg:col-span-5 lg:flex flex-col items-center xl:items-end justify-center w-full order-2 pl-4">
            <div className="w-full max-w-[380px] xl:max-w-[400px] flex flex-col gap-5">
              
              {/* CLEAN LOGO & IMAGE VISUAL CARD */}
              <Reveal className="w-full">
                <div className="group relative w-full">
                  <div className="absolute -inset-px -z-10 bg-gradient-to-tr from-[#CDA349]/15 to-white/5 rounded-3xl opacity-40 blur-xl transition duration-700 group-hover:opacity-50" />
                  <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-3xl border border-[#252932] bg-[#11141A] p-2 backdrop-blur-3xl transition-all duration-700 group-hover:border-[#CDA349]/70 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    
                    <div className="relative h-full w-full overflow-hidden rounded-[1.15rem] bg-[#05070A] border border-white/5 flex flex-row">
                      <motion.div 
                        className="flex h-full w-[400%] flex-nowrap flex-shrink-0"
                        animate={{ x: ["0%", "0%", "-25%", "-25%", "-50%"] }}
                        transition={{ times: [0, 0.35, 0.45, 0.85, 1], ease: "easeInOut", duration: 20, repeat: Infinity }}
                      >
                        <div className="h-full w-1/4 flex-shrink-0 bg-[#05070A] relative">
                          <img src="/Logo.png" alt="Trivixa Arc Logo" className="h-full w-full object-cover filter drop-shadow-md select-none" />
                        </div>
                        <div className="h-full w-1/4 flex-shrink-0 relative">
                          {data.image?.url ? (
                            <img src={data.image.url} alt="Vinod Kumar Profile" className="h-full w-full object-cover select-none" />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center text-white/10 text-[10px] tracking-widest uppercase font-sans">Profile Image</div>
                          )}
                        </div>
                        <div className="h-full w-1/4 flex-shrink-0 bg-[#05070A] relative">
                          <img src="/Logo.png" alt="Trivixa Arc Logo" className="h-full w-full object-cover filter drop-shadow-md select-none" />
                        </div>
                        <div className="h-full w-1/4 flex-shrink-0 relative">
                          {data.image?.url ? (
                            <img src={data.image.url} alt="Vinod Kumar Profile" className="h-full w-full object-cover select-none" />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center text-white/10 text-[10px] tracking-widest uppercase font-sans">Profile Image</div>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* BADGE FLAG */}
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#05070A]/80 px-3 py-1 backdrop-blur-xl shadow-md z-20">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CDA349] opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#CDA349]"></span>
                      </span>
                      <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/90">Founder Profile</span>
                    </div>

                    {/* METADATA BAR (CLEAN & SQUASHED CONTROLS) */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#0E1117]/95 p-3 rounded-xl border border-[#232730] shadow-xl backdrop-blur-xl z-20">
                      <div>
                        <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#808080]">Location</p>
                        <p className="text-[11px] font-bold text-[#F5F5F2] tracking-wide mt-0.5">{data.location || "INDIA"}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#808080]">Status</p>
                        <p className="text-[11px] font-extrabold text-emerald-400 flex items-center gap-1.5 mt-0.5 justify-end">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </Reveal>

              {/* STATS CONTAINERS EXPANDED WITH RICH AIRY PADDING */}
              <Reveal className="w-full">
                <div className="grid grid-cols-2 gap-3 w-full">
                  {stats.map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-b from-[#12151C] to-[#0A0D12] border border-[#232730] rounded-2xl p-4 text-center group transition-all duration-300 hover:border-[#E8C66A]/60 hover:shadow-[0_10px_25px_rgba(232,198,106,0.05)] shadow-md"
                    >
                      <div className="text-2xl font-black bg-gradient-to-r from-[#FFFFFF] to-[#E8C66A] bg-clip-text text-transparent font-sans tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[8px] uppercase tracking-[0.2em] text-[#91949A] mt-1 font-bold group-hover:text-white transition-colors">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

            </div>
          </div>

        </div>

        {/* ANIMATED SCROLL TO EXPLORE FOOTER */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-30 pointer-events-none z-10">
          <p className="text-[8px] uppercase tracking-[0.35em] font-bold text-[#F5F5F2]">Scroll to Explore</p>
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown size={11} className="text-[#CDA349]" />
          </motion.div>
        </div>

      </section>

      {/* ================= INFINITE TICKER MARQUEE BANNER ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-transparent via-[#12151C]/80 to-transparent border-y border-white/[0.03] py-4.5 backdrop-blur-sm z-10">
        <div className="flex w-max items-center">
          <motion.div 
            className="flex whitespace-nowrap gap-16 text-[11px] font-black uppercase tracking-[0.3em] text-[#F5F5F2]/35 px-8"
            animate={{ x: [0, "-33.33%"] }}
            transition={{ ease: "linear", duration: 28, repeat: Infinity }}
          >
            {[...Array(3)].map((_, mainIdx) => (
              <div key={mainIdx} className="flex gap-16">
                {agencyHooks.map((hook, hookIdx) => (
                  <span key={hookIdx} className="hover:text-[#CDA349] transition-colors duration-300 select-none cursor-default font-sans">
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