import { FunctionComponent } from "react";
import CoffeeLaptop from "@assets/images/laptop-coffee.jpg";

interface AboutMeProps {}

const AboutMe: FunctionComponent<AboutMeProps> = () => {
  return (
    <div className="box-border md:p-20 p-8 flex flex-col md:flex-row items-center justify-center gap-4 bg-[#b4b0ab]">\
      <div className="lg:w-1/2 flex flex-col md:gap-9 lg:pr-20">
        <h1 className="md:text-7xl text-4xl">About Me</h1>
        <p>
          Dynamic Frontend Developer with over 5 years of experience
          specializing in responsive web and mobile applications. A strong
          advocate of the mobile-first approach and an ardent learner,
          continuously honing skills in the latest technologies. Proven track
          record in driving business growth through innovative solutions and
          mentoring junior developers.
        </p>
      </div>
      <div className="lg:w-1/2 box-border md:p-0 p-8">
        <img src={CoffeeLaptop} alt="cofveve" />
      </div>
    </div>
  );
};

export default AboutMe;
