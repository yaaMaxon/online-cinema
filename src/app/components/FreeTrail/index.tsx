"use client";

import Button from "../Button";
import Image from "next/image";
import freeTrailBg from "../../../assets/freeTrailBg.webp";
import { useRouter } from "next/navigation";

const FreeTrail = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/subscription");
  };

  return (
    <div className="flex flex-col items-center text-center lg:text-start lg:flex-row lg:justify-between bg-[#0F0F0F] border-[1px] border-[#262626] rounded-xl px-[30px] py-[50px] lg:px-[62px] lg:py-[87px] relative">
      <div className="mb-[50px] lg:mb-0 z-10">
        <h2 className="text-white text-2xl font-bold mb-2.5 lg:text-[28px]">
          Start your free trial today!
        </h2>
        <p className="text-default text-sm lg:text-base lg:mb-0">
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of StreamVibe.
        </p>
      </div>
      <Button className="rounded-lg z-10" onClick={handleButtonClick}>
        Start a Free Trial
      </Button>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center">
        <Image
          src={freeTrailBg}
          alt="Free Trial"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0 rounded-xl"
        />
        <div className="rounded-xl absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#141111] to-[#E50000] opacity-70"></div>
      </div>
    </div>
  );
};

export default FreeTrail;
