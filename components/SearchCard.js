import React from "react";
import { useRouter } from "next/router";

const SearchCard = ({ data }) => {
  const router = useRouter();

  return (
    <div>
      <div
        onClick={() => router.push(`/watch/${data.video.videoId}`)}
        className=" cursor-pointer flex justify-between space-x-3"
      >
        <div>
          <img className=" rounded-lg w-[120px] sm:w-[300px] " src={data.video.thumbnails[0].url} alt="" />
        </div>
        <div className=" w-[200px] sm:w-[700px] dark:text-black   text-white ">
          <h3 className=" text-sm 2xl:text-base font-medium">
            {data.video.title}
          </h3>
          <p className=" text-sm mt-2 dark:text-gray-800 text-gray-200">
            {data.video.channelName}
          </p>
          <p className=" text-sm dark:text-gray-800 text-gray-200">{data.video.viewCountText}</p>
          <p className=" text-sm line-clamp-2 dark:text-gray-800 text-gray-200">{data.video.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
