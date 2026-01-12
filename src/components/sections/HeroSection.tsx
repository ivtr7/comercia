import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TechCube = lazy(() => import('@/components/TechCube'));

const benefits = [
  'Atendimento automatizado 24/7',
  'Triagem inteligente de leads',
  'Agendamento sem equipe',
];

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Gradient Orbs - smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse animation-delay-400" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 md:space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs md:text-sm text-primary font-medium">Acelerada pela MIDAS</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
            >
              Soluções em{' '}
              <span className="text-gradient">Inteligência Artificial</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Desenvolvemos e operamos automações inteligentes que atendem, 
              qualificam leads e agendam serviços via WhatsApp e Instagram.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2 md:space-y-3"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                  <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent" />
                  </div>
                  <span className="text-sm md:text-base text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => handleScroll('#contato')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow group text-sm md:text-base h-10 md:h-11"
              >
                Fale Conosco
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScroll('#como-funciona')}
                className="border-border hover:bg-secondary text-sm md:text-base h-10 md:h-11"
              >
                Veja como funciona
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Cube - HIDDEN on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <Suspense
              fallback={
                <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <TechCube />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs md:text-sm">Role para explorar</span>
          <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5 md:pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
