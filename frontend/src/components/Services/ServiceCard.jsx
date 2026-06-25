import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:border-cyan-400
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/10
          text-3xl
          text-cyan-400
          transition-transform
          duration-500
          group-hover:rotate-6
          group-hover:scale-110
        "
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-white">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mb-8 leading-7 text-gray-400">
        {service.description}
      </p>

      {/* Features */}
      <div className="space-y-3">
        {service.features?.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-gray-300"
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-cyan-500
          px-5
          py-2.5
          text-cyan-400
          transition-all
          duration-300
          hover:bg-cyan-500
          hover:text-white
        "
      >
        Learn More
        <FaArrowRight />
      </button>
    </motion.div>
  );
}