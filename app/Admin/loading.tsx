"use client";
import React from "react";
import { DotSpinner } from "@uiball/loaders";
import SideBar from "./SideBar";
import DarhboardNavbar from "./DarhboardNavbar";

function loading() {
  const Headtitle = "DASHBOARD";
  return (
    <div className="w-full h-screen frc justify-between bg-slate-200  dark:bg-[black]">
      <div className="w-full h-screen overflow-hidden ">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div className="w-full h-full frc justify-between ">
          <div className="w-full h-full fcc justify-center">
            <DotSpinner size={50} speed={0.9} color="#FF5722" />
            <span className=" animate-pulse font-medium mt-[5px]">
              loading...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loading;
