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
          {/* Images */}
          <div className="flex flex-col gap-4">
            {/* Hero product image */}
            <div className="relative aspect-[4/3] bg-[#0a0a0a] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%2818%29.png-46qxRq33UAwqhLLtFRpEldzXO8dGOM.jpeg"
                alt="Novatec resin drying equipment"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Additional product images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group rounded-lg overflow-hidden shadow-sm border border-border bg-background">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SVP%20%E2%80%98Silencer%E2%80%99%20Series%20Positive%20Displacement%20Pumps%20%281%29-ple4j1SPxIevtzOHGOCLS6nvZ2ZPWG.png"
                    alt="Novatec SVP Silencer Series Positive Displacement Pumps"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-3 py-2.5 border-t border-border bg-muted">
                  <p className="text-xs font-semibold text-foreground leading-tight">SVP 'Silencer' Series</p>
                  <p className="text-xs text-muted-foreground">Positive Displacement Pumps</p>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden shadow-sm border border-border bg-background">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VRX%20Series%20%281%29-Sj4FT1VfSCeQIGXnNZBgyeQME61oAo.png"
                    alt="Novatec VRX Series vacuum receiver"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-3 py-2.5 border-t border-border bg-muted">
                  <p className="text-xs font-semibold text-foreground leading-tight">VRX Series</p>
                  <p className="text-xs text-muted-foreground">Vacuum Receivers</p>
                </div>
              </div>
            </div>
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
              Part of the <Image src="/images/maguire-logo.png" alt="Maguire" width={70} height={14} style={{ width: 'auto', height: '14px' }} className="inline-block" /> Family.
            </p>

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
