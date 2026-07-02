import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Star,
} from "lucide-react";

export default function Featured() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm font-medium text-amber-400">

            ⭐ Featured Resource

          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">

            Start Your Digital Journey Here

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

            Learn why every business needs a professional website and
            discover how a strong digital presence can help attract more
            customers, build trust, and grow your business.

          </p>

        </motion.div>

        {/* Featured Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black shadow-2xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative h-[350px] lg:h-full">

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Website Development and Business Growth"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-10 lg:p-14">

              <div className="mb-4 flex items-center gap-3">

                <span className="rounded-full bg-amber-500/10 px-4 py-1 text-sm text-amber-400">

                  Website Development

                </span>

                <div className="flex items-center gap-2 text-zinc-500">

                  <Star size={16} />

                  Featured

                </div>

              </div>

              <h3 className="text-3xl font-bold leading-tight text-white">

                Why Every Business Needs a Professional Website in 2026

              </h3>

              <p className="mt-6 leading-8 text-zinc-400">

                A professional website is your digital office that works
                24/7. Learn how websites improve online visibility,
                generate leads, build customer trust, strengthen your
                brand, and help businesses grow faster using modern
                digital marketing strategies.

              </p>

              {/* Meta */}

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-500">

                <div className="flex items-center gap-2">

                  <Calendar size={16} />

                  June 2026

                </div>

                <div className="flex items-center gap-2">

                  <Clock size={16} />

                  8 min read

                </div>

              </div>

              {/* Button */}

              <button className="mt-10 flex w-fit items-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-amber-400">

                Read Featured Article

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}