import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Odricanje Odgovornosti | SportoviUHrvatskoj.com",
  description:
    "Pravne napomene i odricanje odgovornosti za korištenje SportoviUHrvatskoj.com - važne informacije za sve posjetitelje.",
}

export default function DisclaimerPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ff6b35]">Odricanje Odgovornosti</h1>
            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-[#ff6b35] pl-6">
              Važne pravne napomene o korištenju SportoviUHrvatskoj.com i informacijama koje pružamo.
            </p>
            <p className="text-sm text-gray-500 mt-4">Datum ažuriranja: prosinac 2024.</p>
          </div>

          <div className="space-y-12 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Opće Odricanje Odgovornosti</h2>
              <p className="leading-relaxed mb-4">
                Sav sadržaj na SportoviUHrvatskoj.com pruža se isključivo u informativne i zabavne svrhe. Informacije na
                ovoj stranici ne predstavljaju pravni, financijski ili profesionalni savjet. Iako se trudimo osigurati
                točnost i ažurnost sadržaja, ne možemo jamčiti potpunu točnost svih informacija.
              </p>
              <p className="leading-relaxed">
                Korištenjem ove stranice prihvaćate da SportoviUHrvatskoj.com ne snosi odgovornost za bilo kakve gubitke
                ili štete nastale kao rezultat oslanjanja na informacije objavljene na ovoj stranici.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Affiliate Partnerstva</h2>
              <p className="leading-relaxed mb-4">
                SportoviUHrvatskoj.com sudjeluje u affiliate marketinškim programima. To znači da možemo primiti
                proviziju kada posjetitelji kliknu na linkove prema kladionicama i izvrše registraciju ili uplatu. Ova
                provizija ne utječe na cijenu ili uvjete za vas kao korisnika.
              </p>
              <div className="border-2 border-[#ff6b35]/30 p-6 rounded-lg bg-[#121827]/50">
                <h3 className="font-bold text-white mb-3">Naša Obveza Prema Vama</h3>
                <p className="text-sm mb-3">Unatoč affiliate odnosima, jamčimo:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full mt-2"></span>
                    <span>Recenzije ostaju objektivne i temelje se na stvarnom testiranju</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full mt-2"></span>
                    <span>Ne promoviramo kladionice koje smatramo nesigurnima ili nepouzdanima</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full mt-2"></span>
                    <span>Provizija ne utječe na pozicioniranje ili ocjene</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Točnost Informacija</h2>
              <p className="leading-relaxed mb-4">
                Industrija sportskog klađenja podložna je čestim promjenama. Koeficijenti, bonusi, promocije, uvjeti
                korištenja i druge informacije mogu se promijeniti bez prethodne najave. Iako redovito ažuriramo naš
                sadržaj, preporučujemo da uvijek provjerite aktualne uvjete izravno na web stranici kladionice prije
                registracije.
              </p>
              <p className="leading-relaxed">
                SportoviUHrvatskoj.com ne snosi odgovornost za bilo kakve razlike između informacija na našoj stranici i
                aktualnih uvjeta na stranicama kladionica.
              </p>
            </section>

            <section className="bg-gradient-to-br from-red-950/40 to-red-900/20 border-2 border-red-600/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Upozorenje o Rizicima Klađenja</h2>
              <p className="leading-relaxed mb-4">
                Sportsko klađenje uključuje značajne financijske rizike. Možete izgubiti novac, a u nekim slučajevima
                razviti ovisnost koja može negativno utjecati na vaš život, odnose i financije.
              </p>
              <div className="space-y-3">
                <p className="font-bold text-white">Molimo zapamtite:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></span>
                    <span>Nikada se ne kladite s novcem koji si ne možete priuštiti izgubiti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></span>
                    <span>Klađenje nije način za zaradu ili rješavanje financijskih problema</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></span>
                    <span>Postavite stroge vremenske i financijske limite prije klađenja</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2"></span>
                    <span>Ako osjećate da gubite kontrolu, odmah potražite pomoć</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Dobna Ograničenja</h2>
              <p className="leading-relaxed mb-4">
                Sav sadržaj na SportoviUHrvatskoj.com namijenjen je isključivo osobama starijim od 18 godina. Sportsko
                klađenje je ilegalno za maloljetnike u Hrvatskoj i većini jurisdikcija.
              </p>
              <div className="flex items-center gap-4 border-2 border-[#ff6b35]/30 p-4 rounded-lg bg-[#121827]/50">
                <span className="text-4xl font-bold text-[#ff6b35]">18+</span>
                <p className="text-sm">
                  Ova stranica sadrži sadržaj o sportskom klađenju i namijenjena je samo punoljetnim osobama.
                  Maloljetnici ne smiju koristiti ovu stranicu niti se registrirati na kladioničke platforme.
                </p>
              </div>
            </section>

            {/* Content */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Ograničenje Odgovornosti</h2>
              <p className="leading-relaxed mb-4">
                U maksimalnoj mjeri dopuštenoj zakonom, SportoviUHrvatskoj.com, njegovi vlasnici, zaposlenici i partneri
                isključuju svaku odgovornost za:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full mt-2"></span>
                  <span>Gubitke nastale klađenjem na preporučenim platformama</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full mt-2"></span>
                  <span>Radnje ili propuste kladioničkih operatera</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full mt-2"></span>
                  <span>Netočnosti u informacijama na našoj stranici</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full mt-2"></span>
                  <span>Tehničke probleme ili nedostupnost stranice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#ff6b35] rounded-full mt-2"></span>
                  <span>Odluke donesene na temelju informacija s naše stranice</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Zakonska Usklađenost</h2>
              <p className="leading-relaxed">
                Vi ste odgovorni za provjeru je li sportsko klađenje legalno u vašoj jurisdikciji. Zakoni o klađenju
                razlikuju se od zemlje do zemlje, a u nekim područjima sportsko klađenje može biti ograničeno ili
                zabranjeno. SportoviUHrvatskoj.com ne snosi odgovornost za bilo kakvo kršenje lokalnih zakona od strane
                korisnika.
              </p>
            </section>

            <section className="bg-gradient-to-br from-[#ff6b35]/10 to-[#f7931e]/10 p-8 rounded-lg border-2 border-[#ff6b35]/30">
              <h2 className="text-2xl font-bold text-white mb-4">Pitanja?</h2>
              <p className="leading-relaxed">
                Ako imate pitanja o ovom Odricanju odgovornosti ili bilo kojem drugom aspektu SportoviUHrvatskoj.com,
                slobodno nas kontaktirajte putem naše web stranice.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
