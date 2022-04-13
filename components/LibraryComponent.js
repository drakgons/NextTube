import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { BiHistory } from "react-icons/bi";
import Card from "./Card";
import LibCard from "./LibCard";
import Loading from "./Loading";

const LibraryComponent = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const ran = Math.floor(Math.random() * 10);
  const searchList = [
    "react js videos",
    "javascript videos",
    "nodejs videos",
    "python videos",
    "java videos",
    "c++ videos",
    "The weeknd",

    "dawn fm",
    "ruby videos",
    "go videos",
  ];

  const searchTerm = searchList[ran];

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-search-and-download.p.rapidapi.com/search",
        params: { query: `${searchTerm}`, type: "v" },
        headers: {
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_URL,
        },
      };

      await axios
        .request(options)
        .then(function (response) {
          setData(response.data.contents);
        })
        .catch(function (error) {
          console.error(error);
        })
        .finally(() => setLoading(false));
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" min-h-screen px-5 lg:px-0 flex justify-center flex-col-reverse md:flex-row  pt-20 sm:pl-20 ">
      {/* videos section */}
      <div className="  text-white w-[370px] md:w-[1013px]">
        <div className=" flex items-center space-x-2 font-medium text-lg">
          <BiHistory />
          <p>History</p>
        </div>
        <div className=" mt-5 flex flex-wrap gap-5">
          {data &&
            data.slice(0, 10).map((item, i) => <LibCard data={item} key={i} />)}
        </div>
      </div>
      {/* Profile section */}
      <div className=" mt-10 dark:text-black text-gray-100 flex-col flex items-center">
        <div className="  text-xl flex flex-col items-center space-y-3">
          <img
            className=" w-32 rounded-full"
            src="https://i.pinimg.com/550x/af/71/c7/af71c731ef2c1e3ed7042f167bd8dd41.jpg"
            alt=""
          />
          <p>L Lawliet</p>
        </div>
        <div className=" flex mt-5 border-gray-400 justify-between py-3 w-52 border-t dark:text-gray-600  text-gray-400 text-sm  text-center">
          <p>Subscribers</p>
          <p>0</p>
        </div>
        <div className=" flex  border-gray-400 justify-between py-3 w-52 border-t dark:text-gray-600  text-gray-400 text-sm  text-center">
          <p>Videos Uploaded</p>
          <p>0</p>
        </div>
        <div className=" flex  border-gray-400 justify-between py-3 w-52 border-t dark:text-gray-600  text-gray-400 text-sm  text-center">
          <p>Likes</p>
          <p>700</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryComponent;
