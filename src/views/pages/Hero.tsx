'use client';

import { useHeroStats } from '@/viewmodels';
import NavBar from '@/views/components/Navbar';
import WorldMap from '@/views/components/WorldMap';
import { useCursorSettings } from '@/contexts/CursorSettingsContext';

const Hero = () => {
  const { stats, formatHours } = useHeroStats();
  const { openDialog } = useCursorSettings();

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar onCursorSettingsClick={openDialog} />
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="text-center max-w-3xl">
          <h1 className="md:text-7xl text-4xl font-light tracking-tight mt-2 text-gray-800 dark:text-gray-200">{`< knnthdmyo />`}</h1>
          <p className="text-xl text-gray-400 mt-2 font-light">Frontend Engineer</p>
          
          {/* Highlights - Serious */}
          <div className="flex justify-center gap-6 md:gap-10 mt-10 flex-wrap">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-sky-500 tabular-nums">{stats.years.toFixed(1)}</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Years<br/>Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-sky-500">{stats.companies}</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Companies<br/>Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-sky-500">{stats.projects}+</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Projects<br/>Deployed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-sky-500 tabular-nums">{formatHours(stats.hours)}</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Hours<br/>Coded</p>
            </div>
          </div>

          {/* World Map */}
          <div className="mt-16">
            <WorldMap title="Teams I've Collaborated With" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
