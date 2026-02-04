import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Drying and Conveying | Plastics Machinery, LLC",
  description: "Drying and conveying guidelines for plastics processing equipment",
}

export default function DryingAndConveyingPage() {
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
                className="block py-2 px-4 bg-[#F9D85C] text-[#1a1a1a] font-semibold"
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
                className="block py-2 px-4 hover:bg-gray-100 text-[#1a1a1a] transition-colors"
              >
                Water Sizing
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <Image
                src="/images/drying-conveying-head.png"
                alt="Drying and Conveying Equipment"
                width={800}
                height={300}
                className="w-full h-auto"
              />
            </div>

            {/* Typical Resin Drying Temperature */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th colSpan={3} className="border border-gray-300 px-2 py-1 text-left font-bold">
                      Typical Resin Drying Temperature
                    </th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left">Polymer</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Temp (°F)</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">ABS High Impact</td><td className="border border-gray-300 px-2 py-1">190</td><td className="border border-gray-300 px-2 py-1">4</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">ABS High Heat</td><td className="border border-gray-300 px-2 py-1">190</td><td className="border border-gray-300 px-2 py-1">4</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">ABS Med Impact</td><td className="border border-gray-300 px-2 py-1">190</td><td className="border border-gray-300 px-2 py-1">4</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">Acetal</td><td className="border border-gray-300 px-2 py-1">200</td><td className="border border-gray-300 px-2 py-1">1.5</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">Acrylic Gen Purpose</td><td className="border border-gray-300 px-2 py-1">180</td><td className="border border-gray-300 px-2 py-1">1.5</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">Acrylic High Heat</td><td className="border border-gray-300 px-2 py-1">180</td><td className="border border-gray-300 px-2 py-1">2.5</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">Acrylic High Impact</td><td className="border border-gray-300 px-2 py-1">180</td><td className="border border-gray-300 px-2 py-1">2.5</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">Nylon 6/6</td><td className="border border-gray-300 px-2 py-1">180</td><td className="border border-gray-300 px-2 py-1">4</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">Nylon 6</td><td className="border border-gray-300 px-2 py-1">180</td><td className="border border-gray-300 px-2 py-1">4</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">Nylon 6/10</td><td className="border border-gray-300 px-2 py-1">180</td><td className="border border-gray-300 px-2 py-1">4</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">Nylon 12</td><td className="border border-gray-300 px-2 py-1">180</td><td className="border border-gray-300 px-2 py-1">4</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">Polycarbonate Med Vis.</td><td className="border border-gray-300 px-2 py-1">250</td><td className="border border-gray-300 px-2 py-1">3.5</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">PET – Bottle</td><td className="border border-gray-300 px-2 py-1">340</td><td className="border border-gray-300 px-2 py-1">5</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">PBT</td><td className="border border-gray-300 px-2 py-1">260</td><td className="border border-gray-300 px-2 py-1">2.5</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">Polyetherimide</td><td className="border border-gray-300 px-2 py-1">310</td><td className="border border-gray-300 px-2 py-1">4</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">PPO</td><td className="border border-gray-300 px-2 py-1">210</td><td className="border border-gray-300 px-2 py-1">2.5</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">SAN</td><td className="border border-gray-300 px-2 py-1">180</td><td className="border border-gray-300 px-2 py-1">3</td></tr>
                </tbody>
              </table>
            </div>

            {/* Material Conveying Sizing */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th colSpan={3} className="border border-gray-300 px-2 py-1 text-left font-bold">
                      Material Conveying sizing Recommended Tubing Size
                    </th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left">Vacuum Pump HP</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Tubing size (in.)</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Conveying Air Rate (cfm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">5</td><td className="border border-gray-300 px-2 py-1">2</td><td className="border border-gray-300 px-2 py-1">100</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">10</td><td className="border border-gray-300 px-2 py-1">2.5</td><td className="border border-gray-300 px-2 py-1">160</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">15</td><td className="border border-gray-300 px-2 py-1">3</td><td className="border border-gray-300 px-2 py-1">240</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">25</td><td className="border border-gray-300 px-2 py-1">4</td><td className="border border-gray-300 px-2 py-1">440</td></tr>
                </tbody>
              </table>
            </div>

            {/* Conveying Tubing Bend Radius */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th colSpan={3} className="border border-gray-300 px-2 py-1 text-left font-bold">
                      Material Conveying sizing guidelines Conveying tubing recommended bend radius
                    </th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left">Tubing size (in.)</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Mat'l line bend radius (in.)</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Vacuum line bend radius (in.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">2</td><td className="border border-gray-300 px-2 py-1">18, 24</td><td className="border border-gray-300 px-2 py-1">9</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">2.5</td><td className="border border-gray-300 px-2 py-1">30</td><td className="border border-gray-300 px-2 py-1">9</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">3</td><td className="border border-gray-300 px-2 py-1">36</td><td className="border border-gray-300 px-2 py-1">9, 12</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">3.5</td><td className="border border-gray-300 px-2 py-1">36, 48</td><td className="border border-gray-300 px-2 py-1">12</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">4</td><td className="border border-gray-300 px-2 py-1">36, 48</td><td className="border border-gray-300 px-2 py-1">12, 18</td></tr>
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td colSpan={3} className="border border-gray-300 px-2 py-1 text-sm">
                      <div>Equivalent Feet:</div>
                      <div>Horizontal distance = 1 ft</div>
                      <div>vertical distance = 2 ft</div>
                      <div>90 degree elbow = 20 ft</div>
                      <div>flex hose = 4 ft</div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Typical Single Screw Extruder Rates */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th colSpan={4} className="border border-gray-300 px-2 py-1 text-left font-bold">
                      Typical Single Screw Extruder Rates
                    </th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left">Size</th>
                    <th colSpan={3} className="border border-gray-300 px-2 py-1 text-center">LBS/HR</th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-2 py-1 text-left"></th>
                    <th className="border border-gray-300 px-2 py-1 text-left">RPVC</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">FPVC</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">HDPE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">3/4″ 24:1 (19mm)</td><td className="border border-gray-300 px-2 py-1">5</td><td className="border border-gray-300 px-2 py-1">10</td><td className="border border-gray-300 px-2 py-1"></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">1″ 24:1 (25mm)</td><td className="border border-gray-300 px-2 py-1">10</td><td className="border border-gray-300 px-2 py-1">15</td><td className="border border-gray-300 px-2 py-1"></td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">1-1/4″ 24:1 (32mm)</td><td className="border border-gray-300 px-2 py-1">20</td><td className="border border-gray-300 px-2 py-1">30</td><td className="border border-gray-300 px-2 py-1"></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">1-1/2″ 24:1 (38mm)</td><td className="border border-gray-300 px-2 py-1">40</td><td className="border border-gray-300 px-2 py-1">75</td><td className="border border-gray-300 px-2 py-1"></td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">1-3/4″ 24:1 (44mm)</td><td className="border border-gray-300 px-2 py-1">50</td><td className="border border-gray-300 px-2 py-1">90</td><td className="border border-gray-300 px-2 py-1"></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">2″ 24:1 (50mm)</td><td className="border border-gray-300 px-2 py-1">90</td><td className="border border-gray-300 px-2 py-1">140</td><td className="border border-gray-300 px-2 py-1"></td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">2-1/2″ 24:1 (63mm)</td><td className="border border-gray-300 px-2 py-1">150</td><td className="border border-gray-300 px-2 py-1">250</td><td className="border border-gray-300 px-2 py-1"></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">75mm 24:1 (3″)</td><td className="border border-gray-300 px-2 py-1">200</td><td className="border border-gray-300 px-2 py-1">350</td><td className="border border-gray-300 px-2 py-1"></td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">3-1/2″ 24:1 (90mm)</td><td className="border border-gray-300 px-2 py-1">300</td><td className="border border-gray-300 px-2 py-1">500</td><td className="border border-gray-300 px-2 py-1"></td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">100mm 24:1 (4″)</td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1">800</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">100mm 30:1 (4″)</td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1">900</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">4-1/2″ 24:1 (113mm)</td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1">1000</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">4-1/2″ 30:1 (113mm)</td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1">1200</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">130mm 24:1 (5″)</td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1">1300</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">130mm 30:1 (5″)</td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1">1500</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">6″ 24:1 (151mm)</td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1">1600</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">6″ 30:1 (151mm)</td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1">1800</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">175mm 30:1</td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1">3000</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">8″ 30:1 (208mm)</td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1"></td><td className="border border-gray-300 px-2 py-1">4000</td></tr>
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
