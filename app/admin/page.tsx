"use client"

import { useState } from "react"
import { cars, type Car } from "@/lib/db"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Plus, LogOut } from "lucide-react"
import { AdminCarForm } from "@/components/admin/car-form"
import { AdminCarTable } from "@/components/admin/car-table"
import Link from "next/link"

export default function AdminPage() {
  const [carList, setCarList] = useState<Car[]>(cars)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingCar, setEditingCar] = useState<Car | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  if (!isLoggedIn) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Accès administrateur</h1>
            <p className="text-muted-foreground mb-8">Veuillez vous connecter pour accéder au panel administrateur.</p>
            <Link href="/">
              <Button>Retour à l'accueil</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleAddCar = (car: Omit<Car, "id">) => {
    const newCar: Car = {
      ...car,
      id: Math.max(...carList.map((c) => c.id), 0) + 1,
    }
    setCarList([...carList, newCar])
    setIsFormOpen(false)
  }

  const handleEditCar = (car: Car) => {
    setCarList(carList.map((c) => (c.id === car.id ? car : c)))
    setEditingCar(null)
    setIsFormOpen(false)
  }

  const handleDeleteCar = (id: number) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette voiture ?")) {
      setCarList(carList.filter((c) => c.id !== id))
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-5xl font-bold mb-2">Panel Administrateur</h1>
              <p className="text-muted-foreground">Gérez le catalogue de voitures</p>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition"
            >
              <LogOut className="w-5 h-5" />
              Déconnexion
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Total de voitures</div>
                <div className="text-3xl font-bold">{carList.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Valeur totale</div>
                <div className="text-3xl font-bold text-primary">
                  {carList.reduce((sum, car) => sum + car.price, 0).toLocaleString()}€
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Évaluation moyenne</div>
                <div className="text-3xl font-bold">
                  {(carList.reduce((sum, car) => sum + car.rating, 0) / carList.length).toFixed(1)}★
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Add Car Button */}
          <div className="mb-8">
            <Button
              onClick={() => {
                setEditingCar(null)
                setIsFormOpen(!isFormOpen)
              }}
              className="gap-2"
            >
              <Plus className="w-5 h-5" />
              {isFormOpen ? "Annuler" : "Ajouter une voiture"}
            </Button>
          </div>

          {/* Form */}
          {isFormOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <AdminCarForm
                    car={editingCar}
                    onSubmit={editingCar ? handleEditCar : handleAddCar}
                    onCancel={() => {
                      setIsFormOpen(false)
                      setEditingCar(null)
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Cars Table */}
          <AdminCarTable
            cars={carList}
            onEdit={(car) => {
              setEditingCar(car)
              setIsFormOpen(true)
            }}
            onDelete={handleDeleteCar}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
