"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ProductsFilter() {
  const [priceRange, setPriceRange] = useState([0, 200])
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    colors: true,
    sizes: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="border-b pb-4">
        <button
          className="flex items-center justify-between w-full font-medium mb-2"
          onClick={() => toggleSection("categories")}
        >
          Categories
          {expandedSections.categories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {expandedSections.categories && (
          <div className="space-y-2 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="clothing" />
              <Label htmlFor="clothing">Clothing (24)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="accessories" />
              <Label htmlFor="accessories">Accessories (18)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="footwear" />
              <Label htmlFor="footwear">Footwear (12)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="outerwear" />
              <Label htmlFor="outerwear">Outerwear (8)</Label>
            </div>
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b pb-4">
        <button
          className="flex items-center justify-between w-full font-medium mb-2"
          onClick={() => toggleSection("price")}
        >
          Price Range
          {expandedSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {expandedSections.price && (
          <div className="space-y-4 mt-4">
            <Slider defaultValue={[0, 200]} max={200} step={1} value={priceRange} onValueChange={setPriceRange} />
            <div className="flex items-center justify-between">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="border-b pb-4">
        <button
          className="flex items-center justify-between w-full font-medium mb-2"
          onClick={() => toggleSection("colors")}
        >
          Colors
          {expandedSections.colors ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {expandedSections.colors && (
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer" title="Black"></div>
            <div className="h-6 w-6 rounded-full bg-white border border-gray-300 cursor-pointer" title="White"></div>
            <div className="h-6 w-6 rounded-full bg-gray-500 border border-gray-300 cursor-pointer" title="Gray"></div>
            <div className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer" title="Blue"></div>
            <div className="h-6 w-6 rounded-full bg-red-500 border border-gray-300 cursor-pointer" title="Red"></div>
            <div
              className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"
              title="Green"
            ></div>
          </div>
        )}
      </div>

      {/* Sizes */}
      <div className="border-b pb-4">
        <button
          className="flex items-center justify-between w-full font-medium mb-2"
          onClick={() => toggleSection("sizes")}
        >
          Sizes
          {expandedSections.sizes ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {expandedSections.sizes && (
          <div className="space-y-2 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="xs" />
              <Label htmlFor="xs">XS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="s" />
              <Label htmlFor="s">S</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="m" />
              <Label htmlFor="m">M</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="l" />
              <Label htmlFor="l">L</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="xl" />
              <Label htmlFor="xl">XL</Label>
            </div>
          </div>
        )}
      </div>

      <Button className="w-full">Apply Filters</Button>
      <Button variant="outline" className="w-full">
        Reset
      </Button>
    </div>
  )
}
