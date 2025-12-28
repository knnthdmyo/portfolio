import Hero from '@components/pages/Hero';
import Experiences from './components/pages/Experiences';
import Projects from './components/pages/Projects';
import ReachOut from './components/pages/ReachOut';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-sky-100/40 dark:from-slate-950 dark:via-slate-900 dark:to-gray-950 text-gray-900 dark:text-white transition-colors duration-300 cursor-none relative min-h-screen">
      {/* Gradient orbs for visual depth */}
      <div className="gradient-orb gradient-orb-1" aria-hidden="true" />
      <div className="gradient-orb gradient-orb-2" aria-hidden="true" />
      <div className="gradient-orb gradient-orb-3" aria-hidden="true" />
      
      {/* Matrix Code Rain Background */}
      <div className="code-rain" aria-hidden="true" />
      <div className="code-rain-columns" aria-hidden="true">
        <span>{'{ }'}</span>
        <span>{'<>'}</span>
        <span>01</span>
        <span>=&gt;</span>
        <span>fn</span>
        <span>10</span>
        <span>{'[]'}</span>
        <span>&&</span>
        <span>::</span>
        <span>**</span>
      </div>
      
      <CustomCursor />
      <CommandPalette />
      <section id="home">
        <Hero />
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
