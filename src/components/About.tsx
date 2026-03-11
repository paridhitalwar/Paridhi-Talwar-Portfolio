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
    <section id="about" className="py-28 relative">
      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4 text-center"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-12 text-center leading-tight"
          >
            Building products at the{" "}
            <span className="text-gradient">intersection</span> of AI & business
          </motion.h2>

          {/* Photo and Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-10 mb-20"
          >
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 to-accent/50 blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-border relative">
                <img 
                  src={headshot} 
                  alt="Paridhi headshot" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-center md:text-left">
              <p>
                I'm a Product Manager and AI Engineer with a unique blend of deep technical expertise 
                and strategic product thinking. With experience at early-stage startups as a Founding 
                Product Manager and Engineer, I thrive in ambiguity and love turning complex problems 
                into elegant solutions.
              </p>
              <p>
                My journey spans from building RAG pipelines and AI assistants to defining product 
                roadmaps and leading cross-functional teams. I'm passionate about creating AI-powered 
                products that deliver measurable impact, whether that's saving users 5+ hours weekly 
                or achieving 70%+ forecast accuracy.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="p-8 rounded-2xl glass hover:border-primary/30 transition-all duration-500 text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                  <edu.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-1">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm mb-2">{edu.school}</p>
                <p className="text-primary text-sm font-medium">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
