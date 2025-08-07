import { headerData } from "@/data/duchowosc/header";
import { mercyData } from "@/data/duchowosc/milosierdzie";
import { historyData } from "@/data/duchowosc/hisory";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { Card } from "@/components/Card/Card";
import { Titles } from "@/components/Titles/Titles";
import { UnityIconsSection } from "@/components/UnityIconsSection/UnityIconSection";
import styles from "./duchowosc.module.scss";

export default function Duchowosc() {
  return (
    <>
      <SubpageHeader data={headerData} />
      <main>
        <section className={styles.darkBackground}>
          <div className="container">
            <Titles as="h2" title={mercyData.title} />
            {mercyData.content.map((p, index) => (
              <Paragraph key={index} text={p} />
            ))}
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
          <Titles
            as="h2"
            title="Monastyr jako przestrzeń jedności i uzdrawiania"
          />
          <Paragraph
            text={
              "Jako wspólnota ekumeniczna pragniemy, by Monastyr był miejscem, w którym różnorodność tradycji nie dzieli, ale ubogaca. Każdy wnosi swoje bogactwo - i każdy może wziąć coś dla siebie."
            }
          />

          <UnityIconsSection />
        </section>
        <Titles as="h2" title="Miłość jako droga" />
        <Paragraph
          text={
            " Miłość jako droga Miłosierdzie Boże nie jest tylko „pocieszeniem” – jest wezwaniem do przemiany."
          }
        />
        <p>
          Ewangelia mówi jasno:
          <strong>
            „Będziesz miłował Pana, Boga swego… a bliźniego swego jak siebie
            samego” (Mk 12,30-31).
          </strong>
          W naszej duchowości szczególnie akcentujemy trzy wymiary miłości: 1.
          Miłość do Boga – poprzez modlitwę, adorację, lekturę Słowa Bożego i
          sakramenty (tam, gdzie są dostępne). 2. Miłość wzajemną – troska o
          braci i siostry, gotowość do przebaczenia, życie prostotą i
          otwartością. 3. Miłość do świata – widzimy w nim nie wroga, ale pole
          misyjne. Chcemy nieść światu nadzieję, pokój i świadectwo
          miłosierdzia. Duchowość braci i sióstr Każda osoba, która jest w
          Monastyrze, jest wezwana do rozwoju własnego życia duchowego zgodnie
          ze swoim sumieniem oraz normami Kościoła, do którego należy. Chcemy,
          by każdy i każda z nas tworzył wspólnotę chrześcijan na tyle, na ile
          to w danej sytuacji jest możliwe.
        </p>
      </main>
    </>
  );
}
