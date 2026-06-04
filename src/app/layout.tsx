import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dreamcaps.com.ar";

export const metadata: Metadata = {
  title: "Dreamcaps",
  description:
    "Gorras New Era originales. Envíos a todo el país. Comprá tu gorra directamente por WhatsApp. Dreamcaps San Luis.",
  keywords: [
    "gorras",
    "new era",
    "dreamcaps",
    "gorras originales",
    "san luis",
    "argentina",
    "whatsapp",
    "envíos",
  ],
  openGraph: {
    title: "Dreamcaps | Gorras New Era en San Luis",
    description:
      "Gorras New Era originales. Envíos a todo el país. Comprá tu gorra directamente por WhatsApp.",
    url: siteUrl,
    siteName: "Dreamcaps",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/group-photo.webp`,
        width: 1200,
        height: 630,
        alt: "Colección de gorras Dreamcaps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamcaps | Gorras New Era",
    description:
      "Gorras New Era originales. Envíos a todo el país.",
    images: [`${siteUrl}/images/group-photo.webp`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}