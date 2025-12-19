"use client";

import { useEffect, useRef } from "react";
import profileData from "../../src/data/profile.json";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animated geometric pattern
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)";
      ctx.lineWidth = 2;

      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const offsetX = Math.sin(time + x * 0.01) * 5;
          const offsetY = Math.cos(time + y * 0.01) * 5;
          
          ctx.beginPath();
          ctx.moveTo(x + offsetX, y + offsetY);
          ctx.lineTo(x + gridSize + offsetX, y + offsetY);
          ctx.stroke();
        }
      }

      time += 0.02;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0e27]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 py-20 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl font-black tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
                {profileData.name}
              </h1>
              
              <p className="text-xl font-semibold text-[#3b82f6] sm:text-2xl md:text-3xl">
                {profileData.role}
              </p>
              
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl lg:mx-0">
                {profileData.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-lg bg-[#3b82f6] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#2563eb] hover:scale-105 hover:shadow-xl hover:shadow-[#3b82f6]/50"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 translate-y-full bg-[#2563eb] transition-transform group-hover:translate-y-0" />
              </a>
              <a
                href="#contact"
                className="rounded-lg border-2 border-white/20 bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:border-white/40 hover:bg-white/10 hover:scale-105"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="relative h-96 w-96">
              {/* Geometric shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rotate-45 rounded-lg border-4 border-[#3b82f6]/30 bg-[#1a1f3a]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 -rotate-12 rounded-lg border-4 border-[#3b82f6]/50 bg-[#252b4a]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rotate-12 rounded-lg bg-[#3b82f6]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
