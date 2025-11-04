import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedCars } from "@/components/featured-cars"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCars />
      <Footer />
    </>
  )
}
