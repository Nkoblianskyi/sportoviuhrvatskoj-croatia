"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, X, Cookie } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics: true, marketing: true }))
    setShowConsent(false)
    setShowModal(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    localStorage.setItem("cookie-preferences", JSON.stringify({ essential: true, analytics: false, marketing: false }))
    setShowConsent(false)
    setShowModal(false)
  }

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", "custom")
    localStorage.setItem("cookie-preferences", JSON.stringify(cookiePreferences))
    setShowConsent(false)
    setShowModal(false)
  }

  if (!showConsent) return null

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-50 animate-in slide-in-from-bottom duration-700">
        <div className="bg-gradient-to-r from-[#0a0e1a]/98 via-[#121827]/98 to-[#0a0e1a]/98 backdrop-blur-2xl border-t-2 border-[#ff6b35]/30 shadow-[0_-15px_60px_rgba(255,107,53,0.15)]">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-8 md:py-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10">
              <div className="flex items-start gap-5 flex-1">
                <div className="flex-shrink-0 bg-gradient-to-br from-[#ff6b35]/20 to-[#f7931e]/20 rounded-2xl p-4 border-2 border-[#ff6b35]/30">
                  <Cookie className="h-7 w-7 text-[#f7931e]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    Kolačići i Vaša Privatnost
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed max-w-3xl">
                    Koristimo kolačiće kako bismo osigurali najbolje moguće iskustvo i prilagodene sadržaje.{" "}
                    <button
                      onClick={() => setShowModal(true)}
                      className="text-[#f7931e] hover:text-[#ff6b35] underline underline-offset-2 font-bold transition-colors"
                    >
                      Saznajte više
                    </button>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 w-full lg:w-auto flex-col sm:flex-row">
                <button
                  onClick={acceptCookies}
                  className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:from-[#f7931e] hover:to-[#ff6b35] text-white px-8 py-4 rounded-xl font-extrabold transition-all shadow-xl shadow-[#ff6b35]/30 hover:shadow-2xl hover:shadow-[#f7931e]/40 text-base uppercase tracking-wider"
                >
                  Prihvati sve
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-[#121827] hover:bg-[#1a2744] text-white px-8 py-4 rounded-xl font-bold transition-all border-2 border-[#ff6b35]/40 hover:border-[#f7931e]/60 text-base"
                >
                  Postavke
                </button>
                <button
                  onClick={declineCookies}
                  className="bg-transparent hover:bg-[#121827]/50 text-gray-300 px-8 py-4 rounded-xl font-semibold transition-all border-2 border-gray-600 hover:border-gray-500 text-base hidden sm:block"
                >
                  Odbij
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-500">
          <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" onClick={() => setShowModal(false)} />

          <div className="relative bg-gradient-to-br from-[#0a0e1a] to-[#121827] rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-[#ff6b35]/40 animate-in zoom-in-95 duration-500">
            <div className="sticky top-0 z-10 bg-gradient-to-r from-[#0a0e1a] to-[#121827] border-b-2 border-[#ff6b35]/30 p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="bg-gradient-to-br from-[#ff6b35]/20 to-[#f7931e]/20 rounded-2xl p-4 border-2 border-[#ff6b35]/40">
                    <Cookie className="h-8 w-8 text-[#f7931e]" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Postavke Kolačića</h2>
                    <p className="text-base text-gray-400 mt-2">Prilagodite svoje preferencije</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-[#121827] rounded-xl border border-transparent hover:border-[#ff6b35]/30"
                  aria-label="Zatvori"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-8 md:p-10 space-y-8 overflow-y-auto max-h-[calc(90vh-220px)]">
              <div className="bg-gradient-to-br from-[#ff6b35]/10 to-[#f7931e]/10 rounded-2xl p-6 border-2 border-[#ff6b35]/20">
                <p className="text-white leading-relaxed text-base">
                  Koristimo kolačiće kako bismo osigurali optimalno iskustvo na našoj web stranici. Možete samostalno
                  odabrati koje vrste kolačića želite prihvatiti.
                </p>
              </div>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="bg-[#121827]/60 rounded-2xl p-8 border-2 border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all">
                  <div className="flex items-start justify-between gap-5 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="h-6 w-6 text-[#f7931e]" />
                        <h3 className="font-bold text-white text-xl">Nužni Kolačići</h3>
                      </div>
                      <p className="text-base text-gray-300 mb-3">
                        Ovi kolačići su neophodni za osnovnu funkcionalnost web stranice i ne mogu se isključiti.
                      </p>
                      <p className="text-sm text-gray-400">
                        Omogućuju navigaciju, pristup sigurnim područjima i osnovne funkcionalnosti.
                      </p>
                    </div>
                    <div className="flex-shrink-0 bg-gradient-to-r from-[#ff6b35]/20 to-[#f7931e]/20 text-[#f7931e] px-5 py-2 rounded-xl text-sm font-extrabold uppercase tracking-wider border-2 border-[#ff6b35]/30">
                      Uvijek aktivni
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-[#121827]/60 rounded-2xl p-8 border-2 border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all">
                  <div className="flex items-start justify-between gap-5 mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-xl mb-3">Analitički Kolačići</h3>
                      <p className="text-base text-gray-300 mb-3">
                        Pomažu nam razumjeti kako posjetitelji koriste stranicu i unaprijediti korisničko iskustvo.
                      </p>
                      <p className="text-sm text-gray-400">
                        Prikupljaju anonimizirane podatke o najposjećenijim stranicama i ponašanju korisnika.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={(e) => setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-14 h-7 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#ff6b35]/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#ff6b35] peer-checked:to-[#f7931e] border-2 border-gray-500 peer-checked:border-[#f7931e]"></div>
                    </label>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-[#121827]/60 rounded-2xl p-8 border-2 border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all">
                  <div className="flex items-start justify-between gap-5 mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-xl mb-3">Marketinški Kolačići</h3>
                      <p className="text-base text-gray-300 mb-3">
                        Koriste se za prikaz relevantnih oglasa i personaliziranih kampanja.
                      </p>
                      <p className="text-sm text-gray-400">
                        Prate posjete raznim stranicama kako bi prikazali najodgovarajuće oglase i ponude.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.marketing}
                        onChange={(e) => setCookiePreferences({ ...cookiePreferences, marketing: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-14 h-7 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#ff6b35]/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#ff6b35] peer-checked:to-[#f7931e] border-2 border-gray-500 peer-checked:border-[#f7931e]"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t-2 border-[#ff6b35]/30">
                <p className="text-base text-gray-300 mb-8">
                  Za detaljnije informacije pogledajte našu{" "}
                  <Link
                    href="/politika-privatnosti"
                    className="text-[#f7931e] hover:text-[#ff6b35] underline font-bold transition-colors"
                  >
                    politiku privatnosti
                  </Link>{" "}
                  i{" "}
                  <Link
                    href="/politika-kolacica"
                    className="text-[#f7931e] hover:text-[#ff6b35] underline font-bold transition-colors"
                  >
                    politiku kolačića
                  </Link>
                  .
                </p>

                <div className="flex gap-4 flex-col sm:flex-row">
                  <button
                    onClick={acceptCookies}
                    className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] hover:from-[#f7931e] hover:to-[#ff6b35] text-white px-8 py-4 rounded-2xl font-extrabold transition-all shadow-xl shadow-[#ff6b35]/30 hover:shadow-2xl hover:shadow-[#f7931e]/40 text-base flex-1 uppercase tracking-wider"
                  >
                    Prihvati sve kolačiće
                  </button>
                  <button
                    onClick={savePreferences}
                    className="bg-[#121827] hover:bg-[#1a2744] text-white px-8 py-4 rounded-2xl font-bold transition-all border-2 border-[#ff6b35]/40 hover:border-[#f7931e]/60 text-base flex-1"
                  >
                    Spremi odabir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
