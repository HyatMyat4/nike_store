import React from "react";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser, AiOutlinePlus } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
import Link from "next/link";
function SalesAnalytics() {
  return (
    <div className="w-full h-[50%]  overflow-hidden ">
      <div className="w-full h-[50px] frc justify-start">
        <span className=" font-bold text-[28px]">Sales Analytics</span>
      </div>
      <div className="w-full h-full fcc   justify-start">
        <div className="w-full h-auto frc  justify-around rounded-[15px] bg-white dark:bg-slate-800 hover:opacity-[0.7] cursor-pointer transition-all duration-75 py-[15px] mb-[15px]">
          <div className="p-[10px] bg-indigo-400 rounded-full text-white">
            <BsCart2 className=" text-[23px]" />
          </div>
          <div className="fcc items-start ">
            <span className="font-bold ">Onlie Orders</span>
            <span className=" text-[12px] text-gray-600">Last 24 Hours</span>
          </div>
          <div className="bg-teal-200 px-[4px] py-[2px] rounded-[5px] text-[14px] text-emerald-400">
            +31%
          </div>
          <div className=" text-[18px] font-bold">3859</div>
        </div>
        <div className="w-full h-auto frc  justify-around rounded-[15px] bg-white dark:bg-slate-800 hover:opacity-[0.7] cursor-pointer transition-all duration-75 py-[15px] mb-[15px]">
          <div className="p-[10px] bg-rose-400 rounded-full text-white">
            <SiShopify className=" text-[23px]" />
          </div>
          <div className="fcc items-start ">
            <span className="font-bold ">Onlie Orders</span>
            <span className=" text-[12px] text-gray-600">Last 24 Hours</span>
          </div>
          <div className="bg-red-200 px-[4px] py-[2px] rounded-[5px] text-[14px] text-rose-500">
            -28%
          </div>
          <div className=" text-[18px] font-bold">1329</div>
        </div>
        <div className="w-full h-auto frc  justify-around rounded-[15px] bg-white dark:bg-slate-800 hover:opacity-[0.7] cursor-pointer transition-all duration-75 py-[15px] mb-[15px] ">
          <div className="p-[10px] bg-teal-400 rounded-full text-white">
            <AiOutlineUser className=" text-[23px]" />
          </div>
          <div className="fcc items-start ">
            <span className="font-bold ">Onlie Orders</span>
            <span className=" text-[12px] text-gray-600">Last 24 Hours</span>
          </div>
          <div className="bg-teal-200 px-[4px] py-[2px] rounded-[5px] text-[14px] text-emerald-400">
            +20%
          </div>
          <div className=" text-[18px] font-bold">859</div>
        </div>
        <Link
          href={"/Admin/Addshoe"}
          className="w-full select-none cursor-pointer active:scale-95 transition-all duration-75 h-auto frc border border-dashed border-indigo-500  justify-around rounded-[15px]  py-[15px]"
        >
          <div className="frc">
            <AiOutlinePlus className=" text-[25px] text-indigo-500" />
            <span className=" ml-[10px] text-[18px] text-indigo-600">
              Add Product
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SalesAnalytics;
