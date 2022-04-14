import Head from "next/head";
import Image from "next/image";
import ExploreComponent from "../components/ExploreComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeComponent from "../components/HomeComponent";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";
const Explore = () => {
  const { page, setPage } = useUserContext();
  useEffect(() => {
    setPage("explore");
  }, []);

  return (
    <>
      <Head>
        <title>Explore - YouTube</title>
      </Head>
      <div className=" min-h-screen dark:bg-[#f9f9f9] transition-all bg-[#181818]">
        <Header />
        <ExploreComponent />
        <Footer />
      </div>
    </>
  );
};

export default Explore;
