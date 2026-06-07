import { useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

function ContactModal({ isOpen, onClose }) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-3xl bg-white p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* PROGRESS INDICATOR */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gray-50">
              <motion.div
                className="w-full bg-amber-500 origin-top"
                style={{ scaleY }}
              />
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={22} />
            </button>

            {/* CONTENT AREA */}
            <div ref={scrollRef} className="h-full max-h-[70vh] overflow-y-auto pr-6 custom-scrollbar">
              <div className="mb-10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-600 font-bold">
                  Start your journey
                </span>
                <h2 className="text-4xl font-semibold text-gray-900 mt-2">
                  Launch Project
                </h2>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Full Name" />
                <Input placeholder="Email Address" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Project Budget" />
                <textarea 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-gray-50 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all border border-gray-100 h-32 resize-none"
                />

                {/* PREMIUM BUTTON */}
                <button 
                  type="submit" 
                  className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold uppercase tracking-[0.15em] text-sm hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/20"
                >
                  Launch Project
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Sub-component for clean inputs
function Input({ placeholder }) {
  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      className="w-full bg-gray-50 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all border border-gray-100"
    />
  );
}

export default ContactModal;