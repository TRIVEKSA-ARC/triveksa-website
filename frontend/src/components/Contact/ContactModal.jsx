import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ContactModal({ isOpen, onClose }) {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress for the top line
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] isolate flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#0f0f0f] p-8 md:p-12 shadow-2xl max-h-[85vh] overflow-hidden"
          >
            {/* PROGRESS LINE */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5">
              <motion.div 
                className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            {/* SCROLLABLE AREA */}
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="h-full overflow-y-auto no-scrollbar pr-4 -mr-4"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={onClose}
                className="absolute right-8 top-8 text-white/50 hover:text-amber-400 transition-colors duration-300"
              >
                <X size={24} strokeWidth={2} />
              </button>

              {/* HEADER */}
              <div className="mb-10">
                <span className="text-[11px] uppercase tracking-[0.4em] text-amber-500 font-semibold">
                  Start your journey
                </span>
                <h2 className="mt-4 text-3xl md:text-5xl font-light text-white">
                  Work with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Triviksa</span>
                </h2>
              </div>

              {/* FORM */}
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 outline-none focus:border-amber-500 transition-all duration-500" />
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 outline-none focus:border-amber-500 transition-all duration-500" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Phone Number" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 outline-none focus:border-amber-500 transition-all duration-500" />
                  <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white outline-none focus:border-amber-500 transition-all duration-500 appearance-none cursor-pointer">
                    <option className="bg-[#0f0f0f]">Service Needed</option>
                    <option className="bg-[#0f0f0f]">Web Development</option>
                    <option className="bg-[#0f0f0f]">UI/UX Design</option>
                    <option className="bg-[#0f0f0f]">Video Editing</option>
                    <option className="bg-[#0f0f0f]">Branding</option>
                  </select>
                </div>

                <input type="text" placeholder="Project Budget" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 outline-none focus:border-amber-500 transition-all duration-500" />

                <textarea rows="3" placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 outline-none focus:border-amber-500 transition-all duration-500 resize-none" />

                <button 
                  type="submit" 
                  className="group relative w-full rounded-full border border-amber-500/50 py-4 font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-amber-500 hover:text-black overflow-hidden"
                >
                  <span className="relative z-10">Launch Project</span>
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