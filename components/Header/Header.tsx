import styles from "./Header.module.scss";
import { SplashImage } from "../SplashImage/SplashImage";
import Link from "next/link";
import { MainTitle } from "../MainTitle/MainTitle";
import { Button } from "../Buttons/Button";

export const Header = () => (
  <header className={styles.splash}>
    <div className={styles.inner}>
      <MainTitle
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
