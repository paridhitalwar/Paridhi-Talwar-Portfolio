import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio Contact from ${result.data.name}`);
    const body = encodeURIComponent(`Name: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`);
    window.location.href = `mailto:paridhitalwar2@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              Let's work <span className="text-gradient">together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              I'm actively looking for Product Management opportunities. 
              Let's discuss how I can bring value to your team.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl glass">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">India (Open to Relocation)</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground mb-4 text-sm tracking-wide">Connect with me</p>
                <div className="flex gap-3">
                  {[
                    { href: "mailto:paridhitalwar2@gmail.com", icon: Mail, label: "Email" },
                    { href: "https://linkedin.com/in/paridhi-talwar/", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://github.com/paridhitalwar", icon: Github, label: "GitHub" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full glass text-muted-foreground text-sm font-medium hover:text-primary hover:border-primary/30 transition-all duration-300"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full gap-2 rounded-full glow">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
