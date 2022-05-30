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

      <div className=" sm:p-3 justify-center md:ml-10 mt-5 grid  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
        {data && data.map((item, id) => <Card key={id} data={item} />)}
      </div>
    </div>
  );
};

export default HomeComponent;
