"use client"
import React from "react";
import { Tilt } from "react-tilt";
import { AiOutlineStar } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
import {  useDispatch } from "react-redux";
import { UserCartEngin , CartopencloseEngin  } from '../../Redux/ActionSlice'
import Image from "next/image";
export default function ShoeCard({ data }: any) {
   const dispatch = useDispatch()   
   

   const userOrder = () => {
    dispatch(UserCartEngin(data)) 
   }

  return (
    <Tilt // This way is work But not good way to realworld
      className={` relative  bg-gradient-to-b fcc w-[100%] 500:w-[95%] 600:w-[90%] 740:w-[310px] 790:w-[330px] 830:w-[350px] 
       905:w-[380px] 1455:w-[410px] hover:z-[5] 500:hover:z-[999] h-auto 500:h-[300px] rounded-[10px]  mb-[25px]  mx-[10px] py-[20px] 500:py-0 shadow-lg
      ${data.shadow}
    ${
      data.backgroundcolour // => it applied to html element in browser but not show colour
        ? data.backgroundcolour // So i use Pre make colour =>
        : "from-violet-500  to-indigo-500 from-indigo-700 from-green-600 to-lime-500 to-indigo-700 shadow-cyan-500 from-sky-600 to-indigo-600 from-green-500 to-emerald-500 from-orange-500 to-amber-500 from-gray-900 to-yellow-500 from-blue-500 to-cyan-500 from-yellow-500 to-yellow-500 from-red-500 from-[#936550] to-orange-900 from-slate-900 to-black  from-blue-900 to-blue-500  to-rose-500 from-blue-600 to-blue-500 shadow-blue-500 shadow-rose-500 shadow-violet-500 shadow-lime-500  shadow-blue-500  shadow-green-500 shadow-orange-500 shadow-yellow-500  shadow-black  shadow-indigo-500  shadow-orange-800"
    }
    `}
    >
     
      <div id="italy" className="fcc select-none  text-slate-200 ">
        <h3 className=" text-lg font-bold filter drop-shadow-sm ">
          {data.shoename}
        </h3>   
        <div className="frc justify-center mt-[5px]">
          <span className="px-[12px] py-[3px] rounded-[5px] bg-slate-200 text-black">
            ${data.price}
          </span>
          <div className="ml-[15px] frc justify-center">
            <AiOutlineStar className="text-[20px] " />
            <span className="ml-[4px]">{data.rating}+</span>
          </div>
        </div>
        <div className="frc mt-[10px] justify-center text-black">
          <div onClick={() => userOrder()} className="p-[4px] active:scale-90 transition-all duration-100 rounded bg-slate-100 cursor-pointer ">
            <SiShopify className="text-[24px]" />
          </div>
          <div onClick={() => userOrder()} className="px-[20px] py-[4px] active:scale-90 transition-all duration-100 cursor-pointer bg-slate-100 rounded ml-[12px]">
            Buy Now
          </div>
        </div>
      </div>
      <div className="">
         <div className=" cursor-pointer rotate-0 hover:rotate-[-12deg]  transition-all  duration-700 ease-in-out">
            <Image 
             alt={data.shoename}
             src={data.image} 
             width={1920}
             height={1080}
             className="w-[95%] 350:w-[280px] h-auto m-auto"
            />
         </div>
      </div>
    </Tilt>
  );
}


