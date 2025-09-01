
import React from "react";

import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { headerData } from "@/data/kontakt/header";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Titles } from "@/components/Titles/Titles";
import { kontaktData } from "@/data/kontakt/kontakt";

export default function Kontakt() {
  const { form } = kontaktData;


  return (
    <div >
      <SubpageHeader data={headerData} />
      <section
       
        aria-label="Kontakt i intencje modlitewne"
      >
        <div >
          <Titles as="h2" title={form.title} />
          <Paragraph text={form.description} />
        </div>

        <aside>
          <h3>Dołącz do nas w social media</h3>
          <p>Sprawdź aktualności, zdjęcia i krótkie rozważania.</p>
        
        </aside>
      </section>
    </div>
  );
}
