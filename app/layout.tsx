import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import {
  GoogleTagManagerScript,
  GoogleTagManagerNoscript,
} from "./components/GoogleTagManager";
import MobileCTABar from "./components/MobileCTABar";
import { SITE_URL } from "./lib/constants";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Turf n Trunk",
    default:
      "Turf n Trunk - Professional Landscaping in Peachtree City, GA",
  },
  description:
    "Turf n Trunk provides professional landscaping, lawn care, tree service, and hardscaping for Peachtree City, Fayetteville, Senoia, Newnan, and Tyrone, GA.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Turf n Trunk",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <head>
        <GoogleTagManagerScript />
      </head>
      <body className="min-h-full flex flex-col pb-14 font-body md:pb-0">
        <GoogleTagManagerNoscript />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <JsonLd />
        <MobileCTABar />
      </body>
    </html>
  );
}
