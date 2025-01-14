// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Maha Kumbh 2025",
  description: "2025 Maha Kumbh Mela | Registration Links, Important Details for Tourist at Prayagraj, UP | ABPLIVE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Forum&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
