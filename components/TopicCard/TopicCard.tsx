import Image from "next/image";
import Link from "next/link";
import { TopicCard as TopicCardType } from "@/data/homepage/homepage-types";
import styles from "./TopicCard.module.scss";

interface Props {
  data: TopicCardType;
  className?: string;
}

export const TopicCard = ({ data, className }: Props) => {
  const { title, description, href, img } = data;

  return (
    <Link href={href} className={`${styles.card} ${className ?? ""}`}>
      <p className={styles.title}>{title} →</p>
      {img && (
        <div className={styles.image}>
          <Image src={img.src} alt={img.alt} fill />
        </div>
      )}
      <h3 className={styles.description}>{description}</h3>
    </Link>
  );
};
