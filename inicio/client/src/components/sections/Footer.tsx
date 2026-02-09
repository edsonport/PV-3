/**
 * DESIGN: Modernismo Jurídico Minimalista
 * Footer - Rodapé com monograma EP como marca d'água luxuosa
 */

import Logo from '@/components/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 md:py-24 bg-deep-navy-darker border-t border-champagne-gold/10 overflow-hidden">
      {/* Monograma EP como marca d'água de fundo - Logo com fundo navy */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030941101/ZPgdIiqCVoEvpnjr.png"
          alt="EP"
          className="w-96 h-96 md:w-[600px] md:h-[600px] opacity-10 object-contain"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <Logo size="sm" showText={true} />
            </div>
            <p className="font-source-serif text-sm text-gray-400 leading-relaxed">
              Excelência jurídica sem fronteiras. Estrutura 100% digital que une sofisticação intelectual e alta performance tecnológica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-sm tracking-widest text-champagne-gold uppercase mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Expertise', href: '#expertise' },
                { label: 'Áreas de Atuação', href: '#practice-areas' },
                { label: 'Presença Nacional', href: '#national-presence' },
                { label: 'Contato', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-source-serif text-sm text-gray-400 hover:text-champagne-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-cinzel text-sm tracking-widest text-champagne-gold uppercase mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="font-source-serif text-xs text-gray-500 uppercase tracking-wide mb-1">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/5551993615313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-source-serif text-sm text-champagne-gold hover:text-champagne-gold/80 transition-colors duration-300"
                >
                  (51) 993615313
                </a>
              </li>
              <li>
                <p className="font-source-serif text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Email
                </p>
                <a
                  href="mailto:contato@edsonportobraz.com.br"
                  className="font-source-serif text-sm text-champagne-gold hover:text-champagne-gold/80 transition-colors duration-300"
                >
                  contato@edsonportobraz.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-champagne-gold/10 pt-8 md:pt-12">
          {/* Bottom info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="font-source-serif text-xs text-gray-500">
              © {currentYear} Edson Porto Braz Advocacia. Todos os direitos reservados.
            </p>

            {/* Social/Legal Links */}
            <div className="flex gap-6 text-center">
              <a
                href="#"
                className="font-source-serif text-xs text-gray-500 hover:text-champagne-gold transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="font-source-serif text-xs text-gray-500 hover:text-champagne-gold transition-colors duration-300"
              >
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Design credit */}
          <p className="font-source-serif text-xs text-gray-600 text-center mt-6">
            Desenvolvido com sofisticação para excelência jurídica
          </p>
        </div>
      </div>
    </footer>
  );
}
