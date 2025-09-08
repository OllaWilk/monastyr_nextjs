"use client";

import React, { useMemo, useState } from "react";
import { Status } from "@/data/general-types";
import styles from "./IntentionForm.module.scss";

const MIN_LEN = 10;
const MAX_LEN = 500;
const URL_OR_EMAIL = /(https?:\/\/|www\.|[\w.-]+@[\w.-]+\.\w{2,})/i;

export const IntentionForm = () => {
  const [intention, setIntention] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState(false);

  const trimmed = useMemo(
    () => intention.replace(/\s+/g, " ").trim(),
    [intention]
  );

  const error = useMemo(() => {
    if (!touched) return "";
    if (!trimmed) return "Wpisz treść intencji.";
    if (trimmed.length < MIN_LEN) return `Za mało znaków. Minimalna ilość znaków ${MIN_LEN}.`;
    if (trimmed.length > MAX_LEN) return `Za dużo znaków. Maksymalna ilość znaków ${MAX_LEN}.`;
    if (URL_OR_EMAIL.test(trimmed))
      return "Nie podawaj linków ani adresów e-mail.";
    return "";
  }, [trimmed, touched]);

  const isValid =
    !error && trimmed.length >= MIN_LEN && trimmed.length <= MAX_LEN;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    setStatus("sending");

    try {
      const formData = new FormData();
      formData.append("intention", intention);

      await fetch(process.env.NEXT_PUBLIC_INTENTION_ENDPOINT as string, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      for (const [key, value] of formData.entries()) {
        console.log("FD:", key, value);
      }

      setStatus("sent");
      setIntention("");
      setTouched(false);
    } catch (err) {
      setStatus("error");
      console.error("Error submitting intention:", err);
      return;
    }
  };

  const charsLeft = Math.max(0, MAX_LEN - intention.length);

  return (
    <div className={styles.IntentionForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.metaRow}>
          <textarea
            id="intention"
            name="intention"
            rows={5}
            value={intention}
            onChange={(e) => setIntention(e.target.value)}
            placeholder="Wpisz intencję…"
            onBlur={() => setTouched(true)}
            aria-invalid={!!error}
            aria-describedby="intention-help intention-error"
            maxLength={MAX_LEN + 50}
            required
            className={error ? styles.textareaError : undefined}
          />
          <div className={styles.info}>
            <small id="inteniton-help">
              Minimum {MIN_LEN} znaków, maksymalna {MAX_LEN}. Pozostało:
              {charsLeft}.
            </small>
            {error && (
              <small
                id="intention-error"
                role="alert"
                className={styles.errorMsg}
              >
                {error}
              </small>
            )}
          </div>
        </div>
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Wysyłanie…" : "Wyślij"}
        </button>
        <div aria-live="polite" style={{ marginTop: "0.5rem" }}>
          {status === "sent" && <p>Dziękuję! Intencja została wysłana ✉️</p>}
          {status === "error" && (
            <p>Ups, coś poszło nie tak. Spróbuj ponownie.</p>
          )}
        </div>
      </form>
    </div>
  );
};
