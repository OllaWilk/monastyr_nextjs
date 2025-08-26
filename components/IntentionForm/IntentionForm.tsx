"use client";

import { useState } from "react";
import styles from "./IntentionForm.module.scss";

export const IntentionForm = () => {
  const [intention, setIntention] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!intention.trim()) {
      setMessage("Napisz proszę treść intencji.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/intent/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intention }),
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Błąd wysyłki" }));
        throw new Error(error || "Błąd wysyłki");
      }

      setStatus("ok");
      setMessage("Dziękujemy. Twoja intencja została wysłana.");
      setIntention("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Coś poszło nie tak. Spróbuj ponownie.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      {/* honey-pot przed botami */}
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

      <button
        type="submit"
        className={styles.button}
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Wysyłanie…" : "Wyślij intencję"}
      </button>

      {message && (
        <p
          role="status"
          className={`${styles.status} ${status === "ok" ? styles.ok : styles.err}`}
        >
          {message}
        </p>
      )}
    </form>
  );
};
