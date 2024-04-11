// app/layout.js
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  metadataBase: new URL('https://nextlabconsulting.com'),
  title: "NextLab Consulting",
  description: "Expert advisory in cyclotrons, radiochemistry, GMP compliance, and clean space design. Commitment to excellence and innovation.",
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'NextLab Consulting',
    description: 'Expert advisory in cyclotrons, radiochemistry, GMP compliance, and clean space design. Commitment to excellence and innovation.',
    siteName: 'NextLab Consulting',
    images: [
      {
        url: '/preview-s.webp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    appleTouchIcon: '/apple-touch-icon.png',
    favicon32: '/favicon-32x32.png',
    favicon16: '/favicon-16x16.png',
  },
  meta: [
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' },
  ],
};

/*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
//*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
