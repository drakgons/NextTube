import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import axios from "axios";
import SearchCard from "../../components/SearchCard";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import Head from "next/head";
import Footer from "../../components/Footer";
const ChannelDetails = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const channelId = router.query.ChannelId;
  console.log(channelId);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-search-and-download.p.rapidapi.com/channel",
        params: {
          id: `${channelId}`,

          sort: "n",
        },
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
  }, [channelId]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" min-h-screen dark:bg-[#f9f9f9] transition-all bg-[#181818]">
      <Head>
        <title>{data.title}</title>
      </Head>
      <Header />
      <div className="  min-h-screen pt-20 sm:pl-20">
        <div className=" flex justify-center flex-col items-center mt-10 ">
          <img
            className=" rounded-full w-40"
            src={data.avatar.thumbnails[0].url}
            alt=""
          />
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" mt-5 dark:text-black text-white text-2xl font-bold">
              {data.title}
            </h1>
            <p className=" text-sm dark:text-gray-800 text-gray-200">
              {data.subscriberCountText}
            </p>
          </div>
        </div>
        <div>
          <div className=" flex flex-col justify-center items-center  dark:text-black mt-10 px-10 text-white ">
            <p className="   max-w-6xl text-center line-clamp-3 sm:px-5 text-sm sm:text-xl   ">
              {data.description}
            </p>
          </div>
        </div>
        <div className=" justify-center  mt-10 flex flex-wrap gap-7">
          {data.contents.map((res, id) => (
            <Card key={id} data={res} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChannelDetails;
