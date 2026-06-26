import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

function GlobalBackground({ children }) {
  const shipRef = useRef(null);
  const lightRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);
  const parallaxContainerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    /* ===============================
       PREMIUM COGNITIVE PARALLAX (Desktop)
    =============================== */
    let handleMouseMove;
    if (!isMobile && parallaxContainerRef.current) {
      handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) * 0.015;
        const moveY = (clientY - window.innerHeight / 2) * 0.015;
        
        gsap.to(bgRef.current, {
          x: moveX,
          y: moveY,
          duration: 1.5,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", handleMouseMove);
    }

    /* ===============================
       PREMIUM CINEMATIC BG MOTION
    =============================== */
    const bgAnimation = gsap.fromTo(
      bgRef.current,
      { scale: 1.06 },
      {
        scale: 1.01,
        duration: 50,
        ease: "sine.inOut",
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
        if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
      };
    }

    const tl = gsap.timeline();

    /* ===============================
       INITIAL STATES
    =============================== */
    gsap.set(shipRef.current, {
      xPercent: -50,
      yPercent: -50,
      scale: isMobile ? 0.12 : 0.22,
      opacity: isMobile ? 0 : 1,
    });

    gsap.set(lightRef.current, {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.set(contentRef.current, {
      opacity: 0,
      y: isMobile ? 30 : 50,
    });

    /* ===============================
       RESPONSIVE INTRO TIMELINE
    =============================== */
    if (isMobile) {
      tl.to(shipRef.current, {
        duration: 2,
        opacity: 1,
        scale: 0.3,
        x: "50vw",
        y: "14vh",
        ease: "power3.out",
      }).add("shipAtTop");
    } else {
      tl.to(shipRef.current, {
        duration: 3.2,
        scale: 0.42,
        ease: "power2.inOut",
        motionPath: {
          path: [
            { x: "110vw", y: "35vh" },
            { x: "75vw", y: "20vh" },
            { x: "50vw", y: "11vh" },
          ],
          curviness: 1.5,
        },
      }).add("shipAtTop");
    }

    /* ===============================
       LIGHT REVEAL (Anamorphic Gold Flare)
    =============================== */
    tl.to(
      lightRef.current,
      {
        opacity: 1,
        scaleY: 1,
        duration: 1.4,
        ease: "power3.out",
      },
      "shipAtTop+=0.1"
    );

    /* ===============================
       CONTENT REVEAL
    =============================== */
    tl.to(
      contentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "power4.out",
      },
      "shipAtTop+=0.3"
    );

    /* ===============================
       SHIP EXIT
    =============================== */
    if (isMobile) {
      tl.to(shipRef.current, {
        duration: 3.5,
        scale: 0.1,
        opacity: 0,
        y: "-10vh",
        ease: "power2.inIn",
        onComplete: () => sessionStorage.setItem("introPlayed", "true"),
      });
    } else {
      tl.to(shipRef.current, {
        duration: 4.8,
        scale: 0.12,
        opacity: 0,
        ease: "power2.inOut",
        motionPath: {
          path: [
            { x: "50vw", y: "11vh" },
            { x: "65vw", y: "6vh" },
            { x: "125vw", y: "-15vh" },
          ],
          curviness: 1.7,
        },
        onComplete: () => {
          sessionStorage.setItem("introPlayed", "true");
        },
      });
    }

    return () => {
      bgAnimation.kill();
      tl.kill();
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={parallaxContainerRef} 
      className="relative min-h-screen bg-[#0A0A0A] overflow-x-hidden antialiased selection:bg-[#CDA349]/8"
    >
      {/* 🌌 MAIN BACKGROUND */}
      <div
        ref={bgRef}
        className="fixed -inset-[4%] bg-cover bg-center will-change-transform z-0 transform"
        style={{
          backgroundImage:
            'url("/create_a_Space_with_planets_from_long_view_with_clarity_beautifull__20251222114721_01.png")',
        }}
      />

      {/* 🌑 PREMIUM CINEMATIC VIGNETTE (Ultra-Transparent Crystal Center) */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(10,10,10,0) 35%,
              rgba(10,10,10,0.08) 55%,
              rgba(10,10,10,0.35) 72%,
              rgba(10,10,10,0.80) 88%,
              rgba(10,10,10,1) 100%
            )
          `,
        }}
      />

      {/* 🌫 PREMIUM GRAY ATMOSPHERE DEPTH (Perfect Clear Hub) */}
      <div
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(26,26,26,0) 0%, rgba(26,26,26,0.28) 100%)",
        }}
      />

      {/* ✨ LUXURY GOLD GLOW (Soft Right Shoulder Accent) */}
      <div
        className="fixed inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(205,163,73,0.07) 0%, transparent 50%)",
        }}
      />

      {/* 🌑 PREMIUM BOTTOM GRADIENT MASK */}
      <div
        className="fixed inset-0 z-[3] pointer-events-none bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent"
      />

      {/* 🛸 SPACESHIP */}
      <img
        ref={shipRef}
        src="/SpaceShip.png"
        alt="Spaceship"
        className="
          fixed
          top-0
          left-0
          w-[280px]
          md:w-[700px]
          pointer-events-none
          select-none
          will-change-transform
          z-[5]
        "
      />

      {/* 🔦 CINEMATIC LUXURY LIGHT BEAM */}
      <div ref={lightRef} className="fixed top-[15vh] md:top-[12vh] left-1/2 -translate-x-1/2 w-[240px] md:w-[460px] h-[75vh] pointer-events-none z-[4] will-change-transform">
        {/* Core hot-spot glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#CDA349]/15 via-[#CDA349]/3 to-transparent blur-xl origin-top" />
        {/* Soft, wide anamorphic dispersion field */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/8 via-transparent to-transparent blur-3xl scale-x-150 origin-top" />
      </div>

      {/* 📦 WEBSITE CONTENT LAYERING */}
      <div ref={contentRef} className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto will-change-transform">
        {children}
      </div>
    </div>
  );
}

export default GlobalBackground;