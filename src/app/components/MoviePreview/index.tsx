import GroupBtn from "../GroupBtn";
import NoImg from "@/assets/no_img.png";
import Image from "next/image";
import { BASE_URL } from "@/app/constants/path";

type Props = {
  backdrop: string;
  title: string;
  overview: string;
};

const MoviePreview = ({ backdrop, title, overview }: Props) => {
  return (
    <>
      <div className="relative flex items-center flex-col inset-0 w-full h-[358px] lg:h-[709px]">
        <Image
          src={backdrop !== null ? BASE_URL + backdrop : NoImg}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1] rounded-xl border border-[#262626]"
        />
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%)",
          }}
        ></div>
        <div className="absolute bottom-5 left-[200px] right-[200px] flex items-center flex-col gap-5 lg:gap-[30px]">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-white text-2xl lg:text-[38px] font-bold leading-[57px]">
              {title}
            </h2>
            <p className="hidden lg:flex text-default text-[18px] text-center">
              {overview}
            </p>
          </div>
          <GroupBtn />
        </div>
      </div>
    </>
  );
};

export default MoviePreview;
