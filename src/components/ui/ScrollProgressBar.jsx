import { useEffect, useRef, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(pct);
      rafRef.current = null;
    };

    const onScroll = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // dot position: clamp so it stays within the track
  const dotTopPct = Math.min(Math.max(progress * 100, 0), 98);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "3px",
        height: "100vh",
        zIndex: 9999,
      }}
    >
      {/* Track background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "hsl(215 16% 10% / 0.5)",
        }}
      />

      {/* Filled portion (progress fill from top) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: `${progress * 100}%`,
          background:
            "linear-gradient(to bottom, hsl(217 91% 75%), hsl(217 91% 52%))",
          boxShadow: "0 0 4px hsl(217 91% 60% / 0.35)",
          transition: "height 0.15s ease",
        }}
      />

      {/* Dot indicator at the current progress position */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: `${dotTopPct}%`,
          transform: "translate(-50%, -50%)",
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: "hsl(217 91% 68%)",
          boxShadow:
            "0 0 0 2px hsl(217 91% 60% / 0.12), 0 0 7px hsl(217 91% 60% / 0.6)",
          transition: "top 0.15s ease",
          zIndex: 1,
        }}
      >
        {/* Pulse ring */}
        <span
          style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "50%",
            border: "1px solid hsl(217 91% 60% / 0.3)",
            animation: "scroll-ping 2.5s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scroll-ping {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 0;   transform: scale(1.8); }
        }
      `}</style>
    </div>
  );
}
