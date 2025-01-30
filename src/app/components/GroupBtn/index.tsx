import PlusIcon from "@/assets/plus.svg";
import LikeIcon from "@/assets/like.svg";
import VolumeIcon from "@/assets/volume.svg";
import PlayIcon from "@/assets/play.svg";
import Button from "../Button";

const GroupBtn = () => {
  return (
    <div className="relative z-10 flex lg:gap-5 lg:items-center lg:flex-row flex-col">
      <Button
        icon={<PlayIcon />}
        className="flex justify-center rounded-lg mb-5 lg:mb-0"
      >
        Play Now
      </Button>
      <ul className="flex gap-2">
        {[
          <PlusIcon key="plus" />,
          <LikeIcon key="like" />,
          <VolumeIcon key="volume" />,
        ].map((icon) => (
          <li
            key={icon.key}
            className="p-3 bg-[#0F0F0F] rounded-lg border-[#262626] border-[1px] cursor-pointer"
          >
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupBtn;
