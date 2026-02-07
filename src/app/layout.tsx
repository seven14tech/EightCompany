import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Eight | Scalable BPO & Process Improvement",
    template: "%s | Eight"
  },
  description: "Eight delivers operational excellence through premium BPO services, 24/7 technical support, and business process transformation. Scale your business with our expert teams.",
  keywords: ["BPO", "Business Process Outsourcing", "Customer Support", "Technical Support", "Lead Generation", "Data Processing", "Business Transformation", "Operational Excellence"],
  authors: [{ name: "Eight Team" }],
  openGraph: {
    title: "Eight | Scalable BPO & Process Improvement",
    description: "Eight delivers operational excellence through premium BPO services and business process transformation.",
    url: "https://eight-bpo.com",
    siteName: "Eight",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eight | Scalable BPO & Process Improvement",
    description: "Scale your business with Eight's premium BPO and process improvement solutions.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Eight",
              "description": "Premium BPO and Business Process Improvement services.",
              "url": "https://eight-bpo.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service"
              }
            })
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
