import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "H-P Products | Plastics Machinery, LLC",
  description: "H-P Products - Tubing, bends, and fittings for vacuum conveying",
}

export default function HPProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#F9D85C] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm mb-2">
            <Link href="/line-card" className="text-[#1a1a1a] hover:underline">Line Card</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">H-P Products</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">H-P Products</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/brands/hp-products.jpg"
              alt="H-P Products vacuum conveying tubing and fittings"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-[#1a1a1a] mb-6">
              H-P Products offers tubing, bends, and fittings for vacuum conveying.
            </p>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Products</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-[#1a1a1a]">
              <li>Vacuum conveying tubing</li>
              <li>Bends and elbows</li>
              <li>Fittings and connectors</li>
              <li>Complete conveying system components</li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/request-quote" 
                className="inline-block bg-[#367CA4] hover:bg-[#2d6a8f] text-white font-bold px-6 py-3 transition-colors"
              >
                Request a Quote
              </Link>
              <Link 
                href="/contact-plastics-machinery" 
                className="inline-block bg-[#367CA4] hover:bg-[#2d6a8f] text-white font-bold px-6 py-3 transition-colors"
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
