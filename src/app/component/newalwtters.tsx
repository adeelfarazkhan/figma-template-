// import { Button } from '@/components/ui/button'

export function Newsletter() {
  return (
    <section className="py-16 px-4 bg-[#2A254B] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl mb-4">Join the club and get the benefits</h2>
        <p className="mb-8 opacity-80">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2 rounded bg-white text-black"
            required
          />
          {/* <Button>Sign up</Button> */}
        </form>
      </div>
    </section>
  )
}

