import React, { useState, useEffect } from "react";
import axios from "axios";
//AiOutlineDislike AiOutlineLike
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineLoading,
} from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import YouTube from "react-youtube";
import Loading from "./Loading";
import Comments from "./Comments";
import { useRouter } from "next/router";

const VidPlayer = ({ videoId, data }) => {
  const [comments, setComments] = useState(false);
  const [height, setHeight] = useState("570");
  const [width, setWidth] = useState("1013");

  useEffect(() => {
    if (window.innerWidth < 600) {
      setWidth("320");
      setHeight("180");
    }
  }, []);
  const router = useRouter();

  console.log(width);
  const opts = {
    height: `${height}`,
    width: `${width}`,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  return (
    <div className=" max-w-[1013px]">
      <div className=" flex justify-center ">
        {/* <YouTube videoId={videoId} opts={opts} /> */}
        <iframe
          className=" w-[1013px] h-[220px] md:h-[570px]  "
          // width="560"
          // height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="  mt-5 max-w-[1013px] text-white">
        <p className=" flex space-x-2">
          {data.videoDetails.keywords &&
            data.videoDetails.keywords.slice(1, 4).map((res, id) => (
              <div
                key={id}
                title={`Show results for "${res}" on YouTube`}
                onClick={() => router.push(`/search/${res}`)}
                className=" cursor-pointer text-[#3ea6ff]"
              >
                #{res}
              </div>
            ))}
        </p>
        <div className=" mt-2  items-center flex-col space-y-4 flex sm:flex-row sm:space-y-0 justify-between">
          <div>
            <p className=" max-w-xl  font-semibold text-xl ">
              {data.videoDetails.title}
            </p>
            <p className=" mt-1 text-sm font-medium text-gray-300">
              {separator(data.videoDetails.viewCount)} Views
            </p>
          </div>
          <div className="   flex space-x-7   px-10 sm:px-0 items-center">
            <div className=" active:scale-95 cursor-pointer text-2xl flex flex-col items-center  ">
              <AiOutlineLike />
              <p className=" text-sm">Like</p>
            </div>
            <div className=" active:scale-95 cursor-pointer text-2xl flex flex-col items-center  ">
              <AiOutlineDislike />
              <p className=" text-sm">Dislike</p>
            </div>

            <div className="active:scale-95 cursor-pointer text-2xl flex flex-col items-center  ">
              <BiShare />
              <p className=" text-sm">Share</p>
            </div>
            <div className="active:scale-95 text-2xl ">
              <BsThreeDots />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between mt-5  space-x-2">
          <p
            onClick={() =>
              router.push(`/channel/${data.videoDetails.channelId}`)
            }
            className=" cursor-pointer bg-[#303030] px-3 rounded-md text-white font-medium py-1 text-lg   "
            title="Go to channel"
          >
            {data.videoDetails.author}
          </p>
          <div
            title="subscribe to the channel"
            className=" active:scale-95 cursor-pointer font-medium bg-red-600 px-3 py-2 rounded-md"
          >
            Subscribe
          </div>
        </div>
      </div>

      <div className=" mt-10 border-t border-[#373737] ">
        <div className=" mt-10 text-2xl text-white font-medium">
          Description
        </div>
        <p className=" line-clamp-6 text-white mt-5 ">
          {data.videoDetails.shortDescription}
        </p>
      </div>

      <div className=" mt-10 sm:pb-40 border-t border-[#373737] ">
        <div
          onClick={() => setComments(!comments)}
          className=" bg-gray-200  px-3 py-1 inline-block rounded-md active:scale-95 cursor-pointer font-medium mt-5"
        >
          {comments ? "Hide Comments" : "Show Comments"}
        </div>

        {comments && <Comments videoId={videoId} />}
      </div>
    </div>
  );
};

export default VidPlayer;
