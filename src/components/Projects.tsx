import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with seamless checkout experience and real-time inventory management.",
      tags: ["React", "Node.js", "PostgreSQL"],
      image: "🛒",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and intuitive interface.",
      tags: ["Next.js", "TypeScript", "Prisma"],
      image: "📋",
      featured: false,
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard with machine learning insights and beautiful data visualizations.",
      tags: ["Python", "React", "TensorFlow"],
      image: "📊",
      featured: false,
    },
    {
      title: "Social Media App",
      description: "Feature-rich social platform with real-time messaging and content sharing.",
      tags: ["React Native", "Firebase", "Redux"],
      image: "💬",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-32 relative bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            My Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden card-gradient border border-border hover:border-primary/50 transition-all duration-500 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Project image/icon area */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
