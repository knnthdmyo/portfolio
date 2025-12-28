import { useEffect, useState, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const TRAIL_LENGTH = 12;
const TRAIL_DELAY = 0.05; // Delay factor between trail particles

interface TrailPoint {
  x: number;
  y: number;
}

const BASE_SIZE = 27;
const MAX_SIZE = 500;
const SHAKE_THRESHOLD = 200; // Start shaking and turn red
const INTENSE_THRESHOLD = 300; // Darker flashing red
const SIZE_INCREMENT = 6;
const SHRINK_DELAY = 10000; // 10 seconds before shrinking

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [cursorSize, setCursorSize] = useState(BASE_SIZE);
  const [isShrinking, setIsShrinking] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isIntense, setIsIntense] = useState(false);
  
  // Trail state using refs for performance
  const trailRef = useRef<TrailPoint[]>(Array(TRAIL_LENGTH).fill({ x: 0, y: 0 }));
  const trailElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number>();
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const shrinkTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Update trail positions with smooth interpolation
  const updateTrail = useCallback(() => {
    const trail = trailRef.current;
    const target = mousePositionRef.current;
    
    // Offset to position trail at the tip of the arrow (arrow is 27px, rotated -90deg)
    // The tip is approximately at the center-bottom of the arrow icon
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

    const handleMouseDown = () => {
      setIsClicking(true);
      // Click triggers shrink if cursor is enlarged
      if (cursorSize > BASE_SIZE) {
        setIsShrinking(true);
        setIsShaking(false);
        setIsIntense(false);
        setCursorSize(BASE_SIZE);
        // Reset shrinking state after animation
        setTimeout(() => setIsShrinking(false), 500);
      }
    };
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsMoving(false);
    };
    const handleMouseEnter = () => setIsVisible(true);
    
    // Handle particle consumption - grow cursor
    const handleParticleConsumed = () => {
      setIsShrinking(false);
      setCursorSize(prev => {
        const newSize = Math.min(prev + SIZE_INCREMENT, MAX_SIZE);
        
        // Trigger shake when reaching shake threshold (200px)
        if (newSize >= SHAKE_THRESHOLD && prev < SHAKE_THRESHOLD) {
          setIsShaking(true);
        }
        
        // Trigger intense mode when reaching intense threshold (300px)
        if (newSize >= INTENSE_THRESHOLD && prev < INTENSE_THRESHOLD) {
          setIsIntense(true);
        }
        
        // At max size, clear shrink timer - only click can reset
        if (newSize >= MAX_SIZE) {
          if (shrinkTimeoutRef.current) {
            clearTimeout(shrinkTimeoutRef.current);
          }
        }
        
        return newSize;
      });
      
      // Reset shrink timer on each consumption (only if not at max)
      if (cursorSize < MAX_SIZE - SIZE_INCREMENT) {
        if (shrinkTimeoutRef.current) {
          clearTimeout(shrinkTimeoutRef.current);
        }
        
        // Start 30s countdown to shrink
        shrinkTimeoutRef.current = setTimeout(() => {
          setIsShrinking(true);
          setCursorSize(BASE_SIZE);
          setIsShaking(false);
          setIsIntense(false);
          setTimeout(() => setIsShrinking(false), 500);
        }, SHRINK_DELAY);
      }
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('particleConsumed', handleParticleConsumed);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    // Start trail animation
    animationFrameRef.current = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('particleConsumed', handleParticleConsumed);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      if (shrinkTimeoutRef.current) {
        clearTimeout(shrinkTimeoutRef.current);
      }
    };
  }, [updateTrail, cursorSize]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Trail particles - rendered first so they appear behind cursor, only when moving and not shaking */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailElementsRef.current[i] = el; }}
          className={`fixed pointer-events-none z-[99997] rounded-full will-change-transform transition-opacity duration-200
            ${isVisible && isMoving && !isShaking ? '' : '!opacity-0'}`}
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
        className={`fixed pointer-events-none z-[99999] will-change-transform
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          ${isClicking ? 'scale-75' : 'scale-100'}
          ${isShaking ? 'animate-[shake_0.5s_ease-in-out_infinite]' : ''}
          ${isIntense ? 'animate-[pulse_0.3s_ease-in-out_infinite]' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-15%, -15%) rotate(-90deg) ${isClicking ? 'scale(0.75)' : 'scale(1)'}`,
          color: isIntense ? '#dc2626' : isShaking ? '#f87171' : '#38bdf8',
          fontSize: `${cursorSize}px`,
          WebkitTextStroke: `${Math.max(2, cursorSize / 13)}px ${isIntense ? '#450a0a' : isShaking ? '#7f1d1d' : '#1e3a5f'}`,
          paintOrder: 'stroke fill',
          filter: `drop-shadow(0 0 ${4 + (cursorSize - BASE_SIZE) * 0.3}px ${isIntense ? 'rgba(220, 38, 38, 0.9)' : isShaking ? 'rgba(248, 113, 113, 0.8)' : `rgba(56, 189, 248, ${0.6 + (cursorSize - BASE_SIZE) * 0.015})`})`,
          transition: isShrinking 
            ? 'font-size 500ms cubic-bezier(0.34, 1.56, 0.64, 1), filter 500ms ease-out, color 300ms ease' 
            : 'font-size 150ms ease-out, filter 150ms ease-out, color 300ms ease',
        }}
      >
        <FontAwesomeIcon icon={faLocationArrow} />
      </div>
    </>
  );
};

export default CustomCursor;

