import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
  gravity: number;
}

const ParticlePlayground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const isActive = useRef(false);
  const animRef = useRef<number>();

  const spawnParticles = useCallback((x: number, y: number, count = 5) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 4;
      particles.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 1,
        maxLife: 60 + Math.random() * 80,
        size: 2 + Math.random() * 4,
        hue: 320 + Math.random() * 60, // pink to purple range
        gravity: 0.03 + Math.random() * 0.02,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (isActive.current) {
        spawnParticles(e.clientX, e.clientY, 3);
      }
    };

    const handleMouseDown = () => {
      isActive.current = true;
      spawnParticles(mousePos.current.x, mousePos.current.y, 15);
    };
    const handleMouseUp = () => { isActive.current = false; };

    const handleClick = (e: MouseEvent) => {
      spawnParticles(e.clientX, e.clientY, 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("click", handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.life -= 1 / p.maxLife;
        if (p.life <= 0) return false;

        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;

        const alpha = p.life * 0.7;
        const size = p.size * p.life;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${alpha})`;
        ctx.fill();

        // glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${alpha * 0.15})`;
        ctx.fill();

        return true;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("click", handleClick);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [spawnParticles]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9990]"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default ParticlePlayground;
