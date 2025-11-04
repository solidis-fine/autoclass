"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import { cars } from "@/lib/db"
import Link from "next/link"

export function FeaturedCars() {
  const { t, isLoaded } = useLanguage()
  const featured = cars.slice(0, 6)

  if (!isLoaded) return null

  return (
    <section id="featured" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("featured_cars")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("hero_description")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((car, index) => (
            <div key={car.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                <CardContent className="p-0">
                  {/* Image Container */}
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

                  {/* Car Info */}
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
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Link href="/catalog">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t("hero_cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
