import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "O Nama | SportoviUHrvatskoj.com - Vaš Vodič za Sportsko Klađenje",
  description:
    "Upoznajte tim SportoviUHrvatskoj.com - stručnjaci za recenzije kladionica u Hrvatskoj s dugogodišnjim iskustvom.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#f7931e] hover:text-[#ff6b35] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Natrag na početnu</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ff6b35]">O Nama</h1>
            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-[#ff6b35] pl-6">
              Dobrodošli na SportoviUHrvatskoj.com - vodeću hrvatsku platformu za nepristrane recenzije kladionica i
              sportskog klađenja.
            </p>
          </div>

          <div className="space-y-12 text-gray-300">
            {/* Tko smo */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Tko Stoji Iza SportoviUHrvatskoj?</h2>
              <p className="leading-relaxed mb-4">
                SportoviUHrvatskoj.com okuplja tim strastvenih sportskih analitičara i stručnjaka za sportsko klađenje
                koji prate hrvatsku i međunarodnu betting scenu. Naš tim čine profesionalci s više od desetljeća
                iskustva u analizi kladionica, praćenju sportskih događaja i evaluaciji betting platformi.
              </p>
              <p className="leading-relaxed">
                Svaki član našeg tima donosi jedinstvenu perspektivu - od analize koeficijenata i live betting opcija,
                preko procjene bonusa i promocija, do detaljnog testiranja korisničkog iskustva i brzine isplata.
                Zajedno stvaramo sveobuhvatne recenzije koje vam pomažu odabrati najbolju kladionicu za vaše potrebe.
              </p>
            </section>

            {/* Naša misija */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Naša Misija</h2>
              <p className="leading-relaxed mb-4">
                U svijetu sportskog klađenja gdje postoje brojne opcije, naša misija je jasna: osigurati da hrvatski
                igrači imaju pristup pouzdanim, objektivnim i ažurnim informacijama o kladionicama koje posluju u
                Hrvatskoj. Vjerujemo da svaki kladioničar zaslužuje transparentne informacije prije nego što otvori
                račun.
              </p>
              <p className="leading-relaxed">
                Kontinuirano pratimo promjene u ponudama, ažuriramo recenzije i testirajmo nove kladionice kako bismo
                vam uvijek pružili najrelevantniji sadržaj. Naš cilj nije samo informirati, već i educirati - pomažemo
                vam razumjeti kako funkcioniraju koeficijenti, što su value betovi, kako iskoristiti bonuse i na što
                trebate obratiti pozornost pri odabiru kladionice.
              </p>
            </section>

            {/* Metodologija */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Naša Metodologija Ocjenjivanja</h2>
              <p className="leading-relaxed mb-6">
                Svaka kladionica na SportoviUHrvatskoj.com prolazi kroz rigorozan proces evaluacije. Ne oslanjamo se na
                površne dojmove - naši recenzenti otvaraju račune, polažu uplate i klađe se s pravim novcem kako bi vam
                pružili autentična iskustva.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-800 p-6 rounded-lg bg-[#121827]/50">
                  <h3 className="font-bold text-white mb-2">Licenciranje i Sigurnost</h3>
                  <p className="text-sm">Provjeravamo valjanost licenci, SSL enkripciju i reputaciju operatera</p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg bg-[#121827]/50">
                  <h3 className="font-bold text-white mb-2">Sportska Ponuda</h3>
                  <p className="text-sm">Analiziramo broj sportova, liga, vrsta oklada i live betting opcije</p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg bg-[#121827]/50">
                  <h3 className="font-bold text-white mb-2">Koeficijenti i Marža</h3>
                  <p className="text-sm">
                    Uspoređujemo visinu koeficijenata i maržu kladionice na popularnim utakmicama
                  </p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg bg-[#121827]/50">
                  <h3 className="font-bold text-white mb-2">Bonusi i Promocije</h3>
                  <p className="text-sm">
                    Detaljno čitamo uvjete bonusa, rollover zahtjeve i stvarnu vrijednost ponuda
                  </p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg bg-[#121827]/50">
                  <h3 className="font-bold text-white mb-2">Uplate i Isplate</h3>
                  <p className="text-sm">Testiramo brzinu transakcija, dostupne metode i eventualne naknade</p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg bg-[#121827]/50">
                  <h3 className="font-bold text-white mb-2">Korisnička Podrška</h3>
                  <p className="text-sm">Kontaktiramo podršku i evaluiramo brzinu i kvalitetu odgovora</p>
                </div>
              </div>
            </section>

            {/* Transparentnost */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Transparentnost i Affiliate Odnosi</h2>
              <p className="leading-relaxed mb-4">
                U duhu potpune transparentnosti, želimo vas obavijestiti da SportoviUHrvatskoj.com ostvaruje prihod
                putem affiliate partnerstva s nekim od recenziranih kladionica. Kada kliknete na naše linkove i
                registrirate se, možemo primiti proviziju od kladionice.
              </p>
              <p className="leading-relaxed">
                Međutim, ovo nikada ne utječe na naše ocjene ili preporuke. Naša reputacija ovisi o iskrenosti - ako
                kladionica ne zadovoljava naše standarde, nećemo je preporučiti bez obzira na potencijalnu zaradu.
                Uvijek stavljamo interese naših čitatelja na prvo mjesto.
              </p>
            </section>

            {/* Odgovorno klađenje */}
            <section className="bg-gradient-to-br from-[#ff6b35]/10 to-[#f7931e]/10 p-8 rounded-lg border-2 border-[#ff6b35]/30">
              <h2 className="text-2xl font-bold text-white mb-4">Posvećenost Odgovornom Klađenju</h2>
              <p className="leading-relaxed mb-4">
                Na SportoviUHrvatskoj.com snažno podržavamo principe odgovornog klađenja. Klađenje treba biti oblik
                zabave i način da sport učinite uzbudljivijim, nikada način za zaradu ili rješavanje financijskih
                problema.
              </p>
              <p className="leading-relaxed">
                Promičemo samo kladionice koje nude alate za odgovorno klađenje poput limita uplate, self-exclusion
                opcija i pristupa organizacijama za pomoć. Ako vi ili netko koga poznajete ima problema s
                kladioničarskom ovisnošću, molimo potražite stručnu pomoć.
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Kontaktirajte Nas</h2>
              <p className="leading-relaxed">
                Vaše mišljenje nam je važno. Ako imate pitanja, prijedloge ili želite prijaviti problem s nekom od
                kladionica, slobodno nas kontaktirajte. Trudimo se odgovoriti na sve upite u najkraćem mogućem roku i
                kontinuirano poboljšavamo naš sadržaj na temelju vaših povratnih informacija.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
