import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-comercia.png';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#crm', label: 'CRM' },
  { href: '#segmentos', label: 'Segmentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="ComercIA" className="h-7 md:h-8 lg:h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => handleNavClick('#contato')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow text-xs lg:text-sm h-8 lg:h-9 px-3 lg:px-4"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border">
            <nav className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick('#contato')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2 text-sm h-10"
              >
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
