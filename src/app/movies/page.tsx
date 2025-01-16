import MoviesMain from "../components/MoviesMain";
import FreeTrail from "../components/FreeTrail";
import ChooseCategory from "../components/ChooseCategory";

const Movies = () => {
  return (
    <>
      <div className="mb-20 px-4 lg:mb-[100px] lg:px-20">
        <MoviesMain />
      </div>
      <div className="mb-20 px-4 lg:mb-[113px] lg:px-20">
        <ChooseCategory />
      </div>
      <div className="mb-20 px-4 lg:mb-[113px] lg:px-20">
        <FreeTrail />
      </div>
    </>
  );
};

export default Movies;
