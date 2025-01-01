import { PROJECTS } from '@/assets/data/dummy';

import Card from '../Card';

const Projects = () => {
  return (
    <div className="box-border md:p-20 p-8 flex flex-col justify-between gap-4 bg-zinc-800 text-white">
      <div className="flex flex-col md:gap-12 lg:pr-20">
        <h1 className="md:text-7xl text-4xl">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
          >
            <img src={project.image} alt={project.title} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
