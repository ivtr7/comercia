import { motion } from 'framer-motion';
import { Smartphone, Bot, HelpCircle, TrendingUp, CheckCircle } from 'lucide-react';

const steps = [
  { icon: Smartphone, number: '01', title: 'Lead entra em contato', description: 'Via WhatsApp ou Instagram' },
  { icon: Bot, number: '02', title: 'IA inicia atendimento', description: 'Resposta instantânea e natural' },
  { icon: HelpCircle, number: '03', title: 'Perguntas estratégicas', description: 'Coleta dados relevantes' },
  { icon: TrendingUp, number: '04', title: 'Lead pontuado', description: 'Classificação automática' },
  { icon: CheckCircle, number: '05', title: 'Agenda ou encaminha', description: 'Para humano quando necessário' },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-20 lg:py-24 relative bg-background-secondary">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4">
            Como <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Do primeiro contato até a conversão, tudo automatizado
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center group">
                  {/* Step Number */}
                  <div className="text-[10px] md:text-xs font-bold text-primary/50 mb-2">
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div className="relative mb-3 md:mb-4">
                    <div className="w-14 h-14 md:w-16 lg:w-20 md:h-16 lg:h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:glow-primary transition-all duration-300">
                      <step.icon className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm md:text-base lg:text-lg font-display font-semibold mb-1 md:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Result Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 md:mt-14 lg:mt-16 text-center"
        >
          <div className="inline-block glass-card px-5 py-3 md:px-8 md:py-4 glow-primary">
            <p className="text-sm md:text-base lg:text-lg font-display font-semibold">
              <span className="text-primary">Resultado:</span> Eficiência máxima, menos custo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
