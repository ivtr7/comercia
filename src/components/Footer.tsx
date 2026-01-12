import { MapPin, User, Rocket, MessageCircle, Instagram } from 'lucide-react';
import logo from '@/assets/logo-comercia.png';

export default function Footer() {
  return (
    <footer className="py-8 md:py-10 lg:py-12 border-t border-border bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Logo & Info */}
          <div className="space-y-2 md:space-y-3 text-center md:text-left">
            <img src={logo} alt="ComercIA" className="h-8 md:h-10 w-auto mx-auto md:mx-0" />
            <p className="text-xs md:text-sm text-muted-foreground">
              Soluções em Inteligência Artificial
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>Divino – MG</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
              <User className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>Ícaro Vitor</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
              <Rocket className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>MIDAS</span>
            </div>
          </div>

          {/* Links e Redes Sociais */}
          <div className="space-y-1.5 md:space-y-2 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-3 mb-2">
              <a
                href="https://wa.me/5532998450698?text=Olá! Gostaria de saber mais sobre as soluções da ComercIA."
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://instagran.com/comercia.sw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 text-white flex items-center justify-center transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
            <a href="#" className="block text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="block text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs md:text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Fale Conosco
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8 border-t border-border text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © 2026 comercIA – Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
