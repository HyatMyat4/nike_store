import React from "react";

import { Tilt } from "react-tilt";
import { AiOutlineStar } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
function FakeCard() {
  return (
    <Tilt
      className={` relative  bg-gradient-to-b fcc w-[100%] 500:w-[95%] animate-pulse cursor-pointer 600:w-[90%] 740:w-[310px] 790:w-[330px] 830:w-[350px] 
     905:w-[380px] 1455:w-[410px] hover:z-[5] 500:hover:z-[999] h-auto 500:h-[300px] rounded-[10px]  mb-[25px]  mx-[10px] py-[20px] 500:py-0 shadow-lg
     from-slate-200 to-slate-300 shadow-slate-300 dark:shadow-black dark:from-slate-900 dark:to-black

  `}
    >
      <div id="italy" className="fcc select-none  text-slate-200 ">
        <h3 className=" text-lg font-bold filter drop-shadow-sm text-black dark:text-slate-200 mt-[40px] ">
          Nike Shoes
        </h3>
        <div className="frc justify-center mt-[5px]">
          <span className="px-[12px] py-[3px] rounded-[5px] bg-slate-200 text-black">
            $0000
          </span>
          <div className="ml-[15px] frc justify-center">
            <AiOutlineStar className="text-[20px] " />
            <span className="ml-[4px]">5 +</span>
          </div>
        </div>
        <div className="frc mt-[10px] justify-center text-black">
          <div className="p-[4px] active:scale-90 transition-all duration-100 rounded bg-slate-100 cursor-pointer ">
            <SiShopify className="text-[24px]" />
          </div>
          <div className="px-[20px] py-[4px] active:scale-90 transition-all duration-100 cursor-pointer bg-slate-100 rounded ml-[12px]">
            Buy Now
          </div>
        </div>
      </div>
      <div className="">
        <div className=" cursor-pointer rotate-0 hover:rotate-[-12deg]  transition-all  duration-700 ease-in-out"></div>
      </div>
    </Tilt>
  );
}

export default FakeCard;
