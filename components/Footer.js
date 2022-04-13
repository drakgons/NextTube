import React from "react";

const Footer = () => {
  return (
    <div className=" dark:bg-[#ffffff] transition-all mt-10  flex justify-center px-4 items-center  bg-[#202020] h-16">
      <div></div>
      <p className=" text-sm  dark:text-black  justify-center items-center py-3 transition-all text-white font-semibold">
        Made with ❤️ by{" "}
        <a
          href="http://pawan67.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className=" underline"
        >
          Pawan67
        </a>
        <a
          className=" ml-3 underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/pawan67/youtube-clone"
        >
          Github
        </a>
      </p>
    </div>
  );
};

export default Footer;
