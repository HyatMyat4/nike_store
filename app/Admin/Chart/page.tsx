"use client";
import React from "react";
import Chart from "./Chart";
import SideBar from "../SideBar";
import DarhboardNavbar from "../DarhboardNavbar";

function page() {
  const Headtitle = "Chart Pie";
  return (
    <div className="w-full h-screen frc justify-between bg-slate-200  dark:bg-[black]">
      <div className="w-full h-screen overflow-hidden  select-none">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div className="w-full 1455:w-[45%] h-[90%] frc justify-center m-auto  ">
          <Chart isDashboard={true} />
        </div>
      </div>
    </div>
  );
}

export default page;
