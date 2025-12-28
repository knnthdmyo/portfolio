import { TECHNOLOGIES } from '@/assets/data/dummy';
import Tag from '@components/Tag';

const Technologies = () => {
  return (
    <div className="box-border md:p-8 p-4 flex flex-col xl:flex-row justify-between gap-4">
      <div className="box-border xl:p-2 p-4 flex flex-wrap gap-2 items-center justify-center">
        {Object.values(TECHNOLOGIES)
          .flat()
          .map((techonology, index) => (
            <Tag name={techonology.name} key={index} color={techonology.color} icon={techonology.icon} link={techonology.link} />
          ))}
      </div>
    </div>
  );
};

export default Technologies;
