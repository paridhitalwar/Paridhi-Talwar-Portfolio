import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";
import headshot from "@/assets/headshot.png";

const About = () => {
  const education = [
    {
      degree: "MS in Computer Science",
      school: "Boston University, USA",
      year: "2023 - 2025",
      icon: GraduationCap,
    },
    {
      degree: "B.Tech in Computer Science",
      school: "SRM University, India",
      year: "2019 - 2023",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <span className="text-primary font-display font-bold text-sm tracking-[0.3em] uppercase">About Me</span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>

          {/* Photo and Bio - asymmetric layout */}
          <div className="grid md:grid-cols-12 gap-12 mb-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4"
            >
              <div className="relative">
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden">
                  <img 
                    src={headshot} 
                    alt="Paridhi headshot" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Accent frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              </div>
            </motion.div>

            <div className="md:col-span-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight"
              >
                Building products at the{" "}
                <span className="text-gradient">intersection</span> of AI & business
              </motion.h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  I'm a Product Manager and AI Engineer with a unique blend of deep technical expertise 
                  and strategic product thinking. With experience at early-stage startups as a Founding 
                  Product Manager and Engineer, I thrive in ambiguity and love turning complex problems 
                  into elegant solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  My journey spans from building RAG pipelines and AI assistants to defining product 
                  roadmaps and leading cross-functional teams. I'm passionate about creating AI-powered 
                  products that deliver measurable impact, whether that's saving users 5+ hours weekly 
                  or achieving 70%+ forecast accuracy.
                </motion.p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 group hover:shadow-[var(--shadow-dramatic)]"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <edu.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <p className="text-primary text-sm font-semibold mt-1">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
