import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { siteConfig, whatsappUrl } from "./data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "CHEX Computers | Laptops in Computer Village, Ikeja",
    template: "%s | CHEX Computers",
  },
  description: siteConfig.description,
  keywords: ["laptops for sale in Lagos", "laptop store in Computer Village Ikeja", "wholesale laptop supplier in Lagos", "business laptops in Nigeria"],
  openGraph: { title: "CHEX COMPUTERS LTD", description: siteConfig.description, type: "website", locale: "en_NG" },
  twitter: { card: "summary_large_image", title: "CHEX COMPUTERS LTD", description: siteConfig.description },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
        <div className="mobile-action-bar" aria-label="Quick contact actions">
          <a href="/contact">Call / contact</a>
          <a href={whatsappUrl("Hello CHEX Computers, I need help choosing a laptop.")} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </body>
    </html>
  );
}
