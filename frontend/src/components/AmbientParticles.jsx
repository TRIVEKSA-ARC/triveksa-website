function AmbientParticles() {
  const particles = Array.from({ length: 45 });

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 1;

        return (
          <span
            key={i}
            className="absolute animate-pulse rounded-full bg-white/40"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              opacity: Math.random() * 0.5,
            }}
          />
        );
      })}
    </div>
  );
}

export default AmbientParticles;