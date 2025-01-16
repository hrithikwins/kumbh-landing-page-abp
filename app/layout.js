'use client'
import "./globals.css";
import React from 'react';
import { IntlProvider } from "react-intl";
import { useState } from "react";
import Head from 'next/head';
import messages from "../components/messages";
import {LocaleProvider, useLocale} from "../components/contexts/LocaleContext"

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className='antialiased'>
        <LocaleProvider>
          <IntlWrapper>{children}</IntlWrapper>
        </LocaleProvider>
      </body>
    </html>
  )
}

function IntlWrapper({ children }) {
  const { locale } = useLocale();
  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      {children}
    </IntlProvider>
  );
}
