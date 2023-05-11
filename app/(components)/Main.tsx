"use client";
import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Video from "./Video";
export default function Main({ heroapi }: any) {
  return (
    <div className="w-full h-auto 950:h-[80vh]  overflow-hidden pb-[50px] 950:pb-0 bg-theme-media  ">
      <div className="bg-theme clip-path h-auto 950:h-[80vh]   w-auto absolute top-0 left-0 right-0 opacity-100 z-[-1]"></div>
      <div className="w-full 1400:w-[1400px]  h-full  m-auto  opacity-100  z-[999] px-[20px]  1400:px-0 mt-[70px] 670:mt-[50px] 730:mt-[20px] 800:mt-0">
        <div className="fcc justify-between">
          <h1
            id="italy"
            className="  text-[30px] 450:text-[40px] 550:text-5xl 1400:text-6xl font-extrabold filter drop-shadow-sm text-slate-200 text-center"
          >
            {heroapi.title}
          </h1>
          <h1
            id="italy"
            className=" text-[30px] 450:text-[40px] 550:text-5xl 1400:text-6xl font-extrabold filter drop-shadow-sm text-slate-200 text-center"
          >
            {heroapi.subtitle}
          </h1>
          <span
            id="italy"
            className="px-[20px] text-black py-[5px] bg-slate-200  shadow-lg active:scale-90 transition-all duration-100 select-none cursor-pointer shadow-slate-50/50 rounded-[5px] my-5"
          >
            Explore Product
          </span>
        </div>
        <div className=" frc   justify-center relative">
          <div className="w-0 950:min-w-[130px] fcc mt-[20px] absolute left-0  z-50 hidden  950:flex">
            {heroapi.videos.map((data: any, index: any) => (
              <Tilt
                key={index}
                className="w-[130px] h-[110px] cursor-pointer  relative mt-[25px]"
              >
                <div className=" w-full h-full hover:opacity-0  z-[-1]">
                  <div className="absolute frc justify-center inset-0">
                    <BsFillPlayCircleFill className="  text-white text-[30px] " />
                  </div>
                  <img
                    className="w-auto h-full rounded-[8px] overflow-hidden bg-contain "
                    src={data.imgsrc}
                    alt="Nike"
                  />
                </div>
                <div className="w-full h-full  opacity-0  hover:opacity-[100]  absolute inset-0 z-50">
                  <Video />
                </div>
              </Tilt>
            ))}
          </div>
          <div className="w-full 950:w-auto h-auto frc justify-center  animate-slideright3  ">
            <img
              className="rounded-[8px] translate-y-[0px] 950:translate-y-[25px] w-auto 950:w-[750px] h-auto cursor-pointer
                overflow-hidden rotate-[-7deg] 950:rotate-[-25deg] hover:rotate-0 transition-all  duration-700 ease-in-out object-fill "
              src={heroapi.img}
              alt="Nike"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
