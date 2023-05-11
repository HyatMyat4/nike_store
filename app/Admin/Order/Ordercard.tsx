"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineUser, AiFillDollarCircle } from "react-icons/ai";
import { MdEmail, MdOutlineAttachEmail } from "react-icons/md";
import { BsFillPhoneFill, BsClockHistory } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { FaCity, FaHome } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { HiOutlineCheck } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import Shoecard from "./Shoecard";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import ReactTimeAgo from "react-time-ago";

interface Props {
  data: Order_data;
  Delete_Order: Promise<void> | any;
}
function Ordercard({ data, Delete_Order }: Props) {
  TimeAgo.addDefaultLocale(en);
  TimeAgo.addLocale(ru);

  return (
    <div
      key={data.id}
      className="w-[98%] 1244:w-[1400px] min-h-[1200px] 1100:min-h-[700px] my-[20px]   rounded-[10px] fcc 1100:frc shadow-lg justify-between overflow-hidden bg-indigo-200 dark:bg-[#0a0a0a] "
    >
      <div className=" w-full 1100:w-[40%] h-full fcc  items-start justify-around p-[20px] ">
        <div className="w-full h-[60px] bg-slate-100 dark:bg-[#1E293B] mb-[10px] rounded-[10px]  hover:opacity-[0.7] cursor-pointer px-[15px] frc">
          <div className="w-auto h-auto mr-[15px]">
            {data?.userimage ? (
              <Image
                src={data.userimage}
                width={90}
                height={90}
                alt="Nike"
                id="linerColour"
                className="w-[50px] h-auto rounded-full   "
              />
            ) : (
              <AiOutlineUser className=" text-[30px] mr-[10px] text-indigo-400" />
            )}
          </div>
          <span className=" font-medium">{data?.name}</span>
        </div>
        <div className="w-full h-[60px] rounded-[10px] bg-slate-100 dark:bg-[#1E293B] mb-[10px] dark:shadow-white  hover:opacity-[0.7] cursor-pointer px-[15px] frc">
          <MdEmail className=" text-[30px] mr-[10px] text-indigo-400" />
          <span className=" font-medium">{data?.email}</span>
        </div>
        <div className="w-full h-[60px] rounded-[10px] bg-slate-100 dark:bg-[#1E293B] mb-[10px] dark:shadow-white  hover:opacity-[0.7] cursor-pointer px-[15px] frc">
          <MdOutlineAttachEmail className=" text-[30px] mr-[10px] text-indigo-400" />
          <span className=" font-medium">{data?.email2}</span>
        </div>
        <div className="w-full h-[60px] rounded-[10px] bg-slate-100 dark:bg-[#1E293B] mb-[10px] dark:shadow-white  hover:opacity-[0.7] cursor-pointer px-[15px] frc">
          <AiFillDollarCircle className=" text-[30px] mr-[10px] text-indigo-400" />
          <span className=" font-medium">{data?.totalamount}</span>
        </div>
        <div className="w-full h-[60px] rounded-[10px] bg-slate-100 dark:bg-[#1E293B] mb-[10px] dark:shadow-white  hover:opacity-[0.7] cursor-pointer px-[15px] frc">
          <BsFillPhoneFill className=" text-[30px] mr-[10px] text-indigo-400" />
          <span className=" font-medium">
            {data?.phone === 0 ? "0000000000" : data?.phone}
          </span>
        </div>
        <div className="w-full h-[60px] rounded-[10px] bg-slate-100 dark:bg-[#1E293B] mb-[10px] dark:shadow-white  hover:opacity-[0.7] cursor-pointer px-[15px] frc">
          <BiWorld className=" text-[30px] mr-[10px] text-indigo-400" />
          <span className=" font-medium">{data?.country}</span>
        </div>
        <div className="w-full h-[60px] rounded-[10px] bg-slate-100 dark:bg-[#1E293B] mb-[10px] dark:shadow-white  hover:opacity-[0.7] cursor-pointer  px-[15px] frc">
          <FaCity className=" text-[30px] mr-[10px] text-indigo-400" />
          <span className=" font-medium">{data?.town}</span>
        </div>
        <div className="w-full h-[60px] rounded-[10px] bg-slate-100 dark:bg-[#1E293B] mb-[10px] dark:shadow-white  hover:opacity-[0.7] cursor-pointer px-[15px] frc">
          <RiRoadMapLine className=" text-[30px] mr-[10px] text-indigo-400" />
          <span className=" font-medium">{data?.state}</span>
        </div>
        <div className="w-full h-[60px] frc justify-between rounded-[10px] bg-slate-100 dark:bg-[#1E293B] mb-[10px] dark:shadow-white  hover:opacity-[0.7] cursor-pointer px-[15px] frc">
          <div className="frc">
            <FaHome className=" text-[30px] mr-[10px] text-indigo-400" />
            <span className=" font-medium">{data?.postal_code}</span>
          </div>
          <div className="w-auto h-auto  text-indigo-400 frc active:scale-90 hover:opacity-[0.9] mr-[15px] transition-all duration-100 justify-center  rounded-[10px] ">
            <BsClockHistory className=" text-[24px]  mr-[7px] animate-spin " />
            <div className=" font-medium text-[12px] frc">
              <ReactTimeAgo date={data.time} locale="en-US" />
            </div>
          </div>
        </div>
        <div className="w-full h-auto 350:h-[60px] rounded-[10px]  dark:shadow-white   cursor-pointer px-[15px] fcc 350:frc justify-end">
          <div
            className="w-full h-[40px] 350:h-auto 350:w-auto px-0 350:px-[20px] py-0 350:py-[8px] frc active:scale-90 
          mb-[15px] 350:mb-0 hover:opacity-[0.9] mr-0 350:mr-[15px] transition-all duration-100 justify-center text-white
           rounded-[10px] bg-teal-400"
          >
            <span className=" font-medium">Complete</span>
            <HiOutlineCheck className=" text-[24px]  ml-[4px] " />
          </div>
          <div
            onClick={(e) => Delete_Order(data.id)}
            className="w-full 350:w-auto h-[40px] 350:h-auto px-0 350:px-[20px] py-0 350:py-[8px] frc active:scale-90 hover:opacity-[0.9] transition-all duration-100 justify-center text-white rounded-[10px] bg-rose-600"
          >
            <span className=" font-medium">Delete</span>
            <HiXMark className=" text-[24px]  ml-[4px] " />
          </div>
        </div>
      </div>
      <div
        key={data.id}
        className="w-full 1100:w-[60%] h-[500px] 1100:h-full fcc  overflow-y-scroll p-[20px]"
      >
        {data?.orderdata.map((data: Items) => (
          <Shoecard data={data} />
        ))}
      </div>
    </div>
  );
}

export default Ordercard;
