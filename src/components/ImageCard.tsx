import { faFileCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ImageCardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  imageSource?: string;
}

const ImageCard = ({ imageSource, description, title }: ImageCardProps) => {
  return (
    <div className="bg-gray-50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-slate-600/30 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1 group">
      {imageSource ? (
        <img src={imageSource} alt="project" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      ) : (
        <div className="h-48 flex flex-col gap-2 justify-center items-center text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-slate-800/50">
          <FontAwesomeIcon icon={faFileCircleExclamation} className="text-2xl" />
          <span className="text-xs uppercase tracking-wide">No preview</span>
        </div>
      )}
      <div className="p-5">
        <h1 className="font-light text-lg uppercase tracking-tight text-gray-900 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
          {title}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
