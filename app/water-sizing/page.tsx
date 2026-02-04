import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Water Sizing | Plastics Machinery, LLC",
  description: "Water sizing and chiller sizing guidelines for plastics processing",
}

export default function WaterSizingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <div className="bg-[#F9D85C] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Guidelines</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <nav className="space-y-2">
              <Link 
                href="/drying-and-conveying"
                className="block py-2 px-4 hover:bg-gray-100 text-[#1a1a1a] transition-colors"
              >
                Drying and Conveying
              </Link>
              <Link 
                href="/screw-and-barrel-rebuilding"
                className="block py-2 px-4 hover:bg-gray-100 text-[#1a1a1a] transition-colors"
              >
                Screw and Barrel Rebuilding
              </Link>
              <Link 
                href="/water-sizing"
                className="block py-2 px-4 bg-[#F9D85C] text-[#1a1a1a] font-semibold"
              >
                Water Sizing
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Header Image */}
            <div className="mb-2">
              <Image
                src="/images/water-sizing-head.png"
                alt="Water cooling and chiller equipment"
                width={800}
                height={300}
                className="w-full h-auto"
              />
            </div>

            {/* Chiller Sizing */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1 text-left font-bold">Chiller Sizing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">
                      2.4 gpm/Ton flow rate 1 Chiller Ton = (gpm x dT)/24 12,000 btu/hr = 1 chiller ton
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tower Sizing */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1 text-left font-bold">Tower Sizing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 py-1">
                      3 gpm/Ton flow rate (based on 85 F supply, 95 F return, 78 F WB) 1 Tower Ton = (gpm x dT) / 30 15,000 btu/hr = 1 tower ton Ft. head=psi x 2.31
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Chiller Sizing for Molding */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1 text-left font-bold">Chiller Sizing for Molding</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">30 lb/hr HDPE = 1 Ton</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">35 lb/hr LDPE, PP, or Acrylic = 1 Ton</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">50 lb/hr PS, ABS, Acetal, PC = 1 Ton</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">75 lb/hr PVC = 1 Ton</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">40 lb/hr PET, Nylon, PPO, Urethane = 1 Ton</td></tr>
                </tbody>
              </table>
            </div>

            {/* Chiller Sizing for Profile Extrusion */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1 text-left font-bold">Chiller Sizing for Profile Extrusion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">80 lb/hr PVC or ABS = 1 Ton</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">75 lb/hr PS = 1 Ton</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">50 lb/hr HDPE or PP = 1 Ton</td></tr>
                </tbody>
              </table>
            </div>

            {/* Chiller Sizing for Blow Molding */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1 text-left font-bold">Chiller Sizing for Blow Molding</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">40 lb/hr Polyolefins = 1 Ton</td></tr>
                </tbody>
              </table>
            </div>

            {/* Extruder Cooling */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1 text-left font-bold">Extruder Cooling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">Extruder Barrel Cooling = 1 ton/inch diameter</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">Extruder Feed Throat (3.5″ = 1 Ton, 4.5″ to 6″ = 2 Tons)</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">Extruder Gearbox = 1 ton per 100 hp</td></tr>
                </tbody>
              </table>
            </div>

            {/* Misc Cooling */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1 text-left font-bold">Misc Cooling</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">Hydraulic pump = 0.1 Ton/hp</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">Air Compressor = 0.1 Ton/hp</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">Air Compressor w/aftercooler = 0.2 Ton/hp</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">Machine Tools = 0.1 Ton/hp</td></tr>
                </tbody>
              </table>
            </div>

            {/* Water Pipe Sizing */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th colSpan={2} className="border border-gray-300 px-2 py-1 text-left font-bold">Water Pipe Sizing</th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th colSpan={2} className="border border-gray-300 px-2 py-1 text-left text-sm font-normal">(Based on 10′ HD loss/ 100′ pipe)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">6 gpm</td><td className="border border-gray-300 px-2 py-1">1/2″ pipe</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">10 gpm</td><td className="border border-gray-300 px-2 py-1">3/4″ pipe</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">15 gpm</td><td className="border border-gray-300 px-2 py-1">1″ pipe</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">40 gpm</td><td className="border border-gray-300 px-2 py-1">1-1/2″ pipe</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">70 gpm</td><td className="border border-gray-300 px-2 py-1">2″ pipe</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">100 gpm</td><td className="border border-gray-300 px-2 py-1">2-1/2″ pipe</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">150 gpm</td><td className="border border-gray-300 px-2 py-1">3″ pipe</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">275 gpm</td><td className="border border-gray-300 px-2 py-1">4″ pipe</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">850 gpm</td><td className="border border-gray-300 px-2 py-1">6″ pipe</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">1500 gpm</td><td className="border border-gray-300 px-2 py-1">8″ pipe</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
