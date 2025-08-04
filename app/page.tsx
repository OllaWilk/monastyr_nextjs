import { quoteData } from "@/data/homepage/quotes";
import { Header } from "@/components/Header/Header";
import {Quotes} from "@/components/Quotes/Quotes";
import { Topics } from "@/components/Topics/Topics";

const Home = () => {
  const {title} = quoteData;
  return (
    <div>
      <Header />
      <main >
        <Quotes logo={true} title={title} content={quoteData.verseLines} strong={quoteData.verseReference}/>
        <Topics />
      </main>
    </div>
  );
};

export default Home;
