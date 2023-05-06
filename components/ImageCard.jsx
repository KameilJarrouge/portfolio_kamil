import React from "react";

function ImageCard({ image }) {
  return (
    <div className="flex flex-col   shadow shadow-black/50 rounded-md mx-1 grow  ">
      <img src={image.url} alt="" className="w-full h-full rounded-t-md " />
      <div className="w-full min-h-[2rem] text-hero-background text-lg rounded-b-md font-bold text-center  py-2">
        {image.title}
      </div>
    </div>
  );
}

export default ImageCard;
