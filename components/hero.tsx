import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Discover Your Style
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-md">
              Explore our curated collection of modern fashion and accessories
              for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg transform rotate-3 opacity-20"></div>
            <div className="relative bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
                <Image
                  fill
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg">
                  Summer Collection 2025
                </h3>
                <p className="text-gray-600 mt-1">
                  New arrivals for the season
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
