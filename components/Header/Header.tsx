import Link from "next/link";
import { SplashImage } from "../SplashImage/SplashImage";
import { Titles } from "../Titles/Titles";
import { Button } from "../Buttons/Button";
import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.splash}>
    <div className={styles.inner}>
      <Titles
        title={`
        Monastyr <br />
        Świętego <br />
        Krzysztofa`}
      />
      <p className={styles.cta}>
        Chcesz nas lepiej poznać? <span className={styles.lineSeparator}></span>
      </p>
      <Button className={styles.ctaButton}>
        <Link href="/onas" >przeczytaj o nas</Link>
      </Button>
    </div>

    <SplashImage src={"/splash.jpg"} alt={"święty Krzysztof"} />
  </header>
);
