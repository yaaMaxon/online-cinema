"use client";

import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import NoImg from "@/assets/no_img.png";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/app/constants/path";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useNewMoviesQuery } from "@/app/store/api/features/movieApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
  const [swiperIndex, setSwiperIndex] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(newMovies?.results.length / itemsPerPage);
  const totalSlides = newMovies?.results.length;

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
  const progressPercentageForMobile = ((swiperIndex + 1) / totalSlides) * 100;

  const displayedNewMovies = newMovies?.results.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const isMedia640 = useMediaQuery(640);

  const slidesPerView = () => {
    if (!isMedia640) {
      return 3;
    }

    if (isMedia640) {
      return 1.2;
    }
  };

  return (
    <>
      <div className="flex justify-start lg:justify-between items-center mb-5 lg:mb-10">
        <h2 className="text-white text-2xl font-bold lg:text-3xl">
          New Releases
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
              (currentPage + 1) * itemsPerPage >= newMovies?.results.length
            }
          >
            <div className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md p-2.5">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </div>

      <ul className="hidden lg:flex justify-center lg:justify-between flex-wrap">
        {displayedNewMovies?.map(
          ({ id, release_date, poster_path }: NewReleases) => (
            <li
              key={id}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-4"
            >
              <Link href={`/movies/${id}`}>
                <div className="flex flex-col items-center gap-4">
                  <Image
                    src={poster_path !== null ? BASE_URL + poster_path : NoImg}
                    alt="movie"
                    width={190}
                    height={230}
                    className="rounded-[10px]"
                  />
                  <div className="flex items-center gap-[3px] py-[6px] px-[14px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                    <span className="text-default text-xs font-medium">
                      Released at
                    </span>
                    <span className="text-[#BFBFBF] text-xs font-medium">
                      {formatDate(release_date)}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          )
        )}
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
          {newMovies?.results.map(
            ({ id, release_date, poster_path }: NewReleases) => (
              <SwiperSlide
                key={id}
                className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-3 w-[190px] h-[230px]"
              >
                <Link href={`/movies/${id}`}>
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src={
                        poster_path !== null ? BASE_URL + poster_path : NoImg
                      }
                      alt="movie"
                      width={190}
                      height={230}
                      layout="auto"
                      className="rounded-[10px] w-full"
                    />
                    <div className="flex items-center gap-[3px] py-[6px] px-[14px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                      <span className="text-default text-xs font-medium">
                        Released at
                      </span>
                      <span className="text-[#BFBFBF] text-xs font-medium">
                        {formatDate(release_date)}
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )
          )}
        </Swiper>
        <div className="mt-5 w-full flex justify-center">
          <div className="w-1/2 h-1 bg-[#333] rounded-[100px] overflow-hidden">
            <div
              className="h-full bg-[#E50000] transition-width duration-300"
              style={{ width: `${progressPercentageForMobile}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewReleasesMovies;
