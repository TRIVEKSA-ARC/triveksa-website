import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black/10 via-zinc-950/30 to-zinc-900/10">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center justify-center px-6 py-28">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center"
        >

          {/* Badge */}

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm font-medium text-amber-400">

            <BookOpen size={18} />

            TRIVEKSA ARC • Business Resources & Knowledge Center

          </div>

          {/* SEO Friendly Heading */}

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">

            Website Development,
            <br />

            Digital Marketing &
            <br />

            Business Growth Resources

          </h1>

          {/* SEO Friendly Description */}

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-zinc-400">

            Learn everything about
            <span className="text-white font-medium">
              {" "}Website Development
            </span>,
            <span className="text-white font-medium">
              {" "}Business Websites
            </span>,
            <span className="text-white font-medium">
              {" "}Ecommerce Websites
            </span>,
            <span className="text-white font-medium">
              {" "}Portfolio Websites
            </span>,
            SEO,
            Digital Marketing,
            Branding,
            UI/UX Design,
            AI,
            Business Automation,
            and Online Business Growth through expert articles,
            practical business guides,
            real-world case studies,
            and free downloadable resources.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <button className="flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-amber-400">

              Explore Resources

              <ArrowRight size={18} />

            </button>

            <button className="flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 font-semibold text-white transition duration-300 hover:border-amber-500 hover:text-amber-400">

              <Download size={18} />

              Free Downloads

            </button>

          </div>

          {/* Statistics */}

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-10 sm:grid-cols-4">

            <div>

              <h3 className="text-3xl font-bold text-amber-400">

                100+

              </h3>

              <p className="mt-2 text-sm text-zinc-400">

                Articles

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-amber-400">

                25+

              </h3>

              <p className="mt-2 text-sm text-zinc-400">

                Business Guides

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-amber-400">

                30+

              </h3>

              <p className="mt-2 text-sm text-zinc-400">

                Case Studies

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-amber-400">

                50+

              </h3>

              <p className="mt-2 text-sm text-zinc-400">

                Free Resources

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}