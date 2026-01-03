import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Smart Fridge App",
      description: "AI-powered meal management app reducing food waste by 10% through inventory tracking, calendar-based meal planning, and LLM-powered recipe suggestions using Gemini.",
      tags: ["Python", "React", "Flask", "MongoDB", "GenAI"],
      impact: "10% reduction in food waste",
      hasGithub: true,
    },
    {
      title: "Bitcoin Trading Analysis",
      description: "Published research at ITISE 2025 on time-series forecasting for cryptocurrency trading patterns, exploring sleep vs. trade optimization strategies.",
      tags: ["Time-Series", "Python", "Research"],
      impact: "Published at ITISE 2025, Spain",
      hasGithub: false,
    },
    {
      title: "Brewing Data Analytics",
      description: "End-to-end data pipeline analyzing brewing parameters and sales trends using PySpark on GCP, with ML models predicting quality outcomes and real-time stakeholder dashboards.",
      tags: ["PySpark", "GCP", "ML", "Dashboards"],
      impact: "Real-time operational insights",
      hasGithub: false,
    },
    {
      title: "Animal Intrusion Detection",
      description: "Real-time computer vision system using Mask RCNN and OpenCV achieving 87% detection accuracy, with automated alerts reducing human intervention by 30%.",
      tags: ["Computer Vision", "OpenCV", "Mask RCNN"],
      impact: "87% accuracy, 30% faster response",
      hasGithub: false,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Impact badge */}
              <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {project.impact}
              </div>

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
              {project.hasGithub && (
                <Button variant="ghost" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
