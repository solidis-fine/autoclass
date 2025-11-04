"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, MapPin, Fuel, Gauge, Calendar, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { cars } from "@/lib/db"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useCart } from "@/lib/cart-context"

export default function CarDetail() {
  const { lang, t, isLoaded } = useLanguage()
  const params = useParams()
  const carId = Number.parseInt(params.id as string)
  const car = cars.find((c) => c.id === carId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart, addToFavorites, removeFromFavorites, isFavorite } = useCart()
  const [favorited, setFavorited] = useState(isFavorite(carId))

  if (!isLoaded) return null

  if (!car) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">
              {lang === "de"
                ? "Auto nicht gefunden"
                : lang === "it"
                  ? "Auto non trovata"
                  : lang === "fr"
                    ? "Voiture non trouvée"
                    : "Car not found"}
            </h1>
            <Link href="/catalog">
              <Button>{t("catalog")}</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const images = [car.image, car.image, car.image, car.image]
  const nextImage = () => setSelectedImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  const recommended = cars.filter((c) => c.id !== car.id && c.brand === car.brand).slice(0, 3)

  const handleAddToCart = () => {
    addToCart(
      {
        id: car.id,
        brand: car.brand,
        model: car.model,
        price: car.price,
        year: car.year,
        image: car.image,
      },
      quantity,
    )
  }

  const handleToggleFavorite = () => {
    if (favorited) {
      removeFromFavorites(car.id)
    } else {
      addToFavorites({
        id: car.id,
        brand: car.brand,
        model: car.model,
        price: car.price,
        year: car.year,
        image: car.image,
      })
    }
    setFavorited(!favorited)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/catalog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ChevronLeft className="w-5 h-5" />
            {lang === "de"
              ? "Zurück zum Katalog"
              : lang === "it"
                ? "Torna al catalogo"
                : lang === "fr"
                  ? "Retour au catalogue"
                  : "Back to Catalog"}
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Image Section */}
            <div className="lg:col-span-2 animate-fade-in-left">
              <Card className="overflow-hidden mb-6">
                <CardContent className="p-0 relative h-96 sm:h-[500px] bg-muted flex items-center justify-center group">
                  <img
                    src={images[selectedImage] || "/placeholder.svg"}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                    {car.year}
                  </div>

                  <button
                    onClick={handleToggleFavorite}
                    className="absolute top-4 right-4 p-3 bg-background/80 hover:bg-primary hover:text-primary-foreground rounded-full transition"
                  >
                    <Heart className={`w-6 h-6 ${favorited ? "fill-current" : ""}`} />
                  </button>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    {lang === "de"
                      ? "Spezifikationen"
                      : lang === "it"
                        ? "Specifiche"
                        : lang === "fr"
                          ? "Spécifications"
                          : "Specifications"}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <Fuel className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {lang === "de"
                            ? "Kraftstofftyp"
                            : lang === "it"
                              ? "Tipo di carburante"
                              : lang === "fr"
                                ? "Type de carburant"
                                : "Fuel Type"}
                        </p>
                        <p className="font-semibold">{car.fuel}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Gauge className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {lang === "de"
                            ? "Kilometerstand"
                            : lang === "it"
                              ? "Chilometraggio"
                              : lang === "fr"
                                ? "Kilométrage"
                                : "Mileage"}
                        </p>
                        <p className="font-semibold">{car.km.toLocaleString()} km</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t("year")}</p>
                        <p className="font-semibold">{car.year}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {lang === "de"
                            ? "Standort"
                            : lang === "it"
                              ? "Posizione"
                              : lang === "fr"
                                ? "Localisation"
                                : "Location"}
                        </p>
                        <p className="font-semibold">
                          {lang === "de"
                            ? "Portugal"
                            : lang === "it"
                              ? "Portogallo"
                              : lang === "fr"
                                ? "Portugal"
                                : "Portugal"}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 h-fit space-y-6 animate-fade-in-right">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  {car.brand} {car.model}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(car.rating) ? "fill-accent text-accent" : "text-muted"}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground">
                    ({car.reviews}{" "}
                    {lang === "de" ? "Bewertungen" : lang === "it" ? "recensioni" : lang === "fr" ? "avis" : "reviews"})
                  </span>
                </div>
              </div>

              {/* Price Card */}
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{t("price")}</p>
                  <p className="text-4xl font-bold text-primary mb-6">{car.price.toLocaleString()}€</p>

                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        {lang === "de" ? "Menge" : lang === "it" ? "Quantità" : lang === "fr" ? "Quantité" : "Quantity"}
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-2 border border-border rounded-lg hover:bg-muted"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                          className="flex-1 px-3 py-2 border border-border rounded-lg text-center"
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-2 border border-border rounded-lg hover:bg-muted"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <Button
                      onClick={handleAddToCart}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {t("add_to_cart")}
                    </Button>

                    <Button
                      onClick={handleToggleFavorite}
                      variant="outline"
                      className="w-full py-6 text-lg bg-transparent"
                    >
                      <Heart className={`w-5 h-5 mr-2 ${favorited ? "fill-current" : ""}`} />
                      {favorited ? t("remove_from_favorites") : t("add_to_favorites")}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">
                    {lang === "de"
                      ? "Fragen?"
                      : lang === "it"
                        ? "Domande?"
                        : lang === "fr"
                          ? "Questions?"
                          : "Questions?"}
                  </h3>
                  <Button variant="outline" className="w-full mb-2 bg-transparent">
                    {lang === "de"
                      ? "Verkäufer kontaktieren"
                      : lang === "it"
                        ? "Contatta il venditore"
                        : lang === "fr"
                          ? "Contacter le vendeur"
                          : "Contact Seller"}
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    {lang === "de"
                      ? "Termin vereinbaren"
                      : lang === "it"
                        ? "Pianifica una visita"
                        : lang === "fr"
                          ? "Programmer une visite"
                          : "Schedule Visit"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recommended Cars */}
          {recommended.length > 0 && (
            <div className="mt-20 animate-fade-in">
              <h2 className="text-3xl font-bold mb-8">
                {lang === "de"
                  ? "Ähnliche Autos"
                  : lang === "it"
                    ? "Auto simili"
                    : lang === "fr"
                      ? "Voitures similaires"
                      : "Similar Cars"}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {recommended.map((recCar) => (
                  <Link key={recCar.id} href={`/car/${recCar.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full cursor-pointer">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden bg-muted">
                          <img
                            src={recCar.image || "/placeholder.svg"}
                            alt={`${recCar.brand} ${recCar.model}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                            {recCar.year}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-2">
                            {recCar.brand} {recCar.model}
                          </h3>
                          <p className="text-2xl font-bold text-primary">{recCar.price.toLocaleString()}€</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
