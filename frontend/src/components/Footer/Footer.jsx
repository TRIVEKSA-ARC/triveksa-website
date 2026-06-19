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

function Footer({ onOpenModal }) {
  const navigate = useNavigate();
  const { footer } = useFooter();

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
      
      {/* AMBIENT BACKGROUND GLOWS — Reflected from image_1d0280.jpg */}
      <div className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-[350px] w-[350px] rounded-full bg-[#f5c96a]/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[300px] w-[300px] rounded-full bg-[#0052cc]/15 blur-[120px]" />

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
                  className="h-11 w-11 object-contain opacity-90 drop-shadow-[0_0_18px_rgba(0,82,204,0.3)]"
                />

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-[#0052cc] to-[#f5c96a]" />
                  <h3 className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.45em] bg-gradient-to-r from-[#0066ff] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                    Trivixa Studio
                  </h3>
                </div>
              </div>

              <p className="text-white/90 text-[14px] leading-relaxed max-w-sm font-medium">
                {message}
              </p>

              <button
                onClick={onOpenModal}
                className="mt-4 rounded-full bg-gradient-to-r from-[#0066ff] via-[#f5c96a] to-[#d89b1d] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition hover:scale-105 shadow-lg shadow-[#0052cc]/20"
              >
                Start A Project
              </button>

              <a
                href="https://wa.me/919652155580"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-full border border-[#0066ff]/40 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0066ff] hover:bg-[#0066ff]/10 transition duration-300"
              >
                WhatsApp Us
              </a>
            </div>

            {/* CENTER — INTERACTIVE ENGAGEMENT CALLOUT */}
            <div className="flex flex-col items-start md:items-center justify-start space-y-4 md:w-full">
              <div className="w-full max-w-xs flex flex-col items-start gap-3">
                <span className="text-[13px] font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-transparent block">
                  Ready to build something exceptional?
                </span>

                {/* EMAIL — Electric Blue Accent */}
                <div
                  className="flex items-center gap-4 group cursor-pointer py-1 w-full border-b border-white/[0.03] hover:border-[#0066ff]/30 transition duration-300"
                  onClick={() => (window.location.href = `mailto:${email}`)}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0066ff]/30 bg-[#0066ff]/5 text-[#0066ff] transition duration-300 group-hover:bg-[#0066ff]/20 group-hover:border-[#0066ff]/50">
                    <Mail size={15} />
                  </div>
                  <span className="text-[15px] tracking-wide text-white group-hover:text-[#0066ff] transition duration-300 break-all font-medium">
                    {email}
                  </span>
                </div>

                {/* PHONE — Luxury Gold Accent */}
                <div
                  className="flex items-center gap-4 group cursor-pointer py-1 w-full border-b border-white/[0.03] hover:border-[#f5c96a]/30 transition duration-300"
                  onClick={() => (window.location.href = `tel:${phone}`)}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f5c96a]/30 bg-[#f5c96a]/5 text-[#f5c96a] transition duration-300 group-hover:bg-[#f5c96a]/20 group-hover:border-[#f5c96a]/50">
                    <Phone size={15} />
                  </div>
                  <span className="text-[15px] tracking-wide text-white group-hover:text-[#f5c96a] transition duration-300 font-medium">
                    {phone}
                  </span>
                </div>

                {/* LOCATION — Dynamic Duo Color Mix Accent */}
                <div
                  className="flex items-center gap-4 group cursor-pointer py-1 w-full border-b border-white/[0.03] hover:border-[#0066ff]/30 transition duration-300"
                  onClick={() =>
                    window.open(
                      "YOUR_GOOGLE_MAP_LINK",
                      "_blank"
                    )
                  }
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0066ff]/30 bg-[#0066ff]/5 text-[#0066ff] transition duration-300 group-hover:bg-[#0066ff]/20 group-hover:border-[#f5c96a]/40 group-hover:text-[#f5c96a]">
                    <MapPin size={15} />
                  </div>
                  <span className="text-[15px] tracking-wide text-white group-hover:text-[#0066ff] transition duration-300 font-medium">
                    Shadnagar, Hyderabad
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — BRAND NETWORKS */}
            <div className="flex flex-col items-start md:items-end justify-start space-y-4 md:w-full">
              <div className="flex items-center gap-3 md:flex-row-reverse">
                <span className="h-px w-8 bg-gradient-to-r from-[#0052cc] to-[#f5c96a]" />
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
                      className="p-3 rounded-full border border-white/10 bg-white/[0.02] text-white/80 hover:text-[#0066ff] hover:bg-[#0066ff]/10 hover:border-[#0066ff]/40 hover:scale-105 transition-all duration-300 backdrop-blur-md"
                    >
                      <SocialIcon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= CLOSING UTILITY BAR ================= */}
          <div className="border-t border-white/5 py-6 relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 z-10">
            <span className="text-[12px] font-medium tracking-widest uppercase text-center text-white/40">
              {copyright}
            </span>

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