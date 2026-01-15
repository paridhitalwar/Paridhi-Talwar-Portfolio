import { useEffect, useState, useRef } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newVelocity = {
        x: e.clientX - lastPosition.current.x,
        y: e.clientY - lastPosition.current.y,
      };
      setVelocity(newVelocity);
      lastPosition.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'
      );
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Smooth position animation
  useEffect(() => {
    const animate = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [position]);

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
  const stretchFactor = Math.min(speed / 50, 0.5);

  return (
    <>
      {/* Magnetic field effect */}
      <div
        className={`fixed pointer-events-none z-[9997] transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: smoothPosition.x,
          top: smoothPosition.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`absolute rounded-full transition-all duration-700 ease-out ${
            isHovering 
              ? 'w-40 h-40 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5' 
              : 'w-28 h-28 bg-gradient-radial from-primary/8 to-transparent'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Main cursor ring */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: smoothPosition.x,
          top: smoothPosition.y,
          transform: `translate(-50%, -50%) rotate(${Math.atan2(velocity.y, velocity.x)}rad) scaleX(${1 + stretchFactor})`,
        }}
      >
        {/* Outer morphing ring */}
        <div
          className={`absolute rounded-full border transition-all duration-300 ease-out ${
            isHovering 
              ? 'w-16 h-16 border-primary/60 bg-primary/5' 
              : isClicking 
                ? 'w-6 h-6 border-accent/80 bg-accent/10'
                : 'w-10 h-10 border-primary/30'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: isHovering 
              ? '0 0 20px rgba(var(--primary), 0.3), inset 0 0 20px rgba(var(--primary), 0.1)'
              : '0 0 10px rgba(var(--primary), 0.1)',
          }}
        />
        
        {/* Inner pulsing core */}
        <div
          className={`absolute rounded-full transition-all duration-150 ${
            isClicking 
              ? 'w-4 h-4 bg-accent' 
              : isHovering 
                ? 'w-2 h-2 bg-primary animate-pulse' 
                : 'w-1.5 h-1.5 bg-primary/70'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${isHovering ? '15px' : '8px'} currentColor`,
          }}
        />
      </div>

      {/* Orbital particles */}
      <OrbitalParticles position={smoothPosition} isVisible={isVisible} isHovering={isHovering} />

      {/* Enhanced trailing effect */}
      <CursorTrail position={position} isVisible={isVisible} velocity={velocity} />
    </>
  );
};

const OrbitalParticles = ({ 
  position, 
  isVisible, 
  isHovering 
}: { 
  position: { x: number; y: number }; 
  isVisible: boolean;
  isHovering: boolean;
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 2) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible || !isHovering) return null;

  const particles = [0, 120, 240];

  return (
    <>
      {particles.map((angle, index) => {
        const currentAngle = ((rotation + angle) * Math.PI) / 180;
        const radius = 28;
        const x = position.x + Math.cos(currentAngle) * radius;
        const y = position.y + Math.sin(currentAngle) * radius;

        return (
          <div
            key={index}
            className="fixed pointer-events-none z-[9998] w-1.5 h-1.5 rounded-full bg-primary/60"
            style={{
              left: x,
              top: y,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 6px currentColor',
            }}
          />
        );
      })}
    </>
  );
};

const CursorTrail = ({ 
  position, 
  isVisible,
  velocity 
}: { 
  position: { x: number; y: number }; 
  isVisible: boolean;
  velocity: { x: number; y: number };
}) => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number; vx: number; vy: number }>>([]);

  useEffect(() => {
    if (!isVisible) return;

    const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
    if (speed < 3) return; // Only create trail when moving fast enough

    const newPoint = { 
      x: position.x, 
      y: position.y, 
      id: Date.now(),
      vx: velocity.x,
      vy: velocity.y
    };
    setTrail((prev) => [...prev.slice(-8), newPoint]);

    const timeout = setTimeout(() => {
      setTrail((prev) => prev.filter((point) => point.id !== newPoint.id));
    }, 500);

    return () => clearTimeout(timeout);
  }, [position.x, position.y, isVisible, velocity]);

  return (
    <>
      {trail.map((point, index) => {
        const progress = (index + 1) / trail.length;
        const size = 3 + index * 1.5;
        
        return (
          <div
            key={point.id}
            className="fixed pointer-events-none z-[9996] rounded-full"
            style={{
              left: point.x,
              top: point.y,
              width: `${size}px`,
              height: `${size}px`,
              transform: 'translate(-50%, -50%)',
              opacity: progress * 0.4,
              background: `linear-gradient(135deg, hsl(var(--primary) / ${progress * 0.6}), hsl(var(--accent) / ${progress * 0.4}))`,
              filter: `blur(${(1 - progress) * 2}px)`,
            }}
          />
        );
      })}
    </>
  );
};

export default CursorFollower;
