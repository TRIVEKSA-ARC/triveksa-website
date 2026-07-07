import { motion } from "framer-motion";
import {
  BookOpenCheck,
  ArrowRight,
  Clock,
} from "lucide-react";

const guides = [
  {
    title: "Complete Business Website Guide",
    description:
      "Learn how to plan, design, develop, and launch a professional business website that builds trust and attracts customers.",
    readTime: "12 min read",
    category: "Business Website",
  },
  {
    title: "Ecommerce Website Planning Guide",
    description:
      "Everything you need to know before building an online store including products, payments, shipping, and customer experience.",
    readTime: "15 min read",
    category: "Ecommerce",
  },
  {
    title: "Local SEO Guide for Small Businesses",
    description:
      "Improve your Google visibility with Local SEO, Google Business Profile optimization, reviews, and location-based marketing.",
    readTime: "10 min read",
    category: "SEO",
  },
  {
    title: "Website Maintenance Checklist",
    description:
      "A complete checklist covering website security, backups, updates, performance optimization, and monitoring.",
    readTime: "8 min read",
    category: "Maintenance",
  },
];

export default function Guides() {
  return (
    <section className="bg-from-black/10 via-zinc-950/10 to-zinc-900/10 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm font-medium text-amber-400">
            Business Guides
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Practical Guides for Business Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Step-by-step guides covering Website Development,
            Ecommerce, SEO, Branding, Digital Marketing,
            and Business Growth.
          </p>
        </motion.div>

        {/* Guides */}

        <div className="grid gap-8 md:grid-cols-2">

          {guides.map((guide, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 transition-all duration-300 hover:-translate-y-2 hover:border-amber-500"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">

                <BookOpenCheck size={30} />

              </div>

              <span className="rounded-full bg-zinc-800 px-4 py-1 text-xs text-zinc-300">

                {guide.category}

              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">

                {guide.title}

              </h3>

              <p className="mt-5 leading-8 text-zinc-400">

                {guide.description}

              </p>

              <div className="mt-8 flex items-center justify-between">

                <div className="flex items-center gap-2 text-sm text-zinc-500">

                  <Clock size={16} />

                  {guide.readTime}

                </div>

                <button className="flex items-center gap-2 font-semibold text-amber-400 transition-all group-hover:gap-4">

                  Read Guide

                  <ArrowRight size={18} />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* View All */}

        <div className="mt-16 text-center">

          <button className="rounded-full border border-amber-500 px-8 py-4 font-semibold text-amber-400 transition-all hover:bg-amber-500 hover:text-black">

            View All Guides

          </button>

        </div>

      </div>
    </section>
  );
}