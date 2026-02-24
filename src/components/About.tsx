import { GraduationCap, Award } from "lucide-react";
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
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 text-center">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 text-center">
            Building products at the{" "}
            <span className="text-gradient">intersection</span> of AI & business
          </h2>

          {/* Photo and Bio */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg flex-shrink-0">
              <img 
                src={headshot} 
                alt="Paridhi headshot" 
                className="w-full h-full object-cover object-top"
              />
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
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm mb-2">{edu.school}</p>
                <p className="text-primary text-sm font-medium">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
