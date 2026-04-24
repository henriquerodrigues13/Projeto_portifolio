import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onReady }) {
  const [isComplete, setIsComplete] = useState(false);
  const preloaderRef = useRef(null);
  const percentRef = useRef(null);
  const progressRef = useRef(null);
  const brandRef = useRef(null);

  useEffect(() => {
    // 1. Scramble Text Logic
    const chars = "!<>-_\\\\/[]{}—=+*^?#________";
    const originalText = "> LOAD...";
    let iterations = 0;

    const scrambleInterval = setInterval(() => {
      if (brandRef.current) {
        brandRef.current.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (index < iterations) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
      }

      if (iterations >= originalText.length) clearInterval(scrambleInterval);
      iterations += 1 / 3;
    }, 30);

    // 2. Preloader Animation
    const tlPreloader = gsap.timeline();
    let percent = { val: 0 };

    tlPreloader
      .to(percent, {
        val: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: function () {
          if (percentRef.current) {
            percentRef.current.innerText = Math.floor(percent.val) + "%";
          }
          if (progressRef.current) {
            gsap.set(progressRef.current, { scaleX: percent.val / 100 });
          }
        },
      })
      .to(preloaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          if (onReady) onReady();
          setIsComplete(true);
        },
      });

    return () => {
      clearInterval(scrambleInterval);
      tlPreloader.kill();
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-[#050A15] flex items-center justify-center flex-col"
    >
      <div className="overflow-hidden mb-6">
        <h1
          ref={brandRef}
          className="font-['VT323',monospace] text-4xl tracking-tighter text-primary font-medium"
        >
          &gt; LOAD...
        </h1>
      </div>
      <div className="w-64 h-[1px] bg-primary/20 relative">
        <div
          ref={progressRef}
          className="absolute top-0 left-0 h-full bg-primary origin-left scale-x-0 shadow-[0_0_12px_hsl(var(--primary))]"
        ></div>
      </div>
      <div className="mt-6 flex justify-between w-64 font-['Fira_Code',monospace] text-xs text-primary/70 tracking-widest uppercase">
        <span>SYS.MEM</span>
        <span className="text-secondary font-bold" ref={percentRef}>
          0%
        </span>
      </div>
    </div>
  );
}
