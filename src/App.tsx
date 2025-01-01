import AboutMe from '@components/pages/AboutMe';
import Hero from '@components/pages/Hero';
import Experiences from './components/pages/Experiences';
import Projects from './components/pages/Projects';
import ReachOut from './components/pages/ReachOut';

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-all">
      <section id="home">
        <Hero />
      </section>
      <section id="about-me" className="flex-col">
        <AboutMe />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="reach-out">
        <ReachOut />
      </section>
    </div>
  );
}

export default App;
