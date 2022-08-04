import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const Card = ({ data }) => {
  const router = useRouter();
  return (
    <div>
      <div className=" ">
        <div
          onClick={() => router.push(`/watch/${data.video.videoId}`)}
          className=" relative"
        >
          <img
            // width={400}
            // height={230}
            className=" hover:animate-pulse cursor-pointer"
            src={data.video.thumbnails[2].url}
            alt=""
          />
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

export default Card;
