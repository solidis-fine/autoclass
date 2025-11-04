"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { LanguageSwitcher } from "./language-switcher"
import { getLanguage, type Language } from "@/lib/i18n"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [lang, setLang] = useState<Language>("en")
  const { cartCount, favorites } = useCart()

  useEffect(() => {
    setLang(getLanguage())
  }, [])

  const navLinks = {
    en: { home: "Home", catalog: "Catalog", about: "About", contact: "Contact" },
    fr: { home: "Accueil", catalog: "Catalogue", about: "À propos", contact: "Contact" },
    it: { home: "Home", catalog: "Catalogo", about: "Chi Siamo", contact: "Contatti" },
    de: { home: "Startseite", catalog: "Katalog", about: "Über uns", contact: "Kontakt" },
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:shadow-lg transition">
              <span className="text-sm font-bold text-primary-foreground">A</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AutoClass.it
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition">
              {navLinks[lang].home}
            </Link>
            <Link href="/catalog" className="text-sm font-medium hover:text-primary transition">
              {navLinks[lang].catalog}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition">
              {navLinks[lang].about}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition">
              {navLinks[lang].contact}
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/favorites" className="p-2 hover:bg-muted rounded-lg transition relative">
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 bg-accent text-accent-foreground w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link href="/cart" className="p-2 hover:bg-muted rounded-lg transition relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-accent text-accent-foreground w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="md:hidden p-2 hover:bg-muted rounded-lg transition" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block py-2 text-sm font-medium hover:text-primary">
              {navLinks[lang].home}
            </Link>
            <Link href="/catalog" className="block py-2 text-sm font-medium hover:text-primary">
              {navLinks[lang].catalog}
            </Link>
            <Link href="/about" className="block py-2 text-sm font-medium hover:text-primary">
              {navLinks[lang].about}
            </Link>
            <Link href="/contact" className="block py-2 text-sm font-medium hover:text-primary">
              {navLinks[lang].contact}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
