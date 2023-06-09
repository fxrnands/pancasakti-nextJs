import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "./components/base/Navbar";
import FlyingPopups from "./components/base/FlyingPopups";
import Footer from "./components/base/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pancasakti University</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <FlyingPopups />
      <Footer />
    </>
  );
}
