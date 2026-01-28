import { MapPin } from "lucide-react";
import { ReactNode } from "react";

const Experience = () => {
  const experiences: {
    title: string;
    company: string;
    location: string;
    period: string;
    type: string;
    highlights: ReactNode[];
  }[] = [
    {
      title: "Founding Product Manager",
      company: "Olis AI (Early-Stage Startup)",
      location: "Remote",
      period: "Jul 2025 – Dec 2025",
      type: "pm",
      highlights: [
        <>Directed all technology and product strategy as part of the founding leadership team, translating high-level business goals into a production-ready system and actionable technical requirements.</>,
        <>Partnered directly with the CEO and leadership team to define the <strong>product roadmap</strong>, establish key performance metrics (<strong>KPIs</strong>), and align the technology stack with core business goals.</>,
        <>Architected and engineered the end-to-end <strong>Retrieval-Augmented Generation (RAG)</strong> pipeline using <strong>LangChain</strong> and <strong>GPT-4o</strong>, managing the process from document parsing to <strong>LLM</strong> inference to automate <strong>80%</strong> of service ticket resolutions.</>,
        <>Utilized <strong>Milvus</strong> as a high-performance <strong>vector database</strong> for efficient semantic search and integrated <strong>Mem0</strong> to maintain persistent, evolving user memory across interactions.</>,
        <>Implemented <strong>Hugging Face</strong> transformers for specialized <strong>NLP</strong> tasks and optimized local <strong>LLM</strong> execution using <strong>Llama.cpp</strong> to support secure, resource-efficient environments.</>,
        <>Designed the complete product architecture and engineered a secure, on-premise deployment featuring full observability and enterprise-grade access control.</>,
        <>Led the full-stack development of all user-facing applications, including <strong>Chrome Extensions</strong>, <strong>MacOS/Windows apps</strong>, and native integrations with <strong>Slack</strong> and <strong>MS Teams</strong>.</>,
        <>Delivered <strong>60-70% weekly time savings</strong>, averaging <strong>4.7 hours per user</strong>, through seamless workflow integrations and automated ambient intelligence.</>,
        <>Orchestrated the <strong>MVP launch</strong> strategy by prioritizing the product backlog and conducting sprint planning to manage stakeholder expectations and deliver critical features under startup constraints.</>,
        <>Developed a comprehensive telemetry strategy and integration roadmap to ensure system scalability and reliability as the user base expanded.</>,
      ],
    },
    {
      title: "AI Engineer",
      company: "Community Dreams Foundation",
      location: "Boston, MA",
      period: "May 2025 – Jun 2025",
      type: "eng",
      highlights: [
        <>Owned complete technical architecture of voice-based <strong>FAQ assistant</strong> serving <strong>1,000+ users</strong></>,
        <>Managed sprint planning, stakeholder syncs, and deliverables as <strong>Engineering Project Manager</strong></>,
        <>Facilitated design discussions and maintained project documentation for cross-team collaboration</>,
      ],
    },
    {
      title: "Research Assistant",
      company: "Boston University",
      location: "Boston, MA",
      period: "Aug 2024 – Jan 2025",
      type: "eng",
      highlights: [
        <>Conducted <strong>deep learning</strong> research on cryptocurrency volatility, applying advanced <strong>neural networks</strong> to develop and compare trading strategies.</>,
        <>Investigated Bitcoin price behavior by developing and benchmarking advanced neural network models, including <strong>Long Short-Term Memory (LSTM)</strong>, <strong>Convolutional Neural Networks (CNN)</strong>, and <strong>Recurrent CNN (RCNN)</strong>.</>,
        <>Analyzed model performance across different time intervals (close-to-close, open-to-close) to evaluate the predictive power of a volatility-based trading strategy versus a traditional buy-and-hold approach.</>,
        <>Co-authored the resulting research paper, <strong>"Should You Sleep or Trade Bitcoin?"</strong>, which was accepted for publication at the <strong>11th International Conference on Time Series and Forecasting (ITISE 2025)</strong> in Spain.</>,
      ],
    },
    {
      title: "Data Science Intern",
      company: "Syren Cloud Inc",
      location: "Remote",
      period: "Jun 2024 – Aug 2024",
      type: "eng",
      highlights: [
        <>Engineered and automated end-to-end <strong>machine learning</strong> training and inference pipelines using <strong>Apache Airflow</strong> and <strong>Scikit-learn</strong>, reducing manual iteration cycles and streamlining experimental workflows.</>,
        <>Boosted multi-horizon forecast accuracy from a baseline of <strong>50% to 68–72%</strong> for over <strong>300+ SKUs</strong> by implementing and fine-tuning an ensemble of <strong>ARIMA</strong>, <strong>Prophet</strong>, and <strong>XGBoost</strong> models.</>,
        <>Developed robust <strong>feature engineering</strong> pipelines using lag variables, rolling windows, and seasonality trends to capture complex temporal patterns within proprietary company datasets.</>,
        <>Evaluated model performance using rigorous statistical metrics, including <strong>RMSE</strong>, <strong>MAE</strong>, and bias metrics, ensuring forecasting reliability across diverse product categories.</>,
        <>Collaborated cross-functionally with analytics and operations teams to align model predictions with high-level planning <strong>KPIs</strong>, successfully reducing supply-demand gaps.</>,
        <>Optimized downstream reporting by integrating automated forecasting outputs into the company's data infrastructure, enhancing the accuracy of inventory management and resource allocation.</>,
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Optum Global Solutions",
      location: "Bangalore, India",
      period: "Jun 2022 – Aug 2022",
      type: "eng",
      highlights: [
        <>Engineered and deployed a full-stack, <strong>HIPAA-compliant</strong> teleconsultation platform using <strong>Flask</strong> and <strong>MongoDB</strong>, facilitating secure virtual care for over <strong>500 weekly users</strong>.</>,
        <>Architected a real-time, peer-to-peer video conferencing module for doctors and patients, comparable to Google Meet and Zoom, ensuring encrypted, low-latency communication for remote clinical consultations.</>,
        <>Developed a seamless scheduling engine by integrating <strong>Google Calendar API</strong> and utilized <strong>Google Maps API</strong> for automated clinic discovery, significantly reducing average patient wait times and administrative overhead.</>,
        <>Containerized the entire microservices architecture using <strong>Docker</strong> and orchestrated the deployment on <strong>Azure Kubernetes Service (AKS)</strong> to ensure <strong>99.9% uptime</strong> and high availability.</>,
        <>Implemented secure <strong>RESTful APIs</strong> to handle sensitive patient data, adhering to strict healthcare regulatory standards and data privacy protocols.</>,
        <>Integrated automated <strong>CI/CD pipelines</strong> for the deployment process, allowing for rapid feature iteration and robust testing of the teleconsultation environment.</>,
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary hidden md:block" />
                  
                  <div className="p-6 md:p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                            exp.type === "pm" 
                              ? "bg-primary/10 text-primary" 
                              : "bg-secondary text-secondary-foreground"
                          }`}>
                            {exp.type === "pm" ? "Product" : "Engineering"}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-foreground font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary font-medium text-sm">{exp.period}</p>
                        <p className="text-muted-foreground text-sm flex items-center gap-1 justify-end">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-muted-foreground text-sm flex items-start gap-2 [&_strong]:text-foreground [&_strong]:font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
