import Image from "next/image";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import styles from "./UnityIconSection.module.scss";

interface Props {
  alt: string;
  src: string;
  width: number;
  height: number;
  title: string;
  text: string;
}

export const UnityIconsSection = ({
  alt,
  src,
  width,
  height,
  title,
  text,
}: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
      <h3 className={styles.title}> {title}</h3>
      <Paragraph text={text} />
    </div>
  );
};
