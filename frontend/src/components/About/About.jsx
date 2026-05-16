import { motion } from "framer-motion";
import { useAbout } from "../../context/AboutContext";

/* ================= TEXT RENDER HELPER ================= */
const renderStyledText = (text, gradient = false) => {
  if (!text) return null;

  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <motion.span
        key={index}
        initial={{ opacity: 0.6, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={
          gradient
            ? "bg-gradient-to-r from-[#fff1c2] via-[#f5c96a] to-[#d89b1d] bg-clip-text text-transparent font-bold"
            : "text-white font-semibold"
        }
      >
        {part}
      </motion.span>
    ) : (
      part
    )
  );
};

function About() {
  const { about, loading } = useAbout();

  if (loading) {
    return (
      <section className="py-32 text-center text-white/60">
        Loading About...
      </section>
    );
  }

  const data = about || {
    subtitle: "About Me",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    highlightText: "",
    services: [],
    image: null,
    location: "",
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent px-6 py-24 text-white md:px-8 lg:px-10"
    >
      {/* SUBTLE AMBIENT LIGHT */}
      <div className="pointer-events-none absolute right-[-10%] top-10 h-[420px] w-[420px] rounded-full bg-amber-400/8 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-8%] bottom-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-[110px]" />

      {/* GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-center">
        
        {/* LEFT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1 lg:col-span-7"
        >
          {/* SUBTITLE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent" />

            <span className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.42em] text-amber-300/90">
              {data.subtitle}
            </span>
          </motion.div>

          {/* DECORATIVE QUOTE */}
          <span className="pointer-events-none absolute -top-10 -left-2 select-none text-[100px] md:text-[140px] leading-none text-white/[0.04] font-serif">
            “
          </span>

          {/* MAIN TEXT BLOCK */}
          <div className="relative z-10 space-y-7">
            {[data.paragraph1, data.paragraph2, data.paragraph3].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.7 }}
                viewport={{ once: true }}
                className="max-w-3xl text-[15px] md:text-[17px] leading-8 text-white/92 font-light"
              >
                {renderStyledText(text)}
              </motion.p>
            ))}

            {/* HIGHLIGHT TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl pt-2 text-[28px] leading-[1.2] md:text-[40px] font-bold tracking-[-0.03em] text-white"
            >
              {renderStyledText(data.highlightText, true)}
            </motion.p>
          </div>

          {/* SERVICES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {data.services.map((service) => (
              <motion.span
                key={service}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] text-white/78 backdrop-blur-xl transition hover:border-amber-300/25 hover:bg-amber-300/[0.06] hover:text-white"
              >
                {service}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="group relative w-full max-w-[400px]">
            {/* GLOW BEHIND CARD */}
            <div className="absolute inset-4 -z-10 bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* MAIN IMAGE CONTAINER */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-2.5 backdrop-blur-2xl transition-all duration-700 group-hover:border-amber-400/30 group-hover:shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
              
              {/* INNER FRAME IMAGE */}
              <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-[#0d0d0d]">
                {data.image?.url && (
                  <img
                    src={data.image.url}
                    alt="VK Profile Visual"
                    className="h-full w-full object-cover opacity-90 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:opacity-100"
                  />
                )}
                
                {/* GRADIENT OVERLAY FOR TEXT READABILITY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 transition-opacity duration-700 group-hover:from-black/95" />
              </div>

              {/* FLOATING TOP BADGE */}
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-amber-200/80">
                  Core_Node
                </span>
              </div>

              {/* INTEGRATED BOTTOM METADATA OVERLAY */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/40">
                      Operational Base
                    </p>
                    <p className="mt-1 text-[13px] font-semibold tracking-wide text-white/90">
                      {data.location || "INDIA"}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/40">
                      Status
                    </p>
                    <p className="mt-1 text-[13px] font-bold tracking-wide text-emerald-400">
                      ACTIVE
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* MINIMAL DESIGN ACCENTS FRAME OUTSIDE */}
            <div className="absolute -left-3 -top-3 h-8 w-8 border-l border-t border-white/20 rounded-tl-xl transition-all duration-500 group-hover:-left-4 group-hover:-top-4 group-hover:border-amber-400/40" />
            <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b border-r border-white/20 rounded-br-xl transition-all duration-500 group-hover:-right-4 group-hover:-bottom-4 group-hover:border-amber-400/40" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;