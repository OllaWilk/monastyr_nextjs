import { Card } from "@/components/Card/Card";
import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { headerData } from "@/data/onas/header";
import { aboutData } from "@/data/onas/sections";
import styles from './oNas.module.scss';

export default function ONas() {
  return (
    <div className={styles.page}>
      <SubpageHeader data={headerData} />
      <main className={styles.mainSection}>
          {aboutData.map((card, index) => (
            <Card
              key={card.id}
              title={card.title}
              subtitle={card.subtitle || ''}
              paragraph={card.content}
              img={card.image}
              reverse={index % 2 === 1}
            />
          ))}
    
      </main>
    </div>
  );
}
