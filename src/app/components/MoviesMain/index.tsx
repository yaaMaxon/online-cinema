import backgroundMoviesPage2x from "@/assets/backgroundMoviesPage2x.webp";
import Image from "next/image";
import GroupBtn from "../GroupBtn";

const MoviesMain = () => {
  return (
    <div className="relative flex flex-col items-center border border-[#262626] rounded-xl text-white px-6 pt-6 pb-4 lg:px-10 lg:pt-10">
      <div className="inset-0 w-full h-[358px] lg:h-[709px]">
        <Image
          src={backgroundMoviesPage2x}
          alt="Background Page"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1] rounded-xl"
        />
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%)",
          }}
        ></div>
      </div>

      <div className="relative z-10 lg:px-[120px] lg:text-center">
        <h1 className="text-2xl font-bold mb-5 lg:mb-[2px] lg:text-3xl">
          Avengers : Endgame
        </h1>
        <p className="text-default font-medium hidden lg:flex mb-6">
          With the help of remaining allies, the Avengers must assemble once
          more in order to undo Thanos's actions and undo the chaos to the
          universe, no matter what consequences may be in store, and no matter
          who they face... Avenge the fallen.
        </p>
      </div>
      <GroupBtn />
    </div>
  );
};

export default MoviesMain;
