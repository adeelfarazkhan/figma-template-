import Image from 'next/image'
// import { Button } from '@/components/ui/button'
import { ProductGrid } from '../app/component/product-grid'
import { Features } from "../app/component/features"
import { Newsletter } from "../app/component/newalwtters"
import { About } from '../app/component/about'
import pic1 from "../../image/pic1.png"
import MainAbout from './about/page'
import Layout from './about/layout'



export default function Home() {
  return (
    <div>
      <section className="grid lg:grid-cols-2">
        <div className="bg-[#2A254B] text-white p-8 lg:p-16 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-light mb-6">
            The furniture brand for the future, with timeless designs
          </h1>
          {/* <Button variant="secondary" size="lg" className="w-fit">
            View collection
          </Button> */}
          <p className="mt-8 text-sm opacity-80">
            A new era in eco-friendly furniture with Avion, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
          </p>
        </div>
        <div className="relative aspect-square">
          <Image
            src={pic1}
            alt="Modern chair"
            className="object-cover"
            priority
          />
        </div>
      </section>
      
      <Features />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl mb-8">New ceramics</h2>
          {/* <ProductGrid
            products={[
              {
                name: "The Dandy Chair",
                price: "£250",
                image: "",
              },
              {
                name: "Rustec Vaste Set",
                price: "£155",
                image: "",
              },
              {
                name: "The Silky Vase ",
                price: "£120",
                image: "",
              }
            ]} */}
          {/* /> */}
          <div className="text-center mt-8">
            {/* <Button variant="outline">View collection</Button> */}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl mb-8">Our popular products</h2>
          <ProductGrid
            products={[
              {
                name: "The Poplar suede sofa",
                price: "£980",
                image: "/placeholder.svg"
              },
              {
                name: "The Dandy chair",
                price: "£250",
                image: "/placeholder.svg"
              },
              {
                name: "The Dandy chair",
                price: "£250",
                image: "/placeholder.svg"
              }
            ]}
          />
          <div className="text-center mt-8">
            {/* <Button variant="outline">View collection</Button> */}
          </div>
        </div>
      </section>

      <Newsletter />
      <About/>
      <MainAbout/>
    </div>
  )
}

