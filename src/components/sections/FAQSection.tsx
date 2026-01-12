import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { question: 'A IA substitui minha equipe?', answer: 'Não. A IA lida com operacional — sua equipe foca no que importa.' },
  { question: 'Quanto tempo para implementar?', answer: 'Em média, cerca de 1 hora para configuração inicial.' },
  { question: 'Vocês dão suporte?', answer: 'Sim! Configuração, operação e manutenção inclusos.' },
  { question: 'Funciona para meu negócio?', answer: 'Customizamos para diferentes segmentos. Fale conosco!' },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-20 lg:py-24 relative">
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
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none px-4 md:px-5 lg:px-6"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors text-sm md:text-base py-3 md:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-3 md:pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
