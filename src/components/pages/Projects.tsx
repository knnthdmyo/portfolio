import { PROJECTS } from '@/assets/data/dummy';

import ImageCard from '../ImageCard';

const Projects = () => {
  return (
    <div className="box-border md:p-20 p-8 flex flex-col justify-between gap-4 bg-zinc-800 ">
      <div className="flex flex-col md:gap-12 lg:pr-20">
        <h1 className="md:text-7xl text-4xl text-white">Projects</h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {PROJECTS.map((project, index) => (
          <ImageCard
            key={index}
            title={project.title}
            description={project.description}
            imageSource={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
