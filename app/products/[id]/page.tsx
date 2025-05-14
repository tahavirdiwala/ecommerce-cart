import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductImageGallery from "@/components/product-image-gallery"
import RelatedProducts from "@/components/related-products"
import type { Product } from "@/components/product-card"

// Sample product data - in a real app, this would come from an API
const products: Record<
  string,
  Product & {
    description: string
    details: string[]
    images: string[]
  }
> = {
  "1": {
    id: "1",
    name: "Minimalist Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Clothing",
    tag: "New",
    description:
      "Our minimalist cotton t-shirt is crafted from premium organic cotton for ultimate comfort and durability. The clean design and perfect fit make it a versatile addition to any wardrobe.",
    details: ["100% organic cotton", "Regular fit", "Crew neck", "Machine washable", "Available in multiple colors"],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
  "2": {
    id: "2",
    name: "Classic Denim Jacket",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Outerwear",
    tag: "Sale",
    description:
      "This classic denim jacket combines timeless style with modern details. Made from premium denim that gets better with age, it features a comfortable fit and versatile design that pairs well with any outfit.",
    details: [
      "100% cotton denim",
      "Button closure",
      "Chest and side pockets",
      "Machine washable",
      "Adjustable button cuffs",
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id]

  if (!product) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm mb-6">
        <Link href="/" className="text-gray-500 hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        <Link href="/products" className="text-gray-500 hover:text-primary">
          Products
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        <Link href={`/categories/${product.category.toLowerCase()}`} className="text-gray-500 hover:text-primary">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <ProductImageGallery images={product.images} productName={product.name} />

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            {product.tag && (
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary text-white mb-2">
                {product.tag}
              </span>
            )}
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 text-gray-300" />
              </div>
              <span className="ml-2 text-sm text-gray-500">4.0 (24 reviews)</span>
            </div>
          </div>

          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

          <div>
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Select Color</h3>
              <div className="flex space-x-2">
                <button
                  className="h-8 w-8 rounded-full bg-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Black"
                ></button>
                <button
                  className="h-8 w-8 rounded-full bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="White"
                ></button>
                <button
                  className="h-8 w-8 rounded-full bg-blue-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Blue"
                ></button>
                <button
                  className="h-8 w-8 rounded-full bg-red-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Red"
                ></button>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                <button className="h-10 min-w-[40px] px-3 rounded border border-gray-300 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  XS
                </button>
                <button className="h-10 min-w-[40px] px-3 rounded border border-gray-300 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  S
                </button>
                <button className="h-10 min-w-[40px] px-3 rounded border border-primary bg-primary/10 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  M
                </button>
                <button className="h-10 min-w-[40px] px-3 rounded border border-gray-300 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  L
                </button>
                <button className="h-10 min-w-[40px] px-3 rounded border border-gray-300 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  XL
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">Size Guide</p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center border rounded w-32">
                <button className="px-3 py-1 text-gray-600 hover:text-gray-800">-</button>
                <span className="px-3 py-1 flex-1 text-center">1</span>
                <button className="px-3 py-1 text-gray-600 hover:text-gray-800">+</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <AddToCartButton product={product} className="flex-1" />
            <Button variant="outline" className="flex-1">
              Add to Wishlist
            </Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <RelatedProducts currentProductId={product.id} />
    </main>
  )
}
