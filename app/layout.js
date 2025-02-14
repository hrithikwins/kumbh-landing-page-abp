"use client"
import "./globals.css"
import React, { useEffect } from "react"
import { IntlProvider } from "react-intl"
import { useState } from "react"
import Head from "next/head"
import messages from "../components/messages"
import { LocaleProvider, useLocale } from "../components/contexts/LocaleContext"
import Script from "next/script"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Mahakumbh 2025 News Hindi, महाकुंभ मेला, Prayagraj Kumbh Mela Photos & Videos | ABP News</title>
        <meta name="description" content="Mahakumbh 2025 News in Hindi: Get latest news updates of Prayagraj Maha Kumbh Mela Snan dates, tent booking, routs guidelines, photos and video at www.abplive.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.abplive.com/mahakumbh-mela" />
        <meta property="og:title" content="Mahakumbh 2025 News Hindi, महाकुंभ मेला, Prayagraj Kumbh Mela Photos & Videos | ABP News" />
        <meta property="og:description" content="Mahakumbh 2025 News in Hindi: Get latest news updates of Prayagraj Maha Kumbh Mela Snan dates, tent booking, routs guidelines, photos and video at www.abplive.com" />
        <meta property="og:image" content="https://abpverse-mahakumbh.s3.us-east-1.amazonaws.com/ABP+Mahakumbh+2025+Image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.abplive.com/mahakumbh-mela" />
        <meta property="twitter:title" content="Mahakumbh 2025 News Hindi, महाकुंभ मेला, Prayagraj Kumbh Mela Photos & Videos | ABP News" />
        <meta property="twitter:description" content="Mahakumbh 2025 News in Hindi: Get latest news updates of Prayagraj Maha Kumbh Mela Snan dates, tent booking, routs guidelines, photos and video at www.abplive.com" />
        <meta property="twitter:image" content="https://abpverse-mahakumbh.s3.us-east-1.amazonaws.com/ABP+Mahakumbh+2025+Image.png" />
      </Head>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _gaq = _gaq || [];
            var _ga_count = 0;
            _gaq.push(["_setAccount", "UA-8203583-9"]);
            _gaq.push(["_trackPageview"]);
            _ga_count = 1;
            _gaq.push(["_trackPageLoadTime"]);
            (function () {
              var ga = document.createElement("script");
              ga.type = "text/javascript";
              ga.async = true;
              ga.src = ("https:" == document.location.protocol ? "https://" : "http://") + "stats.g.doubleclick.net/dc.js";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(ga, s);
            })();
          `,
        }}
      />
      <Script
        id="comscore"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _comscore = _comscore || [];
            _comscore.push({ c1: "2", c2: "17304450", cs_ucfr: "", options: { enableFirstPartyCookie: true } });

            (function() {
              var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
              s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/cs/17304450/beacon.js";
              el.parentNode.insertBefore(s, el);
            })();
          `,
        }}
      />
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TWB9DV5');
          `,
        }}
      />
      <body className="antialiased">
        <LocaleProvider>
          <IntlWrapper>{children}</IntlWrapper>
        </LocaleProvider>
      </body>
    </html>
  )
}

function IntlWrapper({ children }) {
  const { locale, setLocale } = useLocale()

  useEffect(() => {
    // Ensure the code runs only in the browser
    if (typeof window !== "undefined") {
      const url = window.location.href // Get the current URL
      const hostname = new URL(url).hostname
      console.log("hostname", hostname)
      setTimeout(() => {
        if (hostname === "news.abplive.com") {
          setLocale("en") // english
        } else {
          setLocale("hi") // hindi
        }
      }, 10)
    }
  }, [])

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      {children}
    </IntlProvider>
  )
}
