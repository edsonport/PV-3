/**
 * DESIGN: Modernismo Jurídico Minimalista
 * Header com logo EP, navegação minimalista e CTA WhatsApp
 * Transição suave ao scroll com efeito glassmorphism discreto
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Áreas de Atuação', href: '#practice-areas' },
    { label: 'Presença Nacional', href: '#national-presence' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-navy/95 backdrop-blur-md border-b border-champagne-gold/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="hidden md:flex">
            <Logo size="md" showText={true} />
          </div>
          <div className="md:hidden">
            <Logo size="sm" showText={false} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-source-serif text-gray-300 hover:text-champagne-gold transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA WhatsApp Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5551993615313"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-champagne-gold text-champagne-gold text-sm font-source-serif hover:bg-champagne-gold hover:text-deep-navy transition-all duration-300 tracking-wide"
            >
              CONTATO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-champagne-gold hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-champagne-gold/10 pt-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-source-serif text-gray-300 hover:text-champagne-gold transition-colors duration-300 tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5551993615313"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 border border-champagne-gold text-champagne-gold text-sm font-source-serif hover:bg-champagne-gold hover:text-deep-navy transition-all duration-300 tracking-wide text-center"
            >
              CONTATO
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
