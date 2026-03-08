import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface LawyerCardProps {
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
}

export function LawyerCard({ name, specialty, bio, imageUrl, linkedin }: LawyerCardProps) {
  return (
    <div className="group rounded-xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        {/* Usando uma div no lugar do Image caso os domínios não estejam configurados ainda, 
            isso facilita evitar erros ao testar localmente sem imagem */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500" 
          style={{ backgroundImage: `url(${imageUrl})`, backgroundColor: 'var(--muted)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-outfit font-bold text-2xl mb-1">{name}</h3>
          <p className="text-secondary font-medium tracking-wide uppercase text-sm mb-4">{specialty}</p>
          
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto overflow-hidden">
            <p className="text-sm text-white/80 line-clamp-3 mb-4">{bio}</p>
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-secondary transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
