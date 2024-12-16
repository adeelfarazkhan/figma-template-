import { Clock, Package, Sprout, Truck } from 'lucide-react'

export function Features() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-12 text-center">What makes our brand different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="font-medium mb-2">Next day as standard</h3>
            <p className="text-sm text-gray-600">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Sprout className="h-8 w-8" />
            </div>
            <h3 className="font-medium mb-2">Made by true artisans</h3>
            <p className="text-sm text-gray-600">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Package className="h-8 w-8" />
            </div>
            <h3 className="font-medium mb-2">Unbeatable prices</h3>
            <p className="text-sm text-gray-600">
              For our materials and quality you won't find better prices anywhere
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="font-medium mb-2">Recycled packaging</h3>
            <p className="text-sm text-gray-600">
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

