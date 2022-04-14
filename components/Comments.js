import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const Comments = (videoId) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  console.log(videoId);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-search-and-download.p.rapidapi.com/video/comments",
        params: { id: `${videoId.videoId}` },
        headers: {
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_URL,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.error(error);
        })
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [videoId]);

  if (loading) {
    return (
      <div className=" bg-[#303030] text-white rounded-sm px-5 py-1 animate-pulse  font-medium inline-block ml-5">
        Loading Comments
      </div>
    );
  }
  return (
    <div>
      <div className=" dark:text-black text-white mt-10 mb-5 ">
        {data.commentsCount} comments
      </div>
      <div className=" cursor-pointer space-x-3  flex ">
        <img
          className=" rounded-full w-10"
          src="https://i.pinimg.com/550x/af/71/c7/af71c731ef2c1e3ed7042f167bd8dd41.jpg"
          alt=""
        />
        <div>
          <input
            placeholder=" Add a comment "
            type="text"
            className=" w-[330px] md:w-[500px] 2xl:w-[800px] dark:text-black text-white py-2 bg-transparent border-b border-[#373737] text-base outline-none "
          />
        </div>
      </div>
      <div className=" space-y-10 mt-10">
        {data.comments.map((comment, id) => (
          <div key={id} className="  flex space-x-5 ">
            {" "}
            <div onClick={() => router.push(`/channel/${comment.authorId}`)}>
              {" "}
              <img
                className="  cursor-pointer  rounded-full w-10"
                src={comment.authorThumbnails[0].url}
                alt=""
              />{" "}
            </div>{" "}
            <div className="dark:text-black w-64 sm:w-72 md:w-[700px] xl:w-[800px] text-white">
              {" "}
              <div className=" flex space-x-2 items-center">
                <p
                  onClick={() => router.push(`/channel/${comment.authorId}`)}
                  className=" cursor-pointer font-semibold"
                >
                  {comment.authorName}
                </p>
                <p className=" text-sm text-gray-200 dark:text-gray-800">
                  {comment.publishedTimeText}
                </p>
              </div>
              <p className=" mt-2 text-sm ">{comment.text}</p>{" "}
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
