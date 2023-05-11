"use client";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
import { useDispatch } from "react-redux";
import { UserCartEngin } from "../../Redux/ActionSlice";

interface Props {
  data: ShoeCardData | any;
}

export default function SelsItems({ data }: Props) {
  const dispatch = useDispatch();

  const addtoCart = () => {
    dispatch(UserCartEngin(data));
  };
  return (
    <div
      key={data.id}
      className={`w-[100%] 670:w-[95%] 1000:w-[80%] 1190:w-[48%] 1247:w-[47%] 1550:w-[32%] h-auto 480:h-[150px] group 480:hover:scale-105  500:hover:scale-110 transition-all duration-500  bg-gradient-to-b mb-[45px] 500:mb-[50px]  ${
        data.backgroundcolour
          ? data.backgroundcolour
          : "from-violet-500 to-indigo-500 from-red-500 to-rose-500 from-blue-600 to-blue-500 shadow-blue-500 shadow-rose-500 shadow-violet-500"
      }
       relative  ${
         data.shadow
       } fcc 480:frc justify-between   rounded-[15px] p-[20px]  `}
    >
      <div id="italy" className=" fcc select-none items-start text-slate-200 ">
        <h3 className=" text-lg font-bold filter drop-shadow-sm ">
          {data.shoename}
        </h3>
        <div className="frc mt-[5px]">
          <span className="px-[12px] py-[3px] rounded-[5px] bg-slate-200 text-black">
            ${data.price}
          </span>
          <div className="ml-[10px] 500:ml-[15px] frc">
            <AiOutlineStar className="text-[20px] " />
            <span className="ml-[4px]">{data.rating}</span>
          </div>
        </div>
        <div className="frc mt-[10px] text-black ">
          <div
            onClick={() => addtoCart()}
            className="p-[4px] inline 480:hidden 550:flex active:scale-90 transition-all duration-100 rounded bg-slate-100 cursor-pointer "
          >
            <SiShopify className="text-[24px]" />
          </div>
          <div
            onClick={() => addtoCart()}
            className="px-[20px] py-[4px] active:scale-90 transition-all duration-100 cursor-pointer bg-slate-100 rounded ml-[12px] 480:ml-0 550:ml-[12px]"
          >
            Buy Now
          </div>
        </div>
      </div>
      <div className="">
        <div className=" rotate-[-33deg] group-hover:rotate-[0deg] 480:group-hover:rotate-[-12deg]  transition-all  duration-700 ease-in-out">
          <img src={data.image} className="w-[280px] h-auto" />
        </div>
      </div>
    </div>
  );
}
//rating
