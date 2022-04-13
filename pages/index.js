import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeComponent from "../components/HomeComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - YouTube</title>
      </Head>
      <div className=" min-h-screen dark:bg-[#f9f9f9] transition-all bg-[#181818]">
        <Header />
        <HomeComponent />
        <Footer />
      </div>
    </>
  );
}
