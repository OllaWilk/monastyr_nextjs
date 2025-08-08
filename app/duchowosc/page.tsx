import { headerData } from "@/data/duchowosc/header";
import { mercyData } from "@/data/duchowosc/milosierdzie";
import { historyData } from "@/data/duchowosc/hisory";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { HighlightSection } from "@/components/HighlightSection/HighlightSection";
import { Card } from "@/components/Card/Card";
import { Titles } from "@/components/Titles/Titles";
import { UnityIconsSection } from "@/components/UnityIconsSection/UnityIconSection";
import styles from "./duchowosc.module.scss";
import { mercyMeditation } from "@/data/duchowosc/mercyMeditation";

export default function Duchowosc() {
  return (
    <div className={styles.ducowosc}>
      <SubpageHeader data={headerData} />

      <section className={styles.darkBackground}>
        <div className={styles.highlightSection}>
          <Titles as="h2" title={mercyData.title} />
          <Paragraph text={mercyData.content[0]} />
          <HighlightSection text={mercyData.quote} span={mercyData.span} />
          <Paragraph text={mercyData.content[1]} />
        </div>
      </section>
      <section className={styles.historySection}>
        <Titles as="h2" title={historyData.header} />
        <Paragraph text={historyData.subtitle} />
        <div className={styles.cardWrap}>
          {historyData.cards.map((card, index) => (
            <Card
              key={card.id}
              img={card.image}
              title={card.title}
              subtitle={card.subtitle || ""}
              paragraph={card.content}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
        <Paragraph text={historyData.conclusion} />
      </section>
      <section className={styles.darkBackground}>
        <div className={styles.mercyMeditation}>
          <Titles as="h2" title={mercyMeditation.title} />
          <Paragraph text={mercyMeditation.subtitle} />
          <div className={styles.grid}>
            {mercyMeditation.cards.map((card) => (
              <UnityIconsSection
                key={card.text}
                alt={card.img.alt}
                src={card.img.src}
                width={card.img.width || 250}
                height={card.img.height || 250}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <Titles as="h2" title=" Miłość jako droga " />
        <Paragraph
          text={
            "Miłosierdzie Boże nie jest tylko „pocieszeniem” – jest wezwaniem do przemiany. Ewangelia mówi jasno:"
          }
        />
        <HighlightSection
          text={
            "„Będziesz miłował Pana, Boga swego… a bliźniego swego jak siebie samego” "
          }
          span={"(Mk 12,30-31)"}
        />
      </section>
      <section className="container">
        <Titles
          as="h2"
          title=" W naszej duchowości szczególnie akcentujemy trzy wymiary miłości:"
        />
        <div className={styles.grid}>
          <h3>
            1. Miłość do Boga – poprzez modlitwę, adorację, lekturę Słowa Bożego
            i sakramenty (tam, gdzie są dostępne).
          </h3>
          <h3>
            2. Miłość wzajemną – troska o braci i siostry, gotowość do
            przebaczenia, życie prostotą i otwartością.
          </h3>
          <h3>
            3. Miłość do świata – widzimy w nim nie wroga, ale pole misyjne.
          </h3>
        </div>
        <Paragraph
          text="    Chcemy nieść światu nadzieję, pokój i świadectwo
          miłosierdzia. Duchowość braci i sióstr Każda osoba, która jest w
          Monastyrze, jest wezwana do rozwoju własnego życia duchowego zgodnie
          ze swoim sumieniem oraz normami Kościoła, do którego należy. Chcemy,
          by każdy i każda z nas tworzył wspólnotę chrześcijan na tyle, na ile
          to w danej sytuacji jest możliwe."
        />
      </section>
    </div>
  );
}
