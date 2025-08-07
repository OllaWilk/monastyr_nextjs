import { Paragraph } from "@/components/Paragraph/Paragraph";
import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { Titles } from "@/components/Titles/Titles";
import { headerData } from "@/data/duchowosc/header";
import { milosierdzieData } from "@/data/duchowosc/milosierdzie";
import styles from "./duchowosc.module.scss";

export default function ONas() {
  const { title, content } = milosierdzieData;

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
      </main>
    </>
  );
}
