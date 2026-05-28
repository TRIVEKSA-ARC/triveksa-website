import * as LucideIcons from "lucide-react";
import { Mail, Phone, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFooter } from "../../context/FooterContext";
import Reveal from "../Reveal";

/* ================= ICON RESOLVER ================= */
const getIcon = (iconName) => {
  if (!iconName) return LucideIcons.Github;

  // Convert "fa-github" / "Github" / "facebook" → Lucide format
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

  /* ✅ SAFE FALLBACK WITH STRONGER AGENCY TEXTS */
  const data = footer || {
    message:
      "Crafting premium digital experiences for modern brands, startups, and creators.",
    email: "contact@vinodkumar.com",
    phone: "+91 98765 43210",
    adminIcon: "Shield",
    socials: [
      { label: "Github", link: "https://github.com", icon: "github" },
      { label: "Linkedin", link: "https://linkedin.com", icon: "linkedin" },
      { label: "Instagram", link: "https://instagram.com", icon: "instagram" },
      { label: "Twitter", link: "https://twitter.com", icon: "twitter" },
    ],
  };

  const { message, email, phone, socials, adminIcon } = data;

  const copyright =
    `© ${new Date().getFullYear()} Vinod Kumar. All rights reserved.`;

  return (
    <footer id="contact" className="relative w-full bg-[#030303] border-t border-white/5 overflow-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-[350px] w-[350px] rounded-full bg-[#f5c96a]/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[300px] w-[300px] rounded-full bg-amber-500/5 blur-[120px]" />

      <Reveal>
        <div>
          {/* ================= MAIN CONTENT ================= */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-white relative z-10">

            {/* LEFT — MESSAGE */}
            <div className="flex flex-col items-start space-y-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-[#fff1c2] to-[#d89b1d]" />
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.4em] bg-gradient-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                  Trivixa Studio
                </h3>
              </div>
              <p className="text-white/80 text-[16px] leading-7 max-w-sm font-light">
                {message || "Crafting premium digital experiences for modern brands, startups, and creators."}
              </p>
            </div>

            {/* CENTER — CONTACT INFO WITH STRONGER CTA */}
            <div className="flex flex-col items-start md:items-center justify-center gap-5">
              <span className="text-[14px] md:text-[15px] font-medium tracking-wide text-white/50 md:text-center block mb-1">
                Ready to build something exceptional?
              </span>

              <div
                className="flex items-center gap-4 group cursor-pointer w-fit py-1"
                onClick={() => (window.location.href = `mailto:${email}`)}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-[#f5c96a] transition duration-300 group-hover:bg-[#f5c96a]/10 group-hover:border-[#f5c96a]/20">
                  <Mail size={18} />
                </div>
                <span className="text-[16px] tracking-wide text-white/85 group-hover:text-white transition duration-300 break-all">
                  {email}
                </span>
              </div>

              <div
                className="flex items-center gap-4 group cursor-pointer w-fit py-1"
                onClick={() => (window.location.href = `tel:${phone}`)}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-[#f5c96a] transition duration-300 group-hover:bg-[#f5c96a]/10 group-hover:border-[#f5c96a]/20">
                  <Phone size={18} />
                </div>
                <span className="text-[16px] tracking-wide text-white/85 group-hover:text-white transition duration-300">
                  {phone}
                </span>
              </div>
            </div>

            {/* RIGHT — SOCIALS */}
            <div className="flex flex-col items-start md:items-end justify-center gap-5">
              <div className="flex items-center gap-3 md:flex-row-reverse">
                <span className="h-px w-8 bg-gradient-to-r from-[#d89b1d] to-[#fff1c2]" />
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.4em] text-white/70">
                  Connect With Trivixa
                </h3>
              </div>

              <div className="flex gap-3">
                {socials.map((item, index) => {
                  const SocialIcon = getIcon(item.icon);

                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.label}
                      className="p-3 rounded-full border border-white/5 bg-white/[0.02] text-white/80 hover:text-white hover:bg-[#f5c96a]/10 hover:border-[#f5c96a]/30 hover:scale-105 transition-all duration-300 backdrop-blur-md"
                    >
                      <SocialIcon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= BOTTOM BAR ================= */}
          <div className="border-t border-white/5 px-6 md:px-12 py-6 relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-7xl mx-auto z-10">
            <span className="text-[13px] md:text-[14px] font-light tracking-wide text-center text-white/50">
              {copyright}
            </span>

            {/* INVISIBLE TRIGGER TARGET FOR ADMIN PANEL */}
            <div className="absolute right-4 bottom-4 z-50">
              <button
                className="w-3 h-3 bg-transparent border-none cursor-default opacity-0 select-none outline-none"
                title=""
                onClick={() => window.open("/admin", "_blank")}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;