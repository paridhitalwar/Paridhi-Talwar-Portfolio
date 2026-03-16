import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import MagneticText from "@/components/MagneticText";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient noise">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" style={{ animation: "float 8s ease-in-out infinite" }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-primary text-sm font-medium mb-10"
          >
            <Sparkles className="w-4 h-4" />
            Open to Product Management Opportunities
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 leading-[0.9] tracking-tight text-foreground"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Paridhi</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            Product Manager & AI Engineer bridging technical excellence with strategic product vision.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-muted-foreground/70 text-base max-w-xl mx-auto mb-14"
          >
            MS in Computer Science from Boston University • 
            Passionate about building AI-powered products that create real impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild className="rounded-full glow">
              <a href="#experience">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="rounded-full">
              <a href="#contact">Let's Connect</a>
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-light">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
