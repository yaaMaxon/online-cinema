"use client";

import MoviePreview from "@/app/components/MoviePreview";
import MovieDetailsBox from "@/app/components/MovieDetailsBox";
import FreeTrail from "@/app/components/FreeTrail";
import { useGetMovieDetailsQuery } from "@/app/store/api/features/movieApi";
import { useParams } from "next/navigation";

const MovieId = () => {
  const { id: movieId } = useParams();
  const { data: movieDetails, isLoading } = useGetMovieDetailsQuery(movieId);

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
        <div className="mb-[60px] lg:mb-20">
          <MoviePreview
            backdrop={movieDetails.backdrop_path}
            title={movieDetails.title}
            overview={movieDetails.overview}
          />
        </div>
        <MovieDetailsBox movieDetails={movieDetails} />
        <FreeTrail />
      </div>
    </>
  );
};

export default MovieId;
