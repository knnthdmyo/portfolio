import HeroImage from '@assets/images/IMG_4271.jpg';
import NavBar from '../Navbar';
import Technologies from './Technologies';

const Hero = () => {
  return (
    <div className="flex xl:justify-center justify-between lg:flex-row flex-col lg:h-screen h-full md:pb-0 pb-8">
      <img
        src={HeroImage}
        alt="hero_main"
        className="object-cover lg:w-1/2 w-full"
      />
      <div className="flex flex-col p-4">
        <NavBar />
        <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
          <h1 className="md:text-7xl text-4xl">{`< knnthdmyo />`}</h1>
          <h3 className="text-2xl">Frontend Developer</h3>
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Hero;
