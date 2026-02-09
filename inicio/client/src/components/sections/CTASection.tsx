/**
 * DESIGN: Modernismo Jurídico Minimalista
 * CTA Section - Call to Action
 * Seção de conversão com foco no WhatsApp e contato
 */

import { useEffect, useState, useRef } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-deep-navy via-deep-navy-dark to-deep-navy"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-champagne-gold/5 via-transparent to-champagne-gold/5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Accent line */}
          <div className="w-12 h-1 bg-champagne-gold mx-auto mb-8" />

          {/* Heading */}
          <h2
            className={`font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-white mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            PRONTO PARA TRANSFORMAR SEU CASO?
          </h2>

          {/* Description */}
          <p
            className={`font-source-serif text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Conecte-se com nosso time de especialistas. Oferecemos consultoria estratégica, análise profunda de seu caso e soluções jurídicas sob medida para suas necessidades.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Primary CTA - WhatsApp */}
            <a
              href="https://wa.me/5199361531351"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-champagne-gold text-deep-navy font-source-serif font-bold text-lg tracking-wide hover:bg-champagne-gold/90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
            >
              CONVERSAR VIA WHATSAPP
            </a>

            {/* Secondary CTA - Email */}
            <a
              href="mailto:contato@edsonportobraz.com.br"
              className="px-10 py-4 border-2 border-champagne-gold text-champagne-gold font-source-serif font-bold text-lg tracking-wide hover:bg-champagne-gold hover:text-deep-navy transition-all duration-300"
            >
              ENVIAR EMAIL
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-12 pt-12 border-t border-champagne-gold/10">
            <p className="font-source-serif text-sm text-gray-400 mb-4">
              Disponível para atendimento em todos os estados da federação
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 text-center sm:text-left">
              <div>
                <p className="font-cinzel text-xs tracking-widest text-champagne-gold uppercase mb-2">
                  WhatsApp
                </p>
                <p className="font-source-serif text-base text-white">(51) 99361-5313</p>
              </div>
              <div className="hidden sm:block w-px bg-champagne-gold/10" />
              <div>
                <p className="font-cinzel text-xs tracking-widest text-champagne-gold uppercase mb-2">
                  Resposta Rápida
                </p>
                <p className="font-source-serif text-base text-white">Em até 2 horas úteis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
