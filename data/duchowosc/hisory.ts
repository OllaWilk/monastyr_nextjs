import { HistoryData } from "./duchowosc-types";

export const historyData: HistoryData = {
  header: "Miłosierdzie objawiane w historii Kościoła",
  subtitle:
    "XX wiek był czasem szczególnego przypomnienia światu o Bożym Miłosierdziu. </br> Wierzymy, że Duch Święty przemawiał przez różnych świadków – nie tylko w jednej tradycji czy denominacji.",
  cards: [
    {
      id: "Maria Franciszka Kozłowska",
      title: "Maria Franciszka Kozłowska",
      subtitle: "Założycielka mariawityzmu.",
      content: [
        "Wskazywała, że Bóg pragnie czystości serc i bliskości człowieka, a adoracja Najświętszego Sakramentu i życie w duchu pokory mają prowadzić do doświadczenia Jego miłości.",
      ],
      image: {
        src: "/milosierdziepage/Maria Franciszka Kozłowsk.png",
        alt: "Maria Franciszka Kozłowska",
        width: 400,
        height: 550,
      },
    },
    {
      id: "Siostra Faustyna Kowalska",
      title: "Maria Franciszka Kozłowska",
      subtitle: "Apostołka Miłosierdzia Bożego w Kościele rzymskokatolickim.",
      content: [
        " zapisała słowa Jezusa, który prosił, aby ufać Jego Miłosierdziu i głosić je światu: ",
        "<strong>„Nie znajdzie ludzkość uspokojenia, dopóki nie zwróci się z ufnością do Mojego miłosierdzia”</strong> </br>(Dzienniczek 300).",
      ],
      image: {
        src: "/milosierdziepage/Siostra Faustyna Kowalska.png",
        alt: "Siostra Faustyna Kowalska",
        width: 400,
        height: 550,
      },
    },
  ],
  conclusion: "Widzimy w tym wspólne przesłanie: </br> Bóg nieustannie pochyla się nad grzesznikiem, szuka człowieka poranionego i wzywa go do bliskości ze sobą. To przesłanie przekracza granice wyznań i jest światłem dla wszystkich, którzy pragną pokoju serca."
};
