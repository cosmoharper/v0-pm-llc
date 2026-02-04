import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Nordson | Plastics Machinery, LLC",
  description: "Nordson - Melt filtration, melt pumps, pelletizing equipment and polymer cleaning ovens",
}

export default function NordsonPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#F9D85C] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm mb-2">
            <Link href="/line-card" className="text-[#1a1a1a] hover:underline">Line Card</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">Nordson</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Nordson</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/brands/nordson.jpg"
              alt="Nordson melt delivery products"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-[#1a1a1a] mb-6">
              Nordson melt delivery products consist of melt filtration (screen changers), melt pumps, pelletizing equipment (under-water and water-ring) and polymer cleaning ovens.
            </p>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Products</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-[#1a1a1a]">
              <li>Melt filtration / screen changers</li>
              <li>Melt pumps</li>
              <li>Under-water pelletizing</li>
              <li>Water-ring pelletizing</li>
              <li>Polymer cleaning ovens</li>
            </ul>

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
