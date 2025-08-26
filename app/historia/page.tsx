import { historyData } from "@/data/historia/hisory";
import { headerData } from "@/data/historia/header";
import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { Titles } from "@/components/Titles/Titles";
import styles from "./histora.module.scss";

export default function Historia() {
  return (
    <div className={styles.historia}>
      <SubpageHeader data={headerData} />
      <section
        className={styles.timelineSection}
        aria-label="Historia Monastyru"
      >
        <div className={styles.timelineTrack}>
          {historyData.map((item, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            return (
              <div
                key={item.id}
                className={`${styles.timelineItem} ${styles[side]}`}
              >
                <div className={styles.spine} aria-hidden="true" />

                <div className={styles.marker}>
                  <Titles as="h3" title={item.subtitle || ""} />
                </div>

                <article className={styles.card}>
                  <div className={styles.textContent}>
                    <h3>{item.title}</h3>
                    {item.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
