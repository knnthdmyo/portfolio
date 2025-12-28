import { Hero, Experiences, Projects, Technologies, ReachOut } from '@/views/pages';
import { CustomCursor, CommandPalette, BackToTop, InteractiveRain, CursorSettingsDialog } from '@/views/components';
import { CursorSettingsProvider, useCursorSettings } from '@/contexts/CursorSettingsContext';

function AppContent() {
  const { settings, updateSettings, isDialogOpen, closeDialog } = useCursorSettings();
  
  return (
    <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-sky-100/40 dark:from-[#0a0f1a] dark:via-[#0d1320] dark:to-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-300 cursor-none relative min-h-screen">
      <CursorSettingsDialog 
        isOpen={isDialogOpen} 
        onClose={closeDialog}
        settings={settings}
        onSettingsChange={updateSettings}
      />
      {/* Gradient orbs for visual depth */}
      <div className="gradient-orb gradient-orb-1" aria-hidden="true" />
      <div className="gradient-orb gradient-orb-2" aria-hidden="true" />
      <div className="gradient-orb gradient-orb-3" aria-hidden="true" />
      
      {/* Matrix Code Rain Background - only show when particles are enabled */}
      {settings.particleCount > 0 && (
        <>
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
            <span>{'()'}</span>
            <span>let</span>
            <span>{'...'}</span>
            <span>||</span>
            <span>null</span>
          </div>
        </>
      )}
      
      <InteractiveRain particleCount={settings.particleCount} />
      <CustomCursor growthEnabled={settings.growthEnabled} maxSize={settings.maxSize} />
      <CommandPalette />
      <BackToTop />
      <section id="home">
        <Hero />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
      <section id="reach-out">
        <ReachOut />
      </section>
    </div>
  );
}

function App() {
  return (
    <CursorSettingsProvider>
      <AppContent />
    </CursorSettingsProvider>
  );
}

export default App;
