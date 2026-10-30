import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

// Same faces the app ships with, so headings and handwritten captions match it exactly.
const serif = localFont({ src: "./fonts/YoungSerif-Regular.ttf", variable: "--font-serif", display: "swap" });
const hand = localFont({ src: "./fonts/Caveat.ttf", variable: "--font-hand", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/photos/goa_sunset_1.jpg", width: 800, height: 1000 }],
  },
  twitter: { card: "summary_large_image" },
  other: { "google-play-app": "app-id=com.traveldiary.travel_diary" },
};

export const viewport: Viewport = { themeColor: "#15100d", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${hand.variable}`}>
      <body>
        <a href="#content" className="skip">
          Skip to the page
        </a>
        <Analytics/>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
