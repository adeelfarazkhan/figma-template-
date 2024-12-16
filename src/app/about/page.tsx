import Image from 'next/image'
// import { Button } from '@/components/ui/button'
import yellow from "../../../image/Image Block.png"
import black from "../../../image/yellow.png"

export default function MainAbout() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-normal mb-8 leading-tight">
            A brand built on the love of craftmanship, quality and outstanding customer service
          </h1>
          {/* <Button variant="outline" className="text-sm">
            View our products
          </Button> */}
        </div>
      </section>

      {/* Feature Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#2A254B] text-white p-8 md:p-16">
          <h2 className="text-3xl mb-4">It started with a small idea</h2>
          <p className="text-gray-300 mb-8">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
          {/* <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#2A254B]">
            View collection
          </Button> */}
        </div>
        <div className="relative aspect-square">
          <Image
            src={yellow}
            alt="Yellow armchair in modern setting"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square">
          <Image
            src={black}
            alt="Modern sofa"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl mb-6">Our service isn't just personal, it's actually hyper personally exquisite</h2>
          <p className="text-gray-600 mb-4">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
          </p>
          <p className="text-gray-600 mb-8">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </p>
          {/* <Button>Get in touch</Button> */}
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-center mb-12">What makes our brand different</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-2xl mb-4">Join the club and get the benefits</h2>
        <p className="text-gray-600 mb-8">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2 border rounded-md"
          />
          {/* <Button type="submit">Sign up</Button> */}
        </form>
      </section>
    </div>
  )
}

const features = [
  {
    icon: <span className="w-12 h-12 rounded-full bg-[#2A254B] text-white flex items-center justify-center">🚚</span>,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: <span className="w-12 h-12 rounded-full bg-[#2A254B] text-white flex items-center justify-center">🛠️</span>,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship"
  },
  {
    icon: <span className="w-12 h-12 rounded-full bg-[#2A254B] text-white flex items-center justify-center">💰</span>,
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere"
  },
  {
    icon: <span className="w-12 h-12 rounded-full bg-[#2A254B] text-white flex items-center justify-center">♻️</span>,
    title: "Recycled packaging",
    description: "We use 100% recycled to ensure our footprint is more manageable"
  }
]

