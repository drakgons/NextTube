import axios from "axios";

export const getHomePageData = () => {
  const options = {
    method: "GET",
    url: "https://youtube-search-and-download.p.rapidapi.com/trending",
    params: { type: "n", hl: "en", gl: "US" },
    headers: {
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_URL,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data.contents;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getVideoData = (videoId) => {

    
};
