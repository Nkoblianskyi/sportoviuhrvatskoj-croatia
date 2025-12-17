export function AboutUs() {
  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#121827] to-[#0a0e1a]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#ff6b35]/10 text-[#ff6b35] text-xs font-semibold tracking-wider uppercase rounded-full mb-6 border border-[#ff6b35]/20">
              O Nama
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-white leading-tight">
              Vaš Pouzdani Vodič za Sportsko Klađenje
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transparentne recenzije i detaljne analize sportskih kladionica u Hrvatskoj
            </p>
          </div>

          <div className="space-y-8">
            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Vodeći Portal za Sportsko Klađenje u Hrvatskoj</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-[#ff6b35]">SportoviUHrvatskoj.com</strong> je najautoritativnija platforma za
                recenzije sportskih kladionica u Hrvatskoj. Naš tim stručnjaka s dugogodišnjim iskustvom u sportskom
                klađenju donosi vam najdetaljnije i najtočnije informacije.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Svaka kladionica prolazi kroz temeljit proces testiranja koji obuhvaća kvalitetu kvota, brzinu isplata,
                ponudu live klađenja i korisničku podršku na hrvatskom jeziku.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Stručna Analiza i Usporedba</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Testiramo sve aspekte - od kvalitete kvota za popularne sportove, preko izbora načina plaćanja, do
                brzine isplate dobitaka. Pratimo nogomet, košarku, tenis, rukomet i sve druge popularne sportove u
                Hrvatskoj.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Redovito ažuriramo sve recenzije kako bismo pratili promjene u ponudama i bonusima. Vaša sigurnost i
                najbolje iskustvo klađenja su naš prioritet.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-white/5">
              <h3 className="font-bold text-2xl text-white mb-4">Potpuna Neovisnost i Transparentnost</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Iako ostvarujemo prihode kroz partnerske programe, naš uredivački integritet ostaje potpuno neovisan.
                Nijedna kladionica ne može kupiti bolju ocjenu - sve se temelji na objektivnim kriterijima i stvarnom
                iskustvu.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Aktivno promičemo odgovorno klađenje i surađujemo s vodećim organizacijama za zaštitu igrača u
                Hrvatskoj.
              </p>
            </div>

            <div className="info-card rounded-xl p-8 border border-[#ff6b35]/20">
              <h3 className="font-bold text-2xl text-white mb-4">Zajednica Ljubitelja Sporta</h3>
              <p className="text-gray-300 leading-relaxed">
                Izgradili smo zajednicu od preko 65,000 zadovoljnih korisnika širom Hrvatske koji nam vjeruju pri izboru
                sportskih kladionica. Naš tim je dostupan za sva pitanja i savjete o sportskom klađenju.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
