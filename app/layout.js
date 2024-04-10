// app/layout.js
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "NextLab Consulting",
  description: "Expert advisory in cyclotrons, radiochemistry, GMP compliance, and clean space design. Commitment to excellence and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        {/* <Header /> */}
        {children}
        <Footer />
        </body>
    </html>
  );
}
