import * as LucideIcons from "lucide-react";
import { Mail, Phone, Shield, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFooter } from "../../context/FooterContext";
import Reveal from "../Reveal";

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

/* Full App-Like Branding background classes matching premium digital styling */
const getSocialBrandClass = (iconName) => {
  const name = iconName?.toLowerCase() || "";
  if (name.includes("instagram")) {
    return "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_4px_14px_rgba(238,42,123,0.25)] hover:opacity-90";
  }
  if (name.includes("youtube")) {
    return "bg-[#FF0000] text-white shadow-[0_4px_14px_rgba(255,0,0,0.25)] hover:opacity-90";
  }
  if (name.includes("github")) {
    return "bg-[#24292e] text-white shadow-[0_4px_14px_rgba(36,41,46,0.25)] hover:opacity-90";
  }
  if (name.includes("facebook")) {
    return "bg-[#1877F2] text-white shadow-[0_4px_14px_rgba(24,119,242,0.25)] hover:opacity-90";
  }
  if (name.includes("linkedin")) {
    return "bg-[#0077B5] text-white shadow-[0_4px_14px_rgba(0,119,181,0.25)] hover:opacity-90";
  }
  return "bg-white text-black hover:opacity-90";
};

function Footer({ onOpenModal, onOpenWhatsApp }) {
  const navigate = useNavigate();
  const { footer } = useFooter();

  /* ✅ SAFE FALLBACK WITH REFINED PREMIUM AGENCY DATA WITH LINKEDIN ADDED */
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
      { label: "LinkedIn", link: "https://www.linkedin.com/in/vinod-kumar-kattoju-a90659418/", icon: "linkedin" },
    ],
  };

  const { message, email, phone, socials } = data;

  const copyright =
    `© ${new Date().getFullYear()} Vinod Kumar. All rights reserved.`;

  return (
    <footer id="contact" className="relative w-full bg-[#020611] border-t border-white/5 overflow-hidden">
      
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute left-[-5%] bottom-[-10%] h-[350px] w-[350px] rounded-full bg-white/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-[15%] bottom-[-20%] h-[400px] w-[400px] rounded-full bg-[#f5c96a]/10 blur-[140px]" />

      <Reveal>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* ================= MAIN CONTENT GRID ================= */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-white relative z-10 items-start">

            {/* LEFT — CORE STUDIO IDENTITY */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/Logo.png"
                  alt="Trivixa Logo"
                  className="h-11 w-11 object-contain opacity-90 drop-shadow-[0_0_18px_rgba(245,201,106,0.2)]"
                />

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-white to-[#f5c96a]" />
                  <h3 className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.45em] bg-gradient-to-r from-white via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                    Trivixa Studio
                  </h3>
                </div>
              </div>

              <p className="text-white/80 text-[14px] leading-relaxed max-w-sm font-medium">
                {message}
              </p>

              {/* Start a Project with Premium Gold Styling */}
              <button
                onClick={onOpenModal}
                className="mt-4 rounded-full bg-gradient-to-r from-white via-[#f5c96a] to-[#d89b1d] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition hover:scale-105 shadow-lg shadow-[#f5c96a]/15"
              >
                Start A Project
              </button>
            </div>

            {/* CENTER — INTERACTIVE ENGAGEMENT CALLOUT */}
            <div className="flex flex-col items-start md:items-center justify-start space-y-4 md:w-full">
              <div className="w-full max-w-xs flex flex-col items-start gap-3">
                <span className="text-[13px] font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-transparent block">
                  Ready to build something exceptional?
                </span>

                {/* EMAIL — Luxury White Accent */}
                <div
                  className="flex items-center gap-4 group cursor-pointer py-1 w-full border-b border-white/[0.04] hover:border-white/30 transition duration-300"
                  onClick={() => (window.location.href = `mailto:${email}`)}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition duration-300 group-hover:bg-white/10 group-hover:border-white/40">
                    <Mail size={15} />
                  </div>
                  <span className="text-[15px] tracking-wide text-white group-hover:text-white/80 transition duration-300 break-all font-medium">
                    {email}
                  </span>
                </div>

                {/* PHONE — Luxury Gold Accent */}
                <div
                  className="flex items-center gap-4 group cursor-pointer py-1 w-full border-b border-white/[0.04] hover:border-[#f5c96a]/30 transition duration-300"
                  onClick={() => (window.location.href = `tel:${phone}`)}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f5c96a]/30 bg-[#f5c96a]/5 text-[#f5c96a] transition duration-300 group-hover:bg-[#f5c96a]/20 group-hover:border-[#f5c96a]/50">
                    <Phone size={15} />
                  </div>
                  <span className="text-[15px] tracking-wide text-white group-hover:text-[#f5c96a] transition duration-300 font-medium">
                    {phone}
                  </span>
                </div>

                {/* LOCATION — Clean Luxury Accent */}
                <div
                  className="flex items-center gap-4 group cursor-pointer py-1 w-full border-b border-white/[0.04] hover:border-[#f5c96a]/30 transition duration-300"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/dUobsAHuVsqPuQFr7",
                      "_blank"
                    )
                  }
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition duration-300 group-hover:bg-[#f5c96a]/10 group-hover:border-[#f5c96a]/40 group-hover:text-[#f5c96a]">
                    <MapPin size={15} />
                  </div>
                  <span className="text-[15px] tracking-wide text-white group-hover:text-[#f5c96a] transition duration-300 font-medium">
                    Hyderabad , India
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — BRAND NETWORKS WITH IMPROVED GAP AND COHESIVE WHATSAPP BUTTON */}
            <div className="flex flex-col items-start md:items-end justify-start space-y-6 md:w-full">
              <div className="flex flex-col items-start md:items-end space-y-4 w-full">
                <div className="flex items-center gap-3 md:flex-row-reverse">
                  <span className="h-px w-8 bg-gradient-to-r from-white to-[#f5c96a]" />
                  <h3 className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.45em] text-white/80">
                    Connect With Trivixa
                  </h3>
                </div>

                {/* SQUARED APP LOGOS WITH GOOD GAP (gap-6) */}
                <div className="flex flex-wrap gap-6 justify-start md:justify-end">
                  {socials.map((item, index) => {
                    const SocialIcon = getIcon(item.icon);
                    const brandLogoClasses = getSocialBrandClass(item.icon);

                    return (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={item.label}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl hover:scale-105 transition-all duration-300 ${brandLogoClasses}`}
                      >
                        <SocialIcon size={18} strokeWidth={2.5} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* WhatsApp Us Button */}
              <div className="w-full flex justify-start md:justify-end pt-3">
                <button
                  onClick={onOpenWhatsApp}
                  className="inline-block rounded-full bg-gradient-to-r from-white via-[#f5c96a] to-[#d89b1d] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition hover:scale-105 shadow-lg shadow-[#f5c96a]/15 text-center"
                >
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>

          {/* ================= CLOSING UTILITY BAR ================= */}
          <div className="border-t border-white/5 py-6 relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 z-10">
            <span className="text-[12px] font-medium tracking-widest uppercase text-center text-white/40">
              {copyright}
            </span>

            {/* Admin Shield Icon perfectly placed into the absolute extreme right bottom corner */}
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