"use server"

import { stripe } from "@/lib/stripe"
import { getProductById } from "@/lib/products"

export async function startCheckoutSession(cartItems: Array<{ id: number; quantity: number }>) {
  if (cartItems.length === 0) {
    throw new Error("Cart is empty")
  }

  const lineItems = cartItems.map((item) => {
    const product = getProductById(`car-${item.id}`)
    if (!product) {
      throw new Error(`Product with id "car-${item.id}" not found`)
    }

    return {
      price_data: {
        currency: "eur",
        product_data: {
          name: product.name,
          description: product.description,
        },
        unit_amount: product.priceInCents,
      },
      quantity: item.quantity,
    }
  })

  // Create Checkout Session
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: lineItems,
    mode: "payment",
  })

  return session.client_secret
}
