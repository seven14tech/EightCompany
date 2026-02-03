import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eight - Scaling Business",
  description: "Creative BPO Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
