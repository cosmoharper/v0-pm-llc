import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Shibaura Machine | Plastics Machinery, LLC",
  description: "Shibaura (formerly Toshiba) Machine - High precision electric and servo hydraulic molding machines",
}

export default function ShibauraMachinePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#F9D85C] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm mb-2">
            <Link href="/line-card" className="text-[#1a1a1a] hover:underline">Line Card</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1a1a1a]">Shibaura Machine</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Shibaura Machine</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src="/images/brands/shibaura.jpg"
              alt="Shibaura Machine injection molding equipment"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-lg text-[#1a1a1a] mb-6">
              Shibaura (formerly Toshiba) Machine is a leading global supplier of high precision electric molding machines from 30 to 2,750 tons and servo hydraulic molding machines from 110 to 3,850 tons.
            </p>
            <p className="text-lg text-[#1a1a1a] mb-6">
              Our North America headquarters is fully equipped to support sales, service, parts, mold trials, and customer training.
            </p>

            <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Videos</h2>
            <ul className="space-y-2 mb-8">
              <li>
                <a href="https://vimeo.com/153113677" target="_blank" rel="noopener noreferrer" className="text-[#367CA4] hover:underline">Shibaura SXII Highlights</a>
              </li>
              <li>
                <a href="https://vimeo.com/158648448" target="_blank" rel="noopener noreferrer" className="text-[#367CA4] hover:underline">Shibaura Machine SXII Injector</a>
              </li>
              <li>
                <a href="https://vimeo.com/158648451" target="_blank" rel="noopener noreferrer" className="text-[#367CA4] hover:underline">Shibaura Machine SXII Simultaneous Motion</a>
              </li>
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
