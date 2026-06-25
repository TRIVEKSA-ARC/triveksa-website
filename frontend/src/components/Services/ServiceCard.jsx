import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        sm:rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-[#111111]/90
        via-[#161616]/85
        to-[#0b0b0b]/90
        backdrop-blur-2xl
        p-6
        sm:p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4AF37]/60
        hover:shadow-[0_15px_45px_rgba(212,175,55,0.12)]
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Premium Hover Line */}
      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-0
          bg-[#D4AF37]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Icon */}
      <div
        className="
          mb-5
          sm:mb-6
          flex
          h-14
          w-14
          sm:h-16
          sm:w-16
          items-center
          justify-center
          rounded-xl
          sm:rounded-2xl
          bg-[#D4AF37]/10
          text-2xl
          sm:text-3xl
          text-[#D4AF37]
          border
          border-[#D4AF37]/20
          transition-transform
          duration-500
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-[#F8F8F8]">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mb-6 sm:mb-8 text-sm sm:text-base text-zinc-400 leading-7 sm:leading-8">
        {service.description}
      </p>

      {/* Features */}
      <div className="space-y-3">
        {service.features?.map((feature, index) => (
          <div
            key={index}
            className="flex items-start sm:items-center gap-3 text-sm sm:text-base text-zinc-300"
          >
            <div className="mt-2 sm:mt-0 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
            <span className="leading-tight">{feature}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        className="
          mt-8
          sm:mt-10
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-[#D4AF37]
          bg-transparent
          px-5
          py-2.5
          sm:px-6
          sm:py-3
          text-sm
          sm:text-base
          font-medium
          tracking-wide
          text-[#D4AF37]
          transition-all
          duration-300
          hover:bg-[#D4AF37]
          hover:text-black
          hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)]
          w-full
          sm:w-auto
          justify-center
        "
      >
        Learn More
        <FaArrowRight />
      </button>
    </motion.div>
  );
}