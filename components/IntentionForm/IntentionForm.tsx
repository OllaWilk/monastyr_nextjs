"use client";

import { useState } from "react";
import styles from "./IntentionForm.module.scss";

export const IntentionForm = () => {
  const [intention, setIntention] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(intention);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className={styles.honeypot}
        aria-hidden="true"
      />

      <label htmlFor="intention" className={styles.label}>
        Treść intencji
      </label>
      <textarea
        id="intention"
        className={styles.textarea}
        placeholder="Napisz swoją intencję…"
        value={intention}
        onChange={(e) => setIntention(e.target.value)}
        rows={7}
        required
      />

      <button type="submit" className={styles.button}>
        "Wyślij intencję"
      </button>
    </form>
  );
};
