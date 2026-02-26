import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.schreinerei-duerr.de"),
  title: {
    default: "Schreinerei Dürr Talheim | Meisterbetrieb für Maßmöbel & Innenausbau",
    template: "%s | Schreinerei Dürr Talheim",
  },
  description:
    "Schreinerei Stefan Dürr in Talheim bei Heilbronn – Ihr Schreinermeister für individuelle Möbel, Küchen nach Maß, Innenausbau & Corian®-Verarbeitung. Nachhaltig & regional.",
  keywords: [
    "Schreinerei Talheim",
    "Schreiner Heilbronn",
    "Maßmöbel Heilbronn",
    "Küchen nach Maß Talheim",
    "Innenausbau Heilbronn-Franken",
    "Schreinerei Dürr",
    "Schreinermeister Talheim",
    "Corian Waschtisch",
    "Möbel nach Maß",
    "Barrierefreier Umbau Heilbronn",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.schreinerei-duerr.de",
    siteName: "Schreinerei Stefan Dürr",
    title: "Schreinerei Dürr Talheim | Meisterbetrieb für Maßmöbel & Innenausbau",
    description:
      "Individuelle Möbel & Innenausbau vom Schreinermeister in Talheim bei Heilbronn. Nachhaltig, regional, einzigartig.",
    images: [
      {
        url: "https://www.schreinerei-duerr.de/.cm4all/uproc.php/0/.Bild_K%C3%BCche_1.png/picture-1200",
        width: 1200,
        height: 630,
        alt: "Individuelle Küche von Schreinerei Dürr",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.schreinerei-duerr.de",
  },
};

function JsonLd() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": ["Carpenter", "LocalBusiness"],
      "@id": "https://www.schreinerei-duerr.de/#business",
      name: "Schreinerei Stefan Dürr",
      alternateName: "Schreinerei Dürr Talheim",
      description:
        "Meisterbetrieb für individuelle Möbel, Küchen nach Maß, Innenausbau und Corian®-Verarbeitung in Talheim bei Heilbronn.",
      url: "https://www.schreinerei-duerr.de",
      telephone: "+4915782885841",
      email: "stefan@schreinerei-duerr.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Frankenstraße 31",
        addressLocality: "Talheim",
        postalCode: "74388",
        addressCountry: "DE",
        addressRegion: "Baden-Württemberg",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.0836,
        longitude: 9.1903,
      },
      areaServed: [
        { "@type": "City", name: "Talheim" },
        { "@type": "City", name: "Heilbronn" },
        { "@type": "AdministrativeArea", name: "Heilbronn-Franken" },
      ],
      founder: {
        "@type": "Person",
        name: "Stefan Dürr",
        jobTitle: "Schreinermeister",
      },
      vatID: "DE319938893",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Meisterprüfung",
        name: "Schreinermeister",
      },
      knowsAbout: [
        "Möbelbau",
        "Innenausbau",
        "Küchenbau",
        "Corian-Verarbeitung",
        "Barrierefreier Umbau",
        "Gartengestaltung mit Holz",
      ],
      image:
        "https://www.schreinerei-duerr.de/.cm4all/uproc.php/0/.logo_duerr.png/picture-1200",
      sameAs: [
        "https://www.instagram.com/schreinereiduerr/",
        "https://www.facebook.com/SchreinereiDuerr/",
      ],
      priceRange: "$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.schreinerei-duerr.de/#organization",
      name: "Schreinerei Stefan Dürr",
      url: "https://www.schreinerei-duerr.de",
      logo: "https://www.schreinerei-duerr.de/.cm4all/uproc.php/0/.logo_duerr.png/picture-1200",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+4915782885841",
        contactType: "customer service",
        availableLanguage: "German",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <JsonLd />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
