import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teukuaryansyahpratama.vercel.app"),

  title: {
    default: "Teuku Aryansyah Pratama (Kazeetama) – Web Developer Portfolio",
    template: "%s | Kazeetama",
  },

  description:
    "Portfolio resmi Teuku Aryansyah Pratama (Kazeetama), Web Developer & Software Engineer yang berfokus pada Next.js, React, dan UI modern.",

  keywords: [
    "Teuku Aryansyah Pratama",
    "Kazeetama",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Engineer",
    "Portfolio Web Developer",
  ],

  authors: [{ name: "Teuku Aryansyah Pratama", url: "https://kazeetama.dev" }],
  creator: "Teuku Aryansyah Pratama",
  publisher: "Kazeetama",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kazeetama.dev",
    siteName: "Kazeetama Portfolio",
    title: "Teuku Aryansyah Pratama (Kazeetama) – Web Developer Portfolio",
    description:
      "Portfolio resmi Teuku Aryansyah Pratama (Kazeetama), Web Developer & Software Engineer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kazeetama – Web Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Teuku Aryansyah Pratama (Kazeetama) – Web Developer Portfolio",
    description:
      "Portfolio resmi Teuku Aryansyah Pratama (Kazeetama), Web Developer & Software Engineer.",
    images: ["/og-image.png"],
    creator: "@kazeetama", // kalau ada, kalau nggak hapus
  },

  alternates: {
    canonical: "https://kazeetama.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
