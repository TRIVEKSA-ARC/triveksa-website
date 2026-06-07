import * as LucideIcons from "lucide-react";
import { Mail, Phone, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFooter } from "../../context/FooterContext";
import Reveal from "../Reveal";
import ContactModal from "../Contact/ContactModal";

/* ================= ICON RESOLVER ================= */
const getIcon = (iconName) => {
  if (!iconName) return LucideIcons.Github;

  const formatted =
    iconName
      .replace("fa-", "")
      .replace(/(^\w|-\w)/g, (m) =>
        m.replace("-", "").toUpperCase()
      );

  return LucideIcons[formatted] || LucideIcons.Github;
};

function Footer() {
  const navigate = useNavigate();
  const { footer } = useFooter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* ✅ SAFE FALLBACK WITH REFINED PREMIUM AGENCY DATA */
  const data = footer || {
    message:
      "Building modern digital experiences through development, design, branding, and creative technology — crafted for startups, creators, and next-generation businesses.",
    email: "hello@triveksaarc.com",
    phone: "9652155580",
    adminIcon: "Shield",
    socials: [
      { label: "Instagram", link: "https://instagram.com", icon: "instagram" },
      { label: "Youtube", link: "https://youtube.com", icon: "youtube" },
      { label: "Github", link: "https://github.com", icon: "github" },
      { label: "Facebook", link: "https://facebook.com", icon: "facebook" },
    ],
  };

  const { message, email, phone, socials } = data;

  const copyright =
    `© ${new Date().getFullYear()} Vinod Kumar. All rights reserved.`;

  return (
    <footer id="contact" className="relative w-full bg-[#030303] border-t border-white/5 overflow-hidden">
      
      {/* MODAL IS PLACED HERE OUTSIDE REVEAL TO PREVENT Z-INDEX/CLIPPING ISSUES */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-[350px] w-[350px] rounded-full bg-[#f5c96a]/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[300px] w-[300px] rounded-full bg-amber-500/5 blur-[120px]" />

      <Reveal>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* ================= MAIN CONTENT GRID (PADDING REDUCED) ================= */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-white relative z-10 items-start">

            {/* LEFT — CORE STUDIO IDENTITY WITH PREMIUM INLINE LOGO */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/Logo.png"
                  alt="Trivixa Logo"
                  className="h-11 w-11 object-contain opacity-90 drop-shadow-[0_0_18px_rgba(245,201,106,0.18)]"
                />

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-[#fff1c2] to-[#d89b1d]" />
                  <h3 className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.45em] bg-gradient-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                    Trivixa Studio
                  </h3>
                </div>
              </div>

              <p className="text-white/90 text-[14px] leading-relaxed max-w-sm font-medium">
                {message}
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 rounded-full bg-gradient-to-r from-[#f5c96a] to-[#d89b1d] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition hover:scale-105"
              >
                Start A Project
              </button>
            </div>

            {/* CENTER — INTERACTIVE ENGAGEMENT CALLOUT */}
            <div className="flex flex-col items-start md:items-center justify-start space-y-4 md:w-full">
              <div className="w-full max-w-xs flex flex-col items-start gap-3">
                <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/60 block">
                  Ready to build something exceptional?
                </span>

                <div
                  className="flex items-center gap-4 group cursor-pointer py-1 w-full border-b border-white/[0.03] hover:border-[#f5c96a]/20 transition duration-300"
                  onClick={() => (window.location.href = `mailto:${email}`)}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#f5c96a] transition duration-300 group-hover:bg-[#f5c96a]/10 group-hover:border-[#f5c96a]/20">
                    <Mail size={15} />
                  </div>
                  <span className="text-[15px] tracking-wide text-white group-hover:text-[#f5c96a] transition duration-300 break-all font-medium">
                    {email}
                  </span>
                </div>

                <div
                  className="flex items-center gap-4 group cursor-pointer py-1 w-full border-b border-white/[0.03] hover:border-[#f5c96a]/20 transition duration-300"
                  onClick={() => (window.location.href = `tel:${phone}`)}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[#f5c96a] transition duration-300 group-hover:bg-[#f5c96a]/10 group-hover:border-[#f5c96a]/20">
                    <Phone size={15} />
                  </div>
                  <span className="text-[15px] tracking-wide text-white group-hover:text-[#f5c96a] transition duration-300 font-medium">
                    {phone}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — BRAND NETWORKS */}
            <div className="flex flex-col items-start md:items-end justify-start space-y-4 md:w-full">
              <div className="flex items-center gap-3 md:flex-row-reverse">
                <span className="h-px w-8 bg-gradient-to-r from-[#d89b1d] to-[#fff1c2]" />
                <h3 className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.45em] text-white/80">
                  Connect With Trivixa
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 justify-start md:justify-end">
                {socials.map((item, index) => {
                  const SocialIcon = getIcon(item.icon);

                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.label}
                      className="p-3 rounded-full border border-white/10 bg-white/[0.02] text-white/80 hover:text-[#f5c96a] hover:bg-[#f5c96a]/10 hover:border-[#f5c96a]/30 hover:scale-105 transition-all duration-300 backdrop-blur-md"
                    >
                      <SocialIcon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= CLOSING UTILITY BAR (PADDING REDUCED) ================= */}
          <div className="border-t border-white/5 py-6 relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 z-10">
            <span className="text-[12px] font-medium tracking-widest uppercase text-center text-white/40">
              {copyright}
            </span>

            {/* ADMIN ICON IN RIGHT BOTTOM CORNER */}
            <div className="static md:absolute md:right-0 md:bottom-5">
              <button
                className="p-2 rounded-full border border-white/10 bg-white/[0.02] text-white/40 hover:text-[#f5c96a] hover:bg-[#f5c96a]/10 hover:border-[#f5c96a]/20 transition-all duration-300"
                title="Admin Panel"
                onClick={() => window.open("/admin", "_blank")}
              >
                <Shield size={14} />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;