import Image from "next/image";
import Link from "next/link";
import { Titles } from "../Titles/Titles";
import { Button } from "../Buttons/Button";
import { LineSeparator } from "../LineSeparator/LineSeparator";
import styles from "./SubpageHeader.module.scss";
import { Subheader } from "@/data/general-types";

interface Props {
  data: Subheader;
}

export const SubpageHeader = ({ data }: Props) => {
  const { title, content, subtitle, buttonLabel, buttonLink, image } = data;

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <Titles title={title} as="h1" />
          <p className={styles.subtitle}>
            {subtitle} <LineSeparator />
          </p>
          <p>{content}</p>
         {buttonLink && 
           <Button className={styles.ctaButton}>
            <Link href={buttonLink}>{buttonLabel}</Link>
          </Button>
        }
        </div>
        <div className={styles.image}>
          <Image src={image.src} alt={image.alt} fill priority />
        </div>
      </div>
    </header>
  );
};
