import { useEffect, useState } from "react";

function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.closest(
          "button, a, input, textarea, .cursor-hover"
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-all duration-150 ease-out
        ${
          isHovering
            ? "w-10 h-10 bg-cyan-400/30"
            : "w-5 h-5 bg-cyan-400/40"
        }
        rounded-full blur-[2px] border border-cyan-300/50`}
        style={{
          transform: `translate(${position.x - 10}px, ${
            position.y - 10
          }px)`,
        }}
      />

      {/* Glow Ring */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-16 h-16 rounded-full bg-cyan-400/10 blur-2xl transition-transform duration-300"
        style={{
          transform: `translate(${position.x - 32}px, ${
            position.y - 32
          }px)`,
        }}
      />
    </>
  );
}

export default AnimatedCursor;