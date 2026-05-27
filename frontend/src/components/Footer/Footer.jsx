import React, { useEffect } from "react";
import * as LucideIcons from "lucide-react";
import { Mail, Phone } from "lucide-react";
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

  /* ✅ SAFE FALLBACK */
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

  const { message, email, phone, socials } = data;

  const copyright =
    `© ${new Date().getFullYear()} Vinod Kumar. All rights reserved.`;

  /* ✅ INVISIBLE ADMIN TRIGGER TRAP (ISSUE 4) */
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Listens for: Ctrl + Shift + A to open admin routes cleanly
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        window.open("/admin", "_blank");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Soft helper function for inline anchor scroll links
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="relative w-full bg-[#030303] border-t border-white/5 overflow-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute left-[-10%] bottom-[-20%] h-[350px] w-[350px] rounded-full bg-[#f5c96a]/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[300px] w-[300px] rounded-full bg-amber-500/5 blur-[120px]" />

      <Reveal>
        <div>
          {/* ================= STRATEGIC CLOSING AGENCY HEADER (ISSUE 1 & 3) ================= */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-4 text-center relative z-10 border-b border-white/5">
            <h2 className="text-[28px] md:text-[48px] font-bold tracking-tight text-white mb-3">
              Ready to build something{" "}
              <span className="bg-gradient-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent">
                exceptional?
              </span>
            </h2>
            <p className="text-white/60 text-[14px] md:text-[16px] max-w-xl mx-auto font-light leading-relaxed">
              {message || "Crafting premium digital experiences for modern brands, startups, and creators."}
            </p>
          </div>

          {/* ================= MAIN CONTENT MODULES ================= */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-white relative z-10 items-center">

            {/* LEFT — CORE NAVIGATION FOOTPRINT (ISSUE 5) */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-[#fff1c2] to-[#d89b1d]" />
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.4em] text-white/50">
                  Navigation
                </h3>
              </div>
              <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] font-medium text-white/60">
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-[#f5c96a] transition duration-200">About</button>
                <span className="text-white/10 text-[11px]">•</span>
                <button onClick={() => handleScrollTo("projects")} className="hover:text-[#f5c96a] transition duration-200">Work</button>
                <span className="text-white/10 text-[11px]">•</span>
                <button onClick={() => handleScrollTo("services")} className="hover:text-[#f5c96a] transition duration-200">Services</button>
                <span className="text-white/10 text-[11px]">•</span>
                <button onClick={() => handleScrollTo("contact")} className="hover:text-[#f5c96a] transition duration-200">Contact</button>
              </nav>
            </div>

            {/* CENTER — DIRECT CONTACT ACTIONS */}
            <div className="flex flex-col items-start md:items-center justify-center gap-4">
              <div
                className="flex items-center gap-4 group cursor-pointer w-fit py-1"
                onClick={() => (window.location.href = `mailto:${email}`)}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-[#f5c96a] transition duration-300 group-hover:bg-[#f5c96a]/10 group-hover:border-[#f5c96a]/20">
                  <Mail size={17} />
                </div>
                <span className="text-[15px] tracking-wide text-white/85 group-hover:text-white transition duration-300 break-all">
                  {email}
                </span>
              </div>

              <div
                className="flex items-center gap-4 group cursor-pointer w-fit py-1"
                onClick={() => (window.location.href = `tel:${phone}`)}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-[#f5c96a] transition duration-300 group-hover:bg-[#f5c96a]/10 group-hover:border-[#f5c96a]/20">
                  <Phone size={17} />
                </div>
                <span className="text-[15px] tracking-wide text-white/85 group-hover:text-white transition duration-300">
                  {phone}
                </span>
              </div>
            </div>

            {/* RIGHT — AGENCY BRAND SOCIALS (ISSUE 2) */}
            <div className="flex flex-col items-start md:items-end justify-center gap-4">
              <div className="flex items-center gap-3 md:flex-row-reverse">
                <span className="h-px w-8 bg-gradient-to-r from-[#d89b1d] to-[#fff1c2]" />
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.35em] text-white/80">
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
                      <SocialIcon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= BOTTOM METRICS & BRAND BAR ================= */}
          <div className="border-t border-white/5 px-6 md:px-12 py-6 relative flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto z-10">
            <span className="text-[13px] font-light tracking-wide text-center text-white/40">
              {copyright}
            </span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;