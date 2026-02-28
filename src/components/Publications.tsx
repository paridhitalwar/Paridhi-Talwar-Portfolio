import { FileText, ArrowUpRight } from "lucide-react";
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
    <section id="publications" className="py-32 section-dark noise-bg relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-primary font-display font-bold text-sm tracking-[0.3em] uppercase">Research</span>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-extrabold text-white mb-16"
        >
          Publications
        </motion.h2>

        <div className="max-w-3xl space-y-6">
          {publications.map((pub, index) => (
            <motion.a
              key={index}
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group block bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/40 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary/15 rounded-xl text-primary shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-white/50 mt-1 text-sm font-medium">
                    {pub.conference} · {pub.date}
                  </p>
                  <p className="text-sm text-white/40 mt-3 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
