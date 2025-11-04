"use client"

import type React from "react"

import { useState } from "react"
import type { Car } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AdminCarFormProps {
  car?: Car | null
  onSubmit: (car: Car | Omit<Car, "id">) => void
  onCancel: () => void
}

export function AdminCarForm({ car, onSubmit, onCancel }: AdminCarFormProps) {
  const [formData, setFormData] = useState(
    car || {
      brand: "",
      model: "",
      price: 0,
      year: new Date().getFullYear(),
      fuel: "Petrol",
      km: 0,
      image: "",
      rating: 4.5,
      reviews: 0,
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: ["price", "year", "km", "rating", "reviews"].includes(name) ? Number(value) : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if ("id" in formData) {
      onSubmit(formData as Car)
    } else {
      onSubmit(formData as Omit<Car, "id">)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Marque</label>
          <Input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Modèle</label>
          <Input type="text" name="model" value={formData.model} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Prix (€)</label>
          <Input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Année</label>
          <Input type="number" name="year" value={formData.year} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Carburant</label>
          <select
            name="fuel"
            value={formData.fuel}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background"
          >
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Hybrid</option>
            <option>Electric</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Kilométrage</label>
          <Input type="number" name="km" value={formData.km} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">URL Image</label>
          <Input type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Évaluation</label>
          <Input
            type="number"
            step="0.1"
            min="0"
            max="5"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Avis</label>
          <Input type="number" name="reviews" value={formData.reviews} onChange={handleChange} required />
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          {car ? "Modifier" : "Ajouter"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
          Annuler
        </Button>
      </div>
    </form>
  )
}
