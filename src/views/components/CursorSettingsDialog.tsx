'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faLocationArrow, faCloud, faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';

export interface CursorSettings {
  growthEnabled: boolean;
  particleCount: number;
  maxSize: number;
}

interface CursorSettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  settings: CursorSettings;
  onSettingsChange: (settings: CursorSettings) => void;
}

const CursorSettingsDialog = ({ isOpen, onClose, settings, onSettingsChange }: CursorSettingsDialogProps) => {
  const [localSettings, setLocalSettings] = useState(settings);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  // Handle open/close animations
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Small delay to trigger animation after mount
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before hiding
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      document.body.style.overflow = '';
      return () => clearTimeout(timeout);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSave = () => {
    onSettingsChange(localSettings);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100000] flex items-center justify-center p-4"
    >
      {/* Backdrop - clickable to close */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ease-out cursor-pointer ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div 
        className={`relative w-full max-w-md bg-gradient-to-br from-slate-900 via-slate-950 to-gray-900 rounded-2xl shadow-2xl shadow-black/50 border border-white/10 overflow-hidden transition-all duration-300 ease-out ${
          isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
        }`}
      >
        {/* Gradient orbs */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/20">
              <FontAwesomeIcon icon={faLocationArrow} className="text-sky-400 rotate-[-45deg]" />
            </div>
            <h2 className="text-lg font-semibold text-gray-100">Cursor Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Content */}
        <div className="relative p-5 space-y-6">
          {/* Growth Toggle */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationArrow} className="text-sky-400 rotate-[-45deg]" />
              <div>
                <p className="text-sm font-medium text-gray-200">Cursor Growth</p>
                <p className="text-xs text-gray-500">Grow cursor when consuming particles</p>
              </div>
            </div>
            <button
              onClick={() => setLocalSettings(prev => ({ ...prev, growthEnabled: !prev.growthEnabled }))}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${
                localSettings.growthEnabled ? 'bg-sky-500' : 'bg-gray-700'
              }`}
            >
              <span 
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  localSettings.growthEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Particle Count */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faCloud} className="text-violet-400" />
              <div>
                <p className="text-sm font-medium text-gray-200">Particle Amount</p>
                <p className="text-xs text-gray-500">Number of falling particles</p>
              </div>
            </div>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="50"
                value={localSettings.particleCount}
                onChange={(e) => setLocalSettings(prev => ({ ...prev, particleCount: parseInt(e.target.value) }))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Off</span>
                <span className="text-sky-400 font-medium">{localSettings.particleCount} particles</span>
                <span>Max</span>
              </div>
            </div>
          </div>

          {/* Max Cursor Size */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faArrowsUpDownLeftRight} className="text-emerald-400" />
              <div>
                <p className="text-sm font-medium text-gray-200">Max Cursor Size</p>
                <p className="text-xs text-gray-500">Maximum size when consuming particles</p>
              </div>
            </div>
            <div className="space-y-3">
              <input
                type="range"
                min="100"
                max="500"
                step="50"
                value={localSettings.maxSize}
                onChange={(e) => setLocalSettings(prev => ({ ...prev, maxSize: parseInt(e.target.value) }))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Small</span>
                <span className="text-emerald-400 font-medium">{localSettings.maxSize}px</span>
                <span>Large</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative flex gap-3 p-5 border-t border-white/10">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-sm font-medium transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-all shadow-lg shadow-sky-500/25"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CursorSettingsDialog;

