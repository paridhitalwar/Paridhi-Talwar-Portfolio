import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check for hover on interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      );
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor glow */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer glow ring */}
        <div
          className={`absolute rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl transition-all duration-500 ease-out ${
            isHovering ? 'w-24 h-24' : 'w-16 h-16'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Inner dot */}
        <div
          className={`absolute rounded-full bg-primary/40 transition-all duration-200 ${
            isHovering ? 'w-3 h-3' : 'w-2 h-2'
          }`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Trailing particles */}
      <CursorTrail position={position} isVisible={isVisible} />
    </>
  );
};

const CursorTrail = ({ position, isVisible }: { position: { x: number; y: number }; isVisible: boolean }) => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    if (!isVisible) return;

    const newPoint = { x: position.x, y: position.y, id: Date.now() };
    setTrail((prev) => [...prev.slice(-5), newPoint]);

    const timeout = setTimeout(() => {
      setTrail((prev) => prev.filter((point) => point.id !== newPoint.id));
    }, 400);

    return () => clearTimeout(timeout);
  }, [position.x, position.y, isVisible]);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9998] rounded-full bg-primary/20 blur-sm animate-fade-out"
          style={{
            left: point.x,
            top: point.y,
            width: `${4 + index * 2}px`,
            height: `${4 + index * 2}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length * 0.5,
          }}
        />
      ))}
    </>
  );
};

export default CursorFollower;
