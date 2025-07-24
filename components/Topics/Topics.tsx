import {

  topicsData,
} from "@/data/homepage/topics";
import { Titles } from "../Titles/Titles";
import { TopicCard } from "../TopicCard/TopicCard";

import styles from "./Topics.module.scss";

export const Topics = () => {
  return (
    <section className={styles.topics}>
      
        <Titles title={"Wybierz temat"} as="h2" />

        <div className={styles.grid}>
          {topicsData.map((topic, i) => (
            <TopicCard
              key={topic.href}
              data={topic}
              className={`${styles.card} ${styles[`card--${i + 1}`]}`}
   
            />
          ))}
        </div>


    </section>
  );
};
