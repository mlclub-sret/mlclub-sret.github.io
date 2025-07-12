import React, { createContext, useContext, useState } from 'react';

interface NavigationContextType {
  activeDropdown: string | null;
  setActiveDropdown: (dropdown: string | null) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavigationContext.Provider value={{
      activeDropdown,
      setActiveDropdown,
      isMobileMenuOpen,
      setIsMobileMenuOpen
    }}>
      {children}
    </NavigationContext.Provider>
  );
};