import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import TimeIcon from "@/assets/time.svg";
import StarIcon from "@/assets/star.svg";
import { moviesMustPopularList } from "../../MoviesCategoriesSettings";

const MustWatchesMovies = () => {
  return (
    <>
      <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
        <h2 className="text-white text-2xl font-bold lg:text-3xl">
          Must - Watch Movies
        </h2>
        <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex">
          <ArrowLeftIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
        </div>
      </div>
      <ul className="flex justify-center gap-4 lg:gap-5 flex-wrap">
        {moviesMustPopularList.map(({ time, reviews }, index) => (
          <li
            key={index}
            className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center py-[6px] pl-[6px] pr-2.5 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                <TimeIcon />
                <span className="text-default text-xs font-medium">{time}</span>
              </div>
              <div className="flex items-center py-1 pl-1 pr-2 gap-1 bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <StarIcon key={index} />
                ))}
                <span className="text-default text-xs font-medium">
                  {reviews}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MustWatchesMovies;
