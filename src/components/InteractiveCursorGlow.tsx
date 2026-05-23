import React, { useEffect, useRef } from "react";

export function InteractiveCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  
  // Posições real (mouse) e interpolada (suave)
  const mousePos = useRef({ x: 0, y: 0 });
  const interpPos = useRef({ x: 0, y: 0 });
  const isMobile = useRef(false);

  useEffect(() => {
    // Detecta se é dispositivo móvel / touch
    const checkTouch = () => {
      isMobile.current = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile.current) return;
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const updateGlowPosition = () => {
      if (isMobile.current) {
        if (glowRef.current) {
          glowRef.current.style.opacity = "0";
        }
        animationFrameId = requestAnimationFrame(updateGlowPosition);
        return;
      }

      // LERP: interpPos = interpPos + (mousePos - interpPos) * speed
      // 0.08 dá um efeito de deslize muito suave, luxuoso
      interpPos.current.x += (mousePos.current.x - interpPos.current.x) * 0.08;
      interpPos.current.y += (mousePos.current.y - interpPos.current.y) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.opacity = "0.22";
        glowRef.current.style.transform = `translate3d(calc(${interpPos.current.x}px - 50%), calc(${interpPos.current.y}px - 50%), 0)`;
      }

      animationFrameId = requestAnimationFrame(updateGlowPosition);
    };

    animationFrameId = requestAnimationFrame(updateGlowPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkTouch);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(247,214,131,0.22)_0%,rgba(204,178,76,0.06)_40%,transparent_70%)] blur-[80px] transition-opacity duration-500 will-change-transform"
      style={{
        opacity: 0,
        transform: "translate3d(-100%, -100%, 0)",
      }}
    />
  );
}
