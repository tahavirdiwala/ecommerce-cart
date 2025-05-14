"use client"

import { useState, useEffect } from "react"
import ProductCard from "./product-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "./product-card"

// Sample product data
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Minimalist Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    tag: "New",
  },
  {
    id: "2",
    name: "Classic Denim Jacket",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Outerwear",
    tag: "Sale",
  },
  {
    id: "3",
    name: "Leather Crossbody Bag",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
  },
  {
    id: "4",
    name: "Slim Fit Chino Pants",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    tag: "Low Stock",
  },
  {
    id: "5",
    name: "Wool Blend Sweater",
    price: 69.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
  },
  {
    id: "6",
    name: "Canvas Sneakers",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Footwear",
    tag: "New",
  },
  {
    id: "7",
    name: "Aviator Sunglasses",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
  },
  {
    id: "8",
    name: "Patterned Silk Scarf",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
  },
]

export default function FeaturedProducts() {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [productsPerView, setProductsPerView] = useState(4)

  // Update products per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerView(1)
      } else if (window.innerWidth < 768) {
        setProductsPerView(2)
      } else if (window.innerWidth < 1024) {
        setProductsPerView(3)
      } else {
        setProductsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update visible products when index or products per view changes
  useEffect(() => {
    setVisibleProducts(sampleProducts.slice(currentIndex, currentIndex + productsPerView))
  }, [currentIndex, productsPerView])

  const nextSlide = () => {
    const newIndex = currentIndex + productsPerView
    if (newIndex < sampleProducts.length) {
      setCurrentIndex(newIndex)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    const newIndex = currentIndex - productsPerView
    if (newIndex >= 0) {
      setCurrentIndex(newIndex)
    } else {
      setCurrentIndex(Math.max(0, sampleProducts.length - productsPerView))
    }
  }

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous products">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next products">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
