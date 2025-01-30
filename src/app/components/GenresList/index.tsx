"use client";

import categoriesAdventure from "@/assets/categoriesAdventure.webp";
import Link from "next/link";
import Image from "next/image";
import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useGenreMoviesQuery } from "@/app/store/api/features/movieApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

  const [currentPage, setCurrentPage] = useState(0);
  const [swiperIndex, setSwiperIndex] = useState(0);
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

  const totalSlides = genreMovies?.genres.length;
  const progressPercentage = ((currentPage + 1) / totalPages) * 100;
  const progressPercentageForModile = ((swiperIndex + 1) / totalSlides) * 100;

  const displayedGenres = genreMovies?.genres.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const isMedia640 = useMediaQuery(640);

  const slidesPerView = () => {
    if (!isMedia640) {
      return 3;
    }

    if (isMedia640) {
      return 1.8;
    }
  };

  return (
    <>
      <div className="flex lg:justify-between lg:items-center mb-5 lg:mb-[60px]">
        {(title || label) && (
          <div>
            {title && (
              <h2
                className={`text-white text-2xl font-bold lg:text-3xl ${titleStyles}`}
              >
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

      <ul className="hidden lg:flex justify-center lg:justify-between flex-wrap">
        {displayedGenres?.map(({ name, id }: Genres) => (
          <li
            key={id}
            className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-6 w-[190px] h-[230px]"
          >
            <Link href={`/movies/genres/${id}`}>
              <div className="relative mb-[2px]">
                <Image
                  src={categoriesAdventure}
                  alt="categorie"
                  width={190}
                  height={230}
                  className="rounded-[10px]"
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

      {/* Mobile Swiper */}
      <div className="lg:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesPerView()}
          centeredSlides={false}
          grabCursor
          onSlideChange={(swiper) => {
            setSwiperIndex(swiper.activeIndex);
          }}
        >
          {genreMovies?.genres.map(({ name, id }: Genres) => (
            <SwiperSlide
              key={id}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-5 w-[190px] h-[230px]"
            >
              <Link href={`/movies/genres/${id}`}>
                <div className="relative mb-[2px]">
                  <Image
                    src={categoriesAdventure}
                    alt="categorie"
                    layout="auto"
                    className="rounded-[10px] w-full"
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
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-5 w-full flex justify-center">
          <div className="w-1/2 h-1 bg-[#333] rounded-[100px] overflow-hidden">
            <div
              className="h-full bg-[#E50000] transition-width duration-300"
              style={{ width: `${progressPercentageForModile}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenresList;
