"use client";

import { useEffect, useRef, useState } from "react";

type Point3D = { x: number; y: number; z: number; color: string; isCup: boolean };
type SteamPoint = { x: number; y: number; z: number; opacity: number; speed: number; sway: number };

function PixelDonut() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number | null>(null);

  const pointsRef = useRef<Point3D[]>([]);
  const steamRef = useRef<SteamPoint[]>([]);
  const rotationRef = useRef({ x: 0.2, y: 0 }); // Slight X tilt to see the lid

  useEffect(() => {
    const updateSize = () => {
      const size = Math.min(window.innerWidth * 0.9, window.innerHeight * 0.7, 800);
      setDimensions({ width: size, height: size });

      const pts: Point3D[] = [];
      const cTan = "34, 44%, 80%";
      const cBrown = "25, 30%, 35%";
      const cIcing = "30, 60%, 90%";

      const addRing = (y: number, radius: number, count: number, color: string, isCup: boolean) => {
        for (let i = 0; i < count; i++) {
          const angle = (i / count) * Math.PI * 2;
          pts.push({ x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius, color, isCup });
        }
      };

      // 1. GENERATE CUP (isCup: true)
      for (let y = 0.6; y >= -0.6; y -= 0.04) {
        const t = (0.6 - y) / 1.2;
        let radius = 0.35 + t * 0.18;
        const isSleeve = y < 0.2 && y > -0.2;
        const color = isSleeve ? cBrown : cTan;
        if (isSleeve) radius *= 1.06;
        addRing(y, radius, Math.floor(radius * 160), color, true);
      }
      // Lid
      for (let y = -0.6; y >= -0.68; y -= 0.02) {
        addRing(y, 0.56, 100, cBrown, true);
      }

      // 2. GENERATE STANDING DONUT (isCup: false)
      const dX = 0.42; const dY = 0.45; const dZ = 0.25;
      const majorR = 0.26; const minorR = 0.12;
      for (let p = 0; p < Math.PI * 2; p += 0.1) {
        for (let t = 0; t < Math.PI * 2; t += 0.2) {
          const tx = (majorR + minorR * Math.cos(t)) * Math.cos(p);
          const tz = (majorR + minorR * Math.cos(t)) * Math.sin(p);
          const ty = minorR * Math.sin(t);
          const color = ty < -0.02 ? cIcing : cTan;
          pts.push({ x: tx + dX, y: tz + dY, z: ty + dZ, color, isCup: false });
        }
      }
      pointsRef.current = pts;

      // 3. INITIALIZE STEAM
      const steam = [];
      for(let i = 0; i < 35; i++) {
        steam.push({
          x: (Math.random() - 0.5) * 0.4,
          y: -0.7 - Math.random() * 0.5,
          z: (Math.random() - 0.5) * 0.4,
          opacity: Math.random(),
          speed: 0.004 + Math.random() * 0.008,
          sway: Math.random() * 10
        });
      }
      steamRef.current = steam;
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      const globalScale = dimensions.width * 0.4;
      const perspective = 800;

      // Rotate the Cup
      rotationRef.current.y += 0.006;

      const cx = Math.cos(rotationRef.current.x);
      const sx = Math.sin(rotationRef.current.x);
      const cy = Math.cos(rotationRef.current.y);
      const sy = Math.sin(rotationRef.current.y);

      // --- Draw Cup (Rotating) & Donut (Still) ---
      pointsRef.current.forEach(p => {
        let x, y, zFinal;
        if (p.isCup) {
          const rx = p.x * cy - p.z * sy;
          const rz = p.x * sy + p.z * cy;
          y = p.y * cx - rz * sx;
          zFinal = p.y * sx + rz * cx;
          x = rx;
        } else {
          y = p.y * cx - p.z * sx;
          zFinal = p.y * sx + p.z * cx;
          x = p.x;
        }

        const scale = perspective / (perspective + zFinal * globalScale);
        const screenX = centerX + x * globalScale * scale;
        const screenY = centerY + y * globalScale * scale;

        if (scale > 0) {
          const opacity = Math.max(0.1, (zFinal + 1.2) / 2.4);
          ctx.fillStyle = `hsla(${p.color}, ${opacity})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, scale * 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // --- Draw & Update Steam ---
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      steamRef.current.forEach(s => {
        s.y -= s.speed;
        s.opacity -= 0.004;
        const swayX = Math.sin(s.y * 4 + s.sway) * 0.03;

        if (s.opacity <= 0) {
          s.y = -0.7;
          s.opacity = 0.4 + Math.random() * 0.5;
          s.x = (Math.random() - 0.5) * 0.4;
        }

        const sy_rot = s.y * cx - s.z * sx;
        const sz_rot = s.y * sx + s.z * cx;
        const sScale = perspective / (perspective + sz_rot * globalScale);
        const sX = centerX + (s.x + swayX) * globalScale * sScale;
        const sY = centerY + sy_rot * globalScale * sScale;

        ctx.beginPath();
        ctx.globalAlpha = s.opacity;
        ctx.arc(sX, sY, sScale * 2.5, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [dimensions]);

  return (
    <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} className="opacity-90" />
  );
}

export default function HeroCard() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-between items-center">
      <div className="h-32 flex items-end">
         <div className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-medium">
            scroll down
         </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full overflow-visible">
        <PixelDonut />
      </div>

      <div className="w-full px-6 pb-10 text-center relative z-20">
        <h1 className="text-[9.5vw] lg:text-[9vw] font-bold text-white tracking-tighter leading-none uppercase select-none inline-flex items-start justify-center">
          CoffeeDonut
          <span className="text-[2.2vw] font-normal ml-1 mt-[1vw]">®</span>
          <span className="ml-4">TV</span>
        </h1>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-[#d4a574]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
