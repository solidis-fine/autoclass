"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, ArrowLeft, ShoppingCart } from "lucide-react"

export default function FavoritesPage() {
  const { favorites, removeFromFavorites, addToCart } = useCart()

  const handleAddToCart = (item: any) => {
    addToCart(
      {
        id: item.id,
        brand: item.brand,
        model: item.model,
        price: item.price,
        year: item.year,
        image: item.image,
      },
      1,
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <Link href="/catalog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-5 h-5" />
            Retour au catalogue
          </Link>

          <h1 className="text-5xl font-bold mb-12">Mes Favoris</h1>

          {favorites.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h2 className="text-2xl font-bold mb-4">Aucun favori pour le moment</h2>
              <p className="text-muted-foreground mb-8">Explorez notre catalogue et ajoutez vos voitures préférées</p>
              <Link href="/catalog">
                <Button>Voir le catalogue</Button>
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {favorites.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row gap-6 p-6">
                        {/* Image */}
                        <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                          <img
                            src={car.image || "/placeholder.svg"}
                            alt={`${car.brand} ${car.model}`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">
                              {car.brand} {car.model}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">{car.year}</p>
                            <p className="text-3xl font-bold text-primary mb-6">{car.price.toLocaleString()}€</p>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Link href={`/car/${car.id}`} className="flex-1">
                              <Button variant="outline" className="w-full bg-transparent">
                                Voir les détails
                              </Button>
                            </Link>
                            <Button
                              onClick={() => handleAddToCart(car)}
                              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Ajouter au panier
                            </Button>
                            <button
                              onClick={() => removeFromFavorites(car.id)}
                              className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition"
                            >
                              <Heart className="w-5 h-5 fill-current" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
