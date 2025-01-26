"use client";

import { Show } from "@/app/types/show";
import ArrowTopIcon from "@/assets/arrowTop.svg";
import ArrowBottomIcon from "@/assets/arrowBottom.svg";
import NoImg from "@/assets/no_img.png";
import Image from "next/image";
import { BASE_URL } from "@/app/constants/path";
import { useState } from "react";

type Props = {
  showDetails: Show;
};

const ShowSeasonsAndEpisodes = ({ showDetails }: Props) => {
  const { seasons } = showDetails;
  const [visibleSeasons, setVisibleSeasons] = useState<number | null>(null);

  const toggleSeasonVisibility = (seasonId: number) => {
    setVisibleSeasons((prev) => (prev === seasonId ? null : seasonId));
  };

  return (
    <div className="bg-[#1A1A1A] p-6 lg:p-[30px] rounded-[10px] border border-[#262626]">
      <div className="mb-5 lg:mb-[30px]">
        <span className="text-white text-lg lg:text-xl font-semibold">
          Seasons and Episodes
        </span>
      </div>
      <ul className="flex flex-col gap-4">
        {seasons.map(
          ({
            id,
            season_number,
            episode_count,
            poster_path,
            overview,
            vote_average,
          }) => (
            <li
              key={id}
              className="bg-[#0F0F0F] border border-[#262626] rounded-[10px] px-5 lg:px-10 py-4 lg:py-5"
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-white text-base lg:text-xl font-semibold mr-[6px] lg:mr-2">
                    Season{" "}
                    {season_number > 0 && season_number < 10
                      ? `0${season_number}`
                      : season_number}
                  </span>
                  <span className="text-default text-sm lg:text-base font-medium">
                    {episode_count} Episodes
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => toggleSeasonVisibility(id)}
                >
                  <div className="bg-[#141414] border border-[#262626] rounded-full p-3">
                    {visibleSeasons === id ? (
                      <ArrowTopIcon />
                    ) : (
                      <ArrowBottomIcon />
                    )}
                  </div>
                </button>
              </div>
              {visibleSeasons === id && (
                <div className="lg:flex justify-between mt-5 lg:mt-6 bg-[#141414] rounded-lg p-5 lg:px-0 lg:pt-[30px] lg:pb-10 lg:bg-inherit lg:rounded-none lg:border-t lg:border-t-[#262626]">
                  <div className="flex items-center justify-between lg:gap-2 lg:flex-wrap lg:justify-end lg:flex-col-reverse mb-[18px] lg:mb-0">
                    <div className="relative">
                      <Image
                        src={
                          poster_path !== null ? BASE_URL + poster_path : NoImg
                        }
                        alt="movie"
                        width={140}
                        height={89}
                        className="rounded-xl border border-[#262626]"
                      />
                      <div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background:
                            "linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%)",
                        }}
                      ></div>
                    </div>
                    <span className="text-default text-4xl font-semibold">
                      {" "}
                      {season_number > 0 && season_number < 10
                        ? `0${season_number}`
                        : season_number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5 lg:gap-[14px] lg:w-[300px]">
                    <div>
                      <span className="text-default text-xs font-medium bg-[#141414] border border-[#262626] rounded-md p-[6px]">
                        Rating: {vote_average}
                      </span>
                    </div>
                    <p className="text-default">
                      {overview ? overview : "No overview now!"}
                    </p>
                  </div>
                </div>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ShowSeasonsAndEpisodes;
