import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor - FontAwesome location arrow */}
      <div
        className={`fixed pointer-events-none z-[99999] transition-transform duration-75 ease-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          ${isClicking ? 'scale-75' : 'scale-100'}`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-15%, -15%) rotate(-90deg) ${isClicking ? 'scale(0.75)' : 'scale(1)'}`,
          color: '#38bdf8',
          fontSize: '27px',
          WebkitTextStroke: '2px #1e3a5f',
          paintOrder: 'stroke fill',
          filter: 'drop-shadow(0 0 4px rgba(56, 189, 248, 0.6))',
        }}
      >
        <FontAwesomeIcon icon={faLocationArrow} />
      </div>
      
      {/* Cursor ring */}
      <div
        className={`fixed pointer-events-none z-[99998] rounded-full transition-all duration-300 ease-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: position.x,
          top: position.y,
          width: '48px',
          height: '48px',
          borderColor: 'rgba(56, 189, 248, 0.5)',
          transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.9)' : 'scale(1)'}`,
          backgroundColor: 'transparent',
        }}
      />
    </>
  );
};

export default CustomCursor;

