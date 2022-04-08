import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import axios from "axios";
import SearchCard from "../../components/SearchCard";
import Loading from "../../components/Loading";
const SearchPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchTerm = router.query.searchTerm;
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-search-and-download.p.rapidapi.com/search",
        params: { query: `${searchTerm}`, type: "v" },
        headers: {
          "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
          "X-RapidAPI-Key":
            "54f72a345bmshf722caaee3d561fp12cc5fjsnc70de93f3f71",
        },
      };

      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data.contents);
          setData(response.data.contents);
        })
        .catch(function (error) {
          console.error(error);
        })
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [searchTerm]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" dark:bg-[#f9f9f9] transition-all min-h-screen bg-[#181818]">
      <Header />
      <div className=" flex flex-col space-y-10 items-center pt-20 sm:pl-20">
        {data.map((item, index) => (
          <SearchCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
