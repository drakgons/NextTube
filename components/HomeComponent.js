import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

const HomeComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-search-and-download.p.rapidapi.com/trending",
        params: { type: "n", hl: "en", gl: "US" },
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
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" pt-20 sm:pl-20">
      <div className=" p-3 justify-center md:ml-10 mt-5 flex flex-wrap gap-7">
        {data && data.contents.map((item, id) => <Card key={id} data={item} />)}
      </div>
    </div>
  );
};

export default HomeComponent;
