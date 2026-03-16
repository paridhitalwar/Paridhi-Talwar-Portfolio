import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface MagneticTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "span";
}

const MagneticLetter = ({ letter, index }: { letter: string; index: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotate = useTransform(springX, [-40, 40], [-15, 15]);
  const scale = useSpring(1, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    x.set(distX * 0.4);
    y.set(distY * 0.4);
    scale.set(1.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
    setIsHovered(false);
  };

  if (letter === " ") return <span className="inline-block w-[0.3em]">&nbsp;</span>;

  return (
    <motion.span
      ref={ref}
      className="inline-block cursor-none select-none transition-colors duration-200"
      style={{
        x: springX,
        y: springY,
        rotate,
        scale,
        color: isHovered ? "hsl(var(--primary))" : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, rotate: -10 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        delay: 0.4 + index * 0.04,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
    >
      {letter}
    </motion.span>
  );
};

const MagneticText = ({ text, className = "", as: Tag = "h1" }: MagneticTextProps) => {
  return (
    <Tag className={className}>
      {text.split("").map((letter, index) => (
        <MagneticLetter key={index} letter={letter} index={index} />
      ))}
    </Tag>
  );
};

export default MagneticText;
