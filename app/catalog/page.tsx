"use client"

import { useState, useMemo } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, Filter } from "lucide-react"
import { cars } from "@/lib/db"
import Link from "next/link"

export default function Catalog() {
  const { lang, t, isLoaded } = useLanguage()
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 30000,
    fuel: "",
    brand: "",
  })
  const [sortBy, setSortBy] = useState("featured")

  const brands = Array.from(new Set(cars.map((car) => car.brand))).sort()

  const filteredCars = useMemo(() => {
    const result = cars.filter((car) => {
      return (
        car.price >= filters.priceMin &&
        car.price <= filters.priceMax &&
        (filters.fuel === "" || car.fuel === filters.fuel) &&
        (filters.brand === "" || car.brand === filters.brand)
      )
    })

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        result.sort((a, b) => b.year - a.year)
        break
      default:
        result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [filters, sortBy])

  if (!isLoaded) return null

  const fuelOptions = [
    {
      value: "Petrol",
      label: lang === "de" ? "Benzin" : lang === "it" ? "Benzina" : lang === "fr" ? "Essence" : "Petrol",
    },
    { value: "Diesel", label: "Diesel" },
    {
      value: "Hybrid",
      label: lang === "de" ? "Hybrid" : lang === "it" ? "Ibrido" : lang === "fr" ? "Hybride" : "Hybrid",
    },
  ]

  const sortOptions = [
    {
      value: "featured",
      label: lang === "de" ? "Empfohlen" : lang === "it" ? "In evidenza" : lang === "fr" ? "En vedette" : "Featured",
    },
    {
      value: "price-low",
      label:
        lang === "de"
          ? "Preis: Niedrig zu Hoch"
          : lang === "it"
            ? "Prezzo: Basso a Alto"
            : lang === "fr"
              ? "Prix: Bas au haut"
              : "Price: Low to High",
    },
    {
      value: "price-high",
      label:
        lang === "de"
          ? "Preis: Hoch zu Niedrig"
          : lang === "it"
            ? "Prezzo: Alto a Basso"
            : lang === "fr"
              ? "Prix: Haut au bas"
              : "Price: High to Low",
    },
    {
      value: "rating",
      label: lang === "de" ? "Bewertung" : lang === "it" ? "Valutazione" : lang === "fr" ? "Évaluation" : "Rating",
    },
    {
      value: "newest",
      label: lang === "de" ? "Neuste" : lang === "it" ? "Più recente" : lang === "fr" ? "Plus récent" : "Newest",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-2">{t("catalog")}</h1>
            <p className="text-xl text-muted-foreground">
              {filteredCars.length}{" "}
              {lang === "de" ? "Auto" : lang === "it" ? "auto" : lang === "fr" ? "voiture" : "car"}
              {filteredCars.length !== 1 ? (lang === "de" ? "s" : lang === "it" ? "s" : lang === "fr" ? "s" : "s") : ""}{" "}
              {lang === "de" ? "gefunden" : lang === "it" ? "trovata" : lang === "fr" ? "trouvée" : "found"}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:sticky lg:top-24 h-fit space-y-6 animate-fade-in-left">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5" />
                  <h2 className="font-bold text-lg">{t("filter")}</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t("price")}: {filters.priceMin.toLocaleString()}€ - {filters.priceMax.toLocaleString()}€
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="30000"
                      value={filters.priceMax}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          priceMax: Number.parseInt(e.target.value),
                        })
                      }
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">{t("brand")}</label>
                    <select
                      value={filters.brand}
                      onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                    >
                      <option value="">
                        {lang === "de"
                          ? "Alle Marken"
                          : lang === "it"
                            ? "Tutti i marchi"
                            : lang === "fr"
                              ? "Toutes les marques"
                              : "All Brands"}
                      </option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">{t("fuel")}</label>
                    <select
                      value={filters.fuel}
                      onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                    >
                      <option value="">
                        {lang === "de"
                          ? "Alle Kraftstoffe"
                          : lang === "it"
                            ? "Tutti i carburanti"
                            : lang === "fr"
                              ? "Tous les carburants"
                              : "All Fuels"}
                      </option>
                      {fuelOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() =>
                      setFilters({
                        priceMin: 0,
                        priceMax: 30000,
                        fuel: "",
                        brand: "",
                      })
                    }
                  >
                    {lang === "de"
                      ? "Zurücksetzen"
                      : lang === "it"
                        ? "Ripristina"
                        : lang === "fr"
                          ? "Réinitialiser"
                          : "Reset"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Cars Grid */}
            <div className="lg:col-span-3">
              {/* Sort */}
              <div className="mb-6 animate-fade-in">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-border rounded-lg text-sm font-medium"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cars */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredCars.length > 0 ? (
                  filteredCars.map((car, index) => (
                    <div key={car.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                        <CardContent className="p-0">
                          <div className="relative h-48 overflow-hidden bg-muted">
                            <img
                              src={car.image || "/placeholder.svg"}
                              alt={`${car.brand} ${car.model}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <button className="absolute top-4 right-4 p-2 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition">
                              <Heart className="w-5 h-5" />
                            </button>
                            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                              {car.year}
                            </div>
                          </div>

                          <div className="p-4 space-y-3">
                            <div>
                              <h3 className="font-bold text-lg">
                                {car.brand} {car.model}
                              </h3>
                              <div className="flex items-center gap-1 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(car.rating) ? "fill-accent text-accent" : "text-muted"}`}
                                  />
                                ))}
                                <span className="text-xs text-muted-foreground ml-2">({car.reviews})</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                              <div>
                                {t("fuel")}: {car.fuel}
                              </div>
                              <div>
                                {t("km")}: {car.km.toLocaleString()}
                              </div>
                            </div>

                            <div className="flex items-baseline justify-between pt-3 border-t border-border">
                              <span className="text-2xl font-bold text-primary">{car.price.toLocaleString()}€</span>
                              <Link href={`/car/${car.id}`}>
                                <Button size="sm" variant="default">
                                  {t("details")}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 animate-fade-in">
                    <p className="text-lg text-muted-foreground">{t("no_results")}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
