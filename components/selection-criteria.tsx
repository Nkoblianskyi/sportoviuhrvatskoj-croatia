export function SelectionCriteria() {
  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#1a1f26] to-[#0f1419]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-6 border border-emerald-500/20">
              Naša Metodologija
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-white leading-tight">
              Kako Ocjenjujemo Sportske Kladionice
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transparentan proces evaluacije koji osigurava objektivne i pouzdane preporuke
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Sigurnost i Licenciranje</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Provjeravamo valjanost licence izdane od Ministarstva financija RH, SSL enkripciju, zaštitu osobnih
                podataka i implementaciju sustava za odgovorno klađenje prema hrvatskim propisima.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Samo kladionice koje zadovoljavaju sve sigurnosne standarde i regulatorne zahtjeve ulaze u našu
                selekciju.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Kvaliteta Kvota</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Analiziramo kompetitivnost kvota za popularne sportove - nogomet, košarka, tenis, rukomet. Pratimo marže
                operatera i uspoređujemo s tržišnim prosjekom.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Preferirane su kladionice s marginom ispod 5% za glavne lige i kompetitivnim kvotama za hrvatski sport.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Live Klađenje i Cash Out</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Testiramo dostupnost live klađenja, brzinu ažuriranja kvota, stabilnost platforme tijekom uživo događaja
                i funkcionalnost cash out opcije.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Najbolje ocjene dobivaju kladionice s brzim live streamingom, širokim izborom uživo tržišta i
                fleksibilnim cash out opcijama.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Metode Plaćanja i Isplate</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Testiramo sve dostupne metode s fokusom na brzinu transakcija, naknade i jednostavnost korištenja.
                Provjeravamo brzinu obrade isplata dobitaka.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Najviše vrednovane su kladionice s brzim isplatama (24-48h), bez skrivenih naknada i jednostavnim KYC
                procesom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
