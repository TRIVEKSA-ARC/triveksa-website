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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20 items-start">
        
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
                className="max-w-3xl text-[15px] md:text-[17px] leading-8 text-white/72 font-light"
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
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative w-full max-w-[420px]"
          >
            {/* OUTER FRAME */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] border border-amber-300/25" />

            {/* MAIN CARD */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              
              {/* IMAGE */}
              <div className="relative h-[380px] w-full overflow-hidden rounded-[22px] bg-black/30 md:h-[500px]">
                {data.image?.url && (
                  <img
                    src={data.image.url}
                    alt="About Image"
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </div>

              {/* TOP TAG */}
              <div className="absolute left-7 top-7 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                <span className="text-[10px] uppercase tracking-[0.32em] text-white/70">
                  Profile
                </span>
              </div>

              {/* LOCATION CARD */}
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-7 left-7 right-7 rounded-[18px] border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-xl"
              >
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/45">
                  Location
                </p>
                <p className="mt-2 text-sm font-medium text-white/92">
                  {data.location}
                </p>
              </motion.div>
            </div>

            {/* SMALL CORNER DETAIL */}
            <div className="absolute -right-3 top-10 h-14 w-14 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;