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
    budget: "",
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
      await createLead(formData);
      toast.success("Project inquiry submitted!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
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

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
                  <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                  <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                  
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 rounded-xl p-4 text-gray-900 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all border border-gray-100 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Service Needed</option>
                    <option value="web">Web Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="video">Video Editing</option>
                    <option value="branding">Branding</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>
                
                <Input name="budget" value={formData.budget} onChange={handleChange} placeholder="Project Budget (e.g., ₹50,000)" />
                
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..." 
                  className="w-full bg-gray-50 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all border border-gray-100 h-32 resize-none"
                />

                {/* PREMIUM BUTTON */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold uppercase tracking-[0.15em] text-sm hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/20 disabled:opacity-50"
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

// Updated Input component to accept props
function Input({ placeholder, name, value, onChange }) {
  return (
    <input 
      type="text" 
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder} 
      className="w-full bg-gray-50 rounded-xl p-4 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-amber-500/20 transition-all border border-gray-100"
    />
  );
}

export default ContactModal;