"use client";

import React, { useState } from "react";
import styles from "./IntentionForm.module.scss";
import { Status } from "@/data/general-types";

export const IntentionForm = () => {
  const [intention, setIntention] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!intention.trim()) return;
    setStatus("sending");
    console.log(status)
  };

  return (
    <div className={styles.IntentionForm}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="intention">Twoja intencja</label>
        <textarea
          id="intention"
          name="intention"
          rows={5}
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          placeholder="Wpisz intencję…"
          required
        />
      </form>
      <p>{status}</p>
    </div>
  );
};
