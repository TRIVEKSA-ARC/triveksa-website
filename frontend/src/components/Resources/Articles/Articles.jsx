import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react";

const articles = [
  {
    title: "Why Every Business Needs a Website",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    date: "June 2026",
    readTime: "8 min read",
  },
  {
    title: "Business Website vs Portfolio Website",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80",
    date: "June 2026",
    readTime: "6 min read",
  },
  {
    title: "Ecommerce Website Complete Guide",
    category: "Ecommerce",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=80",
    date: "June 2026",
    readTime: "10 min read",
  },
];

export default function Articles() {
  return (
    <section className="bg-from-black/10 via-zinc-950/10 to-zinc-900/10 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-400">

            Latest Articles

          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">

            Learn Website Development,
            SEO & Business Growth

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

            Explore expert articles about Website Development,
            Business Websites, Ecommerce,
            Digital Marketing, Branding,
            AI and Online Business Growth.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {articles.map((article,index)=>(

            <motion.div

              key={index}

              initial={{opacity:0,y:40}}

              whileInView={{opacity:1,y:0}}

              transition={{duration:.5,delay:index*.1}}

              viewport={{once:true}}

              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-2 hover:border-amber-500"

            >

              <div className="overflow-hidden">

                <img

                  src={article.image}

                  alt={article.title}

                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"

                />

              </div>

              <div className="p-8">

                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-400">

                  {article.category}

                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">

                  {article.title}

                </h3>

                <div className="mt-6 flex items-center gap-6 text-sm text-zinc-500">

                  <div className="flex items-center gap-2">

                    <Calendar size={15}/>

                    {article.date}

                  </div>

                  <div className="flex items-center gap-2">

                    <Clock size={15}/>

                    {article.readTime}

                  </div>

                </div>

                <button className="mt-8 flex items-center gap-2 font-semibold text-amber-400 transition group-hover:gap-4">

                  Read Article

                  <ArrowRight size={18}/>

                </button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* View All */}

        <div className="mt-16 text-center">

          <button className="rounded-full border border-amber-500 px-8 py-4 font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-black">

            View All Articles

          </button>

        </div>

      </div>
    </section>
  );
}