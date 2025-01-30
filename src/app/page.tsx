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
      <div
        id="categories"
        className="mb-[50px] px-4 lg:mb-[120px] lg:px-20 scroll-mt-[128px]"
      >
        <GenresList
          title="Explore our wide variety of categories"
          label="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
        />
      </div>
      <div
        id="devices"
        className="mb-20 px-4 lg:mb-[120px] lg:px-20 scroll-mt-[128px]"
      >
        <VariousDevice />
      </div>
      <div
        id="faq"
        className="mb-20 px-4 lg:mb-[120px] lg:px-20 scroll-mt-[128px]"
      >
        <QuestionsBox />
      </div>
      <div
        id="pricing"
        className="mb-20 px-4 lg:mb-[113px] lg:px-20 scroll-mt-[128px]"
      >
        <Subscription />
      </div>
      <div className="mb-20 px-4 lg:mb-[113px] lg:px-20">
        <FreeTrail />
      </div>
    </>
  );
};

export default Home;
