import type { Metadata } from "next";
import { Instrument_Serif, Barlow } from "next/font/google";
import Script from "next/script";
import CalendlyWidget from "./components/CalendlyWidget";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const BASE_URL = "https://foruagency.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "For U Agency — Sites web, Outils & IA pour entrepreneurs",
    template: "%s | For U Agency",
  },
  description:
    "For U Agency crée votre site web sur mesure, intègre vos outils business (Calendly, Stripe, HubSpot) et automatise vos processus grâce à l'intelligence artificielle. Lyon & France entière.",
  keywords: [
    "agence web Lyon",
    "création site web",
    "agents IA",
    "automatisation business",
    "intégrations CRM",
    "site web sur mesure",
    "For U Agency",
  ],
  authors: [{ name: "For U Agency", url: BASE_URL }],
  creator: "For U Agency",
  publisher: "For U Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "For U Agency",
    title: "For U Agency — Sites web, Outils & IA pour entrepreneurs",
    description:
      "Design professionnel. Outils connectés. IA intégrée. Votre présence en ligne, pensée pour convertir.",
    images: [{ url: "/icon.png", width: 1024, height: 1024, alt: "For U Agency" }],
  },
  twitter: {
    card: "summary",
    title: "For U Agency — Sites web, Outils & IA",
    description:
      "Design professionnel. Outils connectés. IA intégrée. Votre présence en ligne, pensée pour convertir.",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "For U Agency",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  image: `${BASE_URL}/icon.png`,
  description:
    "Agence digitale spécialisée en création de sites web, intégrations business et agents IA pour les entrepreneurs.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contact@foruagency.com",
    availableLanguage: "French",
  },
  sameAs: ["https://wa.me/33665970786"],
  serviceArea: {
    "@type": "Country",
    name: "France",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services For U Agency",
    itemListElement: [
      { "@type": "Offer", name: "Création de site web", url: `${BASE_URL}/services/creation-site-web` },
      { "@type": "Offer", name: "Intégrations business", url: `${BASE_URL}/services/integrations-business` },
      { "@type": "Offer", name: "Agents IA", url: `${BASE_URL}/services/agents-ia` },
      { "@type": "Offer", name: "Suivi & Optimisation", url: `${BASE_URL}/services/suivi-optimisation` },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${instrumentSerif.variable} ${barlow.variable}`}
    >
      <body className="antialiased bg-white">
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CalendlyWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
