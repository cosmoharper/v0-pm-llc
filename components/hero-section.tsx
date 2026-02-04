import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-factory.jpg"
          alt="Plastics manufacturing plant with extruders and injection molding machines"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9D85C] mb-4 uppercase tracking-wide text-balance">
          Welcome to Plastics Machinery
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-10 uppercase tracking-wide text-balance">
          Helping Plastics Processors Solve Everyday Problems
        </h2>
        <Link
          href="/request-quote"
          className="inline-block bg-[#367CA4] hover:bg-[#2d6a8f] text-white font-bold text-base md:text-lg px-8 py-4 uppercase tracking-wide transition-colors"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  )
}
