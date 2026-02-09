/**
 * DESIGN: Modernismo Jurídico Minimalista
 * Logo Component - Monograma EP com fundo Navy
 * Logo harmonizada com fundo Deep Navy Blue do site
 */

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = false }: LogoProps) {
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10 md:h-12 md:w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div className="flex items-center gap-3">
      {/* Logo - Fundo Navy harmonizado com site */}
      <img
        src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030941101/ZPgdIiqCVoEvpnjr.png"
        alt="EP Monograma"
        className={`${sizeMap[size]} object-contain flex-shrink-0 rounded-md`}
      />

      {/* Text (optional) */}
      {showText && (
        <div>
          <h1 className="text-lg font-cinzel font-bold text-white tracking-widest leading-tight">
            EDSON PORTO
          </h1>
          <p className="text-xs text-champagne-gold tracking-widest">ADVOCACIA</p>
        </div>
      )}
    </div>
  );
}
