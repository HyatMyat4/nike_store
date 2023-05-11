"use client";
import React from "react";
import { TfiAngleDoubleLeft } from "react-icons/tfi";
import { IoTrash } from "react-icons/io5";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";
import { BsDashLg, BsPlus } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Checkout from "./Checkout";
import {
  CartopencloseC,
  CartopencloseEngin,
  UserCartC,
  UserCartEngin,
  RemoveItemsEngin,
  RemoveAllItems,
  RemoveItemDcreased,
  TotalPriceC,
} from "../../Redux/ActionSlice";
function Cart() {
  const Totalprices = useSelector(TotalPriceC);
  const openClose = useSelector(CartopencloseC);
  const UserOrder = useSelector(UserCartC);
  const dispatch = useDispatch();
  const deleteall = "deleteAll" as never;
  return (
    <div
      className={`w-full ${
        openClose ? "" : "hidden"
      } h-screen  select-none bg-[#d7d7d766]  fixed inset-0 frc opacity-200  z-[9999900] justify-end`}
    >
      <div
        className={`w-full 700:w-[600px] h-full ${
          openClose ? " animate-slideright2" : ""
        } fcc justify-between bg-[#e2e8f0e2] z-[99999990]`}
      >
        <div className="w-full h-[60px] bg-slate-100 frc justify-between px-[10px]">
          <div className="frc justify-between select-none">
            <div
              onClick={() => dispatch(CartopencloseEngin(false))}
              className="active:scale-90 transition-all duration-100"
            >
              <TfiAngleDoubleLeft className=" text-[28px] cursor-pointer hover:text-sky-500  " />
            </div>
            <div id="italy" className="frc justify-between ml-[10px]">
              <span className=" font-medium">Your Cart</span>
              <span className="px-[5px] ml-[5px] py-[2px] rounded bg-slate-900 text-slate-100">
                ({UserOrder.length} Items)
              </span>
            </div>
          </div>
          <div
            onClick={() => dispatch(RemoveAllItems(deleteall))}
            className="frc p-[5px] rounded hover:bg-rose-600 bg-slate-900 active:scale-90 transition-all duration-100"
          >
            <BsFillTrash3Fill className=" text-[18px]   text-slate-100 cursor-pointer" />
          </div>
        </div>
        <div
          id="scroolbar-hidden"
          className="w-full h-[100%] fcc items-start  justify-start overflow-y-scroll pb-[20px]"
        >
          {UserOrder.map((data: any, i: any) => (
            <div
              key={`${data.img}${i}`}
              className="w-full h-auto   frc justify-between mt-[20px] bg-slate-100 550:bg-transparent p-[20px] 550:p-0"
            >
              <div className="w-full h-full ml-[24px] fcc 550:frc  justify-around">
                <div
                  className={`w-[95%] 550:w-[200px] h-auto  bg-gradient-to-b p-[15px] PreBuildColour rounded-[10px] mb-[20px] 550:mb-0  ${
                    data.shadow
                  }             
        ${
          data.backgroundcolour // => it applied to html element in browser but not show colour
            ? data.backgroundcolour // So i use Pre make colour =>
            : "from-violet-500  to-indigo-500 from-indigo-700 from-green-600 to-lime-500 to-indigo-700 shadow-cyan-500 from-sky-600 to-indigo-600 from-green-500 to-emerald-500 from-orange-500 to-amber-500 from-gray-900 to-yellow-500 from-blue-500 to-cyan-500 from-yellow-500 to-yellow-500 from-red-500 from-[#936550] to-orange-900 from-slate-900 to-black  from-blue-900 to-blue-500  to-rose-500 from-blue-600 to-blue-500 shadow-blue-500 shadow-rose-500 shadow-violet-500 shadow-lime-500  shadow-blue-500  shadow-green-500 shadow-orange-500 shadow-yellow-500  shadow-black  shadow-indigo-500  shadow-orange-800from-violet-500  to-indigo-500 from-indigo-700 from-green-600 to-lime-500 to-indigo-700 shadow-cyan-500 from-sky-600 to-indigo-600 from-green-500 to-emerald-500 from-orange-500 to-amber-500 from-gray-900 to-yellow-500 from-blue-500 to-cyan-500 from-yellow-500 to-yellow-500 from-red-500 from-[#936550] to-orange-900 from-slate-900 to-black  from-blue-900 to-blue-500  to-rose-500 from-blue-600 to-blue-500 shadow-blue-500 shadow-rose-500 shadow-violet-500 shadow-lime-500  shadow-blue-500  shadow-green-500 shadow-orange-500 shadow-yellow-500  shadow-black  shadow-indigo-500  shadow-orange-800"
        } `}
                >
                  <Image
                    alt={data.shoename}
                    src={data.image}
                    width={1920}
                    height={1080}
                    className="w-full h-auto m-auto"
                  />
                </div>
                <div className="w-auto h-full fcc justify-around ml-[20px]">
                  <span
                    id="italy"
                    className=" text-[18px] font-medium text-slate-900"
                  >
                    {data.shoename}
                  </span>
                  <div className="w-auto h-auto frc justify-between my-[15px] 550:my-0">
                    <button
                      disabled={data.cartQuantity <= 1}
                      onClick={() => dispatch(RemoveItemDcreased(data))}
                      className="p-[3px] disabled:opacity-[0.9] disabled:bg-gray-600 rounded bg-rose-500 cursor-pointer active:scale-90 transition-all duration-100"
                    >
                      <BsDashLg className=" text-[20px] text-white " />
                    </button>
                    <div
                      id="italy"
                      className="w-[30px] h-[28px] frc justify-center mx-[10px] cursor-pointer rounded text-slate-100 bg-slate-900 active:scale-90 transition-all duration-100 "
                    >
                      {data.cartQuantity}
                    </div>
                    <div
                      onClick={() => dispatch(UserCartEngin(data))}
                      className="p-[3px] rounded  bg-emerald-500 cursor-pointer active:scale-90 transition-all duration-100 "
                    >
                      <BsPlus className=" text-[20px] text-white " />
                    </div>
                  </div>
                </div>
                <div className="w-full 550:w-auto h-full frc 550:fcc justify-around ml-[20px]">
                  <span
                    id="italy"
                    className=" text-[18px] font-medium text-slate-900"
                  >
                    ${data.price}
                  </span>
                  <div
                    onClick={() => dispatch(RemoveItemsEngin(data))}
                    className="frc p-[5px] rounded hover:bg-rose-600 bg-slate-900 active:scale-90 transition-all duration-100"
                  >
                    <IoTrash className=" text-[18px]   text-slate-100 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
        <div className="w-full h-[120px] fcc  justify-around select-none  bg-slate-100 px-[10px] ">
          <div className="w-full h-[30px] frc justify-between mt-[5px]">
            <span id="italy" className="  font-bold">
              SUBTOTAL
            </span>
            <div
              id="italy"
              className="px-[10px]  py-[2px] rounded cursor-pointer bg-slate-900 active:scale-90 transition-all duration-100 text-slate-100"
            >
              ${Totalprices}
            </div>
          </div>
          <span className="text-[12px] font-medium">
            Taxes and Shipping Will Calculate At Shipping
          </span>
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default Cart;
