"use client";

import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import ViewsIcon from "@/assets/views.svg";
import Image from "next/image";
import { BASE_URL } from "@/app/constants/path";
import { useState } from "react";
import { useAiringTodayShowsQuery } from "@/app/store/api/features/showApi";

interface AiringShows {
  id: number;
  popularity: number;
  vote_average: number;
  poster_path: string;
}

const NewReleasesShows = () => {
  const { data: airingTodayShows } = useAiringTodayShowsQuery(null);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(airingTodayShows?.results.length / itemsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < airingTodayShows?.results.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;

  const displayedNewReleases = airingTodayShows?.results.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <>
      <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
        <h2 className="text-white text-2xl font-bold lg:text-3xl">
          New Released Shows
        </h2>
        <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <ArrowLeftIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          </button>
          <div className="w-5 h-1 bg-[#333] rounded-[100px] overflow-hidden">
            <div
              className="h-full bg-[#E50000] transition-width duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <button
            type="button"
            onClick={handleNext}
            disabled={
              (currentPage + 1) * itemsPerPage >=
              airingTodayShows?.results.length
            }
          >
            <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          </button>
        </div>
      </div>
      <ul className="flex justify-center lg:justify-between flex-wrap">
        {displayedNewReleases?.map(
          ({ poster_path, id, popularity, vote_average }: AiringShows) => (
            <li
              key={id}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-4"
            >
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={BASE_URL + poster_path}
                  alt="movie"
                  width={250}
                  height={320}
                  className="rounded-[10px]"
                />
                <div className="flex">
                  <div className="flex items-center gap-[3px] py-2 px-[14px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px] mr-1">
                    <span className="text-default text-xs font-medium">
                      Rating: {vote_average.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center py-1 pl-1 pr-2 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                    <ViewsIcon />
                    <span className="text-default text-xs font-medium">
                      {popularity}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default NewReleasesShows;
