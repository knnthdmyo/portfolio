import { PROJECTS } from '@/assets/data/dummy';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="box-border md:p-20 p-8 flex flex-col xl:flex-row justify-between gap-8">
      <div className="flex flex-col md:gap-2 lg:pr-20 shrink-0">
        <span className="text-sm uppercase tracking-widest text-sky-500 font-medium">Portfolio</span>
        <h1 className="md:text-6xl text-4xl font-light tracking-tight">Projects</h1>
      </div>

      <div className="relative flex-1 max-w-3xl">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 via-sky-400 to-cyan-400" />
        
        <div className="flex flex-col">
          {PROJECTS.map((project, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div
                key={index}
                className="relative pl-12 pb-8 group"
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-2 top-1 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 transition-all duration-300 cursor-pointer
                    ${isExpanded 
                      ? 'bg-sky-400 scale-125 shadow-lg shadow-sky-400/50' 
                      : 'bg-gray-400 group-hover:bg-sky-300 group-hover:scale-110'
                    }`}
                  onClick={() => toggleExpand(index)}
                />
                
                
                {/* Content card */}
                <div 
                  className={`mt-4 p-5 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm
                    ${isExpanded 
                      ? 'bg-white/70 dark:bg-slate-800/50 shadow-lg shadow-sky-500/10 border border-sky-200/50 dark:border-sky-500/20' 
                      : 'hover:bg-white/50 dark:hover:bg-slate-800/30 border border-transparent'
                    }`}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-light text-xl uppercase tracking-tight leading-tight">{project.title}</h3>
                      {!isExpanded && (
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 line-clamp-1">
                          {project.description.slice(0, 60)}...
                        </p>
                      )}
                    </div>
                    <div 
                      className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Expandable content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out
                      ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      {/* Project image or placeholder */}
                      <div className="mb-4 rounded-lg overflow-hidden">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-48 object-cover"
                          />
                        ) : (
                          <div className="h-48 flex flex-col gap-2 justify-center items-center text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800/50">
                            <FontAwesomeIcon icon={faFileCircleExclamation} className="text-2xl" />
                            <span className="text-xs uppercase tracking-wide">No preview available</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
