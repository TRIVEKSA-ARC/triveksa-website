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
    <section className="relative overflow-hidden bg-transparent py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#D4AF37]/40
              bg-[#D4AF37]/10
              px-6
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#D4AF37]
              backdrop-blur-xl
            "
          >
            Our Services
          </span>

          {/* Heading */}

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            Premium Digital Solutions
          </h2>

          <h3
            className="
              mt-2
              text-5xl
              font-bold
              md:text-6xl
              bg-gradient-to-r
              from-[#D4AF37]
              via-[#F5E6A1]
              to-[#C89B3C]
              bg-clip-text
              text-transparent
            "
          >
            For Growing Businesses
          </h3>

          {/* Divider */}

          <div className="mx-auto mt-8 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            We craft premium digital experiences that elevate brands through
            modern web development, elegant UI/UX, cinematic video production,
            strategic branding, and high-performance SEO solutions.
          </p>

        </motion.div>

        {/* Services */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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