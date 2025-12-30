'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: string;
  opacity: number;
  size: number;
  isPickedUp: boolean;
  originalX: number;
  fallSpeed: number;
}

const CHARS = ['{ }', '<>', '01', '=>', 'fn', '10', '[]', '&&', '::', '**', '()', 'let', '...', '||', 'null'];
const DEFAULT_PARTICLE_COUNT = 12;
const PICKUP_RADIUS = 80;
const ATTRACTION_STRENGTH = 0.15;

interface InteractiveRainProps {
  particleCount?: number;
}

const InteractiveRain = ({ particleCount: propParticleCount }: InteractiveRainProps) => {
  const [particleCount, setParticleCount] = useState(propParticleCount ?? DEFAULT_PARTICLE_COUNT);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  const createParticle = useCallback((x?: number, y?: number): Particle => {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const xPos = x ?? Math.random() * canvasWidth;
    
    return {
      x: xPos,
      y: y ?? Math.random() * canvasHeight - canvasHeight,
      vx: 0,
      vy: 0,
      char: CHARS[Math.floor(Math.random() * CHARS.length)],
      opacity: 0.1 + Math.random() * 0.2,
      size: 10 + Math.random() * 6,
      isPickedUp: false,
      originalX: xPos,
      fallSpeed: 0.3 + Math.random() * 0.5,
    };
  }, []);

  const initParticles = useCallback(() => {
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle());
  }, [createParticle, particleCount]);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const mouse = mouseRef.current;

    ctx.clearRect(0, 0, width, height);

    particlesRef.current.forEach((particle, index) => {
      // Calculate distance to cursor
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Check if particle should be picked up
      if (distance < PICKUP_RADIUS && !particle.isPickedUp) {
        particle.isPickedUp = true;
        particle.opacity = Math.min(particle.opacity + 0.3, 0.8);
      }

      if (particle.isPickedUp) {
        // Attract to cursor with smooth movement
        particle.vx += (dx * ATTRACTION_STRENGTH) / Math.max(distance, 1);
        particle.vy += (dy * ATTRACTION_STRENGTH) / Math.max(distance, 1);
        
        // Apply velocity with damping
        particle.vx *= 0.92;
        particle.vy *= 0.92;
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Fade out when very close to cursor
        if (distance < 30) {
          particle.opacity -= 0.02;
        }

        // Release particle if cursor moves away
        if (distance > PICKUP_RADIUS * 2) {
          particle.isPickedUp = false;
          particle.opacity = 0.1 + Math.random() * 0.2;
        }

        // Reset particle if faded out (consumed!)
        if (particle.opacity <= 0) {
          particlesRef.current[index] = createParticle();
          // Dispatch event to notify cursor of consumption
          window.dispatchEvent(new CustomEvent('particleConsumed'));
        }
      } else {
        // Normal falling behavior
        particle.y += particle.fallSpeed;
        
        // Slight horizontal drift
        particle.x += Math.sin(particle.y * 0.01) * 0.2;

        // Reset if below screen
        if (particle.y > height + 50) {
          particlesRef.current[index] = createParticle(undefined, -50);
        }
      }

      // Draw particle
      ctx.save();
      ctx.font = `${particle.size}px 'Courier New', monospace`;
      ctx.fillStyle = particle.isPickedUp 
        ? `rgba(56, 189, 248, ${particle.opacity})` 
        : `rgba(56, 189, 248, ${particle.opacity})`;
      
      if (particle.isPickedUp) {
        ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
        ctx.shadowBlur = 15;
      }
      
      ctx.fillText(particle.char, particle.x, particle.y);
      ctx.restore();
    });

    animationRef.current = requestAnimationFrame(updateParticles);
  }, [createParticle]);

  // Listen for settings changes
  useEffect(() => {
    const handleSettingsChange = (e: CustomEvent<{ particleCount: number }>) => {
      setParticleCount(e.detail.particleCount);
    };

    window.addEventListener('cursorSettingsChanged', handleSettingsChange as EventListener);
    return () => {
      window.removeEventListener('cursorSettingsChanged', handleSettingsChange as EventListener);
    };
  }, []);

  // Update from props
  useEffect(() => {
    if (propParticleCount !== undefined) {
      setParticleCount(propParticleCount);
    }
  }, [propParticleCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    handleResize();
    initParticles();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(updateParticles);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, updateParticles]);

  // Don't render on touch devices or if particle count is 0
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  if (particleCount === 0) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
};

export default InteractiveRain;

