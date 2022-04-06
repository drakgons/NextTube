import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/dist/shared/lib/head";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import VidPlayer from "../../components/VidPlayer";
import RelatedCard from "../../components/RelatedCard";
import RelatedVideos from "../../components/RelatedVideos";
const VideoPlayer = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const videoId = router.query.videoId;
  console.log(videoId);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-search-and-download.p.rapidapi.com/video",
        params: { id: `${videoId}` },
        headers: {
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
          "X-RapidAPI-Key":
            "54f72a345bmshf722caaee3d561fp12cc5fjsnc70de93f3f71",
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
  // console.log(data);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" min-h-screen bg-[#181818]">
      <Head>
        <title>{data.videoDetails && data.videoDetails.title}</title>
      </Head>
      <Header />
      <div className=" pt-20 p-4  sm:pl-20">
        <div className="flex-col  sm:flex-row  flex justify-center  sm:space-x-10">
          <VidPlayer data={data} videoId={videoId} />
          <RelatedVideos videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;