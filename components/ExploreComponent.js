import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import SearchCard from "./SearchCard";
const ExploreComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("n");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const options = {
        method: "GET",
        url: "https://youtube-search-and-download.p.rapidapi.com/trending",
        params: { type: term, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
          "X-RapidAPI-Key": `54f72a345bmshf722caaee3d561fp12cc5fjsnc70de93f3f71`,
        },
      };

      await axios
        .request(options)
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          console.error(error);
        })
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [term]);

  let trendingTerm = "";
  if (term === "n") {
    trendingTerm = "Trending Now";
  } else if (term === "mu") {
    trendingTerm = "Trending Music";
  } else if (term === "g") {
    trendingTerm = "Trending Gaming";
  } else if (term === "mo") {
    trendingTerm = "Trending Movies";
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" flex justify-center pt-20 sm:pl-20 ">
      <div>
        <div className=" ml-5 flex gap-2 sm:gap-4 flex-wrap">
          <div
            onClick={() => {
              setTerm("n");
             
            }}
            className=" cursor-pointer dark:bg-[#f0f0f0] transition-all bg-[#2c2c2c] hover:bg-[#464646]  w-44 sm:w-60 p-3 rounded-lg "
          >
            <img className=" w-10 sm:w-16" src="/images/trending.png" alt="" />
            <div className=" dark:text-black text-white mt-2 font-semibold  text-xl ">
              Trending
            </div>
          </div>
          <div
            onClick={() => setTerm("mo")}
            className=" cursor-pointer dark:bg-[#f0f0f0] transition-all bg-[#2c2c2c] hover:bg-[#464646]  w-44 sm:w-60 p-3 rounded-lg "
          >
            <img
              className=" w-10 sm:w-16"
              src="/images/clapperboard.png"
              alt=""
            />
            <div className="dark:text-black text-white mt-2 font-semibold  text-xl ">
              Movies
            </div>
          </div>
          <div onClick={() => setTerm("mu")} className=" cursor-pointer bg-[#2c2c2c] hover:bg-[#464646] dark:bg-[#f0f0f0] transition-all  w-44 sm:w-60 p-3 rounded-lg ">
            <img
              className=" w-10 sm:w-16"
              src="/images/musical-note.png"
              alt=""
            />
            <div className="dark:text-black text-white mt-2 font-semibold  text-xl ">
              Music
            </div>
          </div>
          <div
            onClick={() => setTerm("g")}
            className=" cursor-pointer dark:bg-[#f0f0f0] transition-all bg-[#2c2c2c] hover:bg-[#464646]  w-44 sm:w-60 p-3 rounded-lg "
          >
            <img className="w-10 sm:w-16" src="/images/joystick.png" alt="" />
            <div className="dark:text-black text-white mt-2 font-semibold  text-xl ">
              Gaming
            </div>
          </div>
        </div>
        <div className=" mt-10 ml-5 dark:text-black text-white">
          <h1 className=" text-xl font-medium ">{trendingTerm}</h1>

          <div className=" flex flex-col space-y-10 items-start  mt-5 ">
            {data.contents.slice(0, 10).map((item, id) => (
              <SearchCard key={id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreComponent;
