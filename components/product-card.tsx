"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/cart-context";
import Image from "next/image";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  tag?: string;
}

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
}

export default function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  // Determine tag style based on value
  const getTagStyle = (tag?: string) => {
    if (!tag) return "";

    switch (tag.toLowerCase()) {
      case "new":
        return "bg-blue-500 text-white";
      case "sale":
        return "bg-red-500 text-white";
      case "low stock":
        return "bg-amber-500 text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  if (variant === "compact") {
    return (
      <Link href={`/products/${product.id}`}>
        <div
          className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                // Fallback image if product image fails to load
                e.currentTarget.src = "/placeholder.svg?height=200&width=200";
              }}
            />
            {product.tag && (
              <Badge
                className={`absolute top-2 left-2 ${getTagStyle(product.tag)}`}
              >
                {product.tag}
              </Badge>
            )}
          </div>
          <div className="p-3">
            <h3 className="font-medium text-sm truncate">{product.name}</h3>
            <p className="text-sm font-bold mt-1">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[3/4] relative overflow-hidden">
          <Image
            fill
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=400&width=300";
            }}
          />
          {product.tag && (
            <Badge
              className={`absolute top-2 left-2 ${getTagStyle(product.tag)}`}
            >
              {product.tag}
            </Badge>
          )}

          {/* Quick action buttons that appear on hover */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-90 transform transition-transform ${
              isHovered ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add to Cart
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="text-sm text-gray-500">{product.category}</div>
          <h3 className="font-medium text-base mt-1">{product.name}</h3>
          <p className="text-lg font-bold mt-1">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
