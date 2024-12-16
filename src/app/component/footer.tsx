import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
import { Facebook, Instagram, LinkedinIcon as LinkedIn, WebcamIcon as Skype, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">Menu</h3>
            <nav className="space-y-3">
              <Link href="/new-arrivals" className="block text-sm opacity-80 hover:opacity-100">
                New arrivals
              </Link>
              <Link href="/best-sellers" className="block text-sm opacity-80 hover:opacity-100">
                Best sellers
              </Link>
              <Link href="/recently-viewed" className="block text-sm opacity-80 hover:opacity-100">
                Recently viewed
              </Link>
              <Link href="/popular" className="block text-sm opacity-80 hover:opacity-100">
                Popular this week
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-medium mb-4">Categories</h3>
            <nav className="space-y-3">
              <Link href="/crockery" className="block text-sm opacity-80 hover:opacity-100">
                Crockery
              </Link>
              <Link href="/furniture" className="block text-sm opacity-80 hover:opacity-100">
                Furniture
              </Link>
              <Link href="/homeware" className="block text-sm opacity-80 hover:opacity-100">
                Homeware
              </Link>
              <Link href="/plant-pots" className="block text-sm opacity-80 hover:opacity-100">
                Plant pots
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-medium mb-4">Our company</h3>
            <nav className="space-y-3">
              <Link href="/about" className="block text-sm opacity-80 hover:opacity-100">
                About us
              </Link>
              <Link href="/vacancies" className="block text-sm opacity-80 hover:opacity-100">
                Vacancies
              </Link>
              <Link href="/contact" className="block text-sm opacity-80 hover:opacity-100">
                Contact us
              </Link>
              <Link href="/privacy" className="block text-sm opacity-80 hover:opacity-100">
                Privacy
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-medium mb-4">Join our mailing list</h3>
            <form className="space-y-4">
              {/* <Input
                type="email"
                placeholder="your@email.com"
                className="bg-white text-black"
              /> */}
              {/* <Button className="w-full">Sign up</Button> */}
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">Copyright 2024 Avion LTD</p>
          <div className="flex space-x-4">
            <Link href="#" className="opacity-80 hover:opacity-100">
              <LinkedIn className="h-5 w-5" />
            </Link>
            <Link href="#" className="opacity-80 hover:opacity-100">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="opacity-80 hover:opacity-100">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="opacity-80 hover:opacity-100">
              <Skype className="h-5 w-5" />
            </Link>
            <Link href="#" className="opacity-80 hover:opacity-100">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

