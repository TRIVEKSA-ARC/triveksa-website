import { useEffect, useState } from "react";

function AnimatedCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block transition-all duration-75"
      style={{
        background: `
          radial-gradient(
            600px circle at ${position.x}px ${position.y}px,
            rgba(80, 180, 255, 0.18),
            rgba(0, 140, 255, 0.12),
            rgba(0, 80, 180, 0.08),
            transparent 80%
          )
        `,
      }}
    />
  );
}

export default AnimatedCursor;