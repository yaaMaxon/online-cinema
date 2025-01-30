import GenreShowsList from "./components/GenreShowsList";
import PopularShowGenres from "./components/PopularShowGenres";
import TrendingShows from "./components/TrendingShows";
import NewReleasesShows from "./components/NewReleasesShows";
import MustWatchesShows from "./components/MustWatchesShows";

const ShowsCategories = () => {
  return (
    <div className="flex justify-center flex-col lg:relative lg:px-10 lg:pb-10 lg:pt-[60px] lg:border-[#262626] lg:border-[1px] lg:rounded-xl">
      <span className="hidden lg:block absolute top-[-22px] bg-[#E50000] rounded-md font-semibold text-white px-5 py-2 w-[95px]">
        Shows
      </span>
      <div id="genres-show" className="mb-[50px] scroll-mt-[128px]">
        <GenreShowsList />
      </div>
      <div className="mb-[50px]">
        <PopularShowGenres />
      </div>
      <div id="trending-show" className="mb-[50px] scroll-mt-[128px]">
        <TrendingShows />
      </div>
      <div id="new-release-show" className="mb-[50px] scroll-mt-[128px]">
        <NewReleasesShows />
      </div>
      <div id="popular-show" className="scroll-mt-[128px]">
        <MustWatchesShows />
      </div>
    </div>
  );
};

export default ShowsCategories;
