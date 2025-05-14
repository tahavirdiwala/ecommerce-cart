import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <Categories />
        <FeaturedProducts />
        <Newsletter />
      </div>
    </main>
  )
}
