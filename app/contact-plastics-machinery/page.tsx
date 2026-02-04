"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import Image from "next/image"

// Headshot images for sales reps
const repHeadshots: Record<string, string> = {
  "Sam Shellabarger": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sam-i3JSTCLzgzL4IBfixxXRhg0BFfoWWm.png",
  "Luke Miller": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luke-rKw6co7gpGkMPzwe5OtrBPs2nuFV2K.png",
  "Allen Reeves": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/allen-iY7cohAQ2dJiFTX4CfWRTqgUMPDJF8.png",
  "John Greer": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/john-TYeMcYo6dgEmrpjfYYrHbYXrfiHF6i.png",
  "Chuck Thiele, Jr.": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chuck-kPZMLv3nwirxAKKPQ4qXWmZG1w24T1.png",
  // Placeholder for reps without headshots
  "default": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rick-astley-mzJehpKLE9wLuvUBXMPy383iFMusz0.webp" // Rick Astley placeholder
}

export default function ContactPlasticsMachineryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "Phone Call",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          email: "",
          reason: "Phone Call",
          message: ""
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const regions = [
    {
      name: "Tennessee",
      reps: [
        { name: "Sam Shellabarger", phone: "(615) 771-0014 x101", email: "sam@pm-llc.net" }
      ]
    },
    {
      name: "South Carolina",
      reps: [
        { name: "Luke Miller", phone: "(864) 434-0596", email: "luke@pm-llc.net" }
      ]
    },
    {
      name: "North Carolina",
      reps: [
        { name: "Allen Reeves", phone: "(828) 464-2501", email: "allen@pm-llc.net" },
        { name: "Charles Husain", phone: "(336) 749-9107", email: "chas@pm-LLC.net" }
      ]
    },
    {
      name: "Georgia",
      reps: [
        { name: "John Greer", phone: "(678) 792-3470", email: "john@pm-llc.net" },
        { name: "Chuck Thiele, Jr.", phone: "(205) 767-7550", email: "chuck@pm-llc.net" },
        { name: "Luke Miller", phone: "(864) 434-0596", email: "luke@pm-llc.net" }
      ]
    },
    {
      name: "Alabama",
      reps: [
        { name: "Chuck Thiele, Jr.", phone: "(205) 767-7550", email: "chuck@pm-llc.net" }
      ]
    },
    {
      name: "Mississippi",
      reps: [
        { name: "Chuck Thiele, Jr.", phone: "(205) 767-7550", email: "chuck@pm-llc.net" }
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Inside Sales Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Inside Sales</h2>
            <p className="text-[#1a1a1a] mb-6">
              To get a quote, please call OR fill out this form and submit.
            </p>

            <div className="mb-8">
              <p className="font-bold text-[#1a1a1a]">Plastics Machinery, LLC</p>
              <p className="text-[#1a1a1a]">P.O. Box 2387</p>
              <p className="text-[#1a1a1a]">Brentwood, TN 37024</p>
              <p className="text-[#1a1a1a]">(615) 771-0014 x104</p>
              <p className="text-[#1a1a1a]">info@pm-llc.net</p>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-6">
                Thank you! Your message has been sent. We will contact you shortly.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-6">
                There was an error sending your message. Please try again or call us at (615) 771-0014.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#F9D85C]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#F9D85C]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="reason"
                    value="Phone Call"
                    checked={formData.reason === "Phone Call"}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    className="accent-[#F9D85C]"
                    disabled={isSubmitting}
                  />
                  <span className="text-[#1a1a1a]">Phone Call</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="reason"
                    value="Site Visit"
                    checked={formData.reason === "Site Visit"}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    className="accent-[#F9D85C]"
                    disabled={isSubmitting}
                  />
                  <span className="text-[#1a1a1a]">Site Visit</span>
                </label>
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#F9D85C] resize-none"
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#367CA4] hover:bg-[#2d6a8f] text-white font-bold px-6 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Regional Sales Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Regional Sales</h2>
            <p className="text-[#1a1a1a] mb-6">
              Click state below for regional sales rep.
            </p>

            {/* US Map placeholder - states clickable */}
            <div className="mb-8 bg-gray-100 p-4 rounded">
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region.name}
                    onClick={() => setActiveRegion(activeRegion === region.name ? null : region.name)}
                    className={`px-4 py-2 border transition-colors ${
                      activeRegion === region.name 
                        ? "bg-[#F9D85C] border-[#F9D85C]" 
                        : "bg-white border-gray-300 hover:border-[#F9D85C]"
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Regional Rep Cards */}
            {regions.map((region) => (
              <div 
                key={region.name}
                className={`mb-6 overflow-hidden transition-all ${
                  activeRegion === region.name || activeRegion === null ? "block" : "hidden"
                }`}
              >
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 border-b border-[#F9D85C] pb-2">
                  {region.name}
                </h3>
                <div className="space-y-4">
                  {region.reps.map((rep, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-gray-200">
                        <Image
                          src={repHeadshots[rep.name] || repHeadshots["default"]}
                          alt={rep.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-[#1a1a1a]">{rep.name}</p>
                        <p className="text-[#1a1a1a]">{rep.phone}</p>
                        <a href={`mailto:${rep.email}`} className="text-[#367CA4] hover:underline">{rep.email}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
