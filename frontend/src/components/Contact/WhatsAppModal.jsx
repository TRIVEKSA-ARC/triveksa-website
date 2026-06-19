import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { createLead } from "../../services/lead.api";

function WhatsAppModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    goal: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Save lead in MongoDB with explicit WhatsApp source identifier
      await createLead({ ...formData, source: "WhatsApp" });

      const whatsappMessage = `Hi TRIVEKSA ARC,
I'm interested in your services.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Budget: ${formData.budget || "Not Provided"}
Business Goal: ${formData.goal || "Not Provided"}
Project Details: ${formData.message}`;
      
      toast.success("Opening WhatsApp...");

      window.open(
        `https://wa.me/919652155580?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        goal: "",
        message: "",
      });

      setTimeout(() => {
        onClose();
      }, 500);
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          "Failed to submit inquiry"
      );
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
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            /* Enhanced layouts: Compact paddings on mobile, added max height & internal vertical scroll mechanics */
            className="relative w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 md:p-16 shadow-2xl border border-gray-100 scrollbar-none"
          >
            {/* Close Button — Adjusted layout placement targets for mobile viewports */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition z-10"
            >
              <X size={20} />
            </button>

            {/* Title Section — Scaled typography downs for clean mobile rendering */}
            <div className="mb-6 md:mb-10 pr-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-green-600 font-bold">
                WhatsApp Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mt-1 md:mt-2">
                Contact via WhatsApp
              </h2>
            </div>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />

                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  type="email"
                  required
                />

                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-gray-900 border border-gray-100 outline-none focus:border-green-500 transition"
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
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Project Budget"
              />

              <Input
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                placeholder="Business Goal"
              />

              {/* Reduced fixed textarea height slightly for optimal viewport management on mobile */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                className="w-full bg-gray-50 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-gray-900 border border-gray-100 h-24 sm:h-32 resize-none outline-none focus:border-green-500 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3.5 sm:py-4 rounded-xl font-bold uppercase text-xs sm:text-sm tracking-[0.15em] hover:bg-green-700 transition disabled:opacity-50"
              >
                {loading ? "Opening WhatsApp..." : "Continue To WhatsApp"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Optimized Input Component with responsive sizing tokens
function Input({
  placeholder,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full bg-gray-50 rounded-xl p-3.5 sm:p-4 text-sm sm:text-base text-gray-900 border border-gray-100 outline-none focus:border-green-500 transition"
    />
  );
}

export default WhatsAppModal;