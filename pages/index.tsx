import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Travel Insights</title>
        <link rel="icon" href="/logo-search.png" />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
