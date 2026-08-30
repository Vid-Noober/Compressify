import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Compressify — Free Image Compressor Online",
    template: "%s | Compressify",
  },

  description:
    "Compress JPG, PNG, and WebP images online for free. Reduce image file size while keeping great quality. Fast, secure, and private — your images never leave your browser.",

  keywords: [
    "image compressor",
    "compress image online",
    "free image compressor",
    "compress JPG",
    "compress PNG",
    "compress WebP",
    "reduce image size",
    "image size reducer",
  ],

  verification: {
    google: "x7oQH3WSL0SGRYynKx4jh9AVevuOEO81LQSPY-XDUKc",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Compressify",
    },
  ],

  creator: "Compressify",

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Compressify — Free Image Compressor Online",
    description:
      "Compress JPG, PNG, and WebP images online for free. Fast, secure, and private.",
    siteName: "Compressify",
  },

  twitter: {
    card: "summary_large_image",
    title: "Compressify — Free Image Compressor Online",
    description:
      "Compress JPG, PNG, and WebP images online for free. Fast, secure, and private.",
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
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}