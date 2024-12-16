import Link from 'next/link'
import { Search, ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button className="lg:hidden">
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/" className="text-2xl font-semibold">
            Avion
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/plant-pots" className="text-gray-600 hover:text-gray-900">
              Plant pots
            </Link>
            <Link href="/ceramics" className="text-gray-600 hover:text-gray-900 ">
              Ceramics
            </Link>
            <Link href="/tables" className="text-gray-600 hover:text-gray-900">
              Tables
            </Link>
            <Link href="/chairs" className="text-gray-600 hover:text-gray-900">
              Chairs
            </Link>
            <Link href="/crockery" className="text-gray-600 hover:text-gray-900">
              Crockery
            </Link>
            <Link href="/tableware" className="text-gray-600 hover:text-gray-900">
              Tableware
            </Link>
            <Link href="/cutlery" className="text-gray-600 hover:text-gray-900">
              Cutlery
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

