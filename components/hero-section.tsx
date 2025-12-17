"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const getCurrentDate = () => {
      const now = new Date()
      const months = [
        "Siječanj",
        "Veljača",
        "Ožujak",
        "Travanj",
        "Svibanj",
        "Lipanj",
        "Srpanj",
        "Kolovoz",
        "Rujan",
        "Listopad",
        "Studeni",
        "Prosinac",
      ]
      return `${months[now.getMonth()]} ${now.getFullYear()}`
    }
    setCurrentDate(getCurrentDate())
  }, [])

  return (
    <section
      className="relative text-white py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/sports-hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a]/95 via-[#121827]/90 to-[#0a0e1a]/95" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 leading-tight">
            <span className="text-white">Najbolje Sportske</span>
            <br />
            <span className="bg-gradient-to-r from-[#ff6b35] via-[#f7931e] to-[#ff6b35] bg-clip-text text-transparent animate-gradient">
              Kladionice u Hrvatskoj
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            Stručne recenzije i analize. Pronađite najbolju kladionicu za sportsko klađenje.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]"></span>
              100% Licencirano
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f7931e]"></span>
              Vrhunske Kvote
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Live Klađenje
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Provjereno & Testirano
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
          <span className="text-xs text-slate-400">Ažurirano:</span>
          <span className="text-xs font-semibold text-[#ff6b35]">{currentDate}</span>
        </div>
      </div>
    </section>
  )
}
