import { Paragraph } from "@/components/Paragraph/Paragraph";
import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { Card } from "@/components/Card/Card";
import { Titles } from "@/components/Titles/Titles";
import { headerData } from "@/data/duchowosc/header";
import { milosierdzieData } from "@/data/duchowosc/milosierdzie";
import styles from "./duchowosc.module.scss";

export default function ONas() {
  const { title, content } = milosierdzieData;

  const mariaKozlowska = {
    alt: "Maria Franciszka Kozłowska",
    src: "/milosierdziepage/Maria Franciszka Kozłowsk.png",
    width: 400,
    height: 550,
  };
  const faustynaKowalska = {
    alt: "Siostra Faustyna Kowalska",
    src: "/milosierdziepage/Siostra Faustyna Kowalska.png",
    width: 400,
    height: 550,
  };
  return (
    <>
      <SubpageHeader data={headerData} />
      <main className="container">
        <section className={styles.mercySection}>
          <Titles as="h2" title={title} />
          {content.map((p, index) => (
            <Paragraph key={index} text={p} />
          ))}
        </section>
        <section className={styles.historySection}>
          <Titles
            as="h2"
            title={"Miłosierdzie objawiane w historii Kościoła"}
          />
          <Paragraph text="XX wiek był czasem szczególnego przypomnienia światu o Bożym Miłosierdziu. </br> Wierzymy, że Duch Święty przemawiał przez różnych świadków – nie tylko w jednej tradycji czy denominacji." />
          <div className={styles.cardWrap}>
            <Card
              img={mariaKozlowska}
              title={"Maria Franciszka Kozłowska"}
              subtitle={"Założycielka mariawityzmu."}
              paragraph={[
                "Wskazywała, że Bóg pragnie czystości serc i bliskości człowieka, a adoracja Najświętszego Sakramentu i życie w duchu pokory mają prowadzić do doświadczenia Jego miłości.",
              ]}
              reverse={false}
            />
            <Card
              img={faustynaKowalska}
              title={"Siostra Faustyna Kowalska"}
              subtitle={
                "Apostołka Miłosierdzia Bożego w Kościele rzymskokatolickim."
              }
              paragraph={[
                " zapisała słowa Jezusa, który prosił, aby ufać Jego Miłosierdziu i głosić je światu: ",
                "<strong>„Nie znajdzie ludzkość uspokojenia, dopóki nie zwróci się z ufnością do Mojego miłosierdzia”</strong> </br>(Dzienniczek 300).",
              ]}
              reverse={true}
            />
          </div>
          <Paragraph text="Widzimy w tym wspólne przesłanie: </br> Bóg nieustannie pochyla się nad grzesznikiem, szuka człowieka poranionego i wzywa go do bliskości ze sobą. To przesłanie przekracza granice wyznań i jest światłem dla wszystkich, którzy pragną pokoju serca." />
        </section>
      </main>
    </>
  );
}
