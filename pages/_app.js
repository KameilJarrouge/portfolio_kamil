import "@/styles/globals.css";
import Head from "next/head";

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
