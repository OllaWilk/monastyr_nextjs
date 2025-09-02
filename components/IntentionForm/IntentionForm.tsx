"use client";

import React, { useState } from "react";
import styles from "./IntentionForm.module.scss";
import { Status } from "@/data/general-types";

export const IntentionForm = () => {
  const [intention, setIntention] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  return (
    <div className={styles.IntentionForm}>
      <p>formularz</p>
      <form></form>
    </div>
  );
};
