import React from "react";
//AiOutlineLoading
import { AiOutlineLoading } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import Header from "./Header";

const Loading = () => {
  return (
    <div>
      <div className=" min-h-screen dark:bg-[#f9f9f9] transition-all  bg-[#181818]">
        <Header />
        <div className=" flex justify-center items-center h-[90vh]  pt-20 sm:pl-20">
          <div className=" sm:mr-10 text-white dark:bg-[#141414]  bg-[#121212]  flex items-center px-5 py-3 rounded-lg  text-lg  space-x-2 ">
            <AiOutlineLoading className=" text-xl sm:text-2xl motion-safe:animate-spin " />
            <p>Loading</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
