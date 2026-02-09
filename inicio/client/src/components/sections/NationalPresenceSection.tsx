/**
 * DESIGN: Modernismo Jurídico Minimalista
 * National Presence Section - Presença Nacional
 * Mapa estilizado em tons de azul e ouro mostrando capilaridade no Brasil
 */

import { useEffect, useState, useRef } from 'react';

export default function NationalPresenceSection() {
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

  const regions = [
    { name: 'Norte', states: 7 },
    { name: 'Nordeste', states: 9 },
    { name: 'Centro-Oeste', states: 4 },
    { name: 'Sudeste', states: 4 },
    { name: 'Sul', states: 3 },
  ];

  return (
    <section
      id="national-presence"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-deep-navy border-y border-champagne-gold/10"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="w-12 h-1 bg-champagne-gold mb-6" />
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-white mb-6">
              PRESENÇA NACIONAL
            </h2>
            <p className="font-source-serif text-base md:text-lg text-gray-300 leading-relaxed mb-8">
              Atuação comprovada em praticamente todos os estados da federação. Nossa estrutura 100% digital permite atender clientes em qualquer região do Brasil com a mesma qualidade e agilidade.
            </p>

            {/* Regional breakdown */}
            <div className="space-y-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between p-4 border-l-2 border-champagne-gold/30 hover:border-champagne-gold/60 transition-colors duration-300">
                    <span className="font-cinzel text-lg tracking-wide text-white">
                      {region.name}
                    </span>
                    <span className="font-cinzel text-2xl font-bold text-champagne-gold">
                      {region.states}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-8 pt-8 border-t border-champagne-gold/10">
              <p className="font-source-serif text-sm text-gray-400 mb-2">Total de Estados Atendidos</p>
              <p className="font-cinzel text-4xl font-bold text-champagne-gold">27 ESTADOS</p>
            </div>
          </div>

          {/* Right - Stylized Map */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Simplified Brazil map visualization */}
            <div className="relative aspect-square bg-gradient-to-br from-deep-navy-dark via-deep-navy to-deep-navy rounded-lg border border-champagne-gold/20 p-8 flex items-center justify-center overflow-hidden group hover:border-champagne-gold/40 transition-all duration-300">
              {/* Decorative background grid */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-champagne-gold via-transparent to-champagne-gold" />
              </div>

              {/* Map representation with dots */}
              <svg
                viewBox="0 0 200 300"
                className="w-full h-full relative z-10"
              >
                {/* Brazil outline - simplified */}
                <path
                  d="M 50 50 L 150 60 L 160 100 L 170 150 L 150 200 L 100 220 L 50 200 L 40 150 L 30 100 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-champagne-gold/30 group-hover:text-champagne-gold/50 transition-colors duration-300"
                />

                {/* Regional dots */}
                <circle cx="80" cy="80" r="3" className="fill-champagne-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                <circle cx="120" cy="100" r="3" className="fill-champagne-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                <circle cx="100" cy="140" r="3" className="fill-champagne-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                <circle cx="70" cy="170" r="3" className="fill-champagne-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                <circle cx="130" cy="160" r="3" className="fill-champagne-gold opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Connection lines */}
                <line
                  x1="80"
                  y1="80"
                  x2="100"
                  y2="140"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-champagne-gold/20 group-hover:text-champagne-gold/40 transition-colors duration-300"
                />
                <line
                  x1="120"
                  y1="100"
                  x2="100"
                  y2="140"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-champagne-gold/20 group-hover:text-champagne-gold/40 transition-colors duration-300"
                />
                <line
                  x1="100"
                  y1="140"
                  x2="70"
                  y2="170"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-champagne-gold/20 group-hover:text-champagne-gold/40 transition-colors duration-300"
                />
                <line
                  x1="100"
                  y1="140"
                  x2="130"
                  y2="160"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-champagne-gold/20 group-hover:text-champagne-gold/40 transition-colors duration-300"
                />

                {/* Center hub */}
                <circle cx="100" cy="140" r="5" className="fill-champagne-gold group-hover:fill-champagne-gold/80 transition-all" />
              </svg>

              {/* Overlay text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-cinzel text-sm tracking-widest text-champagne-gold/40 uppercase">
                    Cobertura
                  </p>
                  <p className="font-cinzel text-3xl font-bold text-champagne-gold/60">
                    Nacional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
