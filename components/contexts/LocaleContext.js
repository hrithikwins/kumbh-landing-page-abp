'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';


const LocaleContext = createContext(undefined);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
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
