import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedCard from "./RelatedCard";
const RelatedVideos = ({ videoId }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-search-and-download.p.rapidapi.com/video/related",
        params: { id: `${videoId}`, hl: "en" },
        headers: {
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
          "X-RapidAPI-Key":
            "54f72a345bmshf722caaee3d561fp12cc5fjsnc70de93f3f71",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setData(response.data.contents);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchData();
  }, [videoId]);
  return (
    <div>
      <div className=" mt-10 sm:mt-0 space-y-5">
        {data &&
          data.map((item, index) => <RelatedCard key={index} data={item} />)}
      </div>
    </div>
  );
};

export default RelatedVideos;
