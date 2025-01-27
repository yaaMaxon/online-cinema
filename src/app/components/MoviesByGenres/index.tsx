"use client";

import ViewsIcon from "@/assets/views.svg";
import Link from "next/link";
import Image from "next/image";
import NoImg from "@/assets/no_img.png";
import { BASE_URL } from "@/app/constants/path";
import { Movie } from "@/app/types/movie";

interface MoviePage {
  page: number;
  results: Movie[];
  total_pages: number;
}

type Props = {
  moviesByGenres: MoviePage;
  genreName: string;
  onLoadMore: () => void;
};

const MoviesByGenres = ({ moviesByGenres, onLoadMore, genreName }: Props) => {
  const { results: movies, page, total_pages } = moviesByGenres;

  return (
    <>
      <h2 className="text-white text-center text-2xl font-bold lg:text-3xl mb-5 lg:mb-10">
        {genreName}
      </h2>
      <ul className="flex justify-center gap-5 lg:justify-between flex-wrap">
        {movies?.map(({ id, poster_path, popularity, vote_average }: Movie) => (
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
                <div className="flex">
                  <div className="flex items-center gap-[3px] py-2 px-[14px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px] mr-1">
                    <span className="text-default text-xs font-medium">
                      Rating: {vote_average.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center py-1 pl-1 pr-2 gap-[2px] bg-[#141414] border-[1px] border-[#262626] rounded-[51px]">
                    <ViewsIcon />
                    <span className="text-default text-xs font-medium">
                      {popularity}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {page < total_pages && (
        <button
          type="button"
          className="text-center bg-[#E50000] text-white text-sm font-semibold rounded-md px-5 py-3.5 cursor-pointer hover:bg-[#e50000eb] transition-colors ml-auto mr-auto mt-5 lg:mt-10"
          onClick={onLoadMore}
        >
          Load More
        </button>
      )}
    </>
  );
};

export default MoviesByGenres;
