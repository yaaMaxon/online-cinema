import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import { moviesReleasesList } from "../../MoviesCategoriesSettings";

const NewReleasesMovies = () => {
  return (
    <>
      <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
        <h2 className="text-white text-2xl font-bold lg:text-3xl">
          New Releases
        </h2>
        <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex">
          <ArrowLeftIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
        </div>
      </div>
      <ul className="flex justify-center gap-5 flex-wrap">
        {moviesReleasesList.map((date, index) => (
          <li
            key={index}
            className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-4"
          >
            <div className="flex items-center gap-[3px] py-2 px-[14px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
              <span className="text-[#BFBFBF] text-xs font-medium">
                Released at
              </span>
              <span className="text-default text-xs font-medium">{date}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewReleasesMovies;
