import { motion } from 'framer-motion';
import { Stethoscope, Scale, Briefcase, PlusCircle } from 'lucide-react';

const segments = [
  { icon: Stethoscope, title: 'Clínicas & Saúde', description: 'Triagem e agendamento automático' },
  { icon: Scale, title: 'Advocacia', description: 'Validação de casos e direcionamento' },
  { icon: Briefcase, title: 'Serviços', description: 'Qualificação e follow-up' },
  { icon: PlusCircle, title: 'Outros', description: 'Automação sob medida' },
];

export default function SegmentsSection() {
  return (
    <section id="segmentos" className="py-16 md:py-20 lg:py-24 relative">
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
            Soluções por <span className="text-gradient">segmento</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Adaptamos para seu negócio
          </p>
        </motion.div>

        {/* Segments Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
        >
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="group"
            >
              <div className="glass-card p-5 md:p-6 lg:p-8 h-full text-center transition-all duration-300 hover:border-primary/50 hover:glow-primary">
                <div className="w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform">
                  <segment.icon className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8 text-primary" />
                </div>
                <h3 className="text-sm md:text-base lg:text-xl font-display font-semibold mb-1.5 md:mb-2 lg:mb-3">
                  {segment.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {segment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
