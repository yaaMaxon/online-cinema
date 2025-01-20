"use client";

import PlayIcon from "../../../assets/play.svg";
import BigLogo from "../../../assets/bigLogo.svg";
import Button from "../Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect } from "react";

const Main = () => {
  const isMediaLessThan1024 = useMediaQuery(1024);

  useEffect(() => {
    fetch("/api/email?q=cat", {
      method: "POST",
      body: "hello",
    }).then(console.log);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <BigLogo className="my-[50px] lg:my-[100px]" />
      <div className="flex  flex-col items-center text-center">
        <h1 className="text-white text-[28px] font-bold mb-2.5 lg:text-5xl">
          The Best Streaming Experience
        </h1>
        <p className="text-default text-sm mb-[30px] px-2 lg:px-0 lg:mb-10 2xl:w-[70%] lg:w-[80%]">
          {isMediaLessThan1024
            ? "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere."
            : "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch."}
        </p>
        <Button icon={<PlayIcon />} className="rounded-lg px-6">
          Start Watching Now
        </Button>
      </div>
    </div>
  );
};

export default Main;
