import { motion } from "framer-motion";
import {
  Download,
  FileText,
  FileSpreadsheet,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const downloads = [
  {
    icon: FileText,
    title: "Website Planning Checklist",
    description:
      "Plan your website structure, pages, features, and business goals before development.",
    type: "PDF",
  },
  {
    icon: BadgeCheck,
    title: "SEO Checklist",
    description:
      "A complete checklist to improve Google rankings and website visibility.",
    type: "PDF",
  },
  {
    icon: FileSpreadsheet,
    title: "Business Website Requirements",
    description:
      "A simple worksheet to collect all website requirements before starting a project.",
    type: "DOCX",
  },
  {
    icon: Download,
    title: "Digital Marketing Checklist",
    description:
      "Essential steps for branding, social media, Google Business Profile, and online growth.",
    type: "PDF",
  },
];

export default function Downloads() {
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
          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-400">
            Free Downloads
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Free Business Resources
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Download free website planning documents, SEO checklists,
            business templates, branding resources,
            and digital marketing guides.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {downloads.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 transition hover:-translate-y-2 hover:border-amber-500"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">

                  <Icon size={30} />

                </div>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">

                  {item.type}

                </span>

                <h3 className="mt-6 text-xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-5 leading-7 text-zinc-400">

                  {item.description}

                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-amber-400 transition group-hover:gap-4">

                  Download

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