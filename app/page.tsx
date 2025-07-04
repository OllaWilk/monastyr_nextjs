import Image from "next/image";

const Home = () => {
  return (
    <div>
      <main>
        <Image
          src="/under construction.png"
          alt="strona w budowie"
          width={350}
          height={500}
          priority
        />
      </main>
    </div>
  );
};

export default Home;
