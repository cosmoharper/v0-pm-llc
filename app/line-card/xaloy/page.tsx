import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Xaloy | Plastics Machinery, LLC",
  description: "Xaloy - Screws, barrels and front-end components for extrusion, injection and blow-molding",
}

export default function XaloyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#F9D85C] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm mb-2">
            <Link href="/line-card" className="text-[#1a1a1a] hover:underline">Line Card</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">Xaloy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Xaloy</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/brands/xaloy.jpg"
              alt="Xaloy screws and barrels"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-[#1a1a1a] mb-6">
              XALOY provides screws, barrels and front-end components for the extrusion, injection, and blow-molding industry including designs for optimizing user processes.
            </p>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Products</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-[#1a1a1a]">
              <li>Extrusion screws</li>
              <li>Injection screws</li>
              <li>Bimetallic barrels</li>
              <li>Front-end components</li>
              <li>Custom designs for process optimization</li>
            </ul>

            <p className="text-lg text-[#1a1a1a] mb-6">
              <a href="https://www.youtube.com/channel/UCumX2DjmG-FQPKSagsJ7DyQ" target="_blank" rel="noopener noreferrer" className="text-[#367CA4] hover:underline">See Video</a>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/request-quote" 
                className="inline-block bg-[#F9D85C] hover:bg-[#E5C654] text-[#1a1a1a] font-bold px-6 py-3 transition-colors"
              >
                Request a Quote
              </Link>
              <Link 
                href="/contact-plastics-machinery" 
                className="inline-block bg-[#1a1a1a] hover:bg-[#333333] text-white font-bold px-6 py-3 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
