"use client";

import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import Link from "next/link";
import Image from "next/image";
import popularDrama from "@/assets/popularDrama.webp";
import { useState } from "react";
import { useGenreShowsQuery } from "@/app/store/api/features/showApi";

interface Genres {
  name: string;
  id: number;
}

const PopularShowGenres = () => {
  const { data: popularGenres } = useGenreShowsQuery(null);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(popularGenres?.genres.length / itemsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < popularGenres?.genres.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;

  const displayedGenres = popularGenres?.genres.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <>
      <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
        <h2 className="text-white text-2xl font-bold lg:text-3xl">
          Popular Top 10 In Genres
        </h2>
        <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <div className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md p-2.5">
              <ArrowLeftIcon />
            </div>
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
              (currentPage + 1) * itemsPerPage >= popularGenres?.genres.length
            }
          >
            <div className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md p-2.5">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </div>
      <ul className="flex justify-center lg:justify-between flex-wrap">
        {displayedGenres?.map(({ name, id }: Genres) => (
          <li
            key={id}
            className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-[30px]"
          >
            <Link href={`/shows/top-genres/${id}`}>
              <div className="relative mb-[2px]">
                <Image src={popularDrama} alt="categorie" />
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
                  <span className="bg-[#E50000] text-white text-xs font-semibold rounded-[4px] w-[86px] p-2">
                    Top 10 In
                  </span>
                  <span className="text-white text-sm lg:text-lg font-semibold">
                    {name}
                  </span>
                </div>
                <ArrowRightIcon />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PopularShowGenres;
