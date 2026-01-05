import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Should You Sleep Or Trade Bitcoin?",
    conference: "ITISE Conf'25, MDPI",
    date: "Aug 22, 2025",
    doi: "https://doi.org/10.3390/cmsf2025011020",
    description: "Conducted a comprehensive time-series analysis of Bitcoin price behavior to evaluate the efficacy of \"overnight\" trading versus traditional buy-and-hold strategies. By leveraging neural networks to analyze 14-day and 50-day windows, the study provides actionable insights into market sentiment and risk management, demonstrating how sequential modeling can capitalize on global market shifts outside of standard trading hours.",
  },
  {
    title: "Animal Intrusion Detection System",
    conference: "ICIOT Conf'23, AIP",
    date: "Jul 29, 2024",
    doi: "https://doi.org/10.1063/5.0217578",
    description: "Led the development of a computer vision project aimed at reducing animal-human accidents in rural India. Published in AIP Conference Proceedings, this research utilizes instance segmentation to recognize intrusions in real-time.",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Research
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Publications
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {pub.conference} · {pub.date}
                  </p>
                  {"description" in pub && pub.description && (
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                      {pub.description}
                    </p>
                  )}
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
