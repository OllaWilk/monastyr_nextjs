import Image from "next/image";
import Link from "next/link";
import { TopicCard as TopicCardType } from "@/data/homepage/homepage-types";
import styles from "./TopicCard.module.scss";

interface Props {
  data: TopicCardType;
  className?: string;
  direction?: "row" | "column";
}

export const TopicCard = ({ data, className, direction = "column" }: Props) => {
  const { title, description, href, img } = data;

  return (
    <Link
      href={href}
      className={`${styles.card} ${className ?? ""} ${styles[direction]}`}
    >
      <div className={`${styles[direction]}`}>
        {img && (
          <div className={styles.image}>
            <Image src={img.src} alt={img.alt} fill />
          </div>
        )}
        <div  className={styles.column}>
          <p className={styles.description}>{description}</p>
          <h3 className={styles.title}>{title} →</h3>
        </div>
      </div>
    </Link>
  );
};
