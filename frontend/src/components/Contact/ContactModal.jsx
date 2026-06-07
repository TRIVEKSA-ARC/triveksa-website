import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ContactModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] isolate flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 md:p-10 shadow-[0_0_80px_rgba(0,0,0,0.6)]"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-white/60 hover:text-white"
            >
              <X size={22} />
            </button>

            {/* HEADER */}
            <div className="mb-8">
              <p className="text-[12px] uppercase tracking-[0.4em] text-amber-400 font-semibold">
                Triviksa Arc
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
                Start a Project
              </h2>
              <p className="mt-4 text-white/60 max-w-xl">
                Tell us about your project and we'll help turn your ideas into premium digital experiences.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none focus:border-amber-400" />
                <input type="email" placeholder="Email Address" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none focus:border-amber-400" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input type="text" placeholder="Phone Number" className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none focus:border-amber-400" />
                <select className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-4 text-white outline-none focus:border-amber-400">
                  <option>Service Needed</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                </select>
              </div>
              <textarea rows="4" placeholder="Tell us about your project..." className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white outline-none focus:border-amber-400" />
              <button type="submit" className="w-full rounded-full bg-gradient-to-r from-[#f5c96a] to-[#d89b1d] px-8 py-4 font-bold uppercase text-black transition hover:scale-[1.01]">
                Start Your Project
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;