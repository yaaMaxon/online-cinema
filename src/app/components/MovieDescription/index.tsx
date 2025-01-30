import CalendarIcon from "@/assets/calendar.svg";
import LanguageIcon from "@/assets/language.svg";
import EmptyStarIcon from "@/assets/empty-star.svg";
import GroupIcon from "@/assets/group.svg";
import TimeIcon from "@/assets/time.svg";
import StarIcon from "@/assets/star.svg";
import { Movie } from "@/app/types/movie";

type Props = {
  movieDetails: Movie;
};

const MovieDescription = ({ movieDetails }: Props) => {
  const { release_date, spoken_languages, vote_average, genres, runtime } =
    movieDetails;

  return (
    <div className="flex flex-col gap-5 lg:gap-6 bg-[#1A1A1A] p-6 lg:p-10 rounded-[10px] border border-[#262626] max-h-[600px]">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-[2px] ">
          <CalendarIcon />
          <span className="text-default text-sm lg:text-base font-medium">
            Released Year
          </span>
        </div>
        <span className="text-white font-semibold">
          {release_date.split("-")[0]}
        </span>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-[2px]">
          <LanguageIcon />
          <span className="text-default text-sm lg:text-base font-medium">
            Available Languages
          </span>
        </div>
        <ul className="flex gap-2.5 flex-wrap">
          {spoken_languages?.map(({ english_name }) => (
            <li
              key={english_name}
              className="bg-[#141414] border border-[#262626] rounded-md px-3 py-[6px]"
            >
              <span className="text-white text-sm lg:text-base font-medium">
                {english_name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-[2px] ">
          <EmptyStarIcon />
          <span className="text-default text-sm lg:text-base font-medium">
            Ratings
          </span>
        </div>
        <div className="flex flex-col gap-1 p-[14px] bg-[#141414] border border-[#262626] rounded-lg w-40">
          <span className="text-white text-sm lg:text-base font-medium">
            IMDb
          </span>
          <div className="flex items-center gap-[2px]">
            {[1, 2, 3, 4, 5].map((star, index) => {
              const fullStars = Math.floor(vote_average / 2);
              const isFull = index < fullStars;

              return (
                <span key={index}>
                  {isFull ? (
                    <StarIcon fill="#E50000" />
                  ) : (
                    <StarIcon fill="#999" />
                  )}
                </span>
              );
            })}
            <span className="text-white text-sm font-medium ">
              {vote_average?.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-[2px]">
          <GroupIcon />
          <span className="text-default text-sm lg:text-base font-medium">
            Genres
          </span>
        </div>
        <ul className="flex gap-2.5 flex-wrap">
          {genres?.map(({ id, name }) => (
            <li
              key={id}
              className="bg-[#141414] border border-[#262626] rounded-md px-3 py-[6px]"
            >
              <span className="text-white text-sm lg:text-base font-medium">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-[2px] ">
          <TimeIcon />
          <span className="text-default text-sm lg:text-base font-medium">
            Runtime
          </span>
        </div>
        <span className="text-white font-semibold">
          {`${Math.floor(runtime / 60)}:${runtime % 60}`}
        </span>
      </div>
    </div>
  );
};

export default MovieDescription;
