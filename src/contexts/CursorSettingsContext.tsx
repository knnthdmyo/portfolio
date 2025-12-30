'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { CursorSettings } from '../views/components/CursorSettingsDialog';

interface CursorSettingsContextType {
  settings: CursorSettings;
  updateSettings: (settings: CursorSettings) => void;
  isDialogOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const defaultSettings: CursorSettings = {
  growthEnabled: true,
  particleCount: 12,
  maxSize: 200,
};

const CursorSettingsContext = createContext<CursorSettingsContextType | undefined>(undefined);

export const CursorSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<CursorSettings>(() => {
    // Load from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cursorSettings');
      if (saved) {
        try {
          const parsedSettings = JSON.parse(saved);
          // Ensure all settings have default values for backward compatibility
          return {
            ...defaultSettings,
            ...parsedSettings,
          };
        } catch {
          return defaultSettings;
        }
      }
    }
    return defaultSettings;
  });
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const updateSettings = useCallback((newSettings: CursorSettings) => {
    setSettings(newSettings);
    localStorage.setItem('cursorSettings', JSON.stringify(newSettings));
    // Dispatch event for InteractiveRain to listen
    window.dispatchEvent(new CustomEvent('cursorSettingsChanged', { detail: newSettings }));
  }, []);

  const openDialog = useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  // Listen for openCursorSettings event from CustomCursor
  useEffect(() => {
    const handleOpenSettings = () => {
      openDialog();
    };

    window.addEventListener('openCursorSettings', handleOpenSettings);
    return () => {
      window.removeEventListener('openCursorSettings', handleOpenSettings);
    };
  }, [openDialog]);

  return (
    <CursorSettingsContext.Provider value={{ settings, updateSettings, isDialogOpen, openDialog, closeDialog }}>
      {children}
    </CursorSettingsContext.Provider>
  );
};

export const useCursorSettings = () => {
  const context = useContext(CursorSettingsContext);
  if (!context) {
    throw new Error('useCursorSettings must be used within a CursorSettingsProvider');
  }
  return context;
};

