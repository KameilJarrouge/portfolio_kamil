import Logo from "@/components/Logo";
import getData from "@/data";
import { MdFacebook, MdPhone } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import Tab from "@/components/Tab";
import { useEffect, useState } from "react";
import Social from "@/components/Social";
import ImageCard from "@/components/ImageCard";

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
  const [touchScreen, setTouchScreen] = useState(false);
  // let touchScreen = false;

  const scroll = (element) => {
    document.getElementById(element).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  useEffect(() => {
    setTouchScreen("ontouchstart" in document.documentElement);
  }, []);

  return (
    <main className={`h-full bg-background relative  `}>
      <div className="w-full h-[60vh] bg-hero-background flex flex-col gap-5 justify-start items-center relative ">
        <div className="w-full h-[40vh] flex justify-center items-center">
          <div className=" w-[50vh] landscape:w-[35vw]  h-fit flex justify-center items-center overflow-hidden">
            <Logo></Logo>
          </div>
        </div>
        {/* main */}
        <div className="absolute top-[70%] landscape:top-[75%]  w-[80%] flex flex-col gap-1">
          {/* Social */}
          <svg width="0" height="0">
            <linearGradient id="MyGradient" gradientTransform="rotate(110)">
              <stop offset="0%" stopColor="#bc1888" />
              <stop offset="25%" stopColor="#cc2366" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#e6683c" />
              <stop offset="100%" stopColor="#f09433" />
            </linearGradient>
          </svg>
          <div className="flex gap-4  justify-center items-center ">
            <Social url={"https://www.facebook.com/naaem.nemy"}>
              <MdFacebook
                className={`w-[2.5rem] h-[2.5rem]  rounded-full ${
                  touchScreen
                    ? "fill-blue-500/80"
                    : "fill-primary hover:fill-blue-500/80"
                } hover:animate-wiggle cursor-pointer`}
              />
            </Social>
            <Social url={"https://www.instagram.com/naaemnemy/"}>
              <AiFillInstagram
                className={`w-[2.5rem] h-[2.5rem] rounded-full ${
                  touchScreen
                    ? "fill-[url(#MyGradient)]"
                    : "fill-primary hover:fill-[url(#MyGradient)]"
                }  hover:fill-[url(#MyGradient)]  hover:animate-wiggle cursor-pointer`}
              />
            </Social>
            <Social url={"tel:+963960052477"}>
              <MdPhone
                className={`w-[2.5rem] h-[2.5rem] rounded-full ${
                  touchScreen
                    ? "fill-green-500/80"
                    : "fill-primary hover:fill-green-500/80"
                }  hover:animate-wiggle cursor-pointer`}
              />
            </Social>
          </div>
          {/* nav */}
          <div
            id="navigation"
            className="px-1 font-bold  min-h-[5vh]  bg-transparent flex overflow-x-scroll no-scrollbar 2xl:flex-wrap gap-3 text-lg items-end "
          >
            {Object.keys(galaries).map((galary, index) => (
              <Tab
                id={galary}
                key={index}
                title={galary}
                selection={selection}
                setSelection={setSelection}
                onClick={() => {
                  setImages(galaries[galary]);
                  scroll(galary);
                }}
              ></Tab>
            ))}
          </div>
          <div className="min-h-[50vh] bg-transparent  pb-2  ">
            <div className="w-full min-h-[50vh] bg-gray-200 rounded-md pb-5 pt-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-start relative  ">
              {images.map((image, index) => (
                <ImageCard image={image} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
