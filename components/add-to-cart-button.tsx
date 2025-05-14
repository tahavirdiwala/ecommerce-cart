"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/components/product-card"
import { useState } from "react"

interface AddToCartButtonProps {
  product: Product
  className?: string
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product)

    // Reset button state after animation
    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  return (
    <Button
      onClick={handleAddToCart}
      className={`${className} ${isAdding ? "bg-green-600 hover:bg-green-700" : ""}`}
      disabled={isAdding}
    >
      {isAdding ? (
        "Added to Cart!"
      ) : (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  )
}
