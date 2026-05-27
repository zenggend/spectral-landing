"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    function onMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (!visible) setVisible(true);
    }

    function onMouseLeave() {
      setVisible(false);
    }

    function onMouseEnter() {
      setVisible(true);
    }

    function onPointerDown() {
      dot.style.transform = "scale(0.82)";
    }

    function onPointerUp() {
      dot.style.transform = "scale(1)";
    }

    function animate() {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;

      rafRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  return (
    <div
      className="custom-cursor"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div ref={dotRef} className="cursor-pointer-svg">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" className="neon-svg-pointer">
          <defs>
            <filter id="neon-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0 0 L0 16 L4.5 12 L9 19 L11 17.5 L6.5 10.5 L11 10.5 Z"
            fill="color-mix(in srgb, var(--accent-b) 16%, rgba(0, 0, 0, 0.45))"
            stroke="var(--accent-b)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            filter="url(#neon-glow)"
          />
        </svg>
      </div>
    </div>
  );
}
