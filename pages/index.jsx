import Image from "next/image";
import { Inter } from "next/font/google";
import getData from "@/data";

// const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  let galaries = getData();
  return {
    props: {
      galaries: galaries,
    },
  };
};

export default function Home({ galaries = [] }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      {galaries.map((galary, index) => (
        <div key={index} className="flex flex-col ">
          <h1>{galary.title}</h1>
          <div className="flex gap-4">
            {galary.images.map((image, index) => (
              <div key={index}>
                <h2>{image.title}</h2>
                <img className="rounded-lg w-60 h-60" src={image.url}></img>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
