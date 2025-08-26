'use client';

import React from "react";

import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { headerData } from "@/data/kontakt/header";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Titles } from "@/components/Titles/Titles";
import { kontaktData } from "@/data/kontakt/kontakt";
import styles from "./Kontakt.module.scss";
import { IntentionForm } from "@/components/IntentionForm/IntentionForm";

export default function Kontakt() {
  const { form } = kontaktData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

  };

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
          <h3>Dołącz do nas w social media</h3>
          <p>Sprawdź aktualności, zdjęcia i krótkie rozważania.</p>
          <nav className={styles.socials} aria-label="Linki do social media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              Telegram
            </a>
          </nav>
        </aside>
      </section>
    </div>
  );
}
