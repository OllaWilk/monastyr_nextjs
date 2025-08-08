import Image from "next/image";
import { Titles } from "../Titles/Titles";
import { Subtitles } from "../Subtitles/Subtitles";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./Card.module.scss";

interface Props {
  img: { alt: string; src: string; width?: number; height?: number };
  title: string;
  subtitle: string;
  paragraph: string[];
  reverse: boolean;
}

export const Card = ({
  img,
  title,
  subtitle,
  paragraph,
  reverse = false,
}: Props) => {
  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
      />
      <article className={styles.content}>
        <div className={styles.headerWrap}>
          <Titles as="h2" title={title} />
          <Subtitles title={subtitle} />
        </div>
        {paragraph.map((el, i) => (
          <Paragraph text={el} key={i} />
        ))}
      </article>
    </div>
  );
};
