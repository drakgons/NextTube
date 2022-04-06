import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import HomeComponent from "../components/HomeComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>YouTube Clone by Pawan67</title>
    </Head>
    <div className=" min-h-screen bg-[#181818]">
      <Header />
      <HomeComponent />
    </div>
    </>
  );
}
