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
    <section className="relative overflow-hidden py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium tracking-widest uppercase text-cyan-400">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Premium Digital Solutions
            <span className="block text-cyan-400 mt-2">
              For Growing Businesses
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            From modern websites and UI/UX design to branding, SEO, and
            professional video editing, we help businesses build a strong
            digital presence that converts visitors into customers.
          </p>
        </motion.div>

        {/* Services Grid */}
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