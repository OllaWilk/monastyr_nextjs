import { Card } from "@/components/Card/Card";
import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { headerData } from "@/data/onas/header";
import { aboutData } from "@/data/onas/sections";

export default function ONas() {
  return (
    <>
      <SubpageHeader data={headerData} />
      <main className="container wraper-grid">
          {aboutData.map((card, index) => (
            <Card
              key={card.id}
              title={card.title}
              paragraph={card.content}
              img={card.image}
              reverse={index % 2 === 1}
            />
          ))}
    
      </main>
    </>
  );
}
