import axios from "axios";
import React, { useEffect, useState } from "react";
import { getHomePageData } from "../api/api";
import { useUserContext } from "../context/userContext";
import Card from "./Card";
import Loading from "./Loading";

const HomeComponent = ({ data }) => {
  const [banner, setBanner] = useState(true);
  const { menu, setMenu } = useUserContext();

  async function hello() {
    const homeData = await getHomePageData();
  }

  return (
    <div className=" pt-14 flex flex-col items-center sm:pt-20 sm:pl-20">
      {banner && (
        <img
          onClick={() => setBanner(false)}
          src="/images/banner.jpeg"
          alt=""
          className=" w-[70%] hidden md:block"
        />
      )}

      <div className=" p-3 justify-center md:ml-10 mt-5 flex flex-wrap gap-7">
        {data && data.map((item, id) => <Card key={id} data={item} />)}
      </div>
    </div>
  );
};

export default HomeComponent;
