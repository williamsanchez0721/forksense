import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Antonio } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  subsets: ['latin'],
  variable: '--font-antonio',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ForkU - Forklift Safety Training & OSHA Compliance Platform",
  description: "ForkU is the revolutionary platform for forklift safety training and OSHA compliance management. Get certified, track progress, and ensure workplace safety.",
  keywords: "forklift training, OSHA compliance, workplace safety, forklift certification, safety management",
  authors: [{ name: "ForkU" }],
  creator: "ForkU",
  publisher: "ForkU",
  robots: "index, follow",
  themeColor: "#18181B",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forku.app",
    siteName: "ForkU",
    title: "ForkU - Forklift Safety Training & OSHA Compliance Platform",
    description: "Revolutionary platform for forklift safety training and OSHA compliance management.",
    images: [
      {
        url: "/forkulogoshort.png",
        width: 1200,
        height: 630,
        alt: "ForkU Logo",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://forku.app" />
        <meta name="application-name" content="ForkU" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antonio.variable} antialiased`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
