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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.99 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl rounded-[2.5rem] bg-white p-10 md:p-14 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden"
          >
            {/* PROGRESS INDICATOR - Minimalist */}
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gray-50">
              <motion.div
                className="w-full bg-amber-500 origin-top"
                style={{ scaleY }}
              />
            </div>

            {/* CLOSE BUTTON - Refined */}
            <button
              onClick={onClose}
              className="absolute right-10 top-10 text-gray-300 hover:text-gray-900 transition-colors duration-300"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* SCROLLABLE AREA */}
            <div ref={scrollRef} className="h-full max-h-[70vh] overflow-y-auto no-scrollbar pr-6">
              <div className="mb-12">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-amber-600 font-bold mb-4">
                  Let's create
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
                  Start a Project
                </h2>
                <p className="mt-4 text-gray-500 font-light text-lg">
                  Share your vision with us.
                </p>
              </div>

              <form className="space-y-10">
                <div className="space-y-10">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Email Address" />
                  <Input placeholder="Project Budget" />
                  <textarea 
                    placeholder="Tell us about your project..." 
                    className="w-full bg-transparent border-b border-gray-200 py-3 text-gray-900 placeholder:text-gray-300 outline-none focus:border-amber-500 transition-colors duration-300 resize-none h-24"
                  />
                </div>

                <button 
                  type="submit" 
                  className="group flex items-center justify-between w-full border border-gray-900 py-6 px-8 text-gray-900 transition-all duration-500 hover:bg-gray-900 hover:text-white"
                >
                  <span className="font-bold uppercase tracking-[0.2em] text-sm">Launch Project</span>
                  <span className="text-xl">→</span>
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
    <div className="relative group">
      <input 
        type="text" 
        placeholder={placeholder} 
        className="w-full bg-transparent border-b border-gray-200 py-3 text-gray-900 placeholder:text-gray-300 outline-none transition-all duration-300 group-hover:border-gray-400 focus:border-amber-500"
      />
    </div>
  );
}

export default ContactModal;