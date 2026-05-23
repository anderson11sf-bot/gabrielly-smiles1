import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Grau máximo de inclinação (default: 10)
  perspective?: number; // Perspectiva 3D (default: 1000)
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  perspective = 1000,
  onClick,
  style,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    
    // Coordenada do mouse relativa ao elemento (0 a width, 0 a height)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Converte para coordenadas normalizadas (-0.5 a 0.5)
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    // Calcula rotação (invertendo o eixo Y para o rotateX)
    const rotateX = -normY * maxTilt;
    const rotateY = normX * maxTilt;

    setRotate({ x: rotateX, y: rotateY });
    
    // Posição do brilho reflexivo (glare)
    setGlarePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const cardStyle: React.CSSProperties = {
    ...style,
    transform: isHovered
      ? `perspective(${perspective}px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`
      : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: isHovered ? "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    transformStyle: "preserve-3d",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={cardStyle}
      className={`relative overflow-hidden will-change-transform ${className}`}
    >
      {/* Glare/Brilho reflexivo em hover */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 253, 192, 0.12) 0%, transparent 60%)`,
          }}
        />
      )}
      
      {/* Container para manter children em 3D e preservado */}
      <div className="h-full w-full preserve-3d">
        {children}
      </div>
    </div>
  );
}
