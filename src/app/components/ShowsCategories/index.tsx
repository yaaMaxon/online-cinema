import ArrowRightIcon from "../../../assets/arrowRight.svg";
import ArrowLeftIcon from "../../../assets/arrowLeft.svg";
import TimeIcon from "../../../assets/time.svg";
import SeasonIcon from "../../../assets/season.svg";
import StarIcon from "../../../assets/star.svg";
import Image from "next/image";
import {
  showsCategoriesList,
  showsMostPopularList,
  showsTrendingNowList,
  showsReleasesList,
  showsMustPopularList,
} from "./ShowsCategoriesSettings";

const ShowsCategories = () => {
  return (
    <div className="flex justify-center flex-col lg:relative lg:px-10 lg:pb-10 lg:pt-[60px] lg:border-[#262626] lg:border-[1px] lg:rounded-xl">
      <span className="hidden lg:block absolute top-[-22px] bg-[#E50000] rounded-md font-semibold text-white px-5 py-2 w-[95px]">
        Shows
      </span>
      <div className="mb-[50px]">
        <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
          <h2 className="text-white text-2xl font-bold lg:text-3xl">
            Our Genres
          </h2>
          <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex">
            <ArrowLeftIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
            <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          </div>
        </div>
        <ul className="flex justify-center lg:justify-between gap-4 lg:gap-5 flex-wrap">
          {showsCategoriesList.map(({ categorie, img }, index) => (
            <li
              key={index}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-6"
            >
              <div className="relative mb-[2px]">
                <Image src={img} alt="categorie" />
                <div
                  className="absolute inset-0 rounded-[10px]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, #1A1A1A 101.79%)",
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white text-sm lg:text-lg font-semibold">
                  {categorie}
                </span>
                <ArrowRightIcon />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-[50px]">
        <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
          <h2 className="text-white text-2xl font-bold lg:text-3xl">
            Popular Top 10 In Genres
          </h2>
          <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex">
            <ArrowLeftIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
            <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          </div>
        </div>
        <ul className="flex justify-center gap-4 lg:gap-5 flex-wrap">
          {showsMostPopularList.map(({ genre, img }, index) => (
            <li
              key={index}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-[30px]"
            >
              <div className="relative mb-[2px]">
                <Image src={img} alt="categorie" />
                <div
                  className="absolute inset-0 rounded-[10px]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, #1A1A1A 101.79%)",
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[2px]">
                  <span className="bg-[#E50000] text-white text-xs font-semibold rounded-[4px] p-2">
                    Top 10 In
                  </span>
                  <span className="text-white text-sm lg:text-lg font-semibold">
                    {genre}
                  </span>
                </div>
                <ArrowRightIcon />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-[50px]">
        <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
          <h2 className="text-white text-2xl font-bold lg:text-3xl">
            Trending Shows Now
          </h2>
          <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex">
            <ArrowLeftIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
            <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          </div>
        </div>
        <ul className="flex justify-center gap-4 lg:gap-5 flex-wrap">
          {showsTrendingNowList.map(({ time, season }, index) => (
            <li
              key={index}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center py-1 pl-1 pr-2 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                  <TimeIcon />
                  <span className="text-default text-xs font-medium">
                    {time}
                  </span>
                </div>
                <div className="flex items-center py-1 pl-1 pr-2 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                  <SeasonIcon />
                  <span className="text-default text-xs font-medium">
                    {season}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-[50px]">
        <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
          <h2 className="text-white text-2xl font-bold lg:text-3xl">
            New Released Shows
          </h2>
          <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex">
            <ArrowLeftIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
            <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          </div>
        </div>
        <ul className="flex justify-center gap-5 flex-wrap">
          {showsReleasesList.map(({ time, season }, index) => (
            <li
              key={index}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center py-1 pl-1 pr-2 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                  <TimeIcon />
                  <span className="text-default text-xs font-medium">
                    {time}
                  </span>
                </div>
                <div className="flex items-center py-1 pl-1 pr-2 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                  <SeasonIcon />
                  <span className="text-default text-xs font-medium">
                    {season}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
          <h2 className="text-white text-2xl font-bold lg:text-3xl">
            Must - Watch Shows
          </h2>
          <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex">
            <ArrowLeftIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
            <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          </div>
        </div>
        <ul className="flex justify-center gap-4 lg:gap-5 flex-wrap">
          {showsMustPopularList.map(({ time, reviews }, index) => (
            <li
              key={index}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center py-[6px] pl-[6px] pr-2.5 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                  <TimeIcon />
                  <span className="text-default text-xs font-medium">
                    {time}
                  </span>
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
      </div>
    </div>
  );
};

export default ShowsCategories;
