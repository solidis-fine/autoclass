"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import { getLanguage, type Language } from "@/lib/i18n"

export function Footer() {
  const [lang, setLang] = useState<Language>("en")

  useEffect(() => {
    setLang(getLanguage())
  }, [])

  const footerLinks = {
    en: { home: "Home", catalog: "Catalog", about: "About" },
    fr: { home: "Accueil", catalog: "Catalogue", about: "À propos" },
    it: { home: "Home", catalog: "Catalogo", about: "Chi Siamo" },
    de: { home: "Startseite", catalog: "Katalog", about: "Über uns" },
  }

  const socialLabel = {
    en: "Follow Us",
    fr: "Suivez-nous",
    it: "Seguici",
    de: "Folgen Sie uns",
  }

  const rights = {
    en: "All rights reserved.",
    fr: "Tous droits réservés.",
    it: "Tutti i diritti riservati.",
    de: "Alle Rechte vorbehalten.",
  }

  return (
    <footer className="bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">AutoClass.it</h3>
            <p className="text-sm opacity-90">
              {lang === "de"
                ? "Eleganz, Sicherheit und fairer Preis auf vier Rädern."
                : lang === "it"
                  ? "L'eleganza, la sicurezza e il prezzo giusto su quattro ruote."
                  : lang === "fr"
                    ? "L'élégance, la sécurité et le juste prix sur quatre roues."
                    : "Elegance, safety and fair price on four wheels."}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">
              {lang === "en"
                ? "Navigation"
                : lang === "fr"
                  ? "Navigation"
                  : lang === "de"
                    ? "Navigation"
                    : "Navigazione"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-75 hover:opacity-100 transition">
                  {footerLinks[lang].home}
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="opacity-75 hover:opacity-100 transition">
                  {footerLinks[lang].catalog}
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-75 hover:opacity-100 transition">
                  {footerLinks[lang].about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{lang === "de" ? "Kontakt" : "Contact"}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +33 7 80 90 21 63
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> auto-class1outlook.fr
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />{" "}
                {lang === "de" ? "Portugal" : lang === "fr" ? "Portugal" : lang === "it" ? "Portogallo" : "Portugal"}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{socialLabel[lang]}</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 AutoClass.it. {rights[lang]}</p>
        </div>
      </div>
    </footer>
  )
}
