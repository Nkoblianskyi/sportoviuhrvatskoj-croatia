export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  dopBonus?: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "SuperSport",
    logo: "/supersport.png",
    bonus: "Do 100€ Bonus",
    url: "https://www.supersport.hr/",
    rating: 9.7,
    stars: 5,
    reviews: 4128,
    badges: ["Vrhunski Izbor", "Ekskluzivna Ponuda"],
    terms: "18+ • Sigurna platforma • Provjereno • Odgovorno klađenje",
    isTopRating: true,
    isTopLine: true,
    isPopular: true,
  },
  {
    id: 2,
    name: "Germania Sport",
    logo: "/germania.svg",
    bonus: "Cash Out Uživo",
    url: "https://www.germaniasport.hr/",
    rating: 9.5,
    stars: 5,
    reviews: 3124,
    badges: ["Visoko Ocijenjeno", "U Trendu"],
    terms: "18+ • Sigurna igra • Licencirano • Primjenjuju se uvjeti",
    isPopular: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "PSK",
    logo: "/psk.webp",
    bonus: "2x100€ Bonus",
    dopBonus: "Dvaput Je Dvaput",
    url: "https://www.psk.hr/",
    rating: 9.4,
    stars: 5,
    reviews: 3456,
    badges: ["U Trendu"],
    terms: "18+ • Odgovorno klađenje • Hrvatska licenca • Vrijede T&C",
    isTrending: true,
  },
  {
    id: 4,
    name: "Favbet",
    logo: "/favbet.svg",
    bonus: "Do 300€ Bonus",
    dopBonus: "+ 30€ Besplatna Oklada",
    url: "https://www.favbet.hr/",
    rating: 9.3,
    stars: 5,
    reviews: 4251,
    badges: ["Visoko Ocijenjeno"],
    terms: "18+ • Odgovorno klađenje • Licencirano u Hrvatskoj • Vrijede T&C",
  },
]

export const casinos = bettingSites
