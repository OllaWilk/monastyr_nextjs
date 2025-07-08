import Image from "next/image";

export default function Pytania() {
  return (
    <div className="container">
      <Image
        src="/under construction.png"
        alt="strona w budowie"
        width={350}
        height={500}
        priority
      />
    </div>
  );
}
