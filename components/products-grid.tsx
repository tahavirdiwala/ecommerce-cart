import ProductCard from "./product-card"
import type { Product } from "./product-card"

// Sample product data - in a real app, this would come from an API
const products: Product[] = [
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
  {
    id: "9",
    name: "Structured Tote Bag",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
  },
  {
    id: "10",
    name: "Relaxed Fit Hoodie",
    price: 54.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
  },
  {
    id: "11",
    name: "Leather Chelsea Boots",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Footwear",
  },
  {
    id: "12",
    name: "Cashmere Beanie",
    price: 44.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Accessories",
  },
]

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
