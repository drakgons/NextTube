import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/dist/shared/lib/head";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import VidPlayer from "../../components/VidPlayer";
import RelatedCard from "../../components/RelatedCard";
import RelatedVideos from "../../components/RelatedVideos";
import Footer from "../../components/Footer";

const VideoPlayer = ({ data }) => {
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(true);
  const router = useRouter();
  const videoId = router.query.videoId;
  console.log(videoId);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const options = {
  //       method: "GET",
  //       url: "https://youtube-search-and-download.p.rapidapi.com/video",
  //       params: { id: `${videoId}` },
  //       headers: {
  //         "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  //         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_URL,
  //       },
  //     };

  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         console.log(response.data);
  //         setData(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       })
  //       .finally(() => setLoading(false));
  //   };
  //   fetchData();
  // }, [videoId]);
  // // console.log(data);
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <div className=" min-h-screen dark:bg-[#f9f9f9] transition-all bg-[#181818]">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <title>{data.videoDetails && data.videoDetails.title}</title>
      </Head>
      <Header />
      <div className=" pt-20 p-4  sm:pl-20">
        <div className="flex-col  sm:flex-row  flex justify-center  sm:space-x-10">
          <VidPlayer data={data} videoId={videoId} />
          <RelatedVideos videoId={videoId} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const videoId = context.params.videoId;
  const options = {
    method: "GET",
    url: "https://youtube-search-and-download.p.rapidapi.com/video",
    params: { id: `${videoId}` },
    headers: {
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_URL,
    },
  };

  const data = await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return {
    props: {
      data,
    },
  };
};

export default VideoPlayer;
