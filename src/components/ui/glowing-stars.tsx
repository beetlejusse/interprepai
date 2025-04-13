// components/ui/glowing-stars.tsx

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: { x: number; y: number; radius: number; opacity: number }[] = [];
    const starCount = 50;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        star.opacity += (Math.random() - 0.5) * 0.05;
        star.opacity = Math.max(0.1, Math.min(star.opacity, 1));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(100, 149, 255, ${star.opacity})`;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900",
        className
      )}
    >
      {/* Background Glow Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />
      {/* Content on top */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
