import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Calendar, Database, Zap } from 'lucide-react';

const integrations = [
  { icon: MessageCircle, name: 'WhatsApp' },
  { icon: Instagram, name: 'Instagram' },
  { icon: Calendar, name: 'Agenda' },
  { icon: Database, name: 'CRM' },
];

export default function IntegrationsSection() {
  return (
    <section id="integracoes" className="py-16 md:py-20 lg:py-24 relative bg-background-secondary overflow-hidden">
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
            Tecnologia & <span className="text-gradient">Integrações</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Tudo sincronizado em tempo real
          </p>
        </motion.div>

        {/* Integration Hub */}
        <div className="relative max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            {/* Center circle */}
            <div className="relative">
              <div className="w-24 h-24 md:w-32 lg:w-40 md:h-32 lg:h-40 rounded-full bg-card border-2 border-primary flex items-center justify-center glow-primary-lg relative z-10">
                <div className="text-center">
                  <Zap className="w-7 h-7 md:w-8 lg:w-10 md:h-8 lg:h-10 text-primary mx-auto mb-1" />
                  <span className="font-display font-bold text-xs md:text-sm">IA ComercIA</span>
                </div>
              </div>

              {/* Pulse rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-36 md:w-48 h-36 md:h-48 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
              </div>
            </div>
          </motion.div>

          {/* Labels */}
          <div className="mt-10 md:mt-14 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass-card p-3 md:p-4 text-center hover:glow-accent transition-all duration-300"
              >
                <integration.icon className="w-5 h-5 md:w-6 md:h-6 text-accent mx-auto mb-2" />
                <span className="text-xs md:text-sm font-medium">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs md:text-sm text-muted-foreground mt-8 md:mt-12"
        >
          Integração imediata, sem complexidade técnica
        </motion.p>
      </div>
    </section>
  );
}
