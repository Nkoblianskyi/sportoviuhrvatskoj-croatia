"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "Koje su kladionice legalne u Hrvatskoj?",
    answer:
      "U Hrvatskoj su legalne samo sportske kladionice koje posjeduju važeću licencu izdanu od strane Ministarstva financija Republike Hrvatske. Sve licencirane kladionice moraju se pridržavati strogih pravila uključujući sigurnu enkripciju podataka, transparentne uvjete klađenja i sustav za odgovorno klađenje. Prije registracije uvijek provjerite da li kladionica ima važeću hrvatsku licencu.",
  },
  {
    question: "Kako mogu provjeriti da li je kladionica sigurna?",
    answer:
      "Sigurnost kladionice možete provjeriti tako što ćete potvrditi da kladionica posjeduje važeću licencu na web stranici Ministarstva financija, provjeriti SSL enkripciju (zeleni lokot u browseru), pročitati recenzije drugih korisnika, testirati kvalitetu korisničke podrške na hrvatskom jeziku i pregledati uvjete bonusa i isplata. Sve kladionice koje preporučujemo prošle su temeljitu provjeru sigurnosti.",
  },
  {
    question: "Što su razumni uvjeti za bonus u klađenju?",
    answer:
      "Razumni uvjeti za sportski bonus uključuju uvjete klađenja s minimalnom kvotom između 1.50-2.00, vremensko ograničenje od minimalno 14-30 dana za ispunjenje uvjeta, jasno navedene vrste oklada koje se računaju i realna mogućnost ispunjenja. Izbjegavajte bonuse s previsokim uvjetima ili skrivenim ograničenjima. Uvijek pročitajte potpune uvjete prije aktivacije bonusa.",
  },
  {
    question: "Koliko brzo mogu podići dobitke iz kladionice?",
    answer:
      "Brzina isplate ovisi o metodi plaćanja i postupcima verifikacije kladionice. E-novčanici obično nude najbrže isplate (24-48 sati), bankovni transferi mogu trajati 1-3 radna dana, dok kreditne kartice obično zahtijevaju 2-5 radnih dana. Prvi put kod povlačenja bit će potrebna verifikacija identiteta što može produžiti proces za 24-48 sati.",
  },
  {
    question: "Moraju li hrvatski igrači platiti porez na dobitke iz klađenja?",
    answer:
      "Ne, hrvatski korisnici ne plaćaju porez na dobitke ostvarene na licenciranim sportskim kladionicama koje djeluju pod hrvatskom jurisdikcijom. Porez se naplaćuje direktno od operatera kladionice. Ovo znači da su svi vaši dobici potpuno vaši bez dodatnih poreznih obveza, pod uvjetom da se kladite na legalno licenciranim platformama u Hrvatskoj.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#1a1f26] to-[#0f1419]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-6 border border-blue-500/20">
              Pitanja i Odgovori
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-white leading-tight">Često Postavljana Pitanja</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Odgovori na najčešća pitanja vezana uz sportsko klađenje u Hrvatskoj
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="info-card rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left group"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-white text-lg pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
