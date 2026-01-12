import { motion } from 'framer-motion';
import { Clock, UserX, CalendarX, Users, ArrowRight } from 'lucide-react';

const problems = [
  { icon: Clock, title: 'Atendimento lento', description: 'Clientes esperando horas' },
  { icon: UserX, title: 'Leads desperdiçados', description: 'Oportunidades perdidas' },
  { icon: CalendarX, title: 'Agendamentos caóticos', description: 'Conflitos e no-shows' },
  { icon: Users, title: 'Equipe sobrecarregada', description: 'Tarefas repetitivas' },
];

export default function ProblemsSection() {
  return (
    <section id="problemas" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3">
            Problemas que <span className="text-destructive">resolvemos</span>
          </h2>
        </motion.div>

        {/* Problems Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="glass-card p-4 md:p-5 lg:p-6 border-destructive/20 hover:border-destructive/40 transition-colors"
            >
              <div className="w-9 h-9 md:w-10 lg:w-12 md:h-10 lg:h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-3 md:mb-4">
                <problem.icon className="w-4 h-4 md:w-5 lg:w-6 md:h-5 lg:h-6 text-destructive" />
              </div>
              <h3 className="font-display font-semibold mb-1 md:mb-2 text-sm md:text-base text-destructive/90">
                {problem.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution Transition */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 md:gap-4 glass-card px-4 py-3 md:px-6 md:py-4">
            <p className="text-sm md:text-base font-display">
              Você precisa de{' '}
              <span className="text-primary font-semibold">automação inteligente</span>
            </p>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
