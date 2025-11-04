"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function Hero() {
  const { lang, t, isLoaded } = useLanguage()

  if (!isLoaded) return null

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-primary/5 via-background to-background flex items-center pt-16">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
              {lang === "de"
                ? "Dein zuverlässiges Auto zum"
                : lang === "it"
                  ? "La tua auto affidabile a un"
                  : lang === "fr"
                    ? "Votre voiture fiable, à"
                    : "Your reliable car, at the"}{" "}
              <span className="text-primary">
                {lang === "de"
                  ? "fairen Preis"
                  : lang === "it"
                    ? "prezzo equo"
                    : lang === "fr"
                      ? "prix juste"
                      : "right price"}
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t("hero_description")}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition transform hover:scale-105"
              >
                {t("hero_cta")} <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="#featured"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                {t("featured_section")}
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="flex gap-8 flex-wrap">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">
                  {lang === "de"
                    ? "Zufriedene Kunden"
                    : lang === "it"
                      ? "Clienti soddisfatti"
                      : lang === "fr"
                        ? "Clients satisfaits"
                        : "Happy Customers"}
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <p className="text-sm text-muted-foreground">
                  {lang === "de"
                    ? "Autos verkauft"
                    : lang === "it"
                      ? "Auto vendute"
                      : lang === "fr"
                        ? "Voitures vendues"
                        : "Cars Sold"}
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.7/5</div>
                <p className="text-sm text-muted-foreground">
                  {lang === "de"
                    ? "Durchschnittliche Bewertung"
                    : lang === "it"
                      ? "Valutazione media"
                      : lang === "fr"
                        ? "Évaluation moyenne"
                        : "Average Rating"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative h-96 sm:h-[500px] animate-fade-in-right">
            <div className="relative w-full h-full animate-gentle-float">
              <img
                src="/luxury-car-dealership-hero.jpg"
                alt="AutoClass Featured Car"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce-slow">
              <p className="text-sm font-semibold text-primary">
                {lang === "de"
                  ? "Neue Ankunft"
                  : lang === "it"
                    ? "Nuovo arrivo"
                    : lang === "fr"
                      ? "Nouvelle arrivée"
                      : "New Arrival"}
              </p>
              <p className="text-xs text-muted-foreground">BMW 320i - 16 500€</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
