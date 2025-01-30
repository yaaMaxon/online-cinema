"use client";

import Link from "next/link";
import Image from "next/image";
import NoImg from "@/assets/no_img.png";
import { BASE_URL } from "@/app/constants/path";
import { Movie } from "@/app/types/movie";

interface SearchMovies {
  page: number;
  results: Movie[];
  total_pages: number;
}

type Prop = {
  searchedMovies: SearchMovies;
  handleModalClose: () => void;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const SearchMoviesList = ({ searchedMovies, handleModalClose }: Prop) => {
  const { results: movies } = searchedMovies;

  return (
    <ul className="flex flex-wrap gap-2.5 items-center justify-center">
      {movies.map(({ id, poster_path, release_date }: Movie) => (
        <li
          key={id}
          className="cursor-pointer border border-[#262626] bg-[#1A1A1A] rounded-[10px] p-4"
        >
          <Link href={`/movies/${id}`} onClick={handleModalClose}>
            <div className="flex flex-col items-center gap-4">
              <Image
                src={poster_path !== null ? BASE_URL + poster_path : NoImg}
                alt="movie"
                width={190}
                height={270}
                className="rounded-[10px] w-[190px] h-[270px] "
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
      ))}
    </ul>
  );
};

export default SearchMoviesList;
