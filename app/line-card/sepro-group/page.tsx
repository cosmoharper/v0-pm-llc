import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Sepro Group | Plastics Machinery, LLC",
  description: "Sepro Group - 3-axis, 5-axis and 6-axis robots for injection molding machines",
}

export default function SeproGroupPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#F9D85C] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm mb-2">
            <Link href="/line-card" className="text-[#1a1a1a] hover:underline">Line Card</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">Sepro Group</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Sepro Group</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/brands/sepro.jpg"
              alt="Sepro Group robots for injection molding"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-[#1a1a1a] mb-6">
              The Sepro Group designs and integrates 3-axis, 5-axis and 6-axis robots with a unique native control platform to equip injection molding machines of all brands and sizes.
            </p>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Robot Types</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-[#1a1a1a]">
              <li>3-axis Cartesian robots</li>
              <li>5-axis robots</li>
              <li>6-axis articulated robots</li>
              <li>Native control platform</li>
              <li>Compatible with all injection molding machine brands</li>
            </ul>

            <p className="text-lg text-[#1a1a1a] mb-6">
              <a href="https://www.youtube.com/user/SeproRobotique" target="_blank" rel="noopener noreferrer" className="text-[#367CA4] hover:underline">videos +</a>
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
