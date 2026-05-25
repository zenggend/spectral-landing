"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

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
      dot.style.transform = "translate(-50%,-50%) scale(0.7)";
      ring.style.transform = "translate(-50%,-50%) scale(0.6)";
    }

    function onPointerUp() {
      dot.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.transform = "translate(-50%,-50%) scale(1)";
    }

    function animate() {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const rp = ringPosRef.current;

      rp.x += (mx - rp.x) * 0.15;
      rp.y += (my - rp.y) * 0.15;

      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      ring.style.left = `${rp.x}px`;
      ring.style.top = `${rp.y}px`;

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
      <span ref={dotRef} className="cursor-dot" />
      <span ref={ringRef} className="cursor-ring" />
    </div>
  );
}
