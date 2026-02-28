import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, Linkedin, Github, ArrowUpRight } from "lucide-react";
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

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:paridhitalwar2@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/paridhi-talwar/" },
    { icon: Github, label: "GitHub", href: "https://github.com/paridhitalwar" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <span className="text-primary font-display font-bold text-sm tracking-[0.3em] uppercase">Get In Touch</span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-extrabold mb-6"
          >
            Let's work <span className="text-gradient">together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mb-16"
          >
            I'm actively looking for Product Management opportunities. 
            Let's discuss how I can bring value to your team.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground">India (Open to Relocation)</p>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground mb-5 text-sm font-medium tracking-wide uppercase">Connect with me</p>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.label !== "Email" ? "_blank" : undefined}
                      rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/30 group transition-all duration-300 hover:shadow-[var(--shadow-card)]"
                    >
                      <div className="flex items-center gap-3">
                        <link.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{link.label}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
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
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none font-medium"
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full gap-2 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-bold text-base py-6">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
