import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Philosopher, Montserrat } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SeoSchemas from "@/components/SeoSchemas";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const philosopher = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-philosopher",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Teacher Training Program for School Teachers | NITYA Training",
  description: "Nitya Training offers a structured teacher training program with certified workshops and online learning to support professional development for school teachers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${philosopher.variable} ${montserrat.variable} font-sans`}
    >
      

      <body>
        <GoogleAnalytics />
        <SeoSchemas />

        <main>{children}</main>

        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          strategy="lazyOnload"
          widget-id="aaadda"
        />
      </body>
    </html>
  );
}
