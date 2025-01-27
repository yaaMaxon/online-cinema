// "use client";

// import ArrowRightIcon from "@/assets/arrowRight.svg";
// import ArrowLeftIcon from "@/assets/arrowLeft.svg";
// import ViewsIcon from "@/assets/views.svg";
// import StarIcon from "@/assets/star.svg";
// import NoImg from "@/assets/no_img.png";
// import Image from "next/image";
// import Link from "next/link";
// import { BASE_URL } from "@/app/constants/path";
// import { useState } from "react";
// import { useMustWatchesShowsQuery } from "@/app/store/api/features/showApi";

// interface MustWatchesShow {
//   id: number;
//   popularity: number;
//   vote_average: number;
//   poster_path: string;
// }

// const MustWatchesShows = () => {
//   const { data: mustWatchesShow } = useMustWatchesShowsQuery(null);

//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 4;
//   const totalPages = Math.ceil(mustWatchesShow?.results.length / itemsPerPage);

//   const handleNext = () => {
//     if ((currentPage + 1) * itemsPerPage < mustWatchesShow?.results.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const progressPercentage = ((currentPage + 1) / totalPages) * 100;

//   const displayedMustWatchesShow = mustWatchesShow?.results.slice(
//     currentPage * itemsPerPage,
//     (currentPage + 1) * itemsPerPage
//   );
//   return (
//     <>
//       <div className="flex justify-center lg:justify-between items-center mb-5 lg:mb-10">
//         <h2 className="text-white text-2xl font-bold lg:text-3xl">
//           Must - Watch Shows
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
//               (currentPage + 1) * itemsPerPage >=
//               mustWatchesShow?.results.length
//             }
//           >
//             <div className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md p-2.5">
//               <ArrowRightIcon />
//             </div>
//           </button>
//         </div>
//       </div>
//       <ul className="flex justify-center lg:justify-between flex-wrap">
//         {displayedMustWatchesShow?.map(
//           ({ id, popularity, vote_average, poster_path }: MustWatchesShow) => (
//             <li
//               key={id}
//               className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-4"
//             >
//               <Link href={`/shows/${id}`}>
//                 <div className="flex flex-col gap-4">
//                   <Image
//                     src={poster_path !== null ? BASE_URL + poster_path : NoImg}
//                     alt="movie"
//                     width={250}
//                     height={320}
//                     className="rounded-[10px]"
//                   />
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center py-[6px] pl-[6px] pr-2.5 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
//                       <ViewsIcon />
//                       <span className="text-default text-xs font-medium">
//                         {popularity}
//                       </span>
//                     </div>
//                     <div className="flex items-center py-[6px] px-2.5 gap-1 bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
//                       {[1, 2, 3, 4, 5].map((star, index) => {
//                         const fullStars = Math.floor(vote_average / 2);
//                         const isFull = index < fullStars;

//                         return (
//                           <span key={index}>
//                             {isFull ? (
//                               <StarIcon fill="#E50000" />
//                             ) : (
//                               <StarIcon fill="#999" />
//                             )}
//                           </span>
//                         );
//                       })}
//                       <span className="text-default text-xs font-medium">
//                         {vote_average.toFixed(1)}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </li>
//           )
//         )}
//       </ul>
//     </>
//   );
// };

// export default MustWatchesShows;

"use client";

import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import ViewsIcon from "@/assets/views.svg";
import StarIcon from "@/assets/star.svg";
import NoImg from "@/assets/no_img.png";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/app/constants/path";
import { useState } from "react";
import { useMustWatchesShowsQuery } from "@/app/store/api/features/showApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface MustWatchesShow {
  id: number;
  popularity: number;
  vote_average: number;
  poster_path: string;
}

const MustWatchesShows = () => {
  const { data: mustWatchesShow } = useMustWatchesShowsQuery(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [swiperIndex, setSwiperIndex] = useState(0); // Стан для індексу слайда
  const itemsPerPage = 4;
  const totalPages = Math.ceil(mustWatchesShow?.results.length / itemsPerPage);
  const totalSlides = mustWatchesShow?.results.length;

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < mustWatchesShow?.results.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;
  const progressPercentageForMobile = ((swiperIndex + 1) / totalSlides) * 100; // Прогрес для мобільної версії

  const displayedMustWatchesShow = mustWatchesShow?.results.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className="flex justify-start lg:justify-between items-center mb-5 lg:mb-10">
        <h2 className="text-white text-2xl font-bold lg:text-3xl">
          Must - Watch Shows
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
              (currentPage + 1) * itemsPerPage >=
              mustWatchesShow?.results.length
            }
          >
            <div className="bg-[#1A1A1A] border-[1px] border-[#1F1F1F] rounded-md p-2.5">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </div>

      <ul className="hidden lg:flex justify-center lg:justify-between flex-wrap">
        {displayedMustWatchesShow?.map(
          ({ id, popularity, vote_average, poster_path }: MustWatchesShow) => (
            <li
              key={id}
              className="cursor-pointer border border-[#262626] bg-[#1A1A1A] border-[1px solid #262626] rounded-[10px] p-4"
            >
              <Link href={`/shows/${id}`}>
                <div className="flex flex-col gap-4">
                  <Image
                    src={poster_path !== null ? BASE_URL + poster_path : NoImg}
                    alt="movie"
                    width={250}
                    height={320}
                    className="rounded-[10px]"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center py-[6px] pl-[6px] pr-2.5 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                      <ViewsIcon />
                      <span className="text-default text-xs font-medium">
                        {popularity}
                      </span>
                    </div>
                    <div className="flex items-center py-[6px] px-2.5 gap-1 bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                      {[1, 2, 3, 4, 5].map((star, index) => {
                        const fullStars = Math.floor(vote_average / 2);
                        const isFull = index < fullStars;

                        return (
                          <span key={index}>
                            {isFull ? (
                              <StarIcon fill="#E50000" />
                            ) : (
                              <StarIcon fill="#999" />
                            )}
                          </span>
                        );
                      })}
                      <span className="text-default text-xs font-medium">
                        {vote_average.toFixed(1)}
                      </span>
                    </div>
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
          slidesPerView={1.5}
          centeredSlides={false}
          grabCursor
          onSlideChange={(swiper) => {
            setSwiperIndex(swiper.activeIndex); // Оновлюємо індекс слайда
          }}
        >
          {mustWatchesShow?.results.map(
            ({
              poster_path,
              id,
              popularity,
              vote_average,
            }: MustWatchesShow) => (
              <SwiperSlide
                key={id}
                className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-3 w-[190px] h-[230px]"
              >
                <Link href={`/shows/${id}`}>
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src={
                        poster_path !== null ? BASE_URL + poster_path : NoImg
                      }
                      alt="movie"
                      width={250}
                      height={320}
                      className="rounded-[10px]"
                    />
                    <div className="flex flex-col gap-[5px] items-center">
                      <div className="flex items-center py-[6px] pl-[6px] pr-2.5 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                        <ViewsIcon />
                        <span className="text-default text-xs font-medium">
                          {popularity}
                        </span>
                      </div>
                      <div className="flex items-center py-[6px] px-2.5 gap-1 bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                        {[1, 2, 3, 4, 5].map((star, index) => {
                          const fullStars = Math.floor(vote_average / 2);
                          const isFull = index < fullStars;

                          return (
                            <span key={index}>
                              {isFull ? (
                                <StarIcon fill="#E50000" />
                              ) : (
                                <StarIcon fill="#999" />
                              )}
                            </span>
                          );
                        })}
                        <span className="text-default text-xs font-medium">
                          {vote_average.toFixed(1)}
                        </span>
                      </div>
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

export default MustWatchesShows;
