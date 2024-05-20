import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Partners } from "../pages/partners";
import { About } from "../pages/about";
import { Solutions } from "../pages/solution";
import { Process } from "../pages/process";
import { Team } from "../pages/team";
import { Quote } from "../pages/quote";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bexxle Technologies",
  description: "Bexxle Technologies is a modern software company dedicated to creating innovative solutions for our clients. We use creativity, expertise, and the latest technology to bring your ideas to life. Whether you're a startup looking to shake up the market or an established business aiming to improve efficiency, our team is here to work closely with you. Explore our services and let's build the future of software together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Partners />
        <About />
        <Solutions />
        <Process />
        <Team />
        <Quote />
        <Footer />
      </body>
    </html>
  );
}
