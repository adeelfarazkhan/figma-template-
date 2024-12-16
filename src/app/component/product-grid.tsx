import Image from 'next/image'
import Link from 'next/link'

interface Product {
  name: string
  price: string
  image: string
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link key={index} href="#" className="group">
          <div className="relative aspect-square mb-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
        </Link>
      ))}
    </div>
  )
}

