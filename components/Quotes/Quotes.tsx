import { quoteData } from "@/data/homepage/quotes";
import { Logo } from "../Logo/Logo";
import { Titles } from "../Titles/Titles";
import styles from "./Quotes.module.scss";

export const Quotes = () => (
  <section className={styles.quote}>
    <div className="container">
      <div className={styles.about}>
        <Logo  link={quoteData.logo.link}
          width={quoteData.logo.width}
          height={quoteData.logo.height} />
        <Titles
          title={quoteData.title}
          as="h2"
        />
      </div>
      <div className={styles.text}>
       {quoteData.verseLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        <strong>1 Tes 5,16 - 18</strong>
      </div>
    </div>
  </section>
);
