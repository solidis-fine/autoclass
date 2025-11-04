"use client"

import { useCart } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Checkout } from "@/components/checkout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CheckoutPage() {
  const { cartItems } = useCart()

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Panier vide</h1>
              <p className="text-muted-foreground mb-8">
                Veuillez ajouter des voitures à votre panier avant de procéder au paiement.
              </p>
              <Link href="/catalog">
                <Button>Retour au catalogue</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <Link href="/cart" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-5 h-5" />
            Retour au panier
          </Link>

          <h1 className="text-4xl font-bold mb-12">Paiement sécurisé</h1>

          {/* Checkout Form */}
          <div className="max-w-3xl mx-auto">
            <Checkout cartItems={cartItems.map((item) => ({ id: item.id, quantity: item.quantity }))} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
