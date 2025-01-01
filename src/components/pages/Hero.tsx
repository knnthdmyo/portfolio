import HeroImage from "@assets/images/IMG_4271.jpg";
import Button from "@components/Button";
import NavBar from "@components/Navbar";
import { FunctionComponent } from "react";

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <div className="flex md:h-screen 2xl:w-3/4 xl:justify-center xl:justify-self-center justify-between lg:flex-row flex-col h-full md:pb-0 pb-8">
      <img
        src={HeroImage}
        alt="hero_main"
        className="object-cover lg:w-1/2 w-full"
      />
      <div className="flex flex-col h-full w-full">
        <NavBar />
        <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
          <h1 className="md:text-7xl text-4xl">KNNTHDMYO</h1>
          <h3 className="text-2xl">Frontend Developer</h3>
          <Button title="Download my resume" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
