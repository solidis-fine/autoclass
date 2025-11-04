"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
  id: number
  brand: string
  model: string
  price: number
  year: number
  quantity: number
  image: string
}

export interface FavoritesItem {
  id: number
  brand: string
  model: string
  price: number
  year: number
  image: string
}

interface CartContextType {
  cartItems: CartItem[]
  favorites: FavoritesItem[]
  addToCart: (item: Omit<CartItem, "quantity">, quantity: number) => void
  removeFromCart: (id: number) => void
  updateCartQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  addToFavorites: (item: FavoritesItem) => void
  removeFromFavorites: (id: number) => void
  isFavorite: (id: number) => boolean
  cartTotal: number
  cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<FavoritesItem[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    const savedFavorites = localStorage.getItem("favorites")

    if (savedCart) setCartItems(JSON.parse(savedCart))
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites))
    setIsHydrated(true)
  }, [])

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }, [cartItems, isHydrated])

  // Save to localStorage whenever favorites change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("favorites", JSON.stringify(favorites))
    }
  }, [favorites, isHydrated])

  const addToCart = (item: Omit<CartItem, "quantity">, quantity: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((p) => p.id === item.id)
      if (existingItem) {
        return prev.map((p) => (p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p))
      }
      return [...prev, { ...item, quantity }]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const addToFavorites = (item: FavoritesItem) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === item.id)
      if (exists) return prev
      return [...prev, item]
    })
  }

  const removeFromFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id))
  }

  const isFavorite = (id: number) => {
    return favorites.some((item) => item.id === id)
  }

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        favorites,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
