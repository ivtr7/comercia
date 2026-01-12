import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto').max(100),
  company: z.string().min(2, 'Empresa muito curta').max(100),
  whatsapp: z.string().min(10, 'WhatsApp inválido').max(20),
  message: z.string().max(1000).optional(),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', whatsapp: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) newErrors[err.path[0] as string] = err.message;
      });
      setErrors(newErrors);
      return;
    }
    setIsLoading(true);
    
    // Abrir WhatsApp com mensagem pré-formatada
    const message = `Olá! Meu nome é ${formData.name} da empresa ${formData.company}.\nWhatsApp: ${formData.whatsapp}${formData.message ? `\n\nMensagem: ${formData.message}` : ''}`;
    const whatsappUrl = `https://wa.me/5532998450698?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast({ title: 'Redirecionando para WhatsApp!', description: 'Aguarde abertura do WhatsApp.' });
    setFormData({ name: '', company: '', whatsapp: '', message: '' });
    setIsLoading(false);
  };

  return (
    <section id="contato" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 lg:w-[500px] h-72 md:h-96 lg:h-[500px] bg-primary/10 rounded-full blur-[100px]" />

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
            Pronto para <span className="text-gradient">automatizar</span>?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Preencha e nossa equipe entra em contato em até 24h
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card p-5 md:p-6 lg:p-8 glow-primary">
            <div className="space-y-4 md:space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                  Nome completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="bg-secondary/50 border-border focus:border-primary text-sm h-10"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                  Empresa *
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  className="bg-secondary/50 border-border focus:border-primary text-sm h-10"
                />
                {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                  WhatsApp *
                </label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="bg-secondary/50 border-border focus:border-primary text-sm h-10"
                />
                {errors.whatsapp && <p className="text-xs text-destructive mt-1">{errors.whatsapp}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2">
                  Mensagem (opcional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte um pouco..."
                  rows={3}
                  className="bg-secondary/50 border-border focus:border-primary resize-none text-sm"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 btn-glow text-sm h-10 md:h-11"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
