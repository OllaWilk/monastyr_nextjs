import { quoteData } from "@/data/homepage/quotes";
import { Logo } from "../Logo/Logo";
import { Titles } from "../Titles/Titles";
import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./Quotes.module.scss";

interface Props {
  logo?: boolean;
  title: string;
  content: string[];
  strong?:string;
}

export const Quotes = ({ logo, title, content, strong }: Props) => (
  <section className={styles.quote}>
    <div className="container">
      <div className={styles.about}>
        {logo && (
          <Logo
            link={quoteData.logo.link}
            width={quoteData.logo.width}
            height={quoteData.logo.height}
          />
        )}
        <Titles title={title} as="h2" />
      </div>
      <div className={styles.text}>
        {content.map((line, index) => (
          <Paragraph key={index} text={line} />
        ))}

        <strong>{strong}</strong>
      </div>
    </div>
  </section>
);
