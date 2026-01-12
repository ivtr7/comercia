import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'Atendimento auto', traditional: false, comercia: true },
  { name: 'Triagem de leads', traditional: false, comercia: true },
  { name: 'Agendamento', traditional: false, comercia: true },
  { name: 'CRM com score', traditional: false, comercia: true },
  { name: 'Operação 24/7', traditional: false, comercia: true },
];

export default function ComparisonSection() {
  return (
    <section id="comparativo" className="py-16 md:py-20 lg:py-24 relative bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4">
            Por que <span className="text-gradient">ComercIA</span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary/50">
              <div className="p-3 md:p-4 lg:p-6 font-display font-semibold text-xs md:text-sm lg:text-base">
                Recurso
              </div>
              <div className="p-3 md:p-4 lg:p-6 text-center font-display font-semibold text-muted-foreground text-xs md:text-sm">
                Tradicional
              </div>
              <div className="p-3 md:p-4 lg:p-6 text-center font-display font-semibold text-primary text-xs md:text-sm">
                ComercIA
              </div>
            </div>

            {/* Rows */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`grid grid-cols-3 border-t border-border ${index % 2 === 0 ? 'bg-background/50' : ''}`}
              >
                <div className="p-3 md:p-4 lg:p-6 text-xs md:text-sm">{feature.name}</div>
                <div className="p-3 md:p-4 lg:p-6 flex justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="w-3 h-3 md:w-4 md:h-4 text-destructive" />
                  </div>
                </div>
                <div className="p-3 md:p-4 lg:p-6 flex justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
