import Image from "next/image";
import Link from "next/link";
import { HeaderData } from "@/data/onas/onas-types";
import { Titles } from "../Titles/Titles";
import { Button } from "../Buttons/Button";
import styles from "./SubpageHeader.module.scss";

interface Props {
  data: HeaderData;
}

export const SubpageHeader = ({ data }: Props) => {
  const { title, subtitle, buttonLabel, buttonLink, image } = data;

  return (
    <section className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <Titles title={title} as="h1" />
          <p className={styles.subtitle}>
            {subtitle} <span className={styles.lineSeparator}></span>
          </p>
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
    </section>
  );
};
