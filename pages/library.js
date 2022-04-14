import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LibraryComponent from "../components/LibraryComponent";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";

const Library = () => {
  const ran = Math.floor(Math.random() * 10);
  const searchList = [
    "react",
    "javascript",
    "nodejs",
    "python",
    "java",
    "c++",
    "c#",
    "php",
    "ruby",
    "go",
  ];
  const { page, setPage } = useUserContext();
  useEffect(() => {
    setPage("library");
  }, []);

  return (
    <>
      <Head>
        <title> {`(${ran})`} Library - YouTube</title>
      </Head>
      <div className=" min-h-screen dark:bg-[#f9f9f9] transition-all bg-[#181818]">
        <Header />
        <LibraryComponent />
        <Footer />
      </div>
    </>
  );
};

export default Library;
