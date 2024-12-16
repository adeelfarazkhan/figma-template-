import Link from 'next/link'
import { ShoppingCart, Search, X } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-[#2A254B] text-white text-sm py-2 px-4 flex justify-center items-center">
        <p className="text-center">Free delivery on all orders over £50 with code easter checkout</p>
        <button className="absolute right-4" aria-label="Close banner">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              Avion
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="text-sm">All products</Link>
              <Link href="/plant-pots" className="text-sm">Plant pots</Link>
              <Link href="/ceramics" className="text-sm">Ceramics</Link>
              <Link href="/tables" className="text-sm">Tables</Link>
              <Link href="/chairs" className="text-sm">Chairs</Link>
              <Link href="/crockery" className="text-sm">Crockery</Link>
              <Link href="/tableware" className="text-sm">Tableware</Link>
              <Link href="/cutlery" className="text-sm">Cutlery</Link>
            </div>

            <div className="flex items-center space-x-4">
              <button aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button aria-label="Cart">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#2A254B] text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Avion</h3>
              <address className="not-italic text-sm">
                21 New York Street<br />
                New York City<br />
                United States of America<br />
                432 34
              </address>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/new-arrivals">New arrivals</Link></li>
                <li><Link href="/best-sellers">Best sellers</Link></li>
                <li><Link href="/recently-viewed">Recently viewed</Link></li>
                <li><Link href="/popular">Popular this week</Link></li>
                <li><Link href="/all-products">All products</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/crockery">Crockery</Link></li>
                <li><Link href="/furniture">Furniture</Link></li>
                <li><Link href="/homeware">Homeware</Link></li>
                <li><Link href="/plant-pots">Plant pots</Link></li>
                <li><Link href="/chairs">Chairs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Our company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/vacancies">Vacancies</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/returns">Returns policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-sm">Copyright 2022 Avion LTD</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

