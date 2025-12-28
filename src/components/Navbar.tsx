import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeSwitcher from './ThemeSwitcher';

interface NavBarProps {
  onSearchClick?: () => void;
}

const NavBar = ({ onSearchClick }: NavBarProps) => {
  const handleSearchClick = () => {
    // Trigger Cmd+K programmatically
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      ctrlKey: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
    onSearchClick?.();
  };

  return (
    <div className="sm:flex w-full lg:justify-between sm:justify-center">
      <section className="relative w-full">
        <nav className="flex w-full items-center justify-between">
          <div className="md:px-4 px-1 xl:px-12 py-6 flex w-full items-center justify-between">
            {/* Navigation links */}
            <ul className="flex md:px-4 px-1 xl:space-x-12 space-x-4 items-center text-xs uppercase tracking-widest font-medium">
              <li>
                <a className="text-gray-500 hover:text-sky-500 transition-colors duration-300" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-sky-500 transition-colors duration-300" href="#experiences">
                  Journey
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-sky-500 transition-colors duration-300" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-gray-500 hover:text-sky-500 transition-colors duration-300" href="#reach-out">
                  Connect
                </a>
              </li>
            </ul>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Search trigger */}
              <button
                onClick={handleSearchClick}
                className="flex items-center gap-3 px-4 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400 text-sm min-w-[160px] sm:min-w-[200px]"
              >
                <FontAwesomeIcon icon={faSearch} className="text-xs" />
                <span className="hidden sm:inline flex-1 text-left">Search...</span>
                <kbd className="hidden sm:inline px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-md">⌘K</kbd>
              </button>

              {/* Theme switcher */}
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
