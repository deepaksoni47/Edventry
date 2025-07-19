import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Load fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Metadata
export const metadata = {
  title: "Edventry",
  description: "Your gateway to courses and events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-black antialiased font-sans">
        <Header />
        <main className="min-h-screen px-4 md:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
