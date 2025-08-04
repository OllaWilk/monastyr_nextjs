import { Titles } from "../Titles/Titles";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./Card.module.scss";

interface Props {
  img: { alt: string; src: string };
  title: string;
  paragraph: string[];
  reverse: boolean;
}

export const Card = ({ img, title, paragraph, reverse = false }: Props) => {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.image}>
        <img src={img.src} alt={img.alt}  />
      </div>
      <div className={styles.content}>
        <Titles as="h2" title={title} />
        {paragraph.map((el, i) => (
          <Paragraph text={el} key={i} />
        ))}
      </div>
    </div>
  );
};
