import MovieCast from "../MovieCast";
import MovieDescription from "../MovieDescription";
import MovieReviews from "../MovieReviews";
import { Movie } from "@/app/types/movie";

type Props = {
  movieDetails: Movie;
};

const MovieDetailsBox = ({ movieDetails }: Props) => {
  const { overview } = movieDetails;

  return (
    <section className="grid gap-5 lg:grid-cols-2 lg:gap-5 mb-20 lg:mb-[120px ]">
      <div className="space-y-5">
        <div className="bg-[#1A1A1A] p-6 lg:p-10 rounded-[10px] border border-[#262626]">
          <span className="text-default text-sm lg:text-base font-medium mb-2 lg:mb-2.5">
            Description
          </span>
          <p className="text-white text-sm lg:text-base font-medium">
            {overview}
          </p>
        </div>
        <MovieCast />
        <MovieReviews />
      </div>
      <MovieDescription movieDetails={movieDetails} />
    </section>
  );
};

export default MovieDetailsBox;
