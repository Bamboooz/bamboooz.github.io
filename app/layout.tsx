import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_Mono } from "next/font/google";

import "./styles.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--ibm-plex-mono",
});

const notoSansMono = Noto_Sans_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--noto-sans-mono",
});

export const metadata: Metadata = {
  title: "Bamboooz",
  description: "Bamboooz's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${notoSansMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
