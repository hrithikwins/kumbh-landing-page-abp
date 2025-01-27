"use client";
import "./globals.css";
import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useState } from "react";
import Head from "next/head";
import messages from "../components/messages";
import {
  LocaleProvider,
  useLocale,
} from "../components/contexts/LocaleContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LocaleProvider>
          <IntlWrapper>{children}</IntlWrapper>
        </LocaleProvider>
      </body>
    </html>
  );
}

function IntlWrapper({ children }) {
  const { locale, setLocale } = useLocale();

  useEffect(() => {
    // Ensure the code runs only in the browser
    if (typeof window !== "undefined") {
      const url = window.location.href; // Get the current URL
      const hostname = new URL(url).hostname;
      console.log("hostname", hostname);
      setTimeout(() => {
        if (hostname === "news.abplive.com") {
          setLocale("en"); // english
        } else {
          setLocale("hi"); // hindi
        }
      }, 10);
    }
  }, []);

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      {children}
    </IntlProvider>
  );
}
