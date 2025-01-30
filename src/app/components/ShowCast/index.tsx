"use client";

import { BASE_URL } from "@/app/constants/path";
import NoImg from "@/assets/no_img.png";
import Image from "next/image";
import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import { useState, useEffect } from "react";
import { useGetShowCastQuery } from "@/app/store/api/features/showApi";
import { useParams } from "next/navigation";

interface Cast {
  id: number;
  profile_path: string;
}

const ShowCast = () => {
  const { id: showId } = useParams();
  const { data: showCast } = useGetShowCastQuery(showId);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < showCast?.cast.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedCast = showCast?.cast.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="bg-[#1A1A1A] p-6 lg:p-10 rounded-[10px] border border-[#262626]">
      <div className="flex justify-between items-center mb-5">
        <span className="text-default text-sm lg:text-base font-medium">
          Cast
        </span>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <div className="bg-[#141414] border-[1px] border-[#262626] rounded-full p-3">
              <ArrowLeftIcon />
            </div>
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={(currentPage + 1) * itemsPerPage >= showCast?.cast.length}
          >
            <div className="bg-[#141414] border-[1px] border-[#262626] rounded-full p-3">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      </div>
      <ul className="flex items-center justify-between">
        {displayedCast?.map(({ id, profile_path }: Cast) => (
          <li key={id}>
            <Image
              src={profile_path !== null ? BASE_URL + profile_path : NoImg}
              alt="movie"
              width={87}
              height={89}
              className="rounded-[10px] w-[70px] h-[75px] lg:w-[95px] lg:h-[100px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowCast;
