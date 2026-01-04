const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: ["Agile & Scrum", "Sprint Planning", "Stakeholder Management", "Roadmap Strategy", "Risk Management"],
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
    <section id="skills" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-display text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 text-sm">Additional technologies</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
