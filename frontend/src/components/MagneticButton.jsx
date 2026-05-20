import { useRef } from "react";
import { motion } from "framer-motion";

function MagneticButton({ children, className = "", href = "#" }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const button = ref.current;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px,0px)`;
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={`transition-transform duration-200 ${className}`}
    >
      {children}
    </motion.a>
  );
}

export default MagneticButton;