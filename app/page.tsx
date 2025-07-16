import { Header } from "@/components/Header/Header";
import {Quotes} from "@/components/Quotes/Quotes";
import { Topics } from "@/components/Topics/Topics";

const Home = () => {
  return (
    <div>
      <Header />
      <main >
        <Quotes />
        <Topics />
      </main>
    </div>
  );
};

export default Home;
