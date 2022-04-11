import Head from "next/head";
import Image from "next/image";
import ExploreComponent from "../components/ExploreComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeComponent from "../components/HomeComponent";
import styles from "../styles/Home.module.css";

const Explore = () => {
  return (
    <>
      <Head>
        <title>Explore</title>
      </Head>
      <div className=" min-h-screen dark:bg-[#f9f9f9] transition-all bg-[#181818]">
        <Header />
        <ExploreComponent />
        <Footer/>
      </div>
    </>
  );
};

export default Explore;
