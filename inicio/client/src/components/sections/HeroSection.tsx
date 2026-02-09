/**
 * DESIGN: Modernismo Jurídico Minimalista
 * Hero Section - A Face da Autoridade
 * Integra foto profissional do fundador com headline e subtitle
 * Layout assimétrico com imagem à direita, conteúdo à esquerda
 */

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-champagne-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Accent line */}
            <div className="w-12 h-1 bg-champagne-gold mb-8" />

            {/* Main Headline */}
            <h1 className="font-cinzel font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 tracking-widest text-white">
              EDSON PORTO BRAZ
            </h1>

            {/* Subtitle */}
            <h2 className="font-cinzel text-lg md:text-xl tracking-widest text-champagne-gold mb-8 uppercase">
              Excelência Jurídica sem Fronteiras
            </h2>

            {/* Description */}
            <p className="font-source-serif text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
              Uma estrutura 100% digital que une sofisticação intelectual e alta performance tecnológica. Expertise consolidada através de resultados reais desde 2022, atendendo clientes em praticamente todos os estados da federação.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="https://wa.me/5199361531313"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-champagne-gold text-deep-navy font-source-serif font-bold tracking-wide hover:bg-champagne-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                CONVERSAR AGORA
              </a>
              <a
                href="#expertise"
                className="px-8 py-3 border-2 border-champagne-gold text-champagne-gold font-source-serif font-bold tracking-wide hover:bg-champagne-gold hover:text-deep-navy transition-all duration-300 inline-flex items-center justify-center"
              >
                CONHECER EXPERTISE
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Image container with decorative elements */}
            <div className="relative">
              {/* Decorative corner accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-champagne-gold/30 z-20" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-champagne-gold/30 z-20" />

              {/* Main image with proper background */}
              <div className="bg-deep-navy-dark">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030941101/wQwJOiwhvLbKhPLq.jpg"
                  alt="Edson Porto - Fundador"
                  className="w-full h-auto object-cover shadow-2xl"
                />
              </div>

              {/* Gold accent overlay - subtle */}
              <div className="absolute inset-0 bg-gradient-to-t from-champagne-gold/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative text below image */}
            <div className="mt-8 text-center">
              <p className="font-cinzel text-sm tracking-widest text-champagne-gold uppercase">
                Fundador & Sócio-Diretor
              </p>
              <p className="font-source-serif text-xs text-gray-400 mt-2">
                Especialista em Direito Trabalhista e Cível
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-champagne-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-champagne-gold/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
