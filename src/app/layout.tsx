import type { Metadata, Viewport } from "next";
import { fontInter } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/SkipLink";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#14264A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zoodlego.com"),
  title: {
    default: "Zoodlego: Independent Mobile Game Studio",
    template: "%s | Zoodlego",
  },
  description:
    "Zoodlego is an independent game development studio creating original Android arcade and puzzle titles.",
  keywords: [
    "Zoodlego",
    "Game Studio",
    "Indie Game Developer",
    "Android Games",
    "Mobile Games",
  ],
  authors: [{ name: "Zoodlego Studios" }],
  openGraph: {
    title: "Zoodlego: Independent Mobile Game Studio",
    description:
      "Original Android arcade and puzzle games engineered for tactile play.",
    url: "https://zoodlego.com",
    siteName: "Zoodlego",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zoodlego Studio Brand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoodlego: Independent Mobile Game Studio",
    description:
      "Original Android arcade and puzzle games engineered for tactile play.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontInter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#14264A] selection:bg-[#14264A] selection:text-white">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
