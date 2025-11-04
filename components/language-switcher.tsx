"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { getLanguage, setLanguage, type Language } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<Language>("en")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Get language on client mount to avoid hydration mismatch
    setCurrentLang(getLanguage())
  }, [])

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ]

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setCurrentLang(lang)
    setIsOpen(false)
    window.location.reload()
  }

  const active = languages.find((l) => l.code === currentLang)

  return (
    <div className="relative">
      <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
        <Globe className="w-4 h-4" />
        <span>{active?.flag}</span>
        <span className="hidden sm:inline">{active?.name}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-muted transition ${
                currentLang === lang.code ? "bg-primary/10 text-primary" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
              {currentLang === lang.code && <span className="ml-auto text-xs text-primary">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
