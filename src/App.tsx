import Hero from "@components/pages/Hero";
import AboutMe from "@components/pages/AboutMe";
import Experiences from "./components/pages/Experiences";
import Technologies from "./components/pages/Technologies";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about-me" className="flex-col">
        <AboutMe />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="techonologies">
        <Technologies />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
