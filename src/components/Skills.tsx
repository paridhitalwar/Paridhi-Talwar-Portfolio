const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "MATLAB", "Java", "R", "SQL", "LaTeX"],
    },
    {
      title: "Libraries & Tools",
      skills: ["GitHub", "JIRA", "MongoDB", "NumPy", "Pandas", "Scikit-learn", "NLTK", "Keras", "Streamlit", "Cypress"],
    },
    {
      title: "Technologies & Frameworks",
      skills: ["TensorFlow", "Google Cloud", "AWS", "Azure", "PySpark", "PyTorch", "Databricks", "FastAPI"],
    },
    {
      title: "DevOps & Deployment",
      skills: ["GitHub Actions", "Docker", "CI/CD", "Airflow", "Azure Kubernetes Service", "Unit Testing (PyTest)"],
    },
    {
      title: "Data Science & Analytics",
      skills: ["Machine Learning", "MLOps", "MLFlow", "Generative AI", "Computer Vision", "Statistical Modeling", "Time-Series Analysis"],
    },
  ];

  const additionalSkills = [
    "Agile & Scrum", "Sprint Planning", "Stakeholder Management", "Roadmap Strategy", "RAG Pipelines", "PostgreSQL"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
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
