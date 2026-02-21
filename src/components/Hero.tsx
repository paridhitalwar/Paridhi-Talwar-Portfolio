import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            Open to Product Management Opportunities
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 leading-tight animate-fade-up stagger-1 text-foreground">
            Hi, I'm{" "}
            <span className="text-gradient">Paridhi</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-up stagger-2">
            Product Manager & AI Engineer bridging technical excellence with strategic product vision.
          </p>
          
          <p className="text-muted-foreground text-base max-w-xl mx-auto mb-12 animate-fade-up stagger-2">
            MS in Computer Science from Boston University • 
            Passionate about building AI-powered products that create real impact.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
            <Button variant="hero" size="xl" asChild className="rounded-full">
              <a href="#experience">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="rounded-full">
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up stagger-5">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
