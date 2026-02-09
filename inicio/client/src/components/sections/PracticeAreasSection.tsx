/**
 * DESIGN: Modernismo Jurídico Minimalista
 * Practice Areas Section - Áreas de Atuação
 * Divisão elegante entre Trabalhista e Cível com glassmorphism minimalista
 */

import { useEffect, useState, useRef } from 'react';

interface PracticeArea {
  title: string;
  description: string;
  specialties: string[];
  icon: string;
}

export default function PracticeAreasSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const practiceAreas: PracticeArea[] = [
    {
      title: 'Direito Trabalhista',
      description:
        'Expertise consolidada em questões trabalhistas complexas, com atuação em reclamações trabalhistas, dissoluções de contratos e negociações estratégicas.',
      specialties: [
        'Reclamações Trabalhistas',
        'Dissoluções de Contrato',
        'Negociações Estratégicas',
        'Compliance Trabalhista',
      ],
      icon: '⚖️',
    },
    {
      title: 'Direito Cível',
      description:
        'Atuação abrangente em direito cível, cobrindo contratos comerciais, responsabilidade civil, direito do consumidor e litígios complexos.',
      specialties: [
        'Contratos Comerciais',
        'Responsabilidade Civil',
        'Direito do Consumidor',
        'Litígios Complexos',
      ],
      icon: '📋',
    },
  ];

  return (
    <section
      id="practice-areas"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-deep-navy via-deep-navy-dark to-deep-navy"
    >
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="w-12 h-1 bg-champagne-gold mb-6" />
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-white mb-6">
            ÁREAS DE ATUAÇÃO
          </h2>
          <p className="font-source-serif text-base md:text-lg text-gray-300 leading-relaxed">
            Boutique jurídica especializada em duas áreas complementares que cobrem as demandas mais complexas do mercado.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card with glassmorphism effect */}
              <div className="relative p-8 md:p-10 rounded-lg border border-champagne-gold/20 bg-gradient-to-br from-champagne-gold/5 via-transparent to-transparent backdrop-blur-sm hover:border-champagne-gold/40 hover:bg-gradient-to-br hover:from-champagne-gold/10 transition-all duration-300 group">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-champagne-gold/30 group-hover:border-champagne-gold/50 transition-colors duration-300" />

                {/* Icon */}
                <div className="text-4xl mb-6">{area.icon}</div>

                {/* Title */}
                <h3 className="font-cinzel text-2xl md:text-3xl font-bold tracking-wide text-white mb-4 group-hover:text-champagne-gold transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="font-source-serif text-base text-gray-300 leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Specialties */}
                <div className="space-y-2">
                  <p className="font-cinzel text-xs tracking-widest text-champagne-gold uppercase">
                    Especialidades
                  </p>
                  <ul className="space-y-2">
                    {area.specialties.map((specialty, idx) => (
                      <li
                        key={idx}
                        className="font-source-serif text-sm text-gray-400 flex items-start gap-3"
                      >
                        <span className="text-champagne-gold mt-1">›</span>
                        <span>{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-champagne-gold/0 via-champagne-gold/30 to-champagne-gold/0 group-hover:via-champagne-gold/50 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-champagne-gold/10 text-center">
          <p className="font-source-serif text-base text-gray-300 mb-6">
            Precisa de consultoria em uma dessas áreas?
          </p>
          <a
            href="https://wa.me/5551993615313"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-champagne-gold text-champagne-gold font-source-serif font-bold tracking-wide hover:bg-champagne-gold hover:text-deep-navy transition-all duration-300"
          >
            SOLICITAR CONSULTORIA
          </a>
        </div>
      </div>
    </section>
  );
}
