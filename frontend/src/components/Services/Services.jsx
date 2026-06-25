import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaVideo,
  FaBullhorn,
  FaSearch,
} from "react-icons/fa";

import ServiceCard from "./ServiceCard";
import { fetchServices } from "../../services/service.api";

const icons = {
  FaLaptopCode: <FaLaptopCode />,
  FaPalette: <FaPalette />,
  FaVideo: <FaVideo />,
  FaBullhorn: <FaBullhorn />,
  FaSearch: <FaSearch />,
};

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (err) {
        console.error("Failed to load services", err);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) {
    return (
      <section className="py-32 text-center text-zinc-400">
        Loading services...
      </section>
    );
  }

  if (!loading && services.length === 0) {
    return (
      <section className="py-32 text-center text-zinc-400">
        No services found.
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-transparent py-16 sm:py-24 md:py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-32 h-72 w-72 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px] sm:blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >

          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#D4AF37]/40
              bg-[#D4AF37]/15
              px-4
              py-1.5
              sm:px-6
              sm:py-2
              text-[10px]
              sm:text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              sm:tracking-[0.35em]
              text-[#D4AF37]
              backdrop-blur-xl
            "
          >
            Our Services
          </span>

          {/* Main Title */}
          <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#F8F8F8] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Premium Digital Solutions
          </h2>

          {/* Gradient Subtitle */}
          <h3
            className="
              mt-2
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-bold
              leading-tight
              bg-gradient-to-r
              from-[#D4AF37]
              via-[#F5E6A1]
              to-[#C89B3C]
              bg-clip-text
              text-transparent
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]
            "
          >
            For Growing Businesses
          </h3>

          {/* Divider Line */}
          <div className="mx-auto mt-6 h-px w-20 sm:w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Description Paragraph */}
          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 text-zinc-300 px-2 sm:px-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            We craft premium digital experiences that elevate brands through
            modern web development, elegant UI/UX, cinematic video production,
            strategic branding, and high-performance SEO solutions.
          </p>

        </motion.div>

        {/* Responsive Services Grid */}
        <div className="grid gap-6 sm:grid-gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              service={{
                ...service,
                icon: icons[service.icon] || <FaLaptopCode />,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}