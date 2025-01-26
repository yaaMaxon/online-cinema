import ShowSeasonsAndEpisodes from "../ShowSeasonsAndEpisodes";
import ShowCast from "../ShowCast";
import ShowReviews from "../ShowReviews";
import ShowDescription from "../ShowDescription";
import { Show } from "@/app/types/show";

type Props = {
  showDetails: Show;
};

const ShowDetailsBox = ({ showDetails }: Props) => {
  const { overview } = showDetails;

  return (
    <section className="grid gap-5 lg:grid-cols-2 lg:gap-5 mb-20 lg:mb-[120px ]">
      <div className="space-y-5">
        <ShowSeasonsAndEpisodes showDetails={showDetails} />
        <div className="bg-[#1A1A1A] p-6 lg:p-10 rounded-[10px] border border-[#262626]">
          <span className="text-default text-sm lg:text-base font-medium mb-2 lg:mb-2.5">
            Description
          </span>
          <p className="text-white text-sm lg:text-base font-medium">
            {overview}
          </p>
        </div>
        <ShowCast />
        <ShowReviews />
      </div>
      <ShowDescription showDetails={showDetails} />
    </section>
  );
};

export default ShowDetailsBox;
