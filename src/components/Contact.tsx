import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Let's work <span className="text-gradient">together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm actively looking for Product Management opportunities. 
              Let's discuss how I can bring value to your team.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">India (Open to Relocation)</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground mb-4 text-sm">Connect with me</p>
                <div className="flex gap-3">
                  <a
                    href="mailto:paridhitalwar2@gmail.com"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a
                    href="https://linkedin.com/in/paridhi-talwar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/paridhitalwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
