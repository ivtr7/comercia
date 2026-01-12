import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Clock, Zap } from 'lucide-react';

interface CounterProps {
  from: number;
  to: number;
  suffix?: string;
  duration?: number;
}

function Counter({ from, to, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(from);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.round(from + (to - from) * progress));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, hasStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Clock, value: 80, suffix: '%', label: 'menos tempo' },
  { icon: TrendingUp, value: 3, suffix: 'x', label: 'mais leads' },
  { icon: Zap, value: 24, suffix: '/7', label: 'disponível' },
];

export default function StatsSection() {
  return (
    <section id="stats" className="py-16 md:py-20 lg:py-24 relative bg-background-secondary overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 bg-accent/10 rounded-full blur-[100px]" />
      </div>

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
            Resultados <span className="text-gradient">comprovados</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
              className="text-center"
            >
              <div className="glass-card p-4 md:p-6 lg:p-8 h-full glow-primary">
                <div className="w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-5 lg:mb-6">
                  <stat.icon className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient mb-1 md:mb-2 lg:mb-3">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
