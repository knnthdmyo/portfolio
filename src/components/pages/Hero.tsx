import NavBar from '../Navbar';
import Technologies from './Technologies';

const Hero = () => {
  return (
    <div className="flex xl:justify-center justify-between lg:flex-row flex-col lg:min-h-screen h-full md:pb-0 pb-8">
      <div className="flex flex-col w-full">
        <NavBar />
        <div className="flex flex-col gap-8 items-center justify-center h-full w-full">
          <div className="text-center max-w-2xl px-8">

            <h1 className="md:text-7xl text-4xl font-light tracking-tight mt-2">{`< knnthdmyo />`}</h1>
            <p className="text-xl text-gray-400 mt-2 font-light">Frontend Developer</p>
            <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
              A passionate developer with 5+ years of experience building modern web and mobile applications. 
              I specialize in React ecosystem, crafting performant user interfaces with clean, maintainable code. 
              I thrive in collaborative environments and enjoy turning complex problems into elegant solutions.
            </p>
          </div>
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Hero;
