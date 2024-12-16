import Image from 'next/image'
// import { Button } from '@/components/ui/but'
import aboutSofa from "../../../image/aboutSofa.png"

export function About() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="p-8 lg:p-16 flex flex-col justify-center">
        <h2 className="text-2xl mb-6">
          From a studio in London to a global brand with over 400 outlets
        </h2>
        <p className="text-gray-600 mb-6">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
        </p>
        <p className="text-gray-600 mb-8">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>
        {/* <Button variant="outline">Get in touch</Button> */}
      </div>
      <div className="relative aspect-square">
        <Image
          src={aboutSofa}
          alt="About Avion"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}

