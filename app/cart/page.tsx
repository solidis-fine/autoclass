"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import { motion } from "framer-motion"
import { Trash2, ShoppingCart, ArrowLeft } from "lucide-react"

export default function CartPage() {
  const { cartItems, removeFromCart, updateCartQuantity, cartTotal, clearCart } = useCart()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <Link href="/catalog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-5 h-5" />
            Continuer vos achats
          </Link>

          <h1 className="text-5xl font-bold mb-12">Votre Panier</h1>

          {cartItems.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
              <p className="text-muted-foreground mb-8">Explorez notre catalogue pour trouver votre voiture parfaite</p>
              <Link href="/catalog">
                <Button>Voir le catalogue</Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          {/* Image */}
                          <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={`${item.brand} ${item.model}`}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Details */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-xl font-bold">
                                  {item.brand} {item.model}
                                </h3>
                                <p className="text-sm text-muted-foreground">{item.year}</p>
                              </div>
                              <p className="text-2xl font-bold text-primary">{item.price.toLocaleString()}€</p>
                            </div>

                            {/* Quantity and Remove */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <label className="text-sm font-medium">Quantité:</label>
                                <div className="flex items-center gap-2 border border-border rounded-lg">
                                  <button
                                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                    className="px-3 py-1 hover:bg-muted transition"
                                  >
                                    -
                                  </button>
                                  <span className="px-4 py-1 font-medium">{item.quantity}</span>
                                  <button
                                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                    className="px-3 py-1 hover:bg-muted transition"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>

                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>

                            {/* Subtotal */}
                            <p className="text-sm text-muted-foreground mt-4">
                              Sous-total: {(item.price * item.quantity).toLocaleString()}€
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:sticky lg:top-24 h-fit"
              >
                <Card className="border-2 border-primary">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Résumé du panier</h2>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Articles ({cartItems.length})</span>
                          <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)} voitures</span>
                        </div>
                        <div className="border-t border-border pt-3">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total:</span>
                            <span className="text-primary">{cartTotal.toLocaleString()}€</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link href="/checkout">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">
                        Procéder au paiement
                      </Button>
                    </Link>

                    <Button variant="outline" className="w-full bg-transparent" onClick={() => clearCart()}>
                      Vider le panier
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
