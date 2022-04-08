import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
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
  const { theme, setTheme } = useTheme();

  console.log(theme);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);
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
      <div className=" transition-all fixed justify-between px-5 dark:bg-[#ffffff]  bg-[#202020]/95 backdrop-blur-sm border-b z-50 dark:border-[#cccccc] border-[#373737] w-full h-14 flex items-center">
        <div className=" items-center flex transition-all dark:text-black text-white">
          <BiMenu
            onClick={() => setMenu(!menu)}
            className=" dark:hover:bg-[#cccccc]  hover:bg-[#373737] text-4xl p-1 rounded-full"
          />
          <div
            onClick={() => router.push("/")}
            className=" cursor-pointer flex items-center space-x-1 md:ml-10 text-4xl text-red-600"
          >
            <img
              className=" dark:hidden  w-28"
              src="https://res.cloudinary.com/dewctbby3/image/upload/v1649092041/logoWhite_aqpfsl.svg"
              alt=""
            />
            <img
              className=" hidden dark:block  w-28"
              src="https://res.cloudinary.com/dewctbby3/image/upload/v1649386448/logoBlack_j0zhas.svg"
              alt=""
            />
            {/* <AiFillYoutube />
          <p className=" text-xl font-bold text-white">YouTube </p> */}
          </div>
        </div>

        <div>
          <form
            className=" dark:border transition-all dark:border-[#cccccc] flex  items-center md:ml-20 dark:bg-[#f0f0f0] bg-[#313131]"
            onSubmit={submitHandler}
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className=" dark:border-0 dark:text-gray-800 transition-all dark:bg-[#ffffff] w-[150px] xl:w-[500px] bg-[#121212] border-[#373737] outline-none text-gray-300 px-3 py-[7px] border "
              type="text"
            />
            <button
              type="submit"
              className=" text-xl px-4 transition-all  dark:bg-[#f0f0f0] dark:text-gray-800   bg-[#313131] text-gray-200"
            >
              <BsSearch className=" " />
            </button>
          </form>
        </div>
        <div className=" hidden items-center dark:text-black text-white text-2xl md:flex space-x-6">
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
      <div
        className={` ${
          menu ? "left-0" : "   -left-[80px] sm:left-0"
        } transition-all p-2 z-40 pt-14 text-white dark:text-gray-800 dark:bg-[#ffffff] fixed bg-[#202020] h-screen w-[80px]`}
      >
        <div className=" flex space-y-4 mt-5 flex-col items-center justify-center">
          <div
            onClick={() => {
              router.push("/");
              setMenu(false);
            }}
            className=" cursor-pointer dark:hover:bg-[#f0f0f0] hover:bg-[#373737] w-full py-2 rounded-md  flex justify-center items-center flex-col"
          >
            <AiOutlineHome className=" text-xl" />
            <p className=" text-[10px] mt-1">Home</p>
          </div>
          <div
            onClick={() => {
              router.push("/explore");
              setMenu(false);
            }}
            className=" hover:bg-[#373737] dark:hover:bg-[#f0f0f0] w-full py-2 rounded-md cursor-pointer  flex justify-center items-center flex-col"
          >
            <MdOutlineExplore className=" text-xl" />
            <p className=" text-[10px] mt-1">Explore</p>
          </div>
          <div className=" hover:bg-[#373737] dark:hover:bg-[#f0f0f0] w-full py-2 rounded-md cursor-pointer  flex justify-center items-center flex-col">
            <VscLibrary className=" text-xl" />
            <p className=" text-[10px] mt-1">Library</p>
          </div>
          <div className=" hover:bg-[#373737] dark:hover:bg-[#f0f0f0] w-full py-2 rounded-md cursor-pointer  flex justify-center items-center flex-col">
            <MdOutlineSubscriptions className=" text-xl" />
            <p className=" text-[10px] mt-1">Subscription</p>
          </div>
          <div className="  w-full py-2 rounded-md cursor-pointer  flex justify-center items-center flex-col">
            <div className="flex items-center flex-col justify-center w-full mb-12">
              <label
                htmlFor="toggleB"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  {theme == "light" ? (
                    <input
                      onClick={() => setTheme("dark")}
                      type="checkbox"
                      id="toggleB"
                      className="sr-only"
                    />
                  ) : (
                    <input
                      onClick={() => setTheme("light")}
                      checked
                      type="checkbox"
                      id="toggleB"
                      className="sr-only"
                    />
                  )}
                  <input type="checkbox" id="toggleB" className="sr-only" />

                  <div className="block bg-gray-500 dark:bg-slate-300 w-10 h-6 rounded-full"></div>

                  <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
              </label>
              <div className=" text-xs mt-2 ">light-mode</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
