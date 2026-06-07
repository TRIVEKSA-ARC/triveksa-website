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
          className="fixed inset-0 z-[9999] isolate flex items-center justify-center bg-gradient-to-br from-black/70 via-gray-900/80 to-black/70 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-2xl rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 md:p-12 shadow-2xl max-h-[85vh] overflow-hidden"
          >
            {/* MODERN THIN LINE PROGRESS INDICATOR (replaces scrollbar) */}
            <div className="absolute right-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white via-amber-200 to-yellow-300"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
              />
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-8 top-8 text-gray-600 hover:text-amber-600 transition-colors duration-300"
            >
              <X size={24} strokeWidth={2} />
            </button>

            {/* HEADER */}
            <div className="mb-10">
              <span className="text-[11px] uppercase tracking-[0.4em] text-amber-600 font-semibold">
                Start your journey
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-light text-gray-900">
                Work with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">Triviksa</span>
              </h2>
            </div>

            {/* FORM */}
            <form className="space-y-6 pr-4">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-500 focus:shadow-[0_1px_0_0_amber-500] transition-all duration-500" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-500 focus:shadow-[0_1px_0_0_amber-500] transition-all duration-500" 
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-500 focus:shadow-[0_1px_0_0_amber-500] transition-all duration-500" 
                />
                <select className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-gray-900 outline-none focus:border-amber-500 focus:shadow-[0_1px_0_0_amber-500] transition-all duration-500 appearance-none cursor-pointer">
                  <option className="bg-white text-gray-900">Service Needed</option>
                  <option className="bg-white text-gray-900">Web Development</option>
                  <option className="bg-white text-gray-900">UI/UX Design</option>
                  <option className="bg-white text-gray-900">Video Editing</option>
                  <option className="bg-white text-gray-900">Branding</option>
                </select>
              </div>

              <input 
                type="text" 
                placeholder="Project Budget" 
                className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-500 focus:shadow-[0_1px_0_0_amber-500] transition-all duration-500" 
              />

              <textarea 
                rows="3" 
                placeholder="Tell us about your project..." 
                className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-500 focus:shadow-[0_1px_0_0_amber-500] transition-all duration-500 resize-none" 
              />

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="group relative w-full rounded-full border border-amber-500/50 py-4 font-bold uppercase tracking-[0.2em] text-amber-700 transition-all duration-500 hover:bg-gradient-to-r hover:from-amber-400 hover:via-yellow-400 hover:to-amber-500 hover:text-white hover:shadow-lg overflow-hidden"
                >
                  <span className="relative z-10">Launch Project</span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;