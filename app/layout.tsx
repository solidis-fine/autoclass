import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "AutoClass.it - Voitures d'occasion fiables à prix justes",
  description:
    "Achetez votre voiture d'occasion fiable et certifiée sur AutoClass.it. Prix justes, transparence garantie, 15 ans d'expertise. Plus de 5000 voitures vendues.",
  keywords: ["voitures d'occasion", "achat voiture", "véhicules certifiés", "prix juste", "Paris", "France"],
  authors: [{ name: "AutoClass.it" }],
  creator: "AutoClass.it",
  publisher: "AutoClass.it",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: "https://autoclass.it",
  },
  openGraph: {
    title: "AutoClass.it - Voitures d'occasion fiables",
    description:
      "Découvrez notre sélection de plus de 100 véhicules d'occasion certifiés. Achat facile, paiement sécurisé, livraison rapide.",
    type: "website",
    url: "https://autoclass.it",
    siteName: "AutoClass.it",
    locale: "fr_FR",
    images: [
      {
        url: "https://autoclass.it/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AutoClass.it - Voitures d'occasion de qualité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoClass.it - Voitures d'occasion",
    description: "Achetez votre voiture fiable à prix juste",
    images: ["https://autoclass.it/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AutoClass.it",
              url: "https://autoclass.it",
              logo: "https://autoclass.it/logo.png",
              description: "Vente de voitures d'occasion fiables et certifiées",
              foundingDate: "2009",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Avenue de l'Automobile",
                addressLocality: "Paris",
                postalCode: "75001",
                addressCountry: "FR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+33-1-2345-6789",
                email: "contact@autoclass.it",
              },
              sameAs: [
                "https://www.facebook.com/autoclass.it",
                "https://www.instagram.com/autoclass.it",
                "https://www.linkedin.com/company/autoclass.it",
              ],
              areaServed: "FR",
              priceRange: "€6000 - €30000",
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
