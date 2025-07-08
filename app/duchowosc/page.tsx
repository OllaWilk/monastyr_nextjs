import Image from "next/image";

export default function Duchowosc() {
  return (
    <Image
      src="/under construction.png"
      alt="strona w budowie"
      width={350}
      height={500}
      priority
      className="container"
    />
  );
}
