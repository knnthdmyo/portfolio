import { FunctionComponent } from "react";
import NavBar from "@components/Navbar";
import HeroImage from "@assets/images/IMG_4271.jpg";
import Button from "@components/Button";

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <div className="flex md:h-screen 2xl:w-3/4 xl:justify-center xl:justify-self-center justify-between lg:flex-row flex-col w-full">
      <img src={HeroImage} alt="hero_main" className="object-cover lg:w-1/2" />

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
