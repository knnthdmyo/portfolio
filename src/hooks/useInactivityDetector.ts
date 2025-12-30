'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { INACTIVITY_TIMEOUT_MS } from '@/config/inactivity.config';

export function useInactivityDetector(timeout: number = INACTIVITY_TIMEOUT_MS) {
  const [isInactive, setIsInactive] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const resetTimer = useCallback(() => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Mark user as active (functional update to avoid dependency)
    setIsInactive((prev) => {
      if (prev) {
        console.log('User is now active');
      }
      return false;
    });

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      console.log('User is now inactive');
      setIsInactive(true);
    }, timeout);
  }, [timeout]);

  useEffect(() => {
    // Activity event handlers
    const handleActivity = () => {
      resetTimer();
    };

    // Listen to various user activity events
    const events = [
      'mousedown',
      'mousemove',
      'keypress',
      'scroll',
      'touchstart',
      'click',
      'wheel',
    ];

    // Add event listeners
    events.forEach((event) => {
      window.addEventListener(event, handleActivity);
    });

    // Initialize timer
    resetTimer();

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [resetTimer]);

  return isInactive;
}

