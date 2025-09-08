"use client";

import React, { useState } from "react";
import { Status } from "@/data/general-types";
import styles from "./IntentionForm.module.scss";

export const IntentionForm = () => {
  const [intention, setIntention] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!intention.trim()) return;

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
    } catch (err) {
      setStatus("error");
      console.error("Error submitting intention:", err);
      return;
    }
  };

  return (
    <div className={styles.IntentionForm}>
      <form onSubmit={handleSubmit}> 
        <textarea
          id="intention"
          name="intention"
          rows={5}
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          placeholder="Wpisz intencję…"
          required
        />
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
