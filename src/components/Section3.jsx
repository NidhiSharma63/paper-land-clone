import React from "react";
import Image1 from "../assets/image1.webp";

const Section3 = () => {
  return (
    <div className="section-3 h-[700px] flex border-2 bg-[#fccff6] text-[#373637] align-middle justify-between p-[4rem] pt-[4rem] flex-col gap-7 mb-[4rem]">
      <div className="flex align-middle justify-start gap-12 border-2">
        <h3 className="text-2xl font-bold heading">Product Collections</h3>
        <button className="border-2 px-4 py-1 rounded text-[11px] font-medium tracking-wide border-[#181816cc]">
          VIEW ALL PRODUCTS
        </button>
      </div>
      <div className="section3-bottom flex gap-10">
        <div className="image-container w-[750px] h-[500px] rounded-xl overflow-hidden">
          <img src={Image1} alt="showcase-image" className="w-full h-full " />
        </div>
        <div className="section-3-text flex flex-col gap-2 mt-3 text-2xl">
          <p className="text-[#4e4d4e3a] cursor-pointer">Art Prints</p>
          <hr className="border-[1px] border-[#4e4d4e3a]" />
          <p className="text-[#4e4d4e3a] cursor-pointer">Cards & Stationery</p>
          <hr className="border-[1px] border-[#4e4d4e3a]" />
          <p className="text-[#4e4d4e3a] cursor-pointer">Homewares</p>
          <hr className="border-[1px] border-[#4e4d4e3a]" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
