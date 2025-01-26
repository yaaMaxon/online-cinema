"use client";

import ShowPreview from "@/app/components/ShowPreview";
import ShowDetailsBox from "@/app/components/ShowDetailsBox";
import FreeTrail from "@/app/components/FreeTrail";
import { useGetShowDetailsQuery } from "@/app/store/api/features/showApi";
import { useParams } from "next/navigation";

const MovieId = () => {
  const { id: showId } = useParams();
  const { data: showDetails, isLoading } = useGetShowDetailsQuery(showId);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="text-2xl text-white">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 md:px-10 lg:px-20 mt-10 lg:mt-15 mb-20 lg:mb-[113px]">
        <div className="mb-[60px] lg:mb-20">
          <ShowPreview
            backdrop={showDetails.backdrop_path}
            name={showDetails.name}
            overview={showDetails.overview}
          />
        </div>
        <ShowDetailsBox showDetails={showDetails} />
        <FreeTrail />
      </div>
    </>
  );
};

export default MovieId;
