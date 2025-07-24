import Image from "next/image";
import Link from "next/link";
import { TopicCard as TopicCardType } from "@/data/homepage/homepage-types";
import styles from "./TopicCard.module.scss";

interface Props {
  data: TopicCardType;
  className?: string;
}

export const TopicCard = ({ data, className = "column" }: Props) => {
  const { title, description, href, img } = data;

  return (
    <Link href={href} className={`${styles.card} ${className ?? ""} `}>
      <h3 className={styles.title}>{title} →</h3>
      <div className={styles.image}>
        <Image src={img.src} alt={img.alt} fill />
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};
