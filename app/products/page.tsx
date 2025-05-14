import { Suspense } from "react"
import ProductsGrid from "@/components/products-grid"
import ProductsFilter from "@/components/products-filter"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <ProductsFilter />
        </aside>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Showing 1-12 of 48 products</span>
            </div>
          </div>

          <Suspense fallback={<div>Loading products...</div>}>
            <ProductsGrid />
          </Suspense>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
              <Button variant="outline" className="h-8 w-8">
                1
              </Button>
              <Button variant="outline" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" className="h-8 w-8">
                4
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
