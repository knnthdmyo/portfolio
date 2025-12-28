import { TECHNOLOGIES } from '@/assets/data/dummy';
import Tag from '@components/Tag';

const categoryLabels: Record<keyof typeof TECHNOLOGIES, string> = {
  languages: 'Languages',
  frontendFrameworks: 'Frontend',
  backendFrameworks: 'Backend',
  databases: 'Databases',
  tools: 'Tools',
  libraries: 'Libraries',
};

const Technologies = () => {
  return (
    <div className="box-border md:p-20 p-8 flex flex-col xl:flex-row justify-between gap-8">
      <div className="flex flex-col md:gap-2 lg:pr-20 shrink-0">
        <span className="text-sm uppercase tracking-widest text-sky-500 font-medium">Tech</span>
        <h1 className="md:text-6xl text-4xl font-light tracking-tight">Stack</h1>
      </div>
      
      <div className="flex-1 max-w-3xl">
        <div className="flex flex-col gap-6">
          {Object.entries(TECHNOLOGIES).map(([key, technologies]) => (
            <div key={key}>
              {/* Category label */}
              <span className="text-xs font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-2 block">
                {categoryLabels[key as keyof typeof TECHNOLOGIES]}
              </span>
              
              {/* Tags container */}
              <div className="flex flex-wrap gap-2 items-center">
                {technologies.map((technology, index) => (
                  <Tag
                    name={technology.name}
                    key={`${key}-${index}`}
                    color={technology.color}
                    icon={technology.icon}
                    link={technology.link}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
