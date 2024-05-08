import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";
import {Footer} from "../components/footer";
import { Partners } from "../pages/partners";
import { About } from "../pages/about";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bexxle Technologies",
  description: "A website built with next for bexxle technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Partners/>
        <About/>
        <Footer />
      </body>
    </html>
  );
}
