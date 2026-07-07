import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Rocket, Phone } from "lucide-react";

import ContactModal from "../../Contact/ContactModal";
import WhatsAppModal from "../../Contact/WhatsAppModal";

export default function CTA() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  return (
    <section className="relative overflow-hidden bg-from-black/10 via-zinc-950/10 to-zinc-900/10 py-28">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[36px] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-10 md:p-16 shadow-2xl"
        >

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-sm font-medium text-amber-400">
            <Rocket size={18} />
            LET'S BUILD SOMETHING AMAZING
          </div>

          {/* Heading */}
          <h2 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Ready to Grow Your Business Online?
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400">
            Whether you need a Portfolio Website,
            Business Website,
            Ecommerce Website,
            Custom Web Application,
            UI/UX Design,
            Branding,
            Video Editing,
            or a complete digital solution,
            TRIVEKSA ARC is here to help you build,
            grow and scale your business.
          </p>

          {/* Features */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-xl font-semibold text-white">
                ✔ Free Project Consultation
              </h3>
              <p className="mt-3 text-zinc-400">
                Discuss your business goals and receive
                expert recommendations before starting
                your project.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-xl font-semibold text-white">
                ✔ Custom Business Solutions
              </h3>
              <p className="mt-3 text-zinc-400">
                Every business is unique.
                We design custom digital solutions
                based on your goals and requirements.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            <button
              onClick={() => setShowContactModal(true)}
              className="flex items-center gap-3 rounded-2xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-amber-400"
            >
              Start Your Project
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => setShowWhatsAppModal(true)}
              className="flex items-center gap-3 rounded-2xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-amber-500 hover:text-amber-400"
            >
              <MessageCircle size={20} />
              Book Free Consultation
            </button>
          </div>

          {/* Bottom */}
          <div className="mt-16 border-t border-zinc-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Have Questions?
                </h3>
                <p className="mt-2 text-zinc-400">
                  We're happy to discuss your project,
                  answer your questions and help you
                  choose the right solution.
                </p>
              </div>

              <a
                href="tel:+919652155580"
                className="flex items-center gap-3 rounded-2xl border border-amber-500 px-6 py-4 font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-black"
              >
                <Phone size={20} />
                +91 96521 55580
              </a>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Modal Elements */}
      <ContactModal
        title="Start Your Website Project"
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />

      <WhatsAppModal
        title="Book a Free Consultation"
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </section>
  );
}