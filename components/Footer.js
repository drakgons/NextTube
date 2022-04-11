import React from "react";

const Footer = () => {
  return (
    <div className=" dark:bg-[#ffffff] transition-all mt-10  flex justify-center items-center bg-[#202020] h-16">
      <p className=" dark:text-black transition-all text-white font-semibold">
        Made with ❤️ by{" "}
        <a
          href="http://pawan67.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className=" underline"
        >
          Pawan67
        </a>
      </p>
    </div>
  );
};

export default Footer;
