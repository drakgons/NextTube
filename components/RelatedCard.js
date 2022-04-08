import React from "react";
import { useRouter } from "next/router";
const RelatedCard = ({ data }) => {
  console.log(data);
  const router = useRouter();
  return (
    <div className=" cursor-pointer flex space-x-3">
      <div className=" relative">
        <img
          onClick={() => router.push(`/watch/${data.video.videoId}`)}
          title="watch video"
          className=" hover:animate-pulse w-[100px] sm:w-auto "
          src={data.video && data.video.thumbnails[0].url}
          alt=""
        />
        <div className=" bg-black/90 text-white absolute text-xs  px-2 py-1 rounded-md right-1 bottom-1">{data.video && data.video.lengthText}</div>
      </div>
      <div className=" w-[200px]  sm:max-w-[280px] 2xl:max-w-xs dark:text-black transition-all text-white ">
        <h3
          onClick={() => router.push(`/watch/${data.video.videoId}`)}
          className=" line-clamp-2 text-sm 2xl:text-base font-medium"
        >
          {data.video && data.video.title}
        </h3>
        <p
          onClick={() => router.push(`/channel/${data.video.channelId}`)}
          title="Go to channel"
          className=" line-clamp-1 font-medium text-sm mt-2 dark:text-gray-800 transition-all text-gray-200"
        >
          {data.video && data.video.channelName}
        </p>
        <p className=" text-sm dark:text-gray-600 transition-all text-gray-200">
          {data.video && data.video.viewCountText}
        </p>
      </div>
    </div>
  );
};

export default RelatedCard;
