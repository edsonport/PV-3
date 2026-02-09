/**
 * DESIGN: Modernismo Jurídico Minimalista
 * WhatsApp Floating Button - CTA persistente integrada à paleta de cores
 * Usa dourado do manual em vez do verde padrão do WhatsApp
 */

import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Mostrar botão após 2 segundos
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '5199361531313';
  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de conversar sobre consultoria jurídica. Qual é o melhor horário para uma conversa?'
  );
  const whatsappUrl = `https://wa.me/5551993615313${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* Backdrop para fechar ao clicar */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Expanded menu */}
        {isExpanded && (
          <div className="absolute bottom-20 right-0 bg-deep-navy border border-champagne-gold/30 rounded-lg shadow-2xl p-4 min-w-max animate-fade-in-up">
            <p className="font-source-serif text-sm text-gray-300 mb-4">
              Envie uma mensagem para começar
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-champagne-gold text-deep-navy font-source-serif font-bold text-sm rounded hover:bg-champagne-gold/90 transition-all duration-300 text-center"
            >
              Iniciar Conversa
            </a>
          </div>
        )}

        {/* Main button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative w-14 h-14 rounded-full bg-champagne-gold text-deep-navy shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Abrir WhatsApp"
        >
          {/* Pulsing background */}
          <div className="absolute inset-0 rounded-full bg-champagne-gold/30 animate-pulse" />

          {/* Icon or close */}
          <div className="relative z-10 transition-all duration-300">
            {isExpanded ? (
              <X size={24} className="text-deep-navy" />
            ) : (
              <MessageCircle size={24} className="text-deep-navy" />
            )}
          </div>

          {/* Hover glow */}
          <div className="absolute inset-0 rounded-full bg-champagne-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
        </button>

        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute bottom-16 right-0 bg-deep-navy border border-champagne-gold/30 rounded px-3 py-2 whitespace-nowrap text-xs font-source-serif text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Conversar agora
          </div>
        )}
      </div>
    </>
  );
}
