import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Bay Plastics Machinery | Plastics Machinery, LLC",
  description: "Bay Plastics Machinery - Strand pelletizers, conveyors, water baths and accessories",
}

export default function BayPlasticsMachineryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#F9D85C] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm mb-2">
            <Link href="/line-card" className="text-[#1a1a1a] hover:underline">Line Card</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">Bay Plastics Machinery</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Bay Plastics Machinery</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/brands/bay-plastics.jpg"
              alt="Bay Plastics Machinery pelletizers"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-[#1a1a1a] mb-6">
              Bay Plastics Machinery offers a complete line of strand pelletizers, conveyors, water baths, air knives/strand dewatering units, and spare parts.
            </p>
            <p className="text-lg text-[#1a1a1a] mb-6">
              We also offer rotor sharpening, rebuild/repair, technical support, and testing.
            </p>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Products & Services</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-[#1a1a1a]">
              <li>Strand pelletizers</li>
              <li>Conveyors</li>
              <li>Water baths</li>
              <li>Air knives / strand dewatering units</li>
              <li>Spare parts</li>
              <li>Rotor sharpening</li>
              <li>Rebuild and repair services</li>
              <li>Technical support and testing</li>
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
