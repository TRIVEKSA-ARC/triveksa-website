import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  TrendingUp,
} from "lucide-react";

const caseStudies = [
  {
    title: "Luxury Hotel Website",
    category: "Hospitality",
    challenge:
      "The hotel needed a premium website to attract more online bookings and showcase its luxury experience.",
    solution:
      "Designed and developed a responsive website with a premium UI, fast performance, and SEO optimization.",
    result:
      "Improved online visibility, increased customer inquiries, and strengthened brand credibility.",
  },
  {
    title: "Portfolio Website",
    category: "Personal Branding",
    challenge:
      "The client wanted a modern portfolio to showcase projects and attract new opportunities.",
    solution:
      "Created a responsive portfolio with smooth animations, project galleries, and contact integration.",
    result:
      "Built a professional online presence and improved client engagement.",
  },
  {
    title: "Ecommerce Store",
    category: "Online Store",
    challenge:
      "The business wanted to sell products online with a secure and user-friendly shopping experience.",
    solution:
      "Developed an ecommerce website with product management, secure checkout, and responsive design.",
    result:
      "Enabled online sales, improved customer experience, and increased business reach.",
  },
];

export default function CaseStudies() {
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
            Case Studies
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Real Projects. Real Business Results.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Explore how TRIVEKSA ARC designs and develops websites that
            improve digital presence, generate leads, and help businesses
            grow online.
          </p>
        </motion.div>

        <div className="space-y-10">

          {caseStudies.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 transition hover:border-amber-500"
            >

              <div className="flex flex-wrap items-center justify-between gap-4">

                <div>

                  <span className="rounded-full bg-amber-500/10 px-4 py-1 text-xs text-amber-400">

                    {item.category}

                  </span>

                  <h3 className="mt-4 text-3xl font-bold text-white">

                    {item.title}

                  </h3>

                </div>

                <Globe className="text-amber-400" size={42} />

              </div>

              <div className="mt-10 grid gap-8 md:grid-cols-3">

                <div>

                  <h4 className="mb-3 font-semibold text-white">

                    Challenge

                  </h4>

                  <p className="leading-7 text-zinc-400">

                    {item.challenge}

                  </p>

                </div>

                <div>

                  <h4 className="mb-3 font-semibold text-white">

                    Solution

                  </h4>

                  <p className="leading-7 text-zinc-400">

                    {item.solution}

                  </p>

                </div>

                <div>

                  <h4 className="mb-3 flex items-center gap-2 font-semibold text-white">

                    <TrendingUp
                      size={18}
                      className="text-amber-400"
                    />

                    Result

                  </h4>

                  <p className="leading-7 text-zinc-400">

                    {item.result}

                  </p>

                </div>

              </div>

              <button className="mt-10 flex items-center gap-2 font-semibold text-amber-400 transition hover:gap-4">

                Read Full Case Study

                <ArrowRight size={18} />

              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}