import { EXPERIENCES } from "@/assets/data/dummy";

const Experiences = () => {
  return (
    <div className="box-border md:p-20 p-8 flex flex-col xl:flex-row justify-between gap-4">
      <div className="flex flex-col md:gap-12 lg:pr-20">
        <h1 className="md:text-7xl text-4xl">Experiences</h1>
      </div>
      <div className="box-border xl:p-5 p-8 flex flex-col gap-7">
        {EXPERIENCES.map(({ role, company, description, year }, index) => (
          <div
            key={index}
            className="flex justify-between md:gap-12 md:flex-row flex-col"
          >
            <h1 className="font-[700] text-xl hidden md:block">{year}</h1>
            <div>
              <h6 className="font-[700] uppercase">
                {role} <span className="text-xs md:hidden">{` (${year})`}</span>
              </h6>
              <p className="italic">{company}</p>
              <div className="border-" />
              <p className="mt-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
