import React from "react";
import { highlight } from "../../constants";

export default function Higlights() {
  return (
    <div className="w-[98%] 550:w-full  h-auto 1160:h-[400px] m-auto frc mb-[25px] 1160:mb-0  ">
      <div className="w-[90%] h-full fcc 1160:frc justify-between m-auto">
        <div className="w-auto h-auto animate-slideleft2">
          <div className=" rotate-[8deg] hover:rotate-[-10deg] cursor-pointer transition-all duration-700">
            <img src={highlight.img} className="w-[500px] h-auto" />
          </div>
        </div>
        <div className="w-full 550:w-[500px] h-auto fcc items-start justify-around animate-slideright2 mt-[30px] 1160:mt-0 ">
          <h1 className=" text-3xl 500:text-4xl font-bold text-gradient">
            {highlight.heading}
          </h1>
          <h1 className=" text-4xl 500:text-5xl  font-bold text-slate-900 dark:text-slate-100  filter drop-shadow-lg">
            {highlight.title}
          </h1>
          <p className="  text-[17px] 500:text-[18px] font-medium my-4 text-slate-900 dark:text-slate-100  ">
            {highlight.text}
          </p>
          <div
            className="px-[20px]  py-[5px]  text-slate-100  dark:text-slate-900 shadow-md active:scale-90 transition-all 
             duration-100 select-none cursor-pointer bg-slate-900 dark:bg-slate-100 font-medium shadow-slate-900  rounded-[5px] "
          >
            Explore More
          </div>
        </div>
      </div>
    </div>
  );
}
