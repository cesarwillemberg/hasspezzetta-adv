import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-background border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 dark:bg-[#111]">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors dark:bg-primary/20">
        <FontAwesomeIcon icon={icon} className="w-8 h-8 text-primary group-hover:text-secondary transition-colors dark:text-white" />
      </div>
      <h3 className="text-xl font-bold font-outfit text-primary dark:text-white mb-4 group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground dark:text-gray-400 leading-relaxed">
        {description}
      </p>
      
      <div className="mt-6 w-full h-1 bg-border rounded-full overflow-hidden">
        <div className="h-full bg-secondary w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
      </div>
    </div>
  );
}
