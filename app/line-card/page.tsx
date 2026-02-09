import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Line Card | Plastics Machinery, LLC",
  description: "Helping Plastics Processors Solve Everyday Problems with Quality Equipment Solutions",
}

const brands = [
  {
    name: "Shibaura Machine",
    slug: "shibaura-machine",
    image: "/images/brands/shibaura.jpg",
    logo: "/images/brands/logos/shibaura-logo.svg",
    shortDescription: "High precision electric and servo hydraulic molding machines",
    hasLogoOverlay: false,
  },
  {
    name: "Graham Engineering",
    slug: "graham-engineering",
    image: "/images/brands/graham.jpg",
    logo: "/images/brands/logos/graham-logo.svg",
    shortDescription: "Stand-alone extruders, co-extruders and complete extrusion systems",
    hasLogoOverlay: false,
  },
  {
    name: "Xaloy",
    slug: "xaloy",
    image: "/images/brands/xaloy.jpg",
    logo: "/images/brands/logos/xaloy-logo.svg",
    shortDescription: "Screws, barrels and front-end components for extrusion and injection",
    hasLogoOverlay: false,
  },
  {
    name: "Advantage Engineering",
    slug: "advantage-engineering",
    image: "/images/brands/advantage.jpg",
    logo: "/images/brands/logos/advantage-logo.png",
    shortDescription: "Industrial heat transfer products including chillers and temperature control",
    hasLogoOverlay: false,
  },
  {
    name: "Rapid Granulator",
    slug: "rapid-granulator",
    image: "/images/brands/rapid.jpg",
    logo: "/images/brands/logos/rapid-logo.svg",
    shortDescription: "High-quality granulators for plastic recycling and size reduction",
    hasLogoOverlay: false,
  },
  {
    name: "Novatec",
    slug: "novatec",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%281%29.png-WMliaaHBU7C8wSx0t6Rqv9mxcWyhqU.jpeg",
    logo: "/images/brands/logos/novatec-logo.png",
    shortDescription: "Resin dryers, conveying and blending systems for plastics",
    hasLogoOverlay: true,
  },
  {
    name: "DynaCon",
    slug: "dynacon",
    image: "/images/brands/dynacon.jpg",
    logo: "/images/brands/logos/dynacon-logo.svg",
    shortDescription: "Flexible modular conveyor systems for manufacturing",
    hasLogoOverlay: false,
  },
  {
    name: "Sepro Group",
    slug: "sepro-group",
    image: "/images/brands/sepro.jpg",
    logo: "/images/brands/logos/sepro-logo.svg",
    shortDescription: "3-axis, 5-axis and 6-axis robots for injection molding",
    hasLogoOverlay: false,
  },
  {
    name: "Bay Plastics Machinery",
    slug: "bay-plastics-machinery",
    image: "/images/brands/bay-plastics.jpg",
    logo: "/images/brands/logos/bay-plastics-logo.png",
    shortDescription: "Strand pelletizers, conveyors, water baths and accessories",
    hasLogoOverlay: false,
  },
  {
    name: "H-P Products",
    slug: "hp-products",
    image: "/images/brands/hp-products.jpg",
    logo: "/images/brands/logos/hp-products-logo.png",
    shortDescription: "Tubing, bends, and fittings for vacuum conveying",
    hasLogoOverlay: false,
  },
]

export default function LineCardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#F9D85C] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] text-center text-balance">
            Helping Plastics Processors Solve Everyday Problems with Quality Equipment Solutions
          </h1>
        </div>
      </div>

      {/* Download PDF Button */}
      <div className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <a 
            href="/PM204R-line-card.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#367CA4] text-white px-6 py-3 font-medium hover:bg-[#2d6a8f] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Line Card PDF
          </a>
        </div>
      </div>

      {/* Brand Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link 
              key={brand.slug}
              href={`/line-card/${brand.slug}`}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`relative aspect-[4/3] ${brand.slug === "novatec" ? "bg-black" : "bg-gray-100"}`}>
                <Image
                  src={brand.image || "/placeholder.svg"}
                  alt={brand.name}
                  fill
                  priority={["shibaura-machine", "graham-engineering", "xaloy", "advantage-engineering"].includes(brand.slug)}
                  className={`${brand.slug === "novatec" ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-300`}
                />
                {/* Logo Overlay - styled horizontal band similar to baked-in cards */}
                {brand.hasLogoOverlay && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[220px] bg-[rgba(255,255,255,1)] opacity-65" />
                    <div className="relative w-3/4 h-16 z-10">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#1a1a1a] text-lg mb-2 group-hover:text-[#367CA4] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {brand.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
