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
          className="fixed inset-0 z-[9999] isolate flex items-center justify-center bg-gray-900/40 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-2xl rounded-[2rem] border border-gray-100 bg-white p-8 md:p-12 shadow-2xl max-h-[85vh] overflow-hidden"
          >
            {/* PROGRESS INDICATOR */}
            <div className="absolute right-4 top-12 bottom-12 w-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="w-full bg-amber-500 origin-top"
                style={{ scaleY }}
              />
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-8 top-8 text-gray-400 hover:text-amber-600 transition-colors duration-300"
            >
              <X size={24} />
            </button>

            {/* SCROLLABLE CONTENT */}
            <div ref={scrollRef} className="h-full overflow-y-auto no-scrollbar pr-6">
              <div className="mb-10">
                <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold">
                  Start your journey
                </span>
                <h2 className="mt-3 text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                  Work with <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Triviksa</span>
                </h2>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-gray-200 px-0 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-500 transition-all duration-300" />
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-200 px-0 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-500 transition-all duration-300" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Phone Number" className="w-full bg-transparent border-b border-gray-200 px-0 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-500 transition-all duration-300" />
                  <select className="w-full bg-transparent border-b border-gray-200 px-0 py-3 text-gray-900 outline-none focus:border-amber-500 transition-all duration-300 appearance-none cursor-pointer">
                    <option className="bg-white">Service Needed</option>
                    <option className="bg-white">Web Development</option>
                    <option className="bg-white">UI/UX Design</option>
                    <option className="bg-white">Video Editing</option>
                    <option className="bg-white">Branding</option>
                  </select>
                </div>

                <input type="text" placeholder="Project Budget" className="w-full bg-transparent border-b border-gray-200 px-0 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-500 transition-all duration-300" />

                <textarea rows="3" placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-gray-200 px-0 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-amber-500 transition-all duration-300 resize-none" />

                <button 
                  type="submit" 
                  className="group relative w-full rounded-full border border-gray-900 py-4 font-bold uppercase tracking-[0.2em] text-gray-900 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-white overflow-hidden"
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

export default ContactModal;