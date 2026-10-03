import React, { createContext, useContext, useState, useEffect } from 'react';

export interface LogoMetadata {
  name: string;
  size: number;
  type: string;
  updatedAt: string;
}

interface LogoContextType {
  logoSrc: string | null;
  logoMetadata: LogoMetadata | null;
  setUploadedLogo: (dataUrl: string, metadata: LogoMetadata) => void;
  resetToDefault: () => void;
}

const STORAGE_KEY_LOGO = 'davax_custom_logo_data';
const STORAGE_KEY_META = 'davax_custom_logo_meta';

const LogoContext = createContext<LogoContextType | undefined>(undefined);

export const LogoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logoSrc, setLogoSrc] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_LOGO) || null;
    } catch {
      return null;
    }
  });

  const [logoMetadata, setLogoMetadata] = useState<LogoMetadata | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_META);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const setUploadedLogo = (dataUrl: string, metadata: LogoMetadata) => {
    setLogoSrc(dataUrl);
    setLogoMetadata(metadata);
    try {
      localStorage.setItem(STORAGE_KEY_LOGO, dataUrl);
      localStorage.setItem(STORAGE_KEY_META, JSON.stringify(metadata));
    } catch (e) {
      console.warn('Unable to persist logo to localStorage (may exceed quota if image is huge):', e);
    }
  };

  const resetToDefault = () => {
    setLogoSrc(null);
    setLogoMetadata(null);
    try {
      localStorage.removeItem(STORAGE_KEY_LOGO);
      localStorage.removeItem(STORAGE_KEY_META);
    } catch (e) {
      console.warn('Unable to remove logo from localStorage:', e);
    }
  };

  return (
    <LogoContext.Provider
      value={{
        logoSrc,
        logoMetadata,
        setUploadedLogo,
        resetToDefault,
      }}
    >
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
};
