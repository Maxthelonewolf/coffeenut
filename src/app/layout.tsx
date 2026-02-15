import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Coffee & Donut TV - Epic Stories. Endless Worlds.",
  description: "A cozy cup of entertainment - brewed daily. Stream 9,500+ Live Channels, 125,000+ Movies & Series, and global content that never sleeps.",
  keywords: "streaming, IPTV, live TV, movies, series, entertainment",
  icons: {
    icon: "https://ext.same-assets.com/2445618519/4009277168.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
