import { moviesMostPopularList } from "../../MoviesCategoriesSettings";
import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import Image from "next/image";

const PopularGenres = () => {
  return (
    <>
      <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
        <h2 className="text-white text-2xl font-bold lg:text-3xl">
          Popular Top 10 In Genres
        </h2>
        <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex">
          <ArrowLeftIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
        </div>
      </div>
      <ul className="flex flex-wrap justify-center gap-4 lg:gap-5">
        {moviesMostPopularList.map(({ genre, img }, index) => (
          <li
            key={index}
            className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-[30px]"
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
    </>
  );
};

export default PopularGenres;
