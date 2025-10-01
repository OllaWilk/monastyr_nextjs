import { TopicCard } from "./homepage-types";

export const topicsData: TopicCard[] = [
  {
    title: "o nas",
    description:
      "Poznaj naszą wspólnotę – ludzi, których łączy pragnienie bycia blisko Boga i drugiego człowieka.",
    href: "/onas",
    img: {
      src: "/homepage/onas.jpg",
      alt: "Grupowe zdjęcie monastyru. O nas. Dwie siostry i dwóch braci w habicie.",
    },
  },
  {
    title: "duchowość",
    description:
      "Duchowość oparta na miłosierdziu i modlitwie – odkryj, co nas prowadzi.",
    href: "/duchowosc",
    img: {
      src: "/homepage/duchowosc.png",
      alt: "Duchowość monastyru. Otwarta biblia przy świecy.",
    },
  },
  {
    title: "historia",
    description:
      "Każda wspólnota ma swoją opowieść. Oto nasza droga – od pierwszego spotkania do dziś.",
    href: "/historia",
    img: {
      src: "/homepage/historia.png",
      alt: "święty Krzysztof z dzieciątkiem Jezus. Historia monastyru.",
    },
  },
  // {
  //   title: "charyzmat",
  //   description:
  //     "Nasze działanie płynie z potrzeby serca. Przeczytaj, co dla nas znaczy służyć.",
  //   href: "/charyzmat",
  //   img: {
  //     src: "/homepage/charyzmat.jpg",
  //     alt: "Haryzmat linoryt serce na dłoni",
  //   },
  // },
  // {
  //   title: "FAQ",
  //   description:
  //     "Zebraliśmy odpowiedzi na najczęstsze pytania – może Twoje też tam jest?",
  //   href: "/pytania",
  //   img: {
  //     src: "/homepage/faq.jpg",
  //     alt: "Haryzmat linoryt serce na dłoni",
  //   },
  // },
  {
    title: "kontakt",
    description:
      "Chętnie Cię poznamy. Napisz, nawiąż kontakt, polub Nas lub zostaw łapkę w góre.",
    href: "/kontakt",
           img: {
      src: "/homepage/kontakt.jpg",
      alt: "Kontakt linoryt kciuk w górę",
    },
  },
];

export const topicsSectionOne = topicsData.slice(0, 4);
export const topicsSectionTwo = topicsData.slice(4);
