"use client";
import React from "react";
import { Sidebar } from "@/constants";
import Link from "next/link";
import Linkcomponent from "./Linkcomponent";
import { useSelector, useDispatch } from "react-redux";
import { SidebarC, SidebarEngin } from "../../Redux/ActionSlice";
import { HiXMark } from "react-icons/hi2";

export default function SideBar() {
  const openclose = useSelector(SidebarC);
  const dispatch = useDispatch();
  const bool: any = false;
  return (
    <div className={`   w-full h-full fcc shadow-lg shadow-slate-400  `}>
      <div className="w-full h-[80px] relative frc justify-center dark:hidden cursor-pointer ">
        <Link href={"/"}>
          <img src="/logo3.png" className="w-[120px] h-auto" />
        </Link>
        <div
          onClick={() => dispatch(SidebarEngin(bool))}
          className={` ${
            openclose ? "" : " hidden"
          } absolute right-[15px] p-[5px] rounded-[5px] bg-indigo-300 hover:opacity-[0.8] active:scale-90 transition-all duration-100 `}
        >
          <HiXMark className=" text-[25px] text-[#E2E8F0]" />
        </div>
      </div>
      <div className="w-full h-[80px] relative frc justify-center   hidden dark:inline  cursor-pointer ">
        <Link className="w-full h-full frc justify-center" href={"/"}>
          <img src="/logoW.png" className="w-[110px] h-auto mt-[10px]" />
        </Link>
        <div
          onClick={() => dispatch(SidebarEngin(bool))}
          className={` ${
            openclose ? "" : " hidden"
          } absolute right-[15px] top-[20px] p-[5px] rounded-[5px] bg-indigo-300 hover:opacity-[0.8] active:scale-90 transition-all duration-100 `}
        >
          <HiXMark className=" text-[25px] text-[#E2E8F0]" />
        </div>
      </div>
      {Sidebar.map((data: Sidebase, index) => (
        <Linkcomponent
          key={index}
          dispatch={dispatch}
          SidebarEngin={SidebarEngin}
          bool={bool}
          data={data}
          index={index}
        />
      ))}
    </div>
  );
}
