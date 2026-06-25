import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaVideo,
  FaBullhorn,
  FaSearch,
} from "react-icons/fa";

import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Website Development",
    description:
      "Modern, fast, responsive websites built with the latest technologies to help your business grow online.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Admin Dashboard",
      "Fast Performance",
    ],
  },
  {
    id: 2,
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "Clean, premium user interfaces designed to improve customer experience and conversions.",
    features: [
      "Wireframes",
      "Figma Design",
      "Modern UI",
      "User Experience",
    ],
  },
  {
    id: 3,
    icon: <FaVideo />,
    title: "Video Editing",
    description:
      "Professional commercial advertisements, social media reels, motion graphics and cinematic edits.",
    features: [
      "Commercial Ads",
      "Instagram Reels",
      "Motion Graphics",
      "Color Grading",
    ],
  },
  {
    id: 4,
    icon: <FaBullhorn />,
    title: "Branding",
    description:
      "Build a memorable brand identity with premium designs that increase trust and recognition.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Business Cards",
      "Social Media",
    ],
  },
  {
    id: 5,
    icon: <FaSearch />,
    title: "SEO Optimization",
    description:
      "Improve your Google ranking and increase organic traffic with technical and on-page SEO.",
    features: [
      "Technical SEO",
      "On Page SEO",
      "Speed Optimization",
      "Google Indexing",
    ],
  },
];

export default function Services() {
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
              key={service.id}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}