"use client"

import { useState, useEffect } from "react"
import { getLanguage, setLanguage, t, type Language } from "@/lib/i18n"

export function useLanguage() {
  const [lang, setLangState] = useState<Language>("en")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const detectedLang = getLanguage()
    setLangState(detectedLang)
    setIsLoaded(true)
  }, [])

  const changeLang = (newLang: Language) => {
    setLangState(newLang)
    setLanguage(newLang)
  }

  return { lang, isLoaded, t: (key: string) => t(key, lang), changeLang }
}
