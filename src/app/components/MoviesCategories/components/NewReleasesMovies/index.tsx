"use client";

import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import Image from "next/image";
import { BASE_URL } from "@/app/constants/path";
import { useState } from "react";
import { useNewMoviesQuery } from "@/app/store/api/features/movieApi";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

interface NewReleases {
  id: number;
  release_date: string;
  poster_path: string;
}

const NewReleasesMovies = () => {
  const { data: newMovies } = useNewMoviesQuery(null);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(newMovies?.results.length / itemsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < newMovies?.results.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;

  const displayedNewMovies = newMovies?.results.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
        <h2 className="text-white text-2xl font-bold lg:text-3xl">
          New Releases
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
              (currentPage + 1) * itemsPerPage >= newMovies?.results.length
            }
          >
            <ArrowRightIcon className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md" />
          </button>
        </div>
      </div>
      <ul className="flex justify-center lg:justify-between flex-wrap">
        {displayedNewMovies?.map(
          ({ id, release_date, poster_path }: NewReleases) => (
            <li
              key={id}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-4  "
            >
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={BASE_URL + poster_path}
                  alt="movie"
                  width={190}
                  height={230}
                  className="rounded-[10px]"
                />
                <div className="flex items-center gap-[3px] py-2 px-[14px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                  <span className="text-default text-xs font-medium">
                    Released at
                  </span>
                  <span className="text-[#BFBFBF] text-xs font-medium">
                    {formatDate(release_date)}
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

export default NewReleasesMovies;
