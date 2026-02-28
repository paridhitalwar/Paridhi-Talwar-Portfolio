import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: ["Product Strategy", "PRD", "Product Growth", "Wireframing", "A/B Testing", "Agile & Scrum", "Roadmap Strategy"],
    },
    {
      title: "Technical",
      skills: ["Python", "SQL", "React", "TensorFlow", "AWS/GCP/Azure"],
    },
    {
      title: "Data & AI",
      skills: ["Machine Learning", "RAG Pipelines", "Time-Series Analysis", "Computer Vision", "MLOps"],
    },
    {
      title: "Tools",
      skills: ["JIRA", "Confluence", "Figma", "GitHub", "Docker"],
    },
  ];

  const additionalSkills = [
    "FastAPI", "MongoDB", "PostgreSQL", "Airflow", "PyTorch", 
    "Scikit-learn", "Pandas", "Databricks", "Kubernetes", "CI/CD"
  ];

  return (
    <section id="skills" className="py-32 relative section-dark noise-bg overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-primary font-display font-bold text-sm tracking-[0.3em] uppercase">Expertise</span>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-extrabold mb-16 text-white"
        >
          Skills &{" "}
          <span className="text-gradient">Technologies</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-500 group backdrop-blur-sm hover:bg-white/10"
            >
              <h3 className="font-display text-lg font-bold mb-5 text-white group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 text-white/60 text-sm group-hover:text-white/80 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 mb-6 text-sm font-medium tracking-wide uppercase">Additional technologies</p>
          <div className="flex flex-wrap gap-3 max-w-4xl">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
