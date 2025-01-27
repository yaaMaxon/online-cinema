// "use client";

// import ArrowRightIcon from "@/assets/arrowRight.svg";
// import ArrowLeftIcon from "@/assets/arrowLeft.svg";
// import Link from "next/link";
// import Image from "next/image";
// import popularACtion from "@/assets/popularAction.webp";
// import { useState } from "react";
// import { useGenreMoviesQuery } from "@/app/store/api/features/movieApi";

// interface Genres {
//   name: string;
//   id: number;
// }

// const PopularGenres = () => {
//   const { data: genreMovies } = useGenreMoviesQuery(null);

//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 4;
//   const totalPages = Math.ceil(genreMovies?.genres.length / itemsPerPage);

//   const handleNext = () => {
//     if ((currentPage + 1) * itemsPerPage < genreMovies?.genres.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const progressPercentage = ((currentPage + 1) / totalPages) * 100;

//   const displayedGenres = genreMovies?.genres.slice(
//     currentPage * itemsPerPage,
//     (currentPage + 1) * itemsPerPage
//   );

//   return (
//     <>
//       <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
//         <h2 className="text-white text-2xl font-bold lg:text-3xl">
//           Popular Top 10 In Genres
//         </h2>
//         <div className="bg-[#0F0F0F] border-[1px] border-[#1F1F1F] rounded-[10px] p-4 hidden lg:flex items-center gap-3">
//           <button
//             type="button"
//             onClick={handlePrev}
//             disabled={currentPage === 0}
//           >
//             <div className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md p-2.5">
//               <ArrowLeftIcon />
//             </div>
//           </button>
//           <div className="w-5 h-1 bg-[#333] rounded-[100px] overflow-hidden">
//             <div
//               className="h-full bg-[#E50000] transition-width duration-300"
//               style={{ width: `${progressPercentage}%` }}
//             ></div>
//           </div>
//           <button
//             type="button"
//             onClick={handleNext}
//             disabled={
//               (currentPage + 1) * itemsPerPage >= genreMovies?.genres.length
//             }
//           >
//             <div className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md p-2.5">
//               <ArrowRightIcon />
//             </div>
//           </button>
//         </div>
//       </div>
//       <ul className="flex justify-center lg:justify-between flex-wrap">
//         {displayedGenres?.map(({ name, id }: Genres) => (
//           <li
//             key={id}
//             className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-[30px]"
//           >
//             <Link href={`/movies/top-genres/${id}`}>
//               <div className="relative mb-[2px]">
//                 <Image
//                   src={popularACtion}
//                   alt="genre"
//                   className="rounded-[10px]"
//                 />
//                 <div
//                   className="absolute inset-0 rounded-[10px]"
//                   style={{
//                     background:
//                       "linear-gradient(180deg, rgba(26, 26, 26, 0.00) 0%, #1A1A1A 101.79%)",
//                   }}
//                 ></div>
//               </div>
//               <div className="flex justify-between items-center">
//                 <div className="flex flex-col gap-[2px]">
//                   <span className="bg-[#E50000] text-white text-xs lg:text-base font-semibold rounded-[4px] w-[86px] p-2">
//                     Top 10 In
//                   </span>
//                   <span className="text-white text-base lg:text-xl font-semibold">
//                     {name}
//                   </span>
//                 </div>
//                 <ArrowRightIcon />
//               </div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default PopularGenres;

"use client";

import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import Link from "next/link";
import Image from "next/image";
import popularACtion from "@/assets/popularAction.webp";
import { useState } from "react";
import { useGenreMoviesQuery } from "@/app/store/api/features/movieApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Genres {
  name: string;
  id: number;
}

const PopularGenres = () => {
  const { data: genreMovies } = useGenreMoviesQuery(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [swiperIndex, setSwiperIndex] = useState(0); // Змінна для індексу слайда
  const itemsPerPage = 4;
  const totalPages = Math.ceil(genreMovies?.genres.length / itemsPerPage);
  const totalSlides = genreMovies?.genres.length;

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
  const progressPercentageForMobile = ((swiperIndex + 1) / totalSlides) * 100; // Для мобільної версії

  const displayedGenres = genreMovies?.genres.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className="flex justify-start lg:justify-between items-center mb-5 lg:mb-10">
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
            className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-[30px]"
          >
            <Link href={`/movies/top-genres/${id}`}>
              <div className="relative mb-[2px]">
                <Image
                  src={popularACtion}
                  alt="genre"
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
                <div className="flex flex-col gap-[2px]">
                  <span className="bg-[#E50000] text-white text-xs lg:text-base font-semibold rounded-[4px] w-[86px] p-2">
                    Top 10 In
                  </span>
                  <span className="text-white text-base font-semibold">
                    {name}
                  </span>
                </div>
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
          slidesPerView={1.5}
          centeredSlides={false}
          grabCursor
          onSlideChange={(swiper) => {
            setSwiperIndex(swiper.activeIndex); // Оновлюємо індекс слайда
          }}
        >
          {genreMovies?.genres.map(({ name, id }: Genres) => (
            <SwiperSlide
              key={id}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-5 w-[190px] h-[230px]"
            >
              <Link href={`/movies/top-genres/${id}`}>
                <div className="relative mb-[2px]">
                  <Image
                    src={popularACtion}
                    alt="genre"
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
                  <div className="flex flex-col gap-[2px]">
                    <span className="bg-[#E50000] text-white text-xs lg:text-base font-semibold rounded-[4px] w-[86px] p-2">
                      Top 10 In
                    </span>
                    <span className="text-white text-base font-semibold">
                      {name}
                    </span>
                  </div>
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
              style={{ width: `${progressPercentageForMobile}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularGenres;
