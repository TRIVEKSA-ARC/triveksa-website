import { motion } from "framer-motion";
import {
  BookOpen,
  BriefcaseBusiness,
  BarChart3,
  Download,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "Articles",
    description:
      "Read expert articles on Website Development, Business Websites, Ecommerce, SEO, Branding, Digital Marketing, AI, UI/UX Design, and Business Growth.",
    button: "Explore Articles",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Guides",
    description:
      "Step-by-step practical guides to help entrepreneurs, startups, and businesses build a strong online presence and grow faster.",
    button: "Read Guides",
  },
  {
    icon: BarChart3,
    title: "Case Studies",
    description:
      "Discover real-world website projects, design strategies, development workflows, and business growth case studies from TRIVEKSA ARC.",
    button: "View Case Studies",
  },
  {
    icon: Download,
    title: "Free Downloads",
    description:
      "Download free website planning guides, business checklists, SEO resources, branding templates, and digital marketing materials.",
    button: "Download Resources",
  },
];

export default function Categories() {
  return (
    <section className="bg-from-black/10 via-zinc-950/10 to-zinc-900/10 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm font-medium text-amber-400">
            Resource Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Explore Business Resources
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Discover expert articles, practical business guides, real-world case
            studies, and free downloadable resources covering Website
            Development, Ecommerce, SEO, Branding, Digital Marketing, AI, and
            Business Growth.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black p-8 transition-all duration-500 hover:-translate-y-2 hover:border-amber-500"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
                  <Icon size={30} />
                </div>

                <h3 className="mb-5 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mb-8 leading-8 text-zinc-400">
                  {item.description}
                </p>

                <button className="flex items-center gap-2 font-semibold text-amber-400 transition-all duration-300 group-hover:gap-4">
                  {item.button}
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}