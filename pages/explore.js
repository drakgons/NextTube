import Head from "next/head";
import Image from "next/image";
import ExploreComponent from "../components/ExploreComponent";
import Header from "../components/Header";
import HomeComponent from "../components/HomeComponent";
import styles from "../styles/Home.module.css";

const Explore = () => {
  return (
    <>
      <Head>
        <title>Explore</title>
      </Head>
      <div className=" min-h-screen bg-[#181818]">
        <Header />
        <ExploreComponent />
      </div>
    </>
  );
};

export default Explore;