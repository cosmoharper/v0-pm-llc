import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Novatec | Plastics Machinery, LLC",
  description: "Novatec - The largest U.S. based manufacturer of resin dryers for the plastics industry",
}

export default function NovatecPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#F9D85C] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm mb-2">
            <Link href="/line-card" className="text-[#1a1a1a] hover:underline">Line Card</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">Novatec</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Novatec</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/brands/novatec.jpg"
              alt="Novatec resin drying equipment"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-[#1a1a1a] mb-6">
              NOVATEC, Inc. is the largest U.S. based manufacturer of resin dryers for the plastics industry.
            </p>
            <p className="text-lg text-[#1a1a1a] mb-6">
              We combine Plastics Drying, Plastics Conveying and Plastics Blending with Downstream Extrusion Products to design and install complete Central Plastics Drying and Conveying Systems.
            </p>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Products</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-[#1a1a1a]">
              <li>Resin dryers</li>
              <li>Conveying systems</li>
              <li>Blending equipment</li>
              <li>Downstream extrusion products</li>
              <li>Central drying and conveying systems</li>
            </ul>

            <p className="text-sm text-gray-600 mb-6 italic flex items-center gap-2">
              Part of the <Image src="/images/maguire-logo.png" alt="Maguire" width={70} height={14} className="inline-block h-3.5 w-auto" /> Family.
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
