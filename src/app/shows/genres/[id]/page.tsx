"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useGetShowsByGenresIdQuery } from "@/app/store/api/features/showApi";
import { useGenreShowsQuery } from "@/app/store/api/features/showApi";
import ShowsByGenres from "@/app/components/ShowsByGenres";
import FreeTrail from "@/app/components/FreeTrail";
import { Show } from "@/app/types/show";

interface Genres {
  name: string;
  id: number;
}

const ShowsGenresId = () => {
  const { id: genresId } = useParams();
  const [page, setPage] = useState<number>(1);
  const [allShows, setAllShows] = useState<Show[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  const {
    data: showsByGenres,
    isLoading,
    error,
  } = useGetShowsByGenresIdQuery({
    genresId,
    page,
  });

  const { data: genreShows } = useGenreShowsQuery(null);

  const genre = genreShows?.genres.find(
    (genre: Genres) => genre.id === Number(genresId)
  );
  const genreName = genre ? genre.name : "Unknown Genre";

  useEffect(() => {
    if (showsByGenres?.results) {
      setAllShows((prevShows) => {
        const newShows = showsByGenres.results.filter(
          (show: Show) => !prevShows.some((prevShow) => prevShow.id === show.id)
        );
        return [...prevShows, ...newShows];
      });
      setTotalPages(showsByGenres.total_pages);
    }
  }, [showsByGenres]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading && page === 1) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="text-2xl text-white">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="text-2xl text-white">Error loading shows.</span>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 md:px-10 lg:px-20 mt-10 lg:mt-15 mb-20 lg:mb-[113px]">
        <div className="flex justify-center flex-col lg:relative lg:px-10 lg:pb-10 lg:pt-[60px] lg:border-[#262626] lg:border-[1px] lg:rounded-xl mb-20 lg:mb-[113px]">
          <span className="hidden lg:block absolute top-[-22px] bg-[#E50000] rounded-md font-semibold text-white px-5 py-2">
            Shows
          </span>
          <ShowsByGenres
            showsByGenres={{
              results: allShows,
              page,
              total_pages: totalPages,
            }}
            genreName={genreName}
            onLoadMore={handleLoadMore}
          />
        </div>
        <FreeTrail />
      </div>
    </>
  );
};

export default ShowsGenresId;
