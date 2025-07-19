import { TopicCard } from "./homepage-types";

export const topicsData: TopicCard[] = [
  {
    title: "o nas",
    description:
      "Poznaj naszą wspólnotę – ludzi, których łączy pragnienie bycia blisko Boga i drugiego człowieka.",
    href: "/onas",
    img: {
      src: "/wspólnota.png",
      alt: "Portret linorytowy wspólnoty",
    },
  },
  {
    title: "duchowość",
    description:
      "Duchowość oparta na miłosierdziu i modlitwie – odkryj, co nas prowadzi.",
    href: "/duchowosc",
    img: {
      src: "/duchowosc.png",
      alt: "Portret linorytowy wspólnoty",
    },
  },
  {
    title: "historia",
    description:
      "Każda wspólnota ma swoją opowieść. Oto nasza droga – od pierwszego spotkania do dziś.",
    href: "/historia",
  },
  {
    title: "charyzmat",
    description:
      "Nasze działanie płynie z potrzeby serca. Przeczytaj, co dla nas znaczy służyć.",
    href: "/charyzmat",
    img: {
      src: "/duchowosc.png",
      alt: "Portret linorytowy wspólnoty",
    },
  },
  {
    title: "FAQ",
    description:
      "Zebraliśmy odpowiedzi na najczęstsze pytania – może Twoje też tam jest?",
    href: "/pytania",
    //   img: {
    //   src: "/duchowosc.png",
    //   alt: "Portret linorytowy wspólnoty",
    // },
  },
  {
    title: "kontakt",
    description: "Chętnie Cię poznamy. Zadzwoń, napisz, przyjdź.",
    href: "/kontakt",
    img: {
      src: "/duchowosc.png",
      alt: "Portret linorytowy wspólnoty",
    },
  },
];

export const topicsSectionOne = topicsData.slice(0, 4);
export const topicsSectionTwo = topicsData.slice(4);
