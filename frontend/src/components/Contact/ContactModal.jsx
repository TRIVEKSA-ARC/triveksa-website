import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { createLead } from "../../services/lead.api";

function ContactModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    goal: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createLead({ ...formData, source: "Website Modal" });
      toast.success("Project inquiry submitted!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        goal: "",
        message: "",
      });
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-4"
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            /* Enhanced phone viewport layouts: Compact paddings, max-height bounds, and overflow scrolling mechanics */
            className="relative w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 md:p-16 shadow-2xl border border-gray-100 scrollbar-none"
          >
            {/* CLOSE BUTTON — Position adjusted for tiny viewport screens */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-8 sm:top-8 text-gray-400 hover:text-gray-900 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* CONTENT AREA */}
            <div>
              {/* Heading adjustments for mobile layouts */}
              <div className="mb-6 md:mb-10 pr-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-600 font-bold">
                  Start your journey
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mt-1 md:mt-2">
                  Launch Project
                </h2>
              </div>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                  <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" type="email" required />
                  <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
                  
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-gray-900 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all border border-gray-100 appearance-none cursor-pointer"
                  >
                    <option value="">Select Service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Branding">Branding</option>
                    <option value="Custom Project">Custom Project</option>
                  </select>
                </div>
                
                <Input
                  name="goal"
                  value={formData.goal || ""}
                  onChange={handleChange}
                  placeholder="What is your business goal?"
                />
                
                {/* Fixed height reduction on textarea layout context for shorter phone screen frames */}
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..." 
                  required
                  className="w-full bg-gray-50 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all border border-gray-100 h-24 sm:h-32 resize-none"
                />

                {/* PREMIUM BUTTON */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gray-900 text-white py-3.5 sm:py-4 rounded-xl font-bold uppercase tracking-[0.15em] text-xs sm:text-sm hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/20 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Launch Project"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Updated Input component to accept extra standard properties natively
function Input({ placeholder, name, value, onChange, type = "text", required = false }) {
  return (
    <input 
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder} 
      required={required}
      className="w-full bg-gray-50 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all border border-gray-100"
    />
  );
}

export default ContactModal;