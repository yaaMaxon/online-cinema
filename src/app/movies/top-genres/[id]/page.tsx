"use client";

import FreeTrail from "@/app/components/FreeTrail";
import MoviesTopGenres from "@/app/components/MoviesTopGenres";
import { useGetMoviesByGenresIdQuery } from "@/app/store/api/features/movieApi";
import { useParams } from "next/navigation";

const GenresId = () => {
  const { id: genresId } = useParams();
  const page = 1;

  const { data: moviesByGenres, isLoading } = useGetMoviesByGenresIdQuery({
    genresId,
    page,
  });

  const limitedMovies = moviesByGenres?.results?.slice(0, 10);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="text-2xl text-white">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 md:px-10 lg:px-20 mt-10 lg:mt-15 mb-20 lg:mb-[113px]">
        <div className="flex justify-center flex-col lg:relative lg:px-10 lg:pb-10 lg:pt-[60px] lg:border-[#262626] lg:border-[1px] lg:rounded-xl mb-20 lg:mb-[113px]">
          <span className="hidden lg:block absolute top-[-22px] bg-[#E50000] rounded-md font-semibold text-white px-5 py-2">
            Movies
          </span>
          <span className="hidden lg:block absolute left-[160px] top-[-22px] text-center bg-[#E50000] rounded-md font-semibold text-white px-5 py-2 ">
            Top 10 In
          </span>
          <MoviesTopGenres limitedMovies={limitedMovies} />
        </div>
        <FreeTrail />
      </div>
    </>
  );
};

export default GenresId;
