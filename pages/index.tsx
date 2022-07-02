import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AppLayout from "../components/AppLayout";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <div>
        <h1 className="text-3xl text-red-400 font-bold underline">
          Hello world!
        </h1>
      </div>
    </AppLayout>
  );
};

export default Home;
