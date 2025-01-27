"use client";

import ArrowRightIcon from "@/assets/arrowRight.svg";
import ArrowLeftIcon from "@/assets/arrowLeft.svg";
import PlusIcon from "@/assets/plus.svg";
import StarIcon from "@/assets/star.svg";
import ModalReviewsForm from "../ModalReviewsForm.jsx";
import { useGetMovieReviewsQuery } from "@/app/store/api/features/movieApi";
import { useState } from "react";
import { useParams } from "next/navigation";

interface Author {
  username: string;
  name: string;
  avatar_path: string;
  rating: number;
}

interface Review {
  id: number;
  content: string;
  author_details: Author;
}

const MovieReviews = () => {
  const { id: movieId } = useParams();
  const { data: reviews, isLoading } = useGetMovieReviewsQuery(movieId);
  const [isModalOpen, setModalState] = useState(false);

  const handleModalOpen = () => {
    setModalState(true);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(reviews?.results.length / itemsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < reviews?.results.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progressPercentage = ((currentPage + 1) / totalPages) * 100;

  const displayedReviews = reviews?.results.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="text-2xl text-white">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[30px] bg-[#1A1A1A] p-6 lg:p-10 rounded-[10px] border border-[#262626]">
      <div className="flex justify-between items-center">
        <span className="text-default text-sm lg:text-base font-medium">
          Reviews
        </span>
        <button
          type="button"
          onClick={handleModalOpen}
          className="flex items-center gap-1 cursor-pointer text-white text-sm font-medium bg-[#141414] border border-[#262626] rounded-md p-3"
        >
          <PlusIcon />
          Add Your Review
        </button>
      </div>
      <ul>
        {displayedReviews.length !== 0 ? (
          displayedReviews?.map(({ id, content, author_details }: Review) => (
            <li
              key={id}
              className="bg-[#0F0F0F] border border-[#262626] rounded-xl p-6 lg:p-[30px]"
            >
              <div className="flex gap-2.5 lg:gap-0 flex-col lg:flex-row items-start lg:items-center lg:justify-between mb-4">
                <span className="text-white lg:text-lg font-medium">
                  {author_details.username}
                </span>
                <div className="flex items-center py-1 px-2 gap-1 bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                  {[1, 2, 3, 4, 5].map((star, index) => {
                    const fullStars = Math.floor(author_details.rating / 2);
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
                  <span className="text-default text-sm font-medium ">
                    {author_details.rating?.toFixed(1)}
                  </span>
                </div>
              </div>
              <p className="text-default text-sm lg:text-base">{content}</p>
            </li>
          ))
        ) : (
          <li>
            <p className="text-white text-lg lg:text-xl text-center">
              No reviews yet!
            </p>
          </li>
        )}
      </ul>
      {displayedReviews.length !== 0 && (
        <div className="flex items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage === 0}
          >
            <div className="bg-[#141414] border-[1px] border-[#262626] rounded-full p-3">
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
              (currentPage + 1) * itemsPerPage >= reviews?.results.length
            }
          >
            <div className="bg-[#141414] border-[1px] border-[#262626] rounded-full p-3">
              <ArrowRightIcon />
            </div>
          </button>
        </div>
      )}
      {isModalOpen && <ModalReviewsForm setModalState={setModalState} />}
    </div>
  );
};

export default MovieReviews;
