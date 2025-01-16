'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';


const LocaleContext = createContext(undefined);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');
  const [isAdvertisementModalOpen, setIsAdvertisementModalOpen] = useState(false);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isAdvertisementModalOpen, setIsAdvertisementModalOpen }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
