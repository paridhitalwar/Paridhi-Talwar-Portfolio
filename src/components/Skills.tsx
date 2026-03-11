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
    <section id="skills" className="py-28 relative">
      {/* Ambient background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4"
          >
            Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="p-7 rounded-2xl glass hover:border-primary/30 transition-all duration-500 group"
            >
              <h3 className="font-display text-lg font-bold mb-5 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 text-muted-foreground text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-sm shadow-primary/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 text-sm tracking-wide">Additional technologies</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * index }}
                className="px-4 py-2 rounded-full glass text-muted-foreground text-sm font-medium hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
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
