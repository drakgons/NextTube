import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const LibCard = ({ data }) => {
  const router = useRouter();
  const rand = Math.floor(Math.random() * 5);
  return (
    <div>
      <div className=" w-[160px] md:w-[200px] ">
        <div
          onClick={() => router.push(`/watch/${data.video.videoId}`)}
          className=" relative"
        >
          <Image
            width={200}
            height={120}
            className=" hover:animate-pulse cursor-pointer"
            src={data.video.thumbnails && data.video.thumbnails[0].url}
            alt=""
          />
          <div className={`bg-red-600 absolute h-[2px] left-0 right-${rand} bottom-1`}>

          </div>
          <div className=" absolute bottom-3 right-3 text-white bg-black font-semibold rounded-sm inline-block px-1 text-xs">
            {data.video.lengthText}
          </div>
        </div>
        <div className=" mt-3 px-2 dark:text-black transition-all text-white">
          <h3 className=" font-semibold text-sm line-clamp-2">
            {data.video.title}
          </h3>
          <p
            onClick={() => router.push(`/channel/${data.video.channelId}`)}
            className=" mt-2 cursor-pointer font-semibold text-sm dark:text-gray-800 text-gray-300 transition-all"
          >
            {data.video.channelName}
          </p>
          <p className=" dark:text-gray-800 transition-all text-gray-200 text-sm ">
            {data.video.viewCountText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LibCard;
