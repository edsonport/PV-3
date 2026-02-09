/**
 * DESIGN: Modernismo Jurídico Minimalista
 * Expertise Section - Seção de Expertise Comprovada
 * Destaca o marco de 500+ processos em praticamente todos os estados
 */

import { useEffect, useState, useRef } from 'react';

export default function ExpertiseSection() {
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

  const expertisePoints = [
    {
      title: 'Atuação Comprovada',
      description: 'Mais de 500 processos com resultados reais desde 2022',
      icon: '⚖️',
    },
    {
      title: 'Cobertura Nacional',
      description: 'Presença em praticamente todos os estados da federação',
      icon: '🗺️',
    },
    {
      title: 'Estrutura Digital',
      description: '100% digital, segura e de alta performance tecnológica',
      icon: '🔒',
    },
    {
      title: 'Sofisticação Intelectual',
      description: 'Expertise jurídica consolidada e reconhecida no mercado',
      icon: '📚',
    },
  ];

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-deep-navy via-deep-navy-dark to-deep-navy"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="w-12 h-1 bg-champagne-gold mb-6" />
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-white mb-6">
            EXPERTISE COMPROVADA
          </h2>
          <p className="font-source-serif text-base md:text-lg text-gray-300 leading-relaxed">
            Nossa trajetória é construída sobre resultados reais. Cada processo, cada vitória, cada cliente satisfeito reforça nosso compromisso com a excelência jurídica.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {expertisePoints.map((point, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card with left gold border */}
              <div className="relative pl-6 md:pl-8 border-l-2 border-champagne-gold hover:border-champagne-gold/70 transition-all duration-300 group">
                {/* Decorative dot */}
                <div className="absolute -left-3.5 top-0 w-5 h-5 bg-champagne-gold rounded-full shadow-lg" />

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-cinzel text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-champagne-gold transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="font-source-serif text-base text-gray-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 md:mt-24 pt-16 md:pt-24 border-t border-champagne-gold/10">
          <p className="font-source-serif text-sm text-gray-400 text-center">
            Confiança, agilidade digital e rigor jurídico em cada atendimento
          </p>
        </div>
      </div>
    </section>
  );
}
