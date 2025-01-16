import Image from "next/image";
import Main from "./components/Main";
import GenresList from "./components/GenresList";
import VariousDevice from "./components/VariousDevice";
import QuestionsBox from "./components/QuestionsBox";
import Subscription from "./components/Subscription";
import FreeTrail from "./components/FreeTrail";
import bgImg from ".//../assets/backgroundHero.webp";

const Home = () => {
  return (
    <>
      <div className="mb-[100px] lg:mb-[150px ]">
        <div className="absolute top-0 left-0 -z-10  bg-black opacity-25 bg-cover">
          <Image className="h-[630px] object-cover" src={bgImg} alt="cover" />
        </div>
        <Main />
      </div>
      <div className="mb-[50px] px-4 lg:mb-[120px] lg:px-20">
        <GenresList
          title="Explore our wide variety of categories"
          label="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        />
      </div>
      <div className="mb-20 px-4 lg:mb-[120px] lg:px-20">
        <VariousDevice />
      </div>
      <div className="mb-20 px-4 lg:mb-[120px] lg:px-20">
        <QuestionsBox />
      </div>
      <div className="mb-20 px-4 lg:mb-[113px] lg:px-20">
        <Subscription />
      </div>
      <div className="mb-20 px-4 lg:mb-[113px] lg:px-20">
        <FreeTrail />
      </div>
    </>
  );
};

export default Home;
