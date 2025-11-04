"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, AlertCircle } from "lucide-react"
import { getLanguage, t, type Language } from "@/lib/i18n"

export default function ContactPage() {
  const [lang, setLang] = useState<Language>("en")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setLang(getLanguage())
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.name || !formData.email || !formData.message) {
      setError(t("required_fields", lang))
      return
    }

    try {
      // In production, this would send to a backend API
      console.log("Form submitted:", formData)
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.")
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: lang === "it" ? "Telefono" : lang === "fr" ? "Téléphone" : "Phone",
      detail: "+33 7 56 91 80 43",
      description: lang === "fr" ? "Lun-Sam: 9h-18h" : lang === "it" ? "Lun-Sab: 9-18" : "Mon-Sat: 9am-6pm",
    },
    {
      icon: Mail,
      title: lang === "it" ? "Email" : "Email",
      detail: "kauffmannbruno191@gmail.com",
      description: lang === "fr" ? "Réponse en 24h" : lang === "it" ? "Risposta in 24h" : "Response in 24h",
    },
    {
      icon: MapPin,
      title: lang === "it" ? "Indirizzo" : lang === "fr" ? "Adresse" : "Address",
      detail: lang === "it" ? "Portogallo" : lang === "fr" ? "Portugal" : "Portugal",
      description:
        lang === "it"
          ? "Disponibile a francese e italiano"
          : lang === "fr"
            ? "Disponible en français et italien"
            : "Available in French & Italian",
    },
    {
      icon: Clock,
      title: lang === "it" ? "Orari" : lang === "fr" ? "Horaires" : "Hours",
      detail: lang === "fr" ? "Lun-Sam: 9h-18h" : lang === "it" ? "Lun-Sab: 9-18" : "Mon-Sat: 9am-6pm",
      description: lang === "fr" ? "Dimanche: Fermé" : lang === "it" ? "Domenica: Chiuso" : "Sunday: Closed",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">
                {lang === "it" ? "Contattaci" : lang === "fr" ? "Nous contacter" : "Contact Us"}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {lang === "it"
                  ? "Hai una domanda? Il nostro team è qui per aiutarti a trovare l'auto ideale"
                  : lang === "fr"
                    ? "Une question ? Notre équipe est à votre écoute pour vous aider à trouver la voiture idéale"
                    : "Have a question? Our team is here to help you find the perfect car"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-muted/50 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <Icon className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                        <p className="font-semibold text-sm mb-1">{info.detail}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-8">
                    {lang === "it"
                      ? "Inviaci un messaggio"
                      : lang === "fr"
                        ? "Envoyez-nous un message"
                        : "Send us a message"}
                  </h2>

                  {/* Success Message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 mb-6 bg-green-50 border border-green-200 rounded-lg text-green-700"
                    >
                      {t("thank_you", lang)}
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 mb-6 bg-red-50 border border-red-200 rounded-lg flex gap-3 text-red-700"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {lang === "it" ? "Nome" : lang === "fr" ? "Nom" : "Name"} *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={lang === "it" ? "Il tuo nome" : lang === "fr" ? "Votre nom" : "Your name"}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {lang === "it" ? "Telefono" : lang === "fr" ? "Téléphone" : "Phone"}
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+33 7 56 91 80 43"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {lang === "it" ? "Oggetto" : lang === "fr" ? "Sujet" : "Subject"} *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                          required
                        >
                          <option value="">
                            {lang === "it"
                              ? "Scegli un oggetto"
                              : lang === "fr"
                                ? "Choisir un sujet"
                                : "Choose a subject"}
                          </option>
                          <option value="information">
                            {lang === "it"
                              ? "Richiesta di informazioni"
                              : lang === "fr"
                                ? "Demande d'information"
                                : "Information Request"}
                          </option>
                          <option value="test-drive">
                            {lang === "it"
                              ? "Richiesta di prova"
                              : lang === "fr"
                                ? "Demande d'essai"
                                : "Test Drive Request"}
                          </option>
                          <option value="financing">
                            {lang === "it"
                              ? "Domanda di finanziamento"
                              : lang === "fr"
                                ? "Question de financement"
                                : "Financing Question"}
                          </option>
                          <option value="other">{lang === "it" ? "Altro" : lang === "fr" ? "Autre" : "Other"}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {lang === "it" ? "Messaggio" : lang === "fr" ? "Message" : "Message"} *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={
                          lang === "it" ? "Il tuo messaggio..." : lang === "fr" ? "Votre message..." : "Your message..."
                        }
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {lang === "it" ? "Invia messaggio" : lang === "fr" ? "Envoyer le message" : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {lang === "it" ? "Trovarci" : lang === "fr" ? "Nous trouver" : "Find Us"}
            </h2>
            <div className="w-full h-96 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>
                  {lang === "it"
                    ? "Portogallo - Disponibile a francese e italiano"
                    : lang === "fr"
                      ? "Portugal - Disponible en français et italien"
                      : "Portugal - Available in French & Italian"}
                </p>
                <p className="text-sm mt-2">
                  {lang === "it"
                    ? "Contattaci per una videochiamata o una riunione virtuale"
                    : lang === "fr"
                      ? "Contactez-nous pour un appel vidéo ou une réunion virtuelle"
                      : "Contact us for a video call or virtual meeting"}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
