import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

function GlobalBackground({ children }) {
  const shipRef = useRef(null);
  const lightRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    // Detect mobile layout for fine-tuning initial scale adjustments
    const isMobile = window.innerWidth < 768;

    /* ===============================
       PREMIUM CINEMATIC BG MOTION
    =============================== */
    const bgAnimation = gsap.fromTo(
      bgRef.current,
      { scale: 1.05 },
      {
        scale: 1,
        duration: 45,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      }
    );

    /* ===============================
       SESSION CHECK FLAG
    =============================== */
    const introPlayed = sessionStorage.getItem("introPlayed");

    if (introPlayed) {
      gsap.set(contentRef.current, { opacity: 1, y: 0 });
      gsap.set(shipRef.current, { opacity: 0 });
      gsap.set(lightRef.current, { opacity: 0 });

      return () => {
        bgAnimation.kill();
      };
    }

    const tl = gsap.timeline();

    /* ===============================
       INITIAL STATES
    =============================== */
    gsap.set(shipRef.current, {
      xPercent: -50,
      yPercent: -50,
      scale: isMobile ? 0.15 : 0.25, // Sleeker initial entry scale on mobile
      opacity: 1,
    });

    gsap.set(lightRef.current, {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.set(contentRef.current, {
      opacity: 0,
      y: isMobile ? 40 : 60, // Shorter transition distance on mobile
    });

    /* ===============================
       SHIP ENTRY
    =============================== */
    tl.to(shipRef.current, {
      duration: 3,
      scale: isMobile ? 0.35 : 0.45, // Responsive climax scale
      ease: "power2.inOut",
      motionPath: {
        path: [
          { x: "110vw", y: "30vh" },
          { x: "70vw", y: "18vh" },
          { x: "50vw", y: isMobile ? "14vh" : "10vh" }, // Adjusted apex height for mobile viewports
        ],
        curviness: 1.6,
      },
    }).add("shipAtTop");

    /* ===============================
       LIGHT REVEAL
    =============================== */
    tl.to(
      lightRef.current,
      {
        opacity: 1,
        scaleY: 1,
        duration: 1.2,
        ease: "power2.out",
      },
      "shipAtTop+=0.2"
    );

    /* ===============================
       CONTENT REVEAL
    =============================== */
    tl.to(
      contentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      },
      "shipAtTop+=0.4"
    );

    /* ===============================
       SHIP EXIT
    =============================== */
    tl.to(shipRef.current, {
      duration: 5,
      scale: isMobile ? 0.1 : 0.15,
      opacity: 0,
      ease: "power2.inOut",
      motionPath: {
        path: [
          { x: "50vw", y: isMobile ? "14vh" : "10vh" },
          { x: "70vw", y: "5vh" },
          { x: "130vw", y: "-20vh" }, // Extended exit vector to avoid cropping on wide viewports
        ],
        curviness: 1.8,
      },
      onComplete: () => {
        sessionStorage.setItem("introPlayed", "true");
      },
    });

    return () => {
      bgAnimation.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] overflow-x-hidden">

      {/* 🌌 MAIN BACKGROUND */}
      <div
        ref={bgRef}
        className="fixed inset-0 bg-cover bg-center will-change-transform z-0"
        style={{
          backgroundImage:
            'url("/create_a_Space_with_planets_from_long_view_with_clarity_beautifull__20251222114721_01.png")',
        }}
      />

      {/* 🌑 PREMIUM CINEMATIC VIGNETTE */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(10,10,10,0) 18%,
              rgba(10,10,10,0.12) 38%,
              rgba(10,10,10,0.35) 58%,
              rgba(10,10,10,0.72) 78%,
              rgba(10,10,10,0.96) 100%
            )
          `,
        }}
      />

      {/* 🌫 PREMIUM GRAY DEPTH */}
      <div
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(26,26,26,0.05) 0%, rgba(26,26,26,0.22) 100%)",
        }}
      />

      {/* ✨ LUXURY GOLD GLOW */}
      <div
        className="fixed inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(205,163,73,0.10) 0%, transparent 45%)",
        }}
      />

      {/* 🌑 PREMIUM BOTTOM DEPTH */}
      <div
        className="fixed inset-0 z-[3] pointer-events-none bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent"
      />

      {/* 🛸 SPACESHIP - Fluid Width Adjustments */}
      <img
        ref={shipRef}
        src="/SpaceShip.png"
        alt="Spaceship"
        className="
          fixed
          top-0
          left-0
          w-[320px]
          md:w-[700px]
          pointer-events-none
          select-none
          z-[5]
        "
      />

      {/* 🔦 LIGHT BEAM - Matches layout fluid scale perfectly */}
      <div
        ref={lightRef}
        className="
          fixed
          top-[16vh]
          md:top-[12vh]
          left-1/2
          -translate-x-1/2
          w-[200px]
          md:w-[420px]
          h-[70vh]
          md:h-[75vh]
          bg-gradient-to-b
          from-yellow-200/16
          via-sky-200/8
          to-transparent
          blur-2xl
          md:blur-3xl
          origin-top
          z-[4]
        "
      />

      {/* 📦 WEBSITE CONTENT */}
      <div ref={contentRef} className="relative z-10 px-4 md:px-0">
        {children}
      </div>
    </div>
  );
}

export default GlobalBackground;