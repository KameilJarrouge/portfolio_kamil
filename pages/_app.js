import "@/styles/globals.css";
import Head from "next/head";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Naiem Hair Dresser</title>
        <link rel="shortcut icon" href="icon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
