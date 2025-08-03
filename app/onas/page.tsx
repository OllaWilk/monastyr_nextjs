import { SplashImage } from "@/components/SplashImage/SplashImage";
import { headerData } from "@/data/onas/header";
import Image from "next/image";

export default function ONas() {
  return (
    <div className="container">
      <h2> Witaj w naszej wspólnocie</h2>
      <Image
        src={headerData.image.src}
        alt="strona w budowie"
        width={350}
        height={500}
        priority
      />
    </div>
  );
}
