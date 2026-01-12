import { motion } from 'framer-motion';
import { MapPin, User, Rocket } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="sobre" className="py-16 md:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-5 md:p-8 lg:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left - Info */}
              <div className="space-y-4 md:space-y-5 lg:space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4">
                    Sobre a <span className="text-gradient">ComercIA</span>
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Nascemos com o propósito de simplificar o atendimento e 
                    aumentar conversões com tecnologia de ponta.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-2 md:space-y-3">
                  {[
                    { icon: User, label: 'Fundador', value: 'Ícaro Vitor', color: 'primary' },
                    { icon: MapPin, label: 'Sede', value: 'Divino – MG', color: 'accent' },
                    { icon: Rocket, label: 'Aceleração', value: 'MIDAS', color: 'primary' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-secondary/50">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center`}>
                        <item.icon className={`w-4 h-4 md:w-5 md:h-5 text-${item.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm md:text-base font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 cyber-grid opacity-50" />
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 glow-primary">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary">IA</span>
                    </div>
                    <p className="font-display font-semibold text-sm md:text-base lg:text-lg">ComercIA</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
