import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import ViewsIcon from "@/assets/views.svg";
import Image from "next/image";
import { BASE_URL } from "@/app/constants/path";
import { useTrendingMoviesQuery } from "@/app/store/api/features/movieApi";

interface TrendingMovies {
  id: number;
  popularity: number;
  poster_path: string;
}

const TrendingMovies = () => {
  const { data: trending } = useTrendingMoviesQuery(null);
  console.log(trending);

  return (
    <>
      <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
        <h2 className="text-white text-2xl font-bold lg:text-3xl">
          Trending Now
        </h2>
        <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex">
          <ArrowLeftIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
        </div>
      </div>
      <ul className="flex justify-center gap-4 lg:gap-5 flex-wrap">
        {trending?.results.map(
          ({ poster_path, id, popularity }: TrendingMovies) => (
            <li
              key={id}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-4"
            >
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={BASE_URL + poster_path}
                  alt="movie"
                  width={190}
                  height={230}
                  className="rounded-[10px]"
                />
                {/* <div className="flex items-center py-1 pl-1 pr-2 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                  <TimeIcon />
                  <span className="text-default text-xs font-medium"></span>
                </div> */}
                <div className="flex items-center py-1 pl-1 pr-2 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                  <ViewsIcon />
                  <span className="text-default text-xs font-medium">
                    {popularity}
                  </span>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default TrendingMovies;
