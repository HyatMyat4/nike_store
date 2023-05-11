import React from "react";
import { sneaker } from "../../constants";

export default function Higlights() {
  return (
    <div className="w-full h-auto 1160:h-[400px] frc mb-[25px] 1160:mb-0  ">
      <div className="w-[90%] h-full fcc 1160:frc justify-between m-auto">
        <div className="w-full 550:w-[500px] h-auto fcc items-start justify-around animate-slideright2 ">
          <h1 className=" text-3xl 500:text-4xl font-bold text-gradient">
            {sneaker.heading}
          </h1>
          <h1 className="text-4xl 500:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold  dark:text-slate-100 text-slate-900   filter drop-shadow-lg">
            {sneaker.title}
          </h1>
          <p className=" text-[17px] 500:text-[18px] font-medium my-4 text-slate-900 dark:text-slate-100 ">
            {sneaker.text}
          </p>
          <div className="px-[20px]  py-[5px]    shadow-md active:scale-90 text-slate-100  dark:text-slate-900 transition-all duration-100 select-none cursor-pointer bg-slate-900 dark:bg-slate-100 font-medium shadow-slate-900 rounded-[5px] ">
            Explore More
          </div>
        </div>
        <div className="w-auto h-auto animate-slideleft2">
          <div className=" rotate-[13deg] hover:rotate-[-3deg] cursor-pointer transition-all duration-700">
            <img src={sneaker.img} className="w-[500px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
