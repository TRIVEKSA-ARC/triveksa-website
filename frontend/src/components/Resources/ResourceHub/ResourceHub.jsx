import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const resources = [
  "Website Planning Checklist",
  "SEO Checklist",
  "Business Growth Guide",
  "Website Cost Planning Template",
  "Ecommerce Website Planning Guide",
  "AI Prompt Library",
  "Google Business Profile Guide",
  "Digital Marketing Starter Kit",
];

export default function ResourceHub() {
  return (
    <section className="relative overflow-hidden bg-from-black/10 via-zinc-950/30 to-zinc-900/10 py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-10 md:p-16 shadow-2xl"
        >

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm text-amber-400">
            <Sparkles size={16} />
            FREE RESOURCE HUB
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            🎁 Get Free Website Development, SEO & Business Growth Resources
          </h2>

          {/* Description */}
          <div className="mt-6 text-lg leading-8 text-zinc-400 space-y-4">
            <p>
              Unlock premium business resources designed for entrepreneurs,
              business owners, startups and professionals.
            </p>
            <p>
              Subscribe once and instantly receive website planning guides,
              SEO checklists, business growth resources,
              branding templates, ecommerce planning documents,
              AI business prompts and digital marketing resources
              from TRIVEKSA ARC.
            </p>
          </div>

          {/* Counter Badges */}
          <div className="mt-10 flex flex-wrap gap-4 text-sm text-zinc-300">
            <div className="rounded-full bg-zinc-900 px-5 py-3 border border-zinc-800">
              <span className="text-amber-400 font-bold mr-1.5">50+</span>
              Free Resources
            </div>
            <div className="rounded-full bg-zinc-900 px-5 py-3 border border-zinc-800">
              <span className="text-amber-400 font-bold mr-1.5">15+</span>
              Business Guides
            </div>
            <div className="rounded-full bg-zinc-900 px-5 py-3 border border-zinc-800">
              <span className="text-amber-400 font-bold mr-1.5">30+</span>
              Templates
            </div>
          </div>

          {/* Features Box */}
          <div className="mt-6 rounded-3xl border border-amber-500/20 bg-amber-500/5 p-8">
            <h3 className="mb-8 text-2xl font-bold text-white">
              🎁 Instant Free Downloads
            </h3>
            
            <div className="grid gap-5 md:grid-cols-2">
              {resources.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <CheckCircle2
                    size={18}
                    className="text-amber-400 flex-shrink-0"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="mt-12">
            <p className="mb-6 text-zinc-400">
              No credit card required. Instant access after email verification.
            </p>

            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Mail
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="email"
                  placeholder="Enter your email to unlock free resources..."
                  className="w-full rounded-2xl border border-zinc-700 bg-black px-14 py-5 text-white placeholder:text-zinc-500 outline-none transition focus:border-amber-500"
                />
              </div>

              <button className="flex items-center justify-center gap-3 rounded-2xl bg-amber-500 px-10 py-5 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-amber-400">
                Get Instant Access
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <span>✔ Instant Access</span>
            <span>✔ 100% Free</span>
            <span>✔ No Spam</span>
            <span>✔ Regular Updates</span>
            <span>✔ Unsubscribe Anytime</span>
          </div>

          {/* Footer */}
          <div className="mt-6 text-sm text-zinc-500 space-y-2 border-t border-zinc-900 pt-6">
            <p>Instant access after signup.</p>
            <p>No spam. Unsubscribe anytime.</p>
            <p>
              New resources including Website Development Guides,
              SEO Checklists, Business Growth Templates,
              AI Resources, Branding Kits,
              Ecommerce Guides and Digital Marketing tools
              are added regularly.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}