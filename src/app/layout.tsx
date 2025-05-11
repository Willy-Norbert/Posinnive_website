import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load custom Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.posinnove.com"),
  title: "Posinnove",
  description:
    "Achieve success by leveraging students' expertise to elevate your projects.",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Posinnove",
    description:
      "Achieve success by leveraging students' expertise to elevate your projects.",
    images: ["/og_image.jpg"],
    url: "https://www.posinnove.com",
    siteName: "Posinnove",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Posinnove",
    description:
      "Achieve success by leveraging students' expertise to elevate your projects.",
    images: ["/og_image.jpg"],
  },
};

//  Viewport export is fine
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Root layout component
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
        {children}
      </body>
    </html>
  );
}
