import { Github, Code, Database, Users, FileDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";


const Projects = () => {
  const softwareProjects = [
    {
      title: "AI Personal Knowledge Base Assistant",
      description: "Multi-source knowledge base that ingests documents from Notion and Google Drive, uses semantic search with embeddings to find relevant chunks, and leverages Groq LLM for context-aware AI-powered answers through a clean Streamlit interface.",
      tags: ["Notion API", "Google Drive", "Groq LLM", "Embeddings", "Streamlit"],
      impact: "Semantic search & AI-powered answers",
      hasGithub: true,
      githubLink: "https://github.com/paridhitalwar/AI-Personal-Knowledge-Base-Assistant",
    },
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
      title: "ChatGPT Live Scratchpad – Voice UX Redesign",
      description: "End-to-end product ideation for enhancing ChatGPT Voice Mode with a private 'Whisper' input and real-time editable transcripts, addressing the control and privacy barriers preventing 70% of young professionals from adopting voice input.",
      tags: ["Product Ideation", "Wireframing", "UX Research", "Voice UI", "Metrics"],
      impact: "Targeting 30% MoM voice adoption lift",
      hasGithub: false,
      pdfLink: "/documents/chatgpt-whisper-mode.pdf",
      prototypeLink: "https://articulate-whisper.lovable.app",
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
    {
      title: "AI Personal Knowledge Base Assistant – PM Case Study",
      description: "Product case study exploring the vision, user problem, strategy, and go-to-market approach behind building an AI-powered personal knowledge base that ingests documents from multiple sources and delivers context-aware answers.",
      tags: ["Product Strategy", "AI/ML Product", "Case Study", "GTM"],
      impact: "End-to-end product thinking",
      hasGithub: false,
      substackLink: "https://substack.com/@paridhitalwar/note/p-188468366",
    },
  ];

  const ProjectCard = ({ project, index }: { project: { title: string; description: string; tags: string[]; impact: string; hasGithub: boolean; pdfLink?: string; githubLink?: string; prototypeLink?: string; substackLink?: string }, index: number }) => (
    <TiltCard className="rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 * index }}
        className="p-8 rounded-2xl glass hover:border-primary/30 transition-all duration-500 group h-full"
      >
      <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
        {project.description}
      </p>

      <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
        {project.impact}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 text-xs font-medium glass text-muted-foreground rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {project.hasGithub && (
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary" asChild>
            <a href={project.githubLink || "#"} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View Code
            </a>
          </Button>
        )}
        {project.pdfLink && (
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary" asChild>
            <a href={project.pdfLink} target="_blank" rel="noopener noreferrer">
              <FileDown className="w-4 h-4" />
              View Case Study
            </a>
          </Button>
        )}
        {project.prototypeLink && (
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary" asChild>
            <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              View Prototype
            </a>
          </Button>
        )}
        {project.substackLink && (
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary" asChild>
            <a href={project.substackLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Read on Substack
            </a>
          </Button>
        )}
      </div>
      </motion.div>
    </TiltCard>
  );

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        <Tabs defaultValue="software" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 glass rounded-full p-1">
            <TabsTrigger value="software" className="gap-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Code className="w-4 h-4" />
              Software/AI
            </TabsTrigger>
            <TabsTrigger value="data" className="gap-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Database className="w-4 h-4" />
              Data
            </TabsTrigger>
            <TabsTrigger value="pm" className="gap-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="w-4 h-4" />
              Product Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="software">
            <div className="grid md:grid-cols-2 gap-6">
              {softwareProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="data">
            <div className="grid md:grid-cols-2 gap-6">
              {dataProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pm">
            <div className="grid md:grid-cols-2 gap-6">
              {pmProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
