"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Script from "next/script"
import Image from "next/image"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When to Repair an Extrusion Screw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As screws wear, the clearance between the screw flight and barrel wall increases, especially in the high pressure areas of the barrel. For example, a new 2.5\" diameter screw will have 0.005\" to 0.007\" diameter clearance or approximately 0.003\" on the radius. When a 2.5\" screw is worn to around 0.020\" on the diameter clearance, a rate reduction will be noticed along with elevated melt temperature. When worn to around 0.030\" on the diameter clearance, good quality product cannot be made and the efficiency of the operation is so low that money is being lost with every pound of product that is extruded."
      }
    },
    {
      "@type": "Question",
      "name": "When to Replace an Extrusion Barrel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As barrels wear, the clearance between the screw flight and barrel wall increases, especially in the high pressure areas of the barrel. Buying a new screw for a worn barrel does not solve the clearance problem. It may make it better, but it is not a fix for a worn barrel. Since barrels only wear in the high pressure areas or where fusion of the polymer takes place, measuring the end of the barrel ID does not tell the whole story of wear. A bore gage should be used to measure wear all along the barrel."
      }
    },
    {
      "@type": "Question",
      "name": "Why don't we recommend lining barrels in extrusion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The barrels are longer. In extrusion (unlike injection molding) the screw only turns one direction. When several sleeves (sleeves 12-15\" long) are heat shrunk in the barrel they do not match up evenly. To hone or grind out the inside diameter of the barrel would take hours and hours to perform, resulting in high cost. The hone will follow the highs and lows of the barrel and not yield a straight bore. Problems may include: sleeves can shrink and spin, sleeves can weld to screw flights if too tight, and they can have poor heat transfer from heater bands. All of this is 60-75% of a new barrel cost. Do the right thing and purchase a new barrel!"
      }
    }
  ]
}

export default function ScrewAndBarrelRebuildingPage() {
  return (
    <main className="min-h-screen">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
                className="block py-2 px-4 bg-[#F9D85C] text-[#1a1a1a] font-semibold"
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
            {/* Header Image */}
            <div className="mb-8">
              <Image
                src="/images/screw-barrel-head.png"
                alt="Extrusion screws and barrels"
                width={800}
                height={300}
                className="w-full h-auto"
              />
            </div>

            {/* Wear Clearances Table */}
            <div className="mb-8 overflow-x-auto">
              <p className="mb-4 text-[#1a1a1a]">
                These are the Recommended Maximum Wear Clearances between screw and barrel for best output performance
              </p>
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1 text-left">Screw Size</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">New Part Clearance</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Worn Clearance</th>
                    <th className="border border-gray-300 px-2 py-1 text-left">Max Wear Clearance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-2 py-1">1″</td><td className="border border-gray-300 px-2 py-1">.003-.004″</td><td className="border border-gray-300 px-2 py-1">.018″</td><td className="border border-gray-300 px-2 py-1">.020″</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">1-1/2″</td><td className="border border-gray-300 px-2 py-1">.005-.008″</td><td className="border border-gray-300 px-2 py-1">.020″</td><td className="border border-gray-300 px-2 py-1">.025″</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">2-1/2"</td><td className="border border-gray-300 px-2 py-1">.007-.010"</td><td className="border border-gray-300 px-2 py-1">.021"</td><td className="border border-gray-300 px-2 py-1">.030"</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">3-1/2″</td><td className="border border-gray-300 px-2 py-1">.010-.012″</td><td className="border border-gray-300 px-2 py-1">.030"</td><td className="border border-gray-300 px-2 py-1">.036″</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">4-1/2″</td><td className="border border-gray-300 px-2 py-1">.010-.013″</td><td className="border border-gray-300 px-2 py-1">.030"</td><td className="border border-gray-300 px-2 py-1">.039″</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">6″</td><td className="border border-gray-300 px-2 py-1">.013-.016″</td><td className="border border-gray-300 px-2 py-1">.039"</td><td className="border border-gray-300 px-2 py-1">.048″</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">8″</td><td className="border border-gray-300 px-2 py-1">.016-.019″</td><td className="border border-gray-300 px-2 py-1">.048"</td><td className="border border-gray-300 px-2 py-1">.057"</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-2 py-1">10″</td><td className="border border-gray-300 px-2 py-1">.018-.021″</td><td className="border border-gray-300 px-2 py-1">.054"</td><td className="border border-gray-300 px-2 py-1">.063″</td></tr>
                  <tr><td className="border border-gray-300 px-2 py-1">12″</td><td className="border border-gray-300 px-2 py-1">.020-.025"</td><td className="border border-gray-300 px-2 py-1">.060"</td><td className="border border-gray-300 px-2 py-1">.075″</td></tr>
                </tbody>
              </table>
            </div>

            <div className="prose max-w-none text-[#1a1a1a]">
              <p className="mb-4">
                Screws should be rebuilt when dimensions reach the worn clearance measurements as product quality is being affected. When dimensions reach the maximum clearance, performance (output and product quality) suffers greatly.
              </p>

              <p className="mb-4 font-semibold">
                Here is a typical payback example using a 4.5" dia x 24:1 barrier screw processing polyolefin:
              </p>

              <div className="mb-4 pl-4">
                <p>Nominal Rate – 1,500 lbs/hr</p>
                <p>Melt Temperature – 420 to 430° F.</p>
                <p>Output Stability – +/- 5%</p>
              </div>

              <p className="mb-4">
                Effects of diametrical wear factor of .025-.030 may result in a 60 lb/hr output reduction due to wear
              </p>

              <div className="mb-4 pl-4">
                <p>Nominal Rate – 1,440 lbs/hr</p>
                <p>Melt Temperature – 430 to 450° F.</p>
                <p>Output Stability – +/- 10%</p>
              </div>

              <p className="mb-4">
                Penalty Cost: 60 lbs/hour x 0.65 = $ 65.00 /hour x 24 hours = $936.00 per day
              </p>

              <p className="mb-4 font-semibold">
                A typical screw rebuild for a 4.5" Dia X 24:1 Barrier Screw with Colmonoy 56 hard surfacing costs $3,642. with a 2 week delivery.
              </p>

              <p className="mb-6 font-bold text-lg">
                Your Return on Investment Payback is 3.89 days
              </p>

              <p className="mb-8">
                If you are planning on rebuilding your screws, take advantage of Xaloy's screw rebuilding cell that features fast turnarounds (7– 14 days) on your screws. Streamlined using Lean manufacturing principals, we can receive incoming screws for inspection, estimate costs, quote and release to the shop with your approval within 24 hours of receiving the parts.
              </p>
            </div>

            {/* FAQ Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="when-to-repair">
                <AccordionTrigger className="text-lg font-bold text-[#1a1a1a] hover:no-underline">
                  When to Repair an Extrusion Screw
                </AccordionTrigger>
                <AccordionContent className="prose max-w-none text-[#1a1a1a]">
                  <p className="mb-4">
                    As screws wear, the clearance between the screw flight and barrel wall increases, especially in the high pressure areas of the barrel. For example, a new 2.5" diameter screw will have 0.005" to 0.007" diameter clearance or approximately 0.003" on the radius.
                  </p>
                  <p className="mb-4">
                    When a 2.5" screw is worn to around 0.020" on the diameter clearance, a rate reduction will be noticed along with elevated melt temperature. It is common practice to speed up the screw to regain the output reduction. This results in even higher melt temperatures. Next, the barrel temperatures are lowered to overcome the higher melt temperature. At this point, the extruder is running at a higher rpm and lower barrel zone temperature settings than normal. The operator is not in control of the extrusion operation at this point. The worn screw is in control of your business. The extrusion operator is fighting a problem his company accepts, when he could be improving the bottom line by fine tuning the process to an inspect screw. The worn screw yields much more off spec extrusions than normal. This is money down the drain.
                  </p>
                  <p className="mb-4">
                    When a 2.5" screw is worn to around 0.030" on the diameter clearance, good quality product cannot be made and the efficiency of the operation is so low that money is being lost with every pound of product that is extruded. Regrind rates go up and finished product quality goes down. Operators are frustrated, QC is pressured to accept out of spec product, and the customer is complaining. At this point you are going out of business by letting your competitor in the door.
                  </p>
                  <p className="mb-4 italic">
                    Note: The above recommendation is assuming the barrel is new or has no wear. As barrel wear would have to be added to the screw wear to get the total clearance.
                  </p>
                  <p className="font-semibold">
                    You pay for screw repair whether you repair it or not. If you don't know what your wear dimensions are, we have the tools and can measure your screws.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="when-to-replace">
                <AccordionTrigger className="text-lg font-bold text-[#1a1a1a] hover:no-underline">
                  When to Replace an Extrusion Barrel
                </AccordionTrigger>
                <AccordionContent className="prose max-w-none text-[#1a1a1a]">
                  <p className="mb-4">
                    As barrels wear, the clearance between the screw flight and barrel wall increases, especially in the high pressure areas of the barrel. Buying a new screw for a worn barrel does not solve the clearance problem. It may make it better, but it is not a fix for a worn barrel. Since barrels only wear in the high pressure areas or where fusion of the polymer takes place, measuring the end of the barrel ID does not tell the whole story of wear. A bore gage should be used to measure wear all along the barrel. Keep in mind that the screw wear has to be taken into account with barrel wear to determine the total clearance. If you don't know what your wear dimensions are, we have the tools and can measure your barrels.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="repairing-barrels">
                <AccordionTrigger className="text-lg font-bold text-[#1a1a1a] hover:no-underline">
                  Repairing Extrusion Barrels
                </AccordionTrigger>
                <AccordionContent className="prose max-w-none text-[#1a1a1a]">
                  <p className="mb-4">
                    In the injection molding markets, it is common to "re-sleeve" the high pressure end of the barrel. The last 20" or so of the barrel is re-sleeved. The screw is reciprocating back and forth.
                  </p>
                  
                  <h4 className="font-bold mb-2">Why don't we recommend lining barrels in extrusion?</h4>
                  <p className="mb-4">
                    The barrels are longer. Example: 3.5" x 24:1 L/D is approximately 80" long, not including the feed throat. In extrusion (unlike injection molding) the screw only turns one direction. When several sleeves (sleeves 12-15" long) are heat shrunk in the barrel they do not match up evenly. To hone or grind out the inside diameter of the barrel would take hours and hours to perform, resulting in high cost. The hone will follow the highs and lows of the barrel and not yield a straight bore. All the time, the hone is wearing or reducing the thickness of the bimetallic liner that has been inserted.
                  </p>
                  <p className="mb-4">
                    Some customers in blown film applications have been led to believe they can get at least another 6 months to 1 year out of the barrel. WRONG!
                  </p>

                  <h4 className="font-bold mb-2">Problems that may pop up later with barrel rebuilds:</h4>
                  <ul className="list-disc pl-6 mb-4">
                    <li>The sleeves can shrink and spin</li>
                    <li>The sleeves can weld to the screw flights if too tight (caused by high and lows of honing barrel)</li>
                    <li>They can have poor heat transfer from heater bands, due to different metals and space between OD of barrel tube and ID of new sleeves</li>
                  </ul>
                  <p className="font-bold">
                    All of the above is 60-75% of a new barrel cost. Do the right thing and purchase a new barrel!
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
