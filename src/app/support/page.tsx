import SupportMain from "../components/SupportMain";
import QuestionsBox from "../components/QuestionsBox";
import FreeTrail from "../components/FreeTrail";

const Support = () => {
  return (
    <>
      <div className="mb-20 px-4 lg:mb-[120px] lg:px-20">
        <SupportMain />
      </div>
      <div className="mb-20 px-4 lg:mb-[113px] lg:px-20">
        <QuestionsBox />
      </div>
      <div className="mb-20 px-4 lg:mb-[113px] lg:px-20">
        <FreeTrail />
      </div>
    </>
  );
};

export default Support;
