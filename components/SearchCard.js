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
          <img className=" w-[300px] " src={data.video.thumbnails[0].url} alt="" />
        </div>
        <div className=" w-[700px]  text-white ">
          <h3 className=" text-sm 2xl:text-base font-medium">
            {data.video.title}
          </h3>
          <p className=" text-sm mt-2 text-gray-200">
            {data.video.channelName}
          </p>
          <p className=" text-sm text-gray-200">{data.video.viewCountText}</p>
          <p className=" text-sm line-clamp-2 text-gray-200">{data.video.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
