import * as LucideIcons from "lucide-react";
import { Mail, Phone, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFooter } from "../../context/FooterContext";

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
      "Currently open to new opportunities and collaborations. Feel free to reach out!",
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

  const AdminIconComponent =
    LucideIcons[adminIcon] || Shield;

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-transparent text-white"
    >
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute left-[-10%] top-0 h-[280px] w-[280px] rounded-full bg-white/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] top-10 h-[360px] w-[360px] rounded-full bg-amber-400/8 blur-[140px]" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 md:px-8 lg:px-10">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 gap-12 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-3 lg:gap-10 lg:px-12 lg:py-14">
            
            {/* LEFT — MESSAGE */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />
                <span className="text-[11px] uppercase tracking-[0.42em] text-amber-300/90">
                  Contact
                </span>
              </div>

              <h3 className="text-[30px] md:text-[38px] font-semibold tracking-[-0.03em] leading-tight text-white">
                Let’s Connect
              </h3>

              <p className="max-w-md text-[15px] leading-7 text-white/68">
                {message}
              </p>
            </div>

            {/* CENTER — CONTACT */}
            <div className="flex flex-col justify-center gap-4">
              <div
                className="group flex cursor-pointer items-center gap-4 rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-xl transition duration-300 hover:border-amber-300/20 hover:bg-white/[0.05]"
                onClick={() => (window.location.href = `mailto:${email}`)}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-amber-300">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.30em] text-white/40">
                    Email
                  </p>
                  <span className="mt-1 block break-all text-sm text-white/88 transition group-hover:text-amber-200">
                    {email}
                  </span>
                </div>
              </div>

              <div
                className="group flex cursor-pointer items-center gap-4 rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-xl transition duration-300 hover:border-amber-300/20 hover:bg-white/[0.05]"
                onClick={() => (window.location.href = `tel:${phone}`)}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-amber-300">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.30em] text-white/40">
                    Phone
                  </p>
                  <span className="mt-1 block text-sm text-white/88 transition group-hover:text-amber-200">
                    {phone}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — SOCIALS */}
            <div className="flex flex-col items-start gap-6 lg:items-end">
              <div className="space-y-3 text-left lg:text-right">
                <h3 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.02em] text-white">
                  Follow Me
                </h3>
                <p className="text-sm leading-7 text-white/50">
                  Connect with me across platforms and stay updated with my latest work.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                {socials.map((item, index) => {
                  const SocialIcon = getIcon(item.icon);

                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.label}
                      className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/25 hover:bg-amber-300/[0.08] hover:text-white"
                    >
                      <SocialIcon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= BOTTOM BAR ================= */}
          <div className="relative flex flex-col items-center justify-center gap-4 border-t border-white/10 px-6 py-5 text-center md:px-10 md:py-6">
            <span className="text-sm text-white/45">
              {copyright}
            </span>

            {/* ADMIN BUTTON */}
            <div className="md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2">
              <button
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-amber-300/25 hover:bg-amber-300/[0.10] hover:text-white"
                title="Admin Panel"
                onClick={() => window.open("/admin", "_blank")}
              >
                <AdminIconComponent size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;