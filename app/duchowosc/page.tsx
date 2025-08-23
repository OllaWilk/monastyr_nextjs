import { headerData } from "@/data/duchowosc/header";
import { mercyMeditation } from "@/data/duchowosc/mercyMeditation";
import { mercyData } from "@/data/duchowosc/milosierdzie";
import { historyData } from "@/data/duchowosc/hisory";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { HighlightSection } from "@/components/HighlightSection/HighlightSection";
import { Card } from "@/components/Card/Card";
import { Titles } from "@/components/Titles/Titles";
import { UnityIconsSection } from "@/components/UnityIconsSection/UnityIconSection";
import { miloscDroga } from "@/data/duchowosc/miloscdroga";
import { wymiaryMilosci } from "@/data/duchowosc/wymiaryMilosci";
import styles from "./duchowosc.module.scss";

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
        <div className={styles.titlesWrap}>
          <Titles as="h2" title={historyData.header} />
          <Paragraph text={historyData.subtitle} />
        </div>
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
      <section className={`${styles.pathHighlihgt} container`}>
        <Titles as="h2" title={miloscDroga.title} />
        <Paragraph text={miloscDroga.subtitle} />
        <HighlightSection text={miloscDroga.quote} span={miloscDroga.span} />
      </section>
      <section className={styles.darkBackground}>
        <div className="container">
          <Titles as="h2" title={wymiaryMilosci.title} />
          <div className={styles.grid}>
            {wymiaryMilosci.cards.map((card) => (
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
          <p className={styles.text}>{wymiaryMilosci.paragraph} </p>
        </div>
      </section>
    </div>
  );
}
