import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const darkModeHandler = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };
  return (
    <button onClick={darkModeHandler}>
      {isDark ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  );
};
export default ThemeSwitcher;
