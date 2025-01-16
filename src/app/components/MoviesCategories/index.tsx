import PopularGenres from "./components/PopularGenres";
import TrendingMovies from "./components/TrendingMovies";
import NewReleasesMovies from "./components/NewReleasesMovies";
import MustWatchesMovies from "./components/MustWatchesMovies";
import GenresList from "../GenresList";

const MoviesCategories = () => {
  return (
    <div className="flex justify-center flex-col lg:relative lg:px-10 lg:pb-10 lg:pt-[60px] lg:border-[#262626] lg:border-[1px] lg:rounded-xl lg:mb-[140px]">
      <span className="hidden lg:block absolute top-[-22px] bg-[#E50000] rounded-md font-semibold text-white px-5 py-2 w-[95px]">
        Movies
      </span>
      <div className="mb-[50px]">
        <GenresList title="Our Genres" titleStyles="text-[30px]" />
      </div>
      <div className="mb-[50px]">
        <PopularGenres />
      </div>
      <div className="mb-[50px]">
        <TrendingMovies />
      </div>
      <div className="mb-[50px]">
        <NewReleasesMovies />
      </div>
      <div>
        <MustWatchesMovies />
      </div>
    </div>
  );
};

export default MoviesCategories;
