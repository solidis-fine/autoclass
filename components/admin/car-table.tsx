"use client"

import type { Car } from "@/lib/db"
import { Edit2, Trash2 } from "lucide-react"
import { motion } from "framer-motion"

interface AdminCarTableProps {
  cars: Car[]
  onEdit: (car: Car) => void
  onDelete: (id: number) => void
}

export function AdminCarTable({ cars, onEdit, onDelete }: AdminCarTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-4 font-semibold">Voiture</th>
            <th className="text-left py-4 px-4 font-semibold">Année</th>
            <th className="text-left py-4 px-4 font-semibold">Prix</th>
            <th className="text-left py-4 px-4 font-semibold">Carburant</th>
            <th className="text-left py-4 px-4 font-semibold">Kilométrage</th>
            <th className="text-left py-4 px-4 font-semibold">Évaluation</th>
            <th className="text-left py-4 px-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <motion.tr
              key={car.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-border hover:bg-muted/50 transition"
            >
              <td className="py-4 px-4">
                <div className="font-semibold">
                  {car.brand} {car.model}
                </div>
                <div className="text-sm text-muted-foreground">{car.reviews} avis</div>
              </td>
              <td className="py-4 px-4">{car.year}</td>
              <td className="py-4 px-4 font-semibold text-primary">{car.price.toLocaleString()}€</td>
              <td className="py-4 px-4">{car.fuel}</td>
              <td className="py-4 px-4">{car.km.toLocaleString()} km</td>
              <td className="py-4 px-4">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded">{car.rating}★</span>
              </td>
              <td className="py-4 px-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(car)}
                    className="p-2 text-primary hover:bg-primary/10 rounded transition"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(car.id)}
                    className="p-2 text-destructive hover:bg-destructive/10 rounded transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
