import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Philosopher, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
  title: "NITYA Teacher Training Program",
  description: "Empowering educators with impactful learning opportunities",
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
      <head>
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/@mux/mux-player/dist/mux-player.js"
  ></script>
</head>

      <body>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          strategy="afterInteractive"
          widget-id="aaadda"
        />
      </body>
    </html>
  );
}
