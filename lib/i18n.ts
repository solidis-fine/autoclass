"use client"

export type Language = "de" | "it" | "fr" | "en"

export const translations: Record<Language, Record<string, string>> = {
  de: {
    // Navigation
    home: "Startseite",
    catalog: "Katalog",
    about: "Über uns",
    contact: "Kontakt",
    cart: "Warenkorb",
    favorites: "Favoriten",
    admin: "Admin",

    // Hero
    hero_tagline: "Dein zuverlässiges Auto zum fairen Preis.",
    hero_description:
      "Entdecke unsere Auswahl an zuverlässigen und erschwinglichen Gebrauchtwagen für alle Budgets, von 6.000€ bis 30.000€.",
    hero_cta: "Katalog ansehen",
    featured_cars: "Empfohlene Autos",
    featured_section: "Im Rampenlicht",

    // Catalog
    price: "Preis",
    brand: "Marke",
    year: "Jahr",
    fuel: "Kraftstoff",
    km: "Kilometer",
    details: "Details",
    add_to_favorites: "Zu Favoriten hinzufügen",
    add_to_cart: "In den Warenkorb",
    buy_now: "Jetzt kaufen",
    remove_from_favorites: "Aus Favoriten entfernen",
    reviews: "Kundenbewertungen",
    filter: "Filtern",
    sort: "Sortieren",
    no_results: "Keine Autos gefunden",

    // Contact
    phone: "Telefon",
    email: "E-Mail",
    address: "Adresse",
    hours: "Öffnungszeiten",
    mon_sat: "Mo-Sa: 9:00-18:00 Uhr",
    sunday: "Sonntag: Geschlossen",
    message_us: "Senden Sie uns eine Nachricht",
    send_message: "Nachricht senden",
    thank_you: "Danke für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.",
    required_fields: "Bitte füllen Sie alle erforderlichen Felder aus",
    name: "Name",
    message: "Nachricht",
    form_name: "Vollständiger Name",
    form_email: "E-Mail-Adresse",
    form_phone: "Telefonnummer",
    form_message: "Nachricht",

    // About
    about_title: "Über AutoClass.it",
    about_description: "Vertrauenswürdige Gebrauchtwagen für europäische Fahrer seit 2020",

    // Admin
    manage_cars: "Autos verwalten",
    add_car: "Auto hinzufügen",
    edit_car: "Auto bearbeiten",
    delete_car: "Auto löschen",
    confirm_delete: "Sind Sie sicher, dass Sie dieses Auto löschen möchten?",

    // Stats
    total_cars: "Gesamtzahl Autos",
    total_value: "Gesamtwert",
    avg_rating: "Durchschnittliche Bewertung",
  },
  it: {
    // Navigation
    home: "Home",
    catalog: "Catalogo",
    about: "Chi Siamo",
    contact: "Contatti",
    cart: "Carrello",
    favorites: "Preferiti",
    admin: "Admin",

    // Hero
    hero_tagline: "La tua auto affidabile, a un prezzo equo.",
    hero_description:
      "Scopri la nostra selezione di auto usate affidabili e convenienti per tutti i budget, da 6.000€ a 30.000€.",
    hero_cta: "Visualizza il catalogo",
    featured_cars: "Auto in Evidenza",
    featured_section: "In Evidenza",

    // Catalog
    price: "Prezzo",
    brand: "Marca",
    year: "Anno",
    fuel: "Carburante",
    km: "Chilometri",
    details: "Dettagli",
    add_to_favorites: "Aggiungi ai preferiti",
    add_to_cart: "Aggiungi al carrello",
    buy_now: "Acquista ora",
    remove_from_favorites: "Rimuovi dai preferiti",
    reviews: "Recensioni clienti",
    filter: "Filtra",
    sort: "Ordina",
    no_results: "Nessuna auto trovata",

    // Contact
    phone: "Telefono",
    email: "Email",
    address: "Indirizzo",
    hours: "Orari",
    mon_sat: "Lun-Sab: 9:00-18:00",
    sunday: "Domenica: Chiuso",
    message_us: "Inviaci un messaggio",
    send_message: "Invia messaggio",
    thank_you: "Grazie per il vostro messaggio! Vi risponderemo al più presto.",
    required_fields: "Compilare tutti i campi obbligatori",
    name: "Nome",
    message: "Messaggio",
    form_name: "Nome completo",
    form_email: "Indirizzo email",
    form_phone: "Numero di telefono",
    form_message: "Messaggio",

    // About
    about_title: "Chi Siamo - AutoClass.it",
    about_description: "Auto usate affidabili per automobilisti europei dal 2020",

    // Admin
    manage_cars: "Gestisci Auto",
    add_car: "Aggiungi Auto",
    edit_car: "Modifica Auto",
    delete_car: "Elimina Auto",
    confirm_delete: "Sei sicuro di voler eliminare questa auto?",

    // Stats
    total_cars: "Totale Auto",
    total_value: "Valore Totale",
    avg_rating: "Valutazione Media",
  },
  fr: {
    // Navigation
    home: "Accueil",
    catalog: "Catalogue",
    about: "À propos",
    contact: "Contact",
    cart: "Panier",
    favorites: "Favoris",
    admin: "Admin",

    // Hero
    hero_tagline: "Votre voiture fiable, à prix juste.",
    hero_description:
      "Découvrez notre sélection de voitures d'occasion fiables et abordables pour tous les budgets, de 6.000€ à 30.000€.",
    hero_cta: "Voir le catalogue",
    featured_cars: "Voitures en vedette",
    featured_section: "En Vedette",

    // Catalog
    price: "Prix",
    brand: "Marque",
    year: "Année",
    fuel: "Carburant",
    km: "Kilomètres",
    details: "Détails",
    add_to_favorites: "Ajouter aux favoris",
    add_to_cart: "Ajouter au panier",
    buy_now: "Acheter maintenant",
    remove_from_favorites: "Retirer des favoris",
    reviews: "Avis clients",
    filter: "Filtrer",
    sort: "Trier",
    no_results: "Aucune voiture trouvée",

    // Contact
    phone: "Téléphone",
    email: "Email",
    address: "Adresse",
    hours: "Horaires",
    mon_sat: "Lun-Sam: 9h-18h",
    sunday: "Dimanche: Fermé",
    message_us: "Envoyez-nous un message",
    send_message: "Envoyer le message",
    thank_you: "Merci pour votre message ! Nous vous répondrons dès que possible.",
    required_fields: "Veuillez remplir tous les champs requis",
    name: "Nom",
    message: "Message",
    form_name: "Nom complet",
    form_email: "Adresse email",
    form_phone: "Numéro de téléphone",
    form_message: "Message",

    // About
    about_title: "À propos d'AutoClass.it",
    about_description: "Voitures d'occasion fiables pour conducteurs européens depuis 2020",

    // Admin
    manage_cars: "Gérer les Voitures",
    add_car: "Ajouter une Voiture",
    edit_car: "Modifier une Voiture",
    delete_car: "Supprimer une Voiture",
    confirm_delete: "Êtes-vous sûr de vouloir supprimer cette voiture ?",

    // Stats
    total_cars: "Nombre Total de Voitures",
    total_value: "Valeur Totale",
    avg_rating: "Évaluation Moyenne",
  },
  en: {
    // Navigation
    home: "Home",
    catalog: "Catalog",
    about: "About",
    contact: "Contact",
    cart: "Cart",
    favorites: "Favorites",
    admin: "Admin",

    // Hero
    hero_tagline: "Your reliable car, at the right price.",
    hero_description:
      "Discover our selection of reliable and affordable used cars for all budgets, from €6,000 to €30,000.",
    hero_cta: "View Catalog",
    featured_cars: "Featured Cars",
    featured_section: "Featured",

    // Catalog
    price: "Price",
    brand: "Brand",
    year: "Year",
    fuel: "Fuel",
    km: "Kilometers",
    details: "Details",
    add_to_favorites: "Add to Favorites",
    add_to_cart: "Add to Cart",
    buy_now: "Buy Now",
    remove_from_favorites: "Remove from Favorites",
    reviews: "Customer Reviews",
    filter: "Filter",
    sort: "Sort",
    no_results: "No cars found",

    // Contact
    phone: "Phone",
    email: "Email",
    address: "Address",
    hours: "Hours",
    mon_sat: "Mon-Sat: 9am-6pm",
    sunday: "Sunday: Closed",
    message_us: "Send us a message",
    send_message: "Send Message",
    thank_you: "Thank you for your message! We'll get back to you soon.",
    required_fields: "Please fill in all required fields",
    name: "Name",
    message: "Message",
    form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone Number",
    form_message: "Message",

    // About
    about_title: "About AutoClass.it",
    about_description: "Reliable used cars for European drivers since 2020",

    // Admin
    manage_cars: "Manage Cars",
    add_car: "Add Car",
    edit_car: "Edit Car",
    delete_car: "Delete Car",
    confirm_delete: "Are you sure you want to delete this car?",

    // Stats
    total_cars: "Total Cars",
    total_value: "Total Value",
    avg_rating: "Average Rating",
  },
}

export function getLanguage(): Language {
  if (typeof window === "undefined") return "en"

  // Check localStorage for saved language preference
  const savedLang = localStorage.getItem("preferred-language") as Language | null
  if (savedLang && ["de", "it", "fr", "en"].includes(savedLang)) {
    return savedLang
  }

  const browserLang = navigator.language.split("-")[0].toLowerCase()
  const detectedLang = (["de", "it", "fr", "en"].includes(browserLang) ? browserLang : "en") as Language

  // Save the detected language to localStorage
  localStorage.setItem("preferred-language", detectedLang)
  return detectedLang
}

export function setLanguage(lang: Language): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("preferred-language", lang)
  }
}

export function t(key: string, lang: Language = "en"): string {
  return translations[lang]?.[key] || key
}
