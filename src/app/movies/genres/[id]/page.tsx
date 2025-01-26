// "use client";

// import FreeTrail from "@/app/components/FreeTrail";
// import MoviesByGenres from "@/app/components/MoviesByGenres";
// import { useGetMoviesByGenresIdQuery } from "@/app/store/api/features/movieApi";
// import { useParams } from "next/navigation";

// const GenresId = () => {
//   const { id: genresId } = useParams();
//   const { data: moviesByGenres, isLoading } =
//     useGetMoviesByGenresIdQuery(genresId);

//   if (isLoading) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <span className="text-2xl text-white">Loading...</span>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="px-4 md:px-10 lg:px-20 mt-10 lg:mt-15 mb-20 lg:mb-[113px]">
//         <div className="flex justify-center flex-col lg:relative lg:px-10 lg:pb-10 lg:pt-[60px] lg:border-[#262626] lg:border-[1px] lg:rounded-xl mb-20 lg:mb-[113px]">
//           <span className="hidden lg:block absolute top-[-22px] bg-[#E50000] rounded-md font-semibold text-white px-5 py-2">
//             Movies
//           </span>
//           <MoviesByGenres moviesByGenres={moviesByGenres} />
//         </div>
//         <FreeTrail />
//       </div>
//     </>
//   );
// };

// export default GenresId;

"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useGetMoviesByGenresIdQuery } from "@/app/store/api/features/movieApi";
import MoviesByGenres from "@/app/components/MoviesByGenres";
import FreeTrail from "@/app/components/FreeTrail";

const GenresId = () => {
  const { id: genresId } = useParams();
  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const {
    data: moviesByGenres,
    error,
    isLoading,
  } = useGetMoviesByGenresIdQuery({
    genresId,
    page,
  });

  useEffect(() => {
    if (moviesByGenres?.results) {
      setAllMovies((prevMovies) => {
        const newMovies = moviesByGenres.results.filter(
          (movie) => !prevMovies.some((prevMovie) => prevMovie.id === movie.id)
        );
        return [...prevMovies, ...newMovies];
      });
      setTotalPages(moviesByGenres.total_pages);
    }
  }, [moviesByGenres]);

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
    <div className="px-4 md:px-10 lg:px-20 mt-10 lg:mt-15 mb-20 lg:mb-[113px]">
      <div className="flex justify-center flex-col lg:relative lg:px-10 lg:pb-10 lg:pt-[60px] lg:border-[#262626] lg:border-[1px] lg:rounded-xl mb-20 lg:mb-[113px]">
        <span className="hidden lg:block absolute top-[-22px] bg-[#E50000] rounded-md font-semibold text-white px-5 py-2">
          Movies
        </span>
        <MoviesByGenres
          moviesByGenres={{
            results: allMovies,
            page,
            total_pages: totalPages,
          }}
          onLoadMore={handleLoadMore}
        />
      </div>
      <FreeTrail />
    </div>
  );
};

export default GenresId;
