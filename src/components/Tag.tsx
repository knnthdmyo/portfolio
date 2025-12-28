import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

interface TagProps {
  name: string;
  icon: IconProp;
  link: string;
  color: string;
}

const Tag: FunctionComponent<TagProps> = ({ name, icon, link, color }) => {
  return (
    <a 
    href={link}
    target="_blank"
    rel="noreferrer"
      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-2 border-2 bg-white/10 gap-1 rounded-full`} 
      style={{ borderColor: color, color: color, backgroundColor: `${color}CC` }}
    >
      <FontAwesomeIcon icon={icon} className="text-white"   />
      <span className="text-white">{name}</span>
      <span className="opacity-70 hover:opacity-100 transition-opacity">
        <FontAwesomeIcon icon={faExternalLink} className="text-white" />
      </span>
    </a>
  );
};

export default Tag;
