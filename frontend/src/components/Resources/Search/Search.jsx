import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

const popularSearches = [
  "Website Development",
  "Business Website",
  "Ecommerce Website",
  "Portfolio Website",
  "Digital Marketing",
  "SEO",
  "Branding",
  "UI/UX Design",
  "AI",
  "Business Growth",
];

export default function SearchSection() {
  return (
    <section className="relative bg-from-black/10 via-zinc-950/10 to-zinc-900/10 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-400">

            <Sparkles size={16} />

            Search Business Resources

          </div>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Find Articles, Business Guides & Resources
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Search expert resources on Website Development, Ecommerce,
            Digital Marketing, SEO, Branding, UI/UX Design,
            Artificial Intelligence, and Business Growth.
          </p>
        </motion.div>

        {/* Search Box */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="flex items-center rounded-2xl border border-zinc-800 bg-zinc-900/70 px-6 py-5 backdrop-blur-lg transition duration-300 focus-within:border-amber-500">

            <Search
              size={24}
              className="mr-4 text-amber-400"
            />

            <input
              type="text"
              placeholder="Search Website Development, Ecommerce, SEO, Branding, AI..."
              className="w-full bg-transparent text-lg text-white placeholder:text-zinc-500 focus:outline-none"
            />
          </div>
        </motion.div>

        {/* Popular Searches */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-5xl text-center"
        >

          <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Popular Searches
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            {popularSearches.map((item) => (
              <button
                key={item}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300 transition duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-black"
              >
                {item}
              </button>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}