import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/5532998450698?text=Olá! Gostaria de saber mais sobre as soluções da ComercIA.', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
    </motion.button>
  );
}
