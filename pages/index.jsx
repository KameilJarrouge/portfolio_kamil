import Logo from "@/components/Logo";
import getData from "@/data";
import { TbBrandGmail } from "react-icons/tb";
// const inter = Inter({ subsets: ["latin"] });
import { MdFacebook, MdPhone } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import Tab from "@/components/Tab";
import { useState } from "react";
import Social from "@/components/Social";
export const getStaticProps = async () => {
  let galaries = getData();
  return {
    props: {
      galaries: galaries,
    },
  };
};

export default function Home({ galaries = {} }) {
  const [selection, setSelection] = useState(Object.keys(galaries)[0]);
  const [images, setImages] = useState(galaries[selection]);
  return (
    <main className={`min-h-screen max-h-full bg-background `}>
      <div className="w-full h-[60vh] bg-hero-background flex flex-col gap-5 justify-start items-center relative pb-10">
        <div className="w-full h-[40vh] flex justify-center items-center">
          <div className=" w-[60vh] landscape:w-[35vw]  h-fit flex justify-center items-center overflow-hidden">
            <Logo></Logo>
            {/* <img src="/logo.png" alt="" className="w-full h-fit" /> */}
          </div>
        </div>
        {/* main */}
        <div className="absolute top-[75%]  w-[80%] flex flex-col gap-1">
          {/* Social */}
          <div className="flex gap-4  justify-center items-center ">
            <Social url={"https://www.facebook.com/naaem.nemy"}>
              <MdFacebook className="w-[2.5rem] h-[2.5rem] rounded-full pointer-coarse:fill-blue-500  fill-primary hover:fill-blue-500 hover:animate-wiggle cursor-pointer" />
            </Social>
            <Social url={"https://www.instagram.com/naaemnemy/"}>
              <AiFillInstagram className="w-[2.5rem] h-[2.5rem] rounded-full pointer-coarse:fill-red-500 fill-primary hover:fill-red-500 hover:animate-wiggle cursor-pointer" />
            </Social>
            <Social url={"tel:+963960052477"}>
              <MdPhone className="w-[2.5rem] h-[2.5rem] rounded-full pointer-coarse:fill-green-500 fill-primary hover:fill-green-500 hover:animate-wiggle cursor-pointer" />
            </Social>
          </div>
          {/* nav */}
          <div className="px-1 font-bold  min-h-[5vh]  bg-transparent flex overflow-x-scroll 2xl:flex-wrap gap-3 text-lg items-end ">
            {Object.keys(galaries).map((galary, index) => (
              <Tab
                key={index}
                title={galary}
                selection={selection}
                setSelection={setSelection}
                onClick={() => setImages(galaries[galary])}
              ></Tab>
            ))}
          </div>
          <div className="   min-h-[50vh] bg-transparent  pb-2 ">
            <div className="w-full min-h-[50vh] bg-gray-200 rounded-md py-5 px-1 flex flex-wrap gap-4 justify-center items-start ">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex flex-col w-1/4 min-w-[320px]  shadow shadow-black/50 rounded-md mx-1 grow  "
                >
                  <img
                    src={image.url}
                    alt=""
                    className="w-full h-full rounded-t-md "
                  />
                  <div className="w-full min-h-[2rem] text-hero-background text-lg rounded-b-md font-bold text-center  py-2">
                    {image.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
{
  /* {galaries.map((galary, index) => (
          <div key={index} className="flex flex-col ">
            <h1>{galary.title}</h1>
            <div className="flex gap-4">
              {galary.images.map((image, index) => (
                <div key={index}>
                  <h2>{image.title}</h2>
                  <img
                    className="rounded-lg w-60 h-60 animate-highlight"
                    src={image.url}
                  ></img>
                </div>
              ))}
            </div>
          </div>
        ))} */
}
