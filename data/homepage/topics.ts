import { TopicCard } from "./homepage-types";

export const topicsData: TopicCard[] = [
  {
    title: "o nas",
    description:
      "Poznaj naszą wspólnotę – ludzi, których łączy pragnienie bycia blisko Boga i drugiego człowieka.",
    href: "/onas",
    img: {
      src: "/homepage/wspólnota_mal.png",
      alt: "Portret linorytowy wspólnoty",
    },
  },
  {
    title: "duchowość",
    description:
      "Duchowość oparta na miłosierdziu i modlitwie – odkryj, co nas prowadzi.",
    href: "/duchowosc",
    img: {
      src: "/homepage/duchowosc_mal.png",
      alt: "Portret linorytowy z krzyżem i sercem",
    },
  },
  {
    title: "historia",
    description:
      "Każda wspólnota ma swoją opowieść. Oto nasza droga – od pierwszego spotkania do dziś.",
    href: "/historia",
    img: {
      src: "/homepage/historia_mal.png",
      alt: "Linoryt drzewa i drogiy",
    },
  },
  {
    title: "charyzmat",
    description:
      "Nasze działanie płynie z potrzeby serca. Przeczytaj, co dla nas znaczy służyć.",
    href: "/charyzmat",
    img: {
      src: "/homepage/charyzmat_mal.png",
      alt: "Haryzmat linoryt serce na dłoni",
    },
  },
  {
    title: "FAQ",
    description:
      "Zebraliśmy odpowiedzi na najczęstsze pytania – może Twoje też tam jest?",
    href: "/pytania",
    img: {
      src: "/homepage/faq_mal.png",
      alt: "Haryzmat linoryt serce na dłoni",
    },
  },
  {
    title: "kontakt",
    description:
      "Chętnie Cię poznamy. Napisz, nawiąż kontakt, polub Nas lub zostaw łapkę w góre.",
    href: "/kontakt",
           img: {
      src: "/homepage/kontakt_mal.png",
      alt: "Kontakt linoryt kciuk w górę",
    },
  },
];

export const topicsSectionOne = topicsData.slice(0, 4);
export const topicsSectionTwo = topicsData.slice(4);
