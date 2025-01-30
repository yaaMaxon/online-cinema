"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import SearchIcon from "../../../assets/search.svg";
import SearchMoviesList from "../SearchMoviesList";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGetSearchedMoviesQuery } from "@/app/store/api/features/movieApi";

type Props = {
  setSearchMoviesState: (state: boolean) => void;
  isSearchMoviesOpen: boolean;
};

export interface ISearch {
  movie: string;
}

const SearchMovies = ({ isSearchMoviesOpen, setSearchMoviesState }: Props) => {
  const [movie, setMovie] = useState("");
  const { data: searchedMovies } = useGetSearchedMoviesQuery(movie, {
    skip: !movie,
  });

  const defaultValues = {
    movie: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISearch>({ defaultValues });

  const onSubmit: SubmitHandler<ISearch> = ({ movie }) => {
    setMovie(movie);

    reset();
  };

  const handleModalClose = () => {
    setSearchMoviesState(false);
    setMovie("");
  };

  return (
    <AnimatePresence>
      {isSearchMoviesOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-0 top-0 w-full h-full bg-black/30 backdrop-blur-sm z-[300] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-full max-w-[600px] max-h-[80vh] p-4 sm:p-8 bg-[#141414] border-[3px] border-[#262626] rounded-md mx-4 overflow-hidden"
          >
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-4">
                <label
                  className="text-default text-base lg:text-2xl font-bold"
                  htmlFor="movie"
                >
                  Find your movie
                </label>
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2 ">
                  <input
                    id="movie"
                    type="text"
                    {...register("movie", {
                      required: true,
                      minLength: {
                        value: 2,
                        message: "Movie must be more than 2 symbols",
                      },
                    })}
                    className="bg-[#0F0F0F] text-default border-[3px] border-[#262626] rounded-md resize-none p-4 w-full"
                    placeholder="Search movie"
                  />
                  {errors.movie && (
                    <span className="text-[#E50000]">
                      {errors.movie.message}
                    </span>
                  )}
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-1 bg-[#E50000] text-white text-base font-semibold rounded-md px-5 py-3.5 cursor-pointer hover:bg-[#e50000eb] transition-colors w-full sm:w-[250px] mx-auto"
                  >
                    <SearchIcon />
                    Search
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-6 overflow-y-scroll h-[50vh]">
              {searchedMovies?.results?.length > 0 ? (
                <SearchMoviesList
                  searchedMovies={searchedMovies}
                  handleModalClose={handleModalClose}
                />
              ) : (
                <p className="text-default text-2xl text-center">
                  No movies found
                </p>
              )}
            </div>
            <MdClose
              className="absolute top-1 right-1 lg:top-4 lg:right-4 fill-[#999] w-6 h-6 cursor-pointer"
              onClick={handleModalClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchMovies;
