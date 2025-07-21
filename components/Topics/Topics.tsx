import {
  topicsSectionOne,
  topicsSectionTwo,
  topicsData,
} from "@/data/homepage/topics";
import { TopicCard } from "../TopicCard/TopicCard";

import styles from "./Topics.module.scss";
import { Titles } from "../Titles/Titles";

export const Topics = () => {
  return (
    <section className={styles.topics}>
      <div className={styles.wraper}>
        <Titles title={"Wybierz temat"} as="h2" />

        <div className={styles.grid}>
          {topicsData.map((topic, i) => (
            <TopicCard
              key={topic.href}
              data={topic}
              className={`${styles.card} ${styles[`card--${i + 1}`]}`}
              // direction={i % 1 ? "row" : "column"}
            />
          ))}
        </div>

        {/* <div className={styles.gridBottom}>
          {topicsSectionTwo.map((topic, i) => (
            <TopicCard key={topic.href} data={topic} className={`${styles[`card--${i + 5}`]}`} />
          ))}
        </div> */}
      </div>
    </section>
  );
};
