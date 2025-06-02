import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/globals.css";
import "../../styles/custom.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MoreInfoSection from "@/components/MoreInfoSection";
import CustomCursor from "@/components/CustomCursor";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr Shabeer Ahmed | Gastrointestinal & Laparoscopic Surgeon",
  description: "Dr. Shabeer Ahmed is a renowned Gastrointestinal and Laparoscopic Surgeon, specializing in advanced minimally invasive procedures with exceptional patient care.",
  keywords: "Dr Shabeer Ahmed, Gastrointestinal Surgeon, Laparoscopic Surgeon, Colorectal Surgeon, Metabolic Surgery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <MoreInfoSection />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
