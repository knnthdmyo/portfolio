'use client';

import { useTechnologies } from '@/viewmodels';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Technologies = () => {
  const { categorizedTechnologies, totalCount } = useTechnologies();

  return (
    <div className="box-border md:py-20 py-12 flex flex-col gap-10 md:gap-16">
      {/* Header */}
      <div className="px-8 md:px-20">
        <span className="text-sm uppercase tracking-widest text-sky-500 font-medium">Tech</span>
        <h1 className="md:text-6xl text-4xl font-light tracking-tight text-gray-800 dark:text-gray-200">Stack</h1>
        <div className="flex items-center gap-3 mt-3">
          <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400" />
          <p className="text-xs text-gray-400">{totalCount}+ technologies</p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-10 px-8 md:px-20">
        {categorizedTechnologies.map((category, catIndex) => (
          <div
            key={category.title}
            className="group opacity-0 translate-y-4 animate-[slideUp_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${catIndex * 80}ms` }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs uppercase tracking-widest text-gray-400 group-hover:text-sky-500 transition-colors duration-300">
                {category.title}
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {category.items.map((tech, index) => (
                <a
                  key={index}
                  href={tech.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/tag inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-sky-500 transition-all duration-300"
                >
                  <FontAwesomeIcon 
                    icon={tech.icon} 
                    className="text-xs group-hover/tag:scale-110 transition-transform duration-300"
                    style={{ color: tech.color }}
                  />
                  <span className="group-hover/tag:translate-x-0.5 transition-transform duration-300">{tech.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
