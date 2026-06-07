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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl rounded-3xl bg-white p-10 md:p-16 shadow-2xl border border-gray-100"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute right-8 top-8 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>

            {/* CONTENT AREA */}
            <div>
              <div className="mb-10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-600 font-bold">
                  Start your journey
                </span>
                <h2 className="text-4xl font-semibold text-gray-900 mt-2">
                  Launch Project
                </h2>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Email Address" />
                  <Input placeholder="Phone Number" />
                  
                  {/* SERVICE NEEDED DROPDOWN */}
                  <select className="w-full bg-gray-50 rounded-xl p-4 text-gray-900 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all border border-gray-100 appearance-none cursor-pointer">
                    <option value="" disabled selected>Service Needed</option>
                    <option value="web">Web Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="video">Video Editing</option>
                    <option value="branding">Branding</option>
                    <option value="branding">Coustom Project</option>
                  </select>
                </div>
                
                <Input placeholder="Project Budget (e.g., ₹50,000)" />
                
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