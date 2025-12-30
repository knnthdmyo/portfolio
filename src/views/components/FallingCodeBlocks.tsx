'use client';

import { useEffect, useRef, useState } from 'react';
import { EXTENDED_CODE_CHARS } from '@/constants/code-chars';

interface Block {
  id: number;
  x: number;
  y: number;
  text: string;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  bounced: boolean;
}

interface FallingCodeBlocksProps {
  onLogoHit: () => void;
}

export default function FallingCodeBlocks({ onLogoHit }: FallingCodeBlocksProps) {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const blockIdRef = useRef(0);
  const logoRef = useRef<DOMRect | null>(null);
  const animationRef = useRef<number>();
  const hitQueueRef = useRef<number>(0);

  useEffect(() => {
    // Get logo bounds
    const updateLogoBounds = () => {
      const logoElement = document.getElementById('loading-logo');
      if (logoElement) {
        logoRef.current = logoElement.getBoundingClientRect();
      }
    };

    updateLogoBounds();
    window.addEventListener('resize', updateLogoBounds);

    // Create blocks periodically
    const createBlock = () => {
      const newBlock: Block = {
        id: blockIdRef.current++,
        x: Math.random() * window.innerWidth,
        y: -50,
        text: EXTENDED_CODE_CHARS[Math.floor(Math.random() * EXTENDED_CODE_CHARS.length)],
        speedX: (Math.random() - 0.5) * 2, // Random horizontal speed -1 to 1
        speedY: 2 + Math.random() * 4, // Random vertical speed 2-6px per frame
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10, // Random rotation speed
        opacity: 0.3 + Math.random() * 0.3,
        bounced: false,
      };

      setBlocks((prev) => [...prev, newBlock]);
    };

    const blockInterval = setInterval(createBlock, 150); // Create block every 150ms

    // Animation loop
    const animate = () => {
      setBlocks((prevBlocks) => {
        return prevBlocks
          .map((block) => {
            let newX = block.x + block.speedX;
            const newY = block.y + block.speedY;
            let newSpeedX = block.speedX;
            let newSpeedY = block.speedY;
            let newRotation = block.rotation + block.rotationSpeed;
            let bounced = block.bounced;

            // Check collision with logo
            if (logoRef.current && !bounced) {
              const blockRect = {
                left: newX,
                right: newX + 60,
                top: newY,
                bottom: newY + 30,
              };

              const logo = logoRef.current;
              const isColliding =
                blockRect.right > logo.left &&
                blockRect.left < logo.right &&
                blockRect.bottom > logo.top &&
                blockRect.top < logo.bottom;

              if (isColliding) {
                // Queue the hit to be processed outside render cycle
                hitQueueRef.current += 1;
                bounced = true;

                // Calculate bounce direction based on collision point
                const blockCenterX = newX + 30;
                const blockCenterY = newY + 15;
                const logoCenterX = (logo.left + logo.right) / 2;
                const logoCenterY = (logo.top + logo.bottom) / 2;

                // Calculate angle from logo center to block center
                const angleX = blockCenterX - logoCenterX;
                const angleY = blockCenterY - logoCenterY;
                const distance = Math.sqrt(angleX * angleX + angleY * angleY);

                // Normalize and apply bounce force
                const bounceForce = 8;
                newSpeedX = (angleX / distance) * bounceForce;
                newSpeedY = (angleY / distance) * bounceForce;

                // Add some randomness
                newSpeedX += (Math.random() - 0.5) * 4;
                newSpeedY += (Math.random() - 0.5) * 4;

                // Ensure minimum upward/outward bounce
                if (Math.abs(newSpeedY) < 3) {
                  newSpeedY = newSpeedY < 0 ? -5 : 5;
                }

                // Update rotation speed on bounce
                newRotation += (Math.random() - 0.5) * 180;
              }
            }

            // Apply gravity after bounce
            if (bounced) {
              newSpeedY += 0.3; // Gravity effect
            }

            // Bounce off screen edges
            if (newX < 0 || newX > window.innerWidth - 60) {
              newSpeedX *= -0.8;
              newX = Math.max(0, Math.min(newX, window.innerWidth - 60));
            }

            // Remove blocks that are off screen
            if (newY > window.innerHeight + 100 || newX < -100 || newX > window.innerWidth + 100) {
              return null;
            }

            return {
              ...block,
              x: newX,
              y: newY,
              speedX: newSpeedX,
              speedY: newSpeedY,
              rotation: newRotation,
              bounced,
            };
          })
          .filter((block): block is Block => block !== null);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      clearInterval(blockInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', updateLogoBounds);
    };
  }, []);

  // Process hit queue outside of render cycle
  useEffect(() => {
    if (hitQueueRef.current > 0) {
      const hitsToProcess = hitQueueRef.current;
      hitQueueRef.current = 0;
      
      // Process all queued hits
      for (let i = 0; i < hitsToProcess; i++) {
        onLogoHit();
      }
    }
  }, [blocks, onLogoHit]); // Trigger when blocks change

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute text-sky-400 font-mono font-bold text-lg"
          style={{
            left: `${block.x}px`,
            top: `${block.y}px`,
            transform: `rotate(${block.rotation}deg)`,
            opacity: block.opacity,
            textShadow: '0 0 10px currentColor',
            transition: 'none',
          }}
        >
          {block.text}
        </div>
      ))}
    </div>
  );
}

