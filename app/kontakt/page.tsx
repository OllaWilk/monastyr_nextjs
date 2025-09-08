import React from "react";
import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { headerData } from "@/data/kontakt/header";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Titles } from "@/components/Titles/Titles";
import { kontaktData } from "@/data/kontakt/kontakt";
import { IntentionForm } from "@/components/IntentionForm/IntentionForm";
import styles from "./kontakt.module.scss";

export default function Kontakt() {
  const { form } = kontaktData;

  return (
    <div className={styles.page}>
      <SubpageHeader data={headerData} />
      <section
        className={styles.wrapper}
        aria-label="Kontakt i intencje modlitewne"
      >
        <div className={styles.card}>
          <Titles as="h2" title={form.title} />
          <Paragraph text={form.description} />
          <IntentionForm />
        </div>

        <aside className={styles.aside}>
          <Titles as="h2" title={"Dołącz do nas w social media"} />
          <Paragraph
            text={"Sprawdź aktualności, zdjęcia i krótkie rozważania."}
          />
        </aside>
        <div>
          <Titles as="h2" title={"Galeria"} />
        </div>
      </section>
    </div>
  );
}
