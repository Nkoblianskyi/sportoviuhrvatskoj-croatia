"use client"
import { Star } from "lucide-react"
import Image from "next/image"
import type { BettingSite } from "@/lib/data"

interface CasinoCardProps {
  casino: BettingSite
  rank: number
}

export function CasinoCard({ casino, rank }: CasinoCardProps) {
  const isTop3 = rank <= 3

  const renderStars = (size: "sm" | "md") => {
    const starClass = size === "sm" ? "w-4 h-4" : "w-5 h-5"
    const stars = []
    const fullStars = casino.stars

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className={`${starClass} fill-[#ff6b35] text-[#ff6b35]`} />)
    }

    for (let i = fullStars; i < 5; i++) {
      stars.push(<Star key={`empty-${i}`} className={`${starClass} text-gray-600`} />)
    }

    return stars
  }

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold bg-gradient-to-br from-[#ff6b35] to-[#f7931e] bg-clip-text text-transparent">
          {rating.toFixed(1)}
        </span>
        <span className="text-base text-gray-400 font-medium">/10</span>
      </div>
    )
  }

  return (
    <div className="relative">
      {casino.badges && casino.badges.length > 0 && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] px-4 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-black rounded-full text-white uppercase tracking-widest shadow-2xl shadow-[#ff6b35]/50 border-2 border-white/20">
            {casino.badges[0]}
          </div>
        </div>
      )}

      <a
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className={`block relative rounded-xl p-4 md:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer casino-card ${
          isTop3 ? "border-2 border-[#ff6b35]/40 shadow-xl shadow-[#ff6b35]/10" : "border border-white/10"
        }`}
      >
        {/* Desktop & Tablet Layout */}
        <div className="hidden md:grid md:grid-cols-[80px_1fr_1fr_auto] lg:grid-cols-[100px_200px_1fr_auto] md:gap-4 lg:gap-8 md:items-center pt-2">
          <div className="text-center flex-shrink-0">
            <div className={`text-5xl lg:text-6xl font-black ${isTop3 ? "text-[#ff6b35]" : "text-gray-600"}`}>
              {rank}
            </div>
          </div>

          <div className="bg-black p-4 lg:p-6 rounded-lg border border-gray-800 flex-shrink-0 w-full lg:w-[200px]">
            <Image
              src={casino.logo || "/placeholder.svg"}
              alt={casino.name}
              width={160}
              height={80}
              className="w-full h-16 lg:h-20 object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center flex-shrink-0 px-2 lg:px-6">
            <div className="text-xs uppercase tracking-wider text-[#ff6b35] mb-2 lg:mb-3 font-bold">Bonus</div>
            <div className="text-xl lg:text-3xl font-bold text-white text-center leading-tight">{casino.bonus}</div>
            {casino.dopBonus && (
              <div className="text-xs lg:text-sm text-[#f7931e] text-center mt-1 lg:mt-2 font-semibold">
                {casino.dopBonus}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <div className="text-center flex-shrink-0">
              {renderRating(casino.rating)}
              <div className="flex items-center gap-1 justify-center mt-2 lg:mt-3">{renderStars("sm")}</div>
              <div className="text-xs text-gray-500 mt-2 lg:mt-3 font-medium">{casino.reviews} recenzija</div>
            </div>

            <div className="flex-shrink-0">
              <div className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:from-[#f7931e] hover:to-[#ff6b35] text-white font-bold whitespace-nowrap text-sm lg:text-base px-6 lg:px-8 py-3 lg:py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ff6b35]/30">
                <span>Igraj Sada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="bg-black p-4 rounded-lg border border-gray-800 flex-shrink-0 w-[140px]">
              <Image
                src={casino.logo || "/placeholder.svg"}
                alt={casino.name}
                width={140}
                height={70}
                className="w-[140px] h-[70px] object-contain"
              />
            </div>
            <div className="flex flex-col items-center justify-center flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-wider text-[#ff6b35] mb-2 font-bold">Bonus</div>
              <div className="text-lg font-bold text-white text-center leading-tight break-words">{casino.bonus}</div>
              {casino.dopBonus && (
                <div className="text-xs text-[#f7931e] text-center mt-1 font-semibold break-words">
                  {casino.dopBonus}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className={`text-3xl font-black flex-shrink-0 ${isTop3 ? "text-[#ff6b35]" : "text-gray-600"}`}>
                {rank}
              </div>
              <div className="flex items-baseline gap-1.5 flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-br from-[#ff6b35] to-[#f7931e] bg-clip-text text-transparent">
                  {casino.rating.toFixed(1)}
                </span>
                <span className="text-xs text-gray-400">/10</span>
              </div>
              <div className="flex items-center gap-0.5 flex-shrink-0">{renderStars("sm")}</div>
            </div>
            <div className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:from-[#f7931e] hover:to-[#ff6b35] text-white font-bold text-sm px-5 py-3 rounded-lg flex-shrink-0 transition-all duration-300 shadow-lg shadow-[#ff6b35]/30">
              <span>Igraj</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500 text-center leading-relaxed">{casino.terms}</p>
        </div>
      </a>
    </div>
  )
}
