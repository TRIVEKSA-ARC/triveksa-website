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

      // Save lead in MongoDB
      await createLead(formData);

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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full max-w-2xl rounded-3xl bg-white p-10 md:p-16 shadow-2xl border border-gray-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
            >
              <X size={20} />
            </button>

            <div className="mb-10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-green-600 font-bold">
                WhatsApp Inquiry
              </span>
              <h2 className="text-4xl font-semibold text-gray-900 mt-2">
                Contact via WhatsApp
              </h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="w-full bg-gray-50 rounded-xl p-4 text-gray-900 border border-gray-100 outline-none focus:border-green-500 transition"
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

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                className="w-full bg-gray-50 rounded-xl p-4 text-gray-900 border border-gray-100 h-32 resize-none outline-none focus:border-green-500 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold uppercase tracking-[0.15em] hover:bg-green-700 transition disabled:opacity-50"
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

// Fixed Input Component implementation
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
      className="w-full bg-gray-50 rounded-xl p-4 text-gray-900 border border-gray-100 outline-none focus:border-green-500 transition"
    />
  );
}

export default WhatsAppModal;