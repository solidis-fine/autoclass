"use client"

import { useLanguage } from "@/hooks/use-language"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const { lang, t, isLoaded } = useLanguage()

  if (!isLoaded) return null

  const features = [
    {
      icon: Award,
      titleKey: "about_title",
      descKey:
        lang === "de"
          ? "15 Jahre Erfahrung im Autoverkauf mit 98% Kundenzufriedenheit"
          : lang === "it"
            ? "15 anni di esperienza nella vendita di auto con 98% di soddisfazione dei clienti"
            : lang === "fr"
              ? "15 ans d'expérience dans la vente automobile avec satisfaction client 98%"
              : "15 years of automotive sales experience with 98% customer satisfaction",
    },
    {
      icon: Users,
      titleKey: "about_title",
      descKey:
        lang === "de"
          ? "Unser Autoexperten-Team hilft dir, das perfekte Auto zu finden"
          : lang === "it"
            ? "Il nostro team di esperti automobilistici ti aiuta a trovare l'auto ideale"
            : lang === "fr"
              ? "Nos experts automobiles vous conseillent pour trouver la voiture idéale"
              : "Our automotive experts guide you to find the perfect car",
    },
    {
      icon: Zap,
      titleKey: "about_title",
      descKey:
        lang === "de"
          ? "Kauf, Finanzierung und Lieferung in weniger als 7 Tagen"
          : lang === "it"
            ? "Acquisto, finanziamento e consegna in meno di 7 giorni"
            : lang === "fr"
              ? "Achat, financement et livraison en moins de 7 jours"
              : "Purchase, financing, and delivery in less than 7 days",
    },
  ]

  const stats = [
    {
      number: "2500+",
      label:
        lang === "de"
          ? "Zufriedene Kunden"
          : lang === "it"
            ? "Clienti soddisfatti"
            : lang === "fr"
              ? "Clients satisfaits"
              : "Happy Customers",
    },
    {
      number: "5000+",
      label:
        lang === "de"
          ? "Autos verkauft"
          : lang === "it"
            ? "Auto vendute"
            : lang === "fr"
              ? "Voitures vendues"
              : "Cars Sold",
    },
    {
      number: "98%",
      label:
        lang === "de"
          ? "Zufriedenheitsquote"
          : lang === "it"
            ? "Tasso di soddisfazione"
            : lang === "fr"
              ? "Taux de satisfaction"
              : "Satisfaction Rate",
    },
    {
      number: "24h",
      label:
        lang === "de"
          ? "Kundensupport"
          : lang === "it"
            ? "Supporto clienti"
            : lang === "fr"
              ? "Support client"
              : "Customer Support",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">
                {lang === "de" ? "Über" : lang === "it" ? "Chi Siamo" : lang === "fr" ? "À propos d'" : "About"}{" "}
                <span className="text-primary">AutoClass.it</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                {lang === "de"
                  ? "Seit 15 Jahren bieten wir die besten Gebrauchtwagen zu wettbewerbsfähigen Preisen. Unsere Mission: Autokauf transparent, sicher und für alle zugänglich machen."
                  : lang === "it"
                    ? "Da 15 anni proponiamo le migliori auto usate a prezzi competitivi. La nostra missione: rendere l'acquisto di auto trasparente, sicuro e accessibile a tutti."
                    : lang === "fr"
                      ? "Depuis 15 ans, nous proposons les meilleures voitures d'occasion à des prix compétitifs. Notre mission : rendre l'achat automobile transparent, sûr et accessible à tous."
                      : "For 15 years, we've offered the best used cars at competitive prices. Our mission: make car buying transparent, safe, and accessible to everyone."}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              {lang === "de"
                ? "Warum AutoClass.it wählen?"
                : lang === "it"
                  ? "Perché scegliere AutoClass.it?"
                  : lang === "fr"
                    ? "Pourquoi choisir AutoClass.it ?"
                    : "Why Choose AutoClass.it?"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <Icon className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-3">{feature.titleKey}</h3>
                        <p className="text-muted-foreground">{feature.descKey}</p>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/50 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              {lang === "de"
                ? "Unsere Werte"
                : lang === "it"
                  ? "I nostri valori"
                  : lang === "fr"
                    ? "Nos valeurs"
                    : "Our Values"}
            </h2>
            <div className="space-y-6">
              {[
                {
                  de: {
                    title: "Transparenz",
                    desc: "Keine versteckten Gebühren, klare Preise und vollständige Fahrzeughistorie verfügbar",
                  },
                  it: {
                    title: "Trasparenza",
                    desc: "Nessuna commissione nascosta, prezzi chiari e cronologia completa del veicolo disponibile",
                  },
                  fr: {
                    title: "Transparence",
                    desc: "Aucun frais caché, prix clairs et historique complet de chaque véhicule disponible",
                  },
                  en: {
                    title: "Transparency",
                    desc: "No hidden fees, clear pricing, and complete vehicle history available",
                  },
                },
                {
                  de: {
                    title: "Qualität",
                    desc: "Alle unsere Fahrzeuge werden von unseren Autoexperten inspiziert und zertifiziert",
                  },
                  it: {
                    title: "Qualità",
                    desc: "Tutti i nostri veicoli sono ispezionati e certificati dai nostri esperti automobilistici",
                  },
                  fr: {
                    title: "Qualité",
                    desc: "Tous nos véhicules sont inspectés et certifiés par nos experts automobiles",
                  },
                  en: {
                    title: "Quality",
                    desc: "All our vehicles are inspected and certified by our automotive experts",
                  },
                },
                {
                  de: { title: "Kundenservice", desc: "Support verfügbar 24/7 vor, während und nach Ihrem Kauf" },
                  it: { title: "Servizio clienti", desc: "Supporto disponibile 24/7 prima, durante e dopo l'acquisto" },
                  fr: {
                    title: "Service client",
                    desc: "Support disponible 24h/24 avant, pendant et après votre achat",
                  },
                  en: {
                    title: "Customer Service",
                    desc: "Support available 24/7 before, during, and after your purchase",
                  },
                },
                {
                  de: {
                    title: "Nachhaltigkeit",
                    desc: "Wir wählen zuverlässige Fahrzeuge mit verantwortungsvollem Verbrauch",
                  },
                  it: { title: "Sostenibilità", desc: "Selezioniamo veicoli affidabili con un consumo responsabile" },
                  fr: {
                    title: "Durabilité",
                    desc: "Nous sélectionnons des véhicules fiables avec une consommation responsable",
                  },
                  en: {
                    title: "Sustainability",
                    desc: "We select reliable vehicles with responsible fuel consumption",
                  },
                },
              ].map((value, index) => {
                const langValue =
                  lang === "de" ? value.de : lang === "it" ? value.it : lang === "fr" ? value.fr : value.en
                return (
                  <div key={index} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{langValue.title}</h3>
                      <p className="text-muted-foreground">{langValue.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {lang === "de"
                ? "Bereit, dein Auto zu finden?"
                : lang === "it"
                  ? "Pronto a trovare la tua auto?"
                  : lang === "fr"
                    ? "Prêt à trouver votre voiture ?"
                    : "Ready to find your car?"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {lang === "de"
                ? "Durchsuchen Sie unsere Auswahl von über 100 hochwertigen Fahrzeugen"
                : lang === "it"
                  ? "Sfoglia la nostra selezione di oltre 100 veicoli di qualità"
                  : lang === "fr"
                    ? "Parcourez notre sélection de plus de 100 véhicules de qualité"
                    : "Browse our selection of over 100 quality vehicles"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog">
                <Button size="lg">{t("catalog")}</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent">
                  {t("contact")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
