import { Logo } from "../Logo/Logo";
import { Titles } from "../Titles/Titles";
import styles from "./Quotes.module.scss";

export const Quotes = () => (
  <section className={styles.quote}>
    <div className="container">
      <div className={styles.about}>
        <Logo link={false} width={112} height={112} />
        <Titles
          title={`Jesteśmy wspólnotą ekumeniczną, wpatrującą się w Jezusa Miłosiernego, </br> służącą wszystkim, a zwłaszcza tym, </br> co są na peryferiach.`}
          as="h2"
        />
      </div>
      <div className={styles.text}>
        <p>Zawsze się radujcie. Nieustannie się módlcie,</p>
        <p> za wszystko dziękujcie, gdyż taka jest wola</p>
        <p>Boga w Jezusie Chrystusie</p>
        <p> względem was.</p>

        <strong>1 Tes 5,16 - 18</strong>
      </div>
    </div>
  </section>
);
