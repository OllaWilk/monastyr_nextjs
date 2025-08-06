import Link from "next/link";
import { headerData } from "@/data/homepage/header";
import { SplashImage } from "../SplashImage/SplashImage";
import { Titles } from "../Titles/Titles";
import { Button } from "../Buttons/Button";
import styles from "./Header.module.scss";
import { LineSeparator } from "../LineSeparator/LineSeparator";

export const Header = () => (
  <header className={styles.splash}>
    <div className={styles.inner}>
      <Titles title={headerData.title} />
      <p className={styles.cta}>
        {headerData.ctaText} <LineSeparator />
      </p>
      <Button className={styles.ctaButton}>
        <Link href={headerData.buttonLink}>{headerData.buttonLabel}</Link>
      </Button>
    </div>
    <SplashImage src={headerData.image.src} alt={headerData.image.alt} />
  </header>
);
