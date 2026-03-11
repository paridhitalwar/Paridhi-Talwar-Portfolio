import { FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const publications = [
  {
    title: "Should You Sleep Or Trade Bitcoin?",
    conference: "ITISE Conf'25, MDPI",
    date: "Aug 22, 2025",
    doi: "https://doi.org/10.3390/cmsf2025011020",
    description: "An exploration of how deep learning models predict Bitcoin price moves across different trading windows and why the overnight market may hold the most surprising edge.",
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
    <section id="publications" className="py-28 relative">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-xs block mb-4"
          >
            Research
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold"
          >
            Publications
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="group block glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {pub.conference} · {pub.date}
                  </p>
                  {pub.description && (
                    <p className="text-sm text-muted-foreground/70 mt-2 line-clamp-3">
                      {pub.description}
                    </p>
                  )}
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
