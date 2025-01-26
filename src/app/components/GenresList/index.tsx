"use client";

import categoriesAdventure from "@/assets/categoriesAdventure.webp";
import Link from "next/link";
import Image from "next/image";
import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import { useState } from "react";
import { useGenreMoviesQuery } from "@/app/store/api/features/movieApi";

interface Genres {
  name: string;
  id: number;
}

type Props = {
  title: string;
  label?: string;
  titleStyles?: string;
};

const GenresList = ({ title, label, titleStyles }: Props) => {
  const { data: genreMovies } = useGenreMoviesQuery(null);
  console.log(genreMovies);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(genreMovies?.genres.length / itemsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < genreMovies?.genres.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;

  const displayedGenres = genreMovies?.genres.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <>
      <div
        id="genres"
        className="flex lg:justify-between lg:items-center mb-10 lg:mb-[60px] scroll-mt-32"
      >
        {(title || label) && (
          <div>
            {title && (
              <h2 className={`text-white text-2xl font-bold ${titleStyles}`}>
                {title}
              </h2>
            )}
            {label && (
              <p className="text-default mt-2.5 text-sm lg:text-base">
                {label}
              </p>
            )}
          </div>
        )}
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
              (currentPage + 1) * itemsPerPage >= genreMovies?.genres.length
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
            className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-6"
          >
            <Link href={`/movies/genres/${id}`}>
              <div className="relative mb-[2px]">
                <Image
                  src={categoriesAdventure}
                  alt="categorie"
                  width={190}
                  height={230}
                />
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
                  {name}
                </span>
                <ArrowRightIcon />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
