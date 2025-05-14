import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "clothing",
    name: "Clothing",
    image: "/placeholder.svg?height=300&width=300",
    count: 124,
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "/placeholder.svg?height=300&width=300",
    count: 64,
  },
  {
    id: "footwear",
    name: "Footwear",
    image: "/placeholder.svg?height=300&width=300",
    count: 32,
  },
  {
    id: "outerwear",
    name: "Outerwear",
    image: "/placeholder.svg?height=300&width=300",
    count: 28,
  },
];

export default function Categories() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <Image
                fill
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white p-4 opacity-100 transition-opacity">
              <h3 className="font-bold text-xl">{category.name}</h3>
              <p className="text-sm">{category.count} products</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
