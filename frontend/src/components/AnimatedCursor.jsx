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
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{
        background: `
          radial-gradient(
            350px circle at ${position.x}px ${position.y}px,
            rgba(255,255,255,0.12),
            rgba(0,180,255,0.08),
            transparent 65%
          )
        `,
      }}
    />
  );
}

export default AnimatedCursor;