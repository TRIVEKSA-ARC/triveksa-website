import { useRef, useState } from "react";
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
          className="fixed inset-0 z-[9999] isolate flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-[85vh] overflow-hidden"
          >
            {/* PROGRESS INDICATOR */}
            <div className="absolute right-4 top-12 bottom-12 w-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="w-full bg-amber-500 origin-top"
                style={{ scaleY }}
              />
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-8 top-8 text-white/40 hover:text-amber-500 transition-colors duration-300"
            >
              <X size={24} />
            </button>

            {/* SCROLLABLE CONTENT */}
            <div ref={scrollRef} className="h-full overflow-y-auto no-scrollbar pr-6">
              <div className="mb-10">
                <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold">
                  Start your journey
                </span>
                <h2 className="mt-3 text-4xl md:text-5xl font-light text-white tracking-tight">
                  Work with <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Triviksa</span>
                </h2>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder:text-white/20 outline-none focus:border-amber-500 transition-all duration-300" />
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder:text-white/20 outline-none focus:border-amber-500 transition-all duration-300" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Phone Number" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder:text-white/20 outline-none focus:border-amber-500 transition-all duration-300" />
                  <select className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white outline-none focus:border-amber-500 transition-all duration-300 appearance-none cursor-pointer">
                    <option className="bg-[#0a0a0a]">Service Needed</option>
                    <option className="bg-[#0a0a0a]">Web Development</option>
                    <option className="bg-[#0a0a0a]">UI/UX Design</option>
                    <option className="bg-[#0a0a0a]">Video Editing</option>
                    <option className="bg-[#0a0a0a]">Branding</option>
                  </select>
                </div>

                <input type="text" placeholder="Project Budget" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder:text-white/20 outline-none focus:border-amber-500 transition-all duration-300" />

                <textarea rows="3" placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white placeholder:text-white/20 outline-none focus:border-amber-500 transition-all duration-300 resize-none" />

                <button 
                  type="submit" 
                  className="group relative w-full rounded-full border border-white/10 py-4 font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-amber-500 hover:text-amber-500 overflow-hidden"
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