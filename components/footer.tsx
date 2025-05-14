import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">StyleShop</h3>
            <p className="text-gray-600 mb-4">Your destination for modern fashion and accessories.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories/clothing" className="text-gray-600 hover:text-primary">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/categories/accessories" className="text-gray-600 hover:text-primary">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/categories/footwear" className="text-gray-600 hover:text-primary">
                  Footwear
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-600 hover:text-primary">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/account" className="text-gray-600 hover:text-primary">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/account/orders" className="text-gray-600 hover:text-primary">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/account/wishlist" className="text-gray-600 hover:text-primary">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/account/returns" className="text-gray-600 hover:text-primary">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-primary">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns-policy" className="text-gray-600 hover:text-primary">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} StyleShop. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
