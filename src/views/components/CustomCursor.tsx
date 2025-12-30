'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const TRAIL_LENGTH = 12;
const TRAIL_DELAY = 0.05; // Delay factor between trail particles

interface TrailPoint {
  x: number;
  y: number;
}

const CURSOR_SIZE = 27; // Fixed size

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  
  // Trail state using refs for performance
  const trailRef = useRef<TrailPoint[]>(Array(TRAIL_LENGTH).fill({ x: 0, y: 0 }));
  const trailElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number>();
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const idleTimeoutRef = useRef<NodeJS.Timeout>();

  // Update trail positions with smooth interpolation
  const updateTrail = useCallback(() => {
    const trail = trailRef.current;
    const target = mousePositionRef.current;
    
    // Offset to position trail at the tip of the arrow
    const tipOffsetX = 12;
    const tipOffsetY = 12;
    
    // First particle follows the arrow tip
    trail[0] = { x: target.x + tipOffsetX, y: target.y + tipOffsetY };
    
    // Each subsequent particle follows the one before it
    for (let i = 1; i < TRAIL_LENGTH; i++) {
      const prev = trail[i - 1];
      const current = trail[i];
      const ease = TRAIL_DELAY + (i * 0.02); // Increasing delay for trailing effect
      
      trail[i] = {
        x: current.x + (prev.x - current.x) * ease,
        y: current.y + (prev.y - current.y) * ease,
      };
    }
    
    // Update DOM elements directly for performance
    trailElementsRef.current.forEach((el, i) => {
      if (el) {
        const point = trail[i];
        const opacity = 1 - (i / TRAIL_LENGTH);
        const scale = 1 - (i / TRAIL_LENGTH) * 0.7;
        el.style.transform = `translate(-50%, -50%) scale(${scale})`;
        el.style.left = `${point.x}px`;
        el.style.top = `${point.y}px`;
        el.style.opacity = String(opacity * 0.6);
      }
    });
    
    animationFrameRef.current = requestAnimationFrame(updateTrail);
  }, []);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setIsMoving(true);
      
      // Clear existing idle timeout
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      
      // Set cursor as idle after 100ms of no movement
      idleTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsMoving(false);
    };
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Start trail animation
    animationFrameRef.current = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, [updateTrail]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Trail particles - rendered first so they appear behind cursor */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailElementsRef.current[i] = el; }}
          className={`fixed pointer-events-none z-[100001] rounded-full will-change-transform transition-opacity duration-200
            ${isVisible && isMoving ? '' : '!opacity-0'}`}
          style={{
            width: '14px',
            height: '14px',
            background: `radial-gradient(circle, rgba(56, 189, 248, 0.8) 0%, rgba(56, 189, 248, 0) 70%)`,
            boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)',
            left: position.x,
            top: position.y,
          }}
        />
      ))}

      {/* Main cursor arrow */}
      <div
        className={`fixed pointer-events-none z-[100002] will-change-transform transition-transform duration-150
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          ${isClicking ? 'scale-75' : 'scale-100'}`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-15%, -15%) rotate(-90deg) ${isClicking ? 'scale(0.75)' : 'scale(1)'}`,
          color: '#38bdf8',
          fontSize: `${CURSOR_SIZE}px`,
          WebkitTextStroke: '2px #1e3a5f',
          paintOrder: 'stroke fill',
          filter: 'drop-shadow(0 0 4px rgba(56, 189, 248, 0.6))',
        }}
      >
        <FontAwesomeIcon icon={faLocationArrow} />
      </div>
    </>
  );
};

export default CustomCursor;

