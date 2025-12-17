"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Star } from "lucide-react"
import { bettingSites } from "@/lib/data"
import { linkifyText } from "@/lib/utils"

export function WelcomeModal() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const closeModal = () => {
    setShowModal(false)
  }

  if (!showModal) return null

  const topCasino = bettingSites[0]

  const renderStars = (stars: number) => {
    const starElements = []

    for (let i = 1; i <= 5; i++) {
      starElements.push(
        <Star key={i} className={`h-5 w-5 ${i <= stars ? "text-[#ff6b35] fill-[#ff6b35]" : "text-gray-600"}`} />,
      )
    }
    return starElements
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal()
        }
      }}
    >
      <div className="bg-zinc-900 rounded-2xl w-full max-w-md relative overflow-hidden border border-zinc-800">
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            closeModal()
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-50 bg-zinc-800 hover:bg-zinc-700 rounded-full p-2 transition-all duration-300"
          type="button"
          aria-label="Zatvori"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-[#ff6b35] text-xs font-bold uppercase tracking-widest mb-2">Preporuka #1</p>
            <h2 className="font-bold text-2xl text-white">Najbolja Kladionica 2025</h2>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="rounded-xl p-4 w-fit">
              <Image
                src={topCasino.logo || "/placeholder.svg"}
                alt={topCasino.name}
                width={160}
                height={80}
                className="object-contain w-40 h-20"
              />
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-1">{renderStars(topCasino.stars)}</div>
            <div className="flex items-baseline gap-1">
              <span className="text-white font-bold text-2xl">{topCasino.rating.toFixed(1)}</span>
              <span className="text-gray-500 text-sm">/10</span>
            </div>
          </div>

          {/* Bonus */}
          <div className="bg-zinc-800 rounded-xl p-5 mb-6 text-center border border-zinc-700">
            <p className="text-[#ff6b35] text-xs font-bold uppercase tracking-wider mb-2">Bonus Dobrodošlice</p>
            <p className="text-white font-bold text-xl">{topCasino.bonus}</p>
            {topCasino.dopBonus && <p className="text-[#f7931e] text-sm mt-2 font-semibold">{topCasino.dopBonus}</p>}
          </div>

          {/* CTA Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              window.open(topCasino.url, "_blank", "noopener,noreferrer")
              closeModal()
            }}
            className="w-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:from-[#f7931e] hover:to-[#ff6b35] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-lg shadow-lg shadow-[#ff6b35]/30"
          >
            Preuzmi Bonus
          </button>

          {/* Terms */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs leading-relaxed" onClick={(e) => e.stopPropagation()}>
              {linkifyText(topCasino.terms)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
