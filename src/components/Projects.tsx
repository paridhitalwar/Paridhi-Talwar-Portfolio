import { Github, Code, Database, Users, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const softwareProjects = [
    {
      title: "Smart Fridge App",
      description: "AI-powered meal management app reducing food waste by 10% through inventory tracking, calendar-based meal planning, and LLM-powered recipe suggestions using Gemini.",
      tags: ["Python", "React", "Flask", "MongoDB", "GenAI"],
      impact: "10% reduction in food waste",
      hasGithub: true,
    },
    {
      title: "Animal Intrusion Detection",
      description: "Real-time computer vision system using Mask RCNN and OpenCV achieving 87% detection accuracy, with automated alerts reducing human intervention by 30%.",
      tags: ["Computer Vision", "OpenCV", "Mask RCNN"],
      impact: "87% accuracy, 30% faster response",
      hasGithub: false,
    },
    {
      title: "Focused Study",
      description: "Productivity application designed to help students maintain focus during study sessions with distraction tracking and personalized recommendations.",
      tags: ["React", "TypeScript", "UX Design"],
      impact: "Enhanced study productivity",
      hasGithub: false,
    },
  ];

  const dataProjects = [
    {
      title: "Brewing Data Analytics",
      description: "End-to-end data pipeline analyzing brewing parameters and sales trends using PySpark on GCP, with ML models predicting quality outcomes and real-time stakeholder dashboards.",
      tags: ["PySpark", "GCP", "ML", "Dashboards"],
      impact: "Real-time operational insights",
      hasGithub: false,
    },
    {
      title: "Bitcoin Trading Analysis",
      description: "Published research at ITISE 2025 on time-series forecasting for cryptocurrency trading patterns, exploring sleep vs. trade optimization strategies.",
      tags: ["Time-Series", "Python", "Research"],
      impact: "Published at ITISE 2025, Spain",
      hasGithub: false,
    },
    {
      title: "Spotify Top 50 Song Analysis",
      description: "Statistical analysis of Spotify's top 50 songs using R, exploring audio features, trends, and patterns that contribute to song popularity.",
      tags: ["R", "Statistical Analysis", "Data Visualization"],
      impact: "Music trend insights",
      hasGithub: false,
    },
  ];

  const pmProjects = [
    {
      title: "AI Personal Knowledge Base Assistant",
      description: "Multi-source knowledge base that ingests documents from Notion and Google Drive, uses semantic search with embeddings to find relevant chunks, and leverages Groq LLM for context-aware AI-powered answers through a clean Streamlit interface.",
      tags: ["Notion API", "Google Drive", "Groq LLM", "Embeddings", "Streamlit"],
      impact: "Semantic search & AI-powered answers",
      hasGithub: true,
      githubLink: "https://github.com/paridhitalwar/AI-Personal-Knowledge-Base-Assistant",
    },
    {
      title: "ChatGPT Market Research Case Study",
      description: "Comprehensive market research analysis for ChatGPT, including competitive landscape, market sizing, and strategic recommendations for product positioning.",
      tags: ["Market Research", "Competitive Analysis", "Strategy"],
      impact: "Strategic product insights",
      hasGithub: false,
      pdfLink: "/documents/chatgpt-market-research.pdf",
    },
    {
      title: "ChatGPT User Research & Segmentation",
      description: "In-depth user research and segmentation study identifying key user personas, pain points, and opportunities for ChatGPT product improvements.",
      tags: ["User Research", "Segmentation", "Personas"],
      impact: "Data-driven user insights",
      hasGithub: false,
      pdfLink: "/documents/chatgpt-user-research.pdf",
    },
  ];

  const ProjectCard = ({ project }: { project: typeof softwareProjects[0] & { pdfLink?: string; githubLink?: string } }) => (
    <div className="p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 group">
      <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
        {project.impact}
      </div>

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

      <div className="flex gap-2">
        {project.hasGithub && (
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <a href={project.githubLink || "#"} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View Code
            </a>
          </Button>
        )}
        {project.pdfLink && (
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <a href={project.pdfLink} target="_blank" rel="noopener noreferrer">
              <FileDown className="w-4 h-4" />
              View Case Study
            </a>
          </Button>
        )}
      </div>
    </div>
  );

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

        <Tabs defaultValue="software" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="software" className="gap-2">
              <Code className="w-4 h-4" />
              Software
            </TabsTrigger>
            <TabsTrigger value="data" className="gap-2">
              <Database className="w-4 h-4" />
              Data
            </TabsTrigger>
            <TabsTrigger value="pm" className="gap-2">
              <Users className="w-4 h-4" />
              Product Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="software">
            <div className="grid md:grid-cols-2 gap-8">
              {softwareProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="data">
            <div className="grid md:grid-cols-2 gap-8">
              {dataProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pm">
            <div className="grid md:grid-cols-2 gap-8">
              {pmProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
