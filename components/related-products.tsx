import ProductCard from "./product-card"
import type { Product } from "./product-card"

// Sample product data - in a real app, this would come from an API
const products: Product[] = [
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
]

interface RelatedProductsProps {
  currentProductId: string
}

export default function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // Filter out the current product
  const relatedProducts = products.filter((product) => product.id !== currentProductId)

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
