import { cars } from "./db"

export interface StripeProduct {
  id: string
  name: string
  description: string
  priceInCents: number
  carData: (typeof cars)[0]
}

// Convert car database to Stripe product format
export const PRODUCTS: StripeProduct[] = cars.map((car) => ({
  id: `car-${car.id}`,
  name: `${car.brand} ${car.model}`,
  description: `${car.year} ${car.fuel} - ${car.km}km`,
  priceInCents: car.price * 100, // Convert EUR to cents
  carData: car,
}))

export function getProductById(productId: string): StripeProduct | undefined {
  return PRODUCTS.find((p) => p.id === productId)
}
