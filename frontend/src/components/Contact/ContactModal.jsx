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
          className="fixed inset-0 z-[9999] isolate flex items-center justify-center bg-[#050505]/90 backdrop-blur-xl px-4"
        >
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-3xl rounded-3xl border border-amber-500/30 bg-[#0f0f0f] p-8 md:p-10 shadow-[0_0_100px_rgba(245,158,11,0.15)] max-h-[90vh] overflow-y-auto"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-white hover:text-amber-400 transition-colors"
            >
              <X size={28} />
            </button>

            {/* HEADER */}
            <div className="mb-8">
              <p className="text-[13px] uppercase tracking-[0.3em] text-amber-500 font-bold">
                Triviksa Arc
              </p>
              <h2 className="mt-3 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                Start a Project
              </h2>
              <p className="mt-4 text-gray-300 max-w-xl text-lg">
                Let's craft something exceptional together. Fill in the details to begin your journey.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full rounded-xl border-2 border-white/10 bg-[#1a1a1a] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-amber-500 transition-all" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full rounded-xl border-2 border-white/10 bg-[#1a1a1a] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-amber-500 transition-all" 
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full rounded-xl border-2 border-white/10 bg-[#1a1a1a] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-amber-500 transition-all" 
                />
                <select className="w-full rounded-xl border-2 border-white/10 bg-[#1a1a1a] px-5 py-4 text-white outline-none focus:border-amber-500 transition-all appearance-none cursor-pointer">
                  <option className="text-gray-400">Select Service Needed</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Video Editing</option>
                  <option>Branding</option>
                </select>
              </div>

              {/* BUDGET INPUT */}
              <input 
                type="text" 
                placeholder="Project Budget (e.g., ₹50,000)" 
                className="w-full rounded-xl border-2 border-white/10 bg-[#1a1a1a] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-amber-500 transition-all" 
              />

              <textarea 
                rows="4" 
                placeholder="Tell us about your project requirements..." 
                className="w-full rounded-xl border-2 border-white/10 bg-[#1a1a1a] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-amber-500 transition-all" 
              />

              <button 
                type="submit" 
                className="w-full rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-8 py-5 font-bold uppercase tracking-[0.2em] text-black hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all transform hover:scale-[1.02]"
              >
                Launch Project
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;