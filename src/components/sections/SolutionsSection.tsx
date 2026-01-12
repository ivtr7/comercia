import { motion } from 'framer-motion';
import { MessageSquare, Users, Calendar, BarChart3 } from 'lucide-react';

const solutions = [
  {
    icon: MessageSquare,
    title: 'Atendimento via IA',
    description: 'WhatsApp e Instagram com linguagem natural, 24 horas por dia.',
  },
  {
    icon: Users,
    title: 'Triagem de Leads',
    description: 'Classificação automática: elegível vs curioso, sem desperdício.',
  },
  {
    icon: Calendar,
    title: 'Agendamento Automático',
    description: 'Consultas, reuniões e atendimentos agendados sem equipe humana.',
  },
  {
    icon: BarChart3,
    title: 'CRM com Score',
    description: 'Histórico completo e prioridade de cada lead em um só lugar.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="py-16 md:py-20 lg:py-24 relative">
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
            O que <span className="text-gradient">fazemos</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Automatizamos seu atendimento do primeiro contato até o agendamento, 
            com inteligência artificial de verdade.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="glass-card p-5 md:p-6 h-full transition-all duration-300 hover:border-primary/50 hover:glow-primary">
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-base md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
