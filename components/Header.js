import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiFillYoutube } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { RiVideoUploadLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineSubscriptions } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
const Header = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (search !== "") {
      router.push(`/search/${search}`);
    } else {
      alert(" I think you forgot to enter something 🤭");
    }
  };
  return (
    <>
      <div className=" fixed justify-between px-5  bg-[#202020]/95 backdrop-blur-sm border-b z-50 border-[#373737] w-full h-14 flex items-center">
        <div className=" items-center flex text-white">
          <BiMenu className=" hidden md:block hover:bg-[#373737] text-4xl p-1 rounded-full" />
          <div
            onClick={() => router.push("/")}
            className=" cursor-pointer flex items-center space-x-1 md:ml-10 text-4xl text-red-600"
          >
            <img
              className=" w-28"
              src="https://res.cloudinary.com/dewctbby3/image/upload/v1649092041/logoWhite_aqpfsl.svg"
              alt=""
            />
            {/* <AiFillYoutube />
          <p className=" text-xl font-bold text-white">YouTube </p> */}
          </div>
        </div>

        <div>
          <form
            className=" flex  items-center md:ml-20 bg-[#313131]"
            onSubmit={submitHandler}
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className=" w-[190px] xl:w-[500px] bg-[#121212] border-[#373737] outline-none text-gray-300 px-3 py-[7px] border "
              type="text"
            />
            <button
              type="submit"
              className=" text-xl px-4    bg-[#313131] text-gray-200"
            >
              <BsSearch className=" " />
            </button>
          </form>
        </div>
        <div className=" hidden items-center text-white text-2xl md:flex space-x-6">
          <RiVideoUploadLine className=" cursor-pointer " />
          <CgMenuGridR className=" cursor-pointer " />
          <IoMdNotificationsOutline className=" cursor-pointer " />
          <img
            className=" cursor-pointer w-8 rounded-full "
            src="https://i.pinimg.com/550x/af/71/c7/af71c731ef2c1e3ed7042f167bd8dd41.jpg"
            alt=""
          />
        </div>
      </div>
      {/* Sidebar */}
      <div className=" p-2 hidden sm:block pt-14 text-white fixed bg-[#202020] h-screen w-[72px]">
        <div className=" flex space-y-4 mt-5 flex-col items-center justify-center">
          <div
            onClick={() => router.push("/")}
            className=" cursor-pointer hover:bg-[#373737] w-full py-2 rounded-md  flex justify-center items-center flex-col"
          >
            <AiOutlineHome className=" text-xl" />
            <p className=" text-[10px] mt-1">Home</p>
          </div>
          <div
            onClick={() => router.push("/explore")}
            className=" hover:bg-[#373737] w-full py-2 rounded-md cursor-pointer  flex justify-center items-center flex-col"
          >
            <MdOutlineExplore className=" text-xl" />
            <p className=" text-[10px] mt-1">Explore</p>
          </div>
          <div className=" hover:bg-[#373737] w-full py-2 rounded-md cursor-pointer  flex justify-center items-center flex-col">
            <VscLibrary className=" text-xl" />
            <p className=" text-[10px] mt-1">Library</p>
          </div>
          <div className=" hover:bg-[#373737] w-full py-2 rounded-md cursor-pointer  flex justify-center items-center flex-col">
            <MdOutlineSubscriptions className=" text-xl" />
            <p className=" text-[10px] mt-1">Subscription</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
