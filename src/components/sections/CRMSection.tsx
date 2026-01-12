import { motion } from 'framer-motion';
import { Check, TrendingUp, MessageCircle, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: TrendingUp, text: 'Score de intenção' },
  { icon: MessageCircle, text: 'Histórico completo' },
  { icon: Clock, text: 'Prioridade e urgência' },
  { icon: Zap, text: 'Próxima ação recomendada' },
];

export default function CRMSection() {
  return (
    <section id="crm" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 md:space-y-6 lg:space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4">
                Responda só{' '}
                <span className="text-gradient">quem importa</span>
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                Nosso CRM prioriza leads com maior potencial de conversão.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 md:gap-3 glass-card p-3 md:p-4"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 btn-glow text-sm md:text-base h-10 md:h-11"
            >
              Quero conhecer
            </Button>
          </motion.div>

          {/* Right - CRM Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass-card p-4 md:p-5 lg:p-6 glow-primary">
              {/* Mockup Header */}
              <div className="flex items-center justify-between mb-4 md:mb-6 pb-3 md:pb-4 border-b border-border">
                <h3 className="font-display font-semibold text-sm md:text-base">Painel de Leads</h3>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-destructive" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Mockup Content */}
              <div className="space-y-3 md:space-y-4">
                {[
                  { name: 'Maria Silva', score: 95, status: 'Quente', color: 'bg-green-500' },
                  { name: 'João Santos', score: 78, status: 'Morno', color: 'bg-yellow-500' },
                  { name: 'Ana Costa', score: 45, status: 'Frio', color: 'bg-muted' },
                ].map((lead, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-secondary/50"
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary text-xs md:text-sm">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base">{lead.name}</p>
                        <p className="text-xs text-muted-foreground">WhatsApp</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${lead.color}`} />
                        <span className="text-xs md:text-sm font-medium">{lead.status}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Score: {lead.score}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-border grid grid-cols-3 gap-2 md:gap-4 text-center">
                <div>
                  <p className="text-xl md:text-2xl font-display font-bold text-primary">156</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Leads hoje</p>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-display font-bold text-green-500">42</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Agendados</p>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-display font-bold text-accent">89%</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Conversão</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
