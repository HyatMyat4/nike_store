"use client";
import React from "react";
import SideBar from "./SideBar";
import DarhboardNavbar from "./DarhboardNavbar";
import ProgressCircleComponents from "./ProgressCircleComponents";
import RecentUpdate from "./RecentUpdate";
import SalesAnalytics from "./SalesAnalytics";
import Daily from "./Daily";
import { useSelector } from "react-redux";
import { startDateC, endDateC, SidebarC } from "../../Redux/ActionSlice";
import RecentUpdate2 from "./RecentUpdate2";
// Animation

export default function Mainpage() {
  const startDate = useSelector(startDateC);
  const endDate = useSelector(endDateC);
  const openclose = useSelector(SidebarC);
  const Headtitle = "DASHBOARD";

  return (
    <div className="w-full h-auto 1500:h-screen frc justify-between">
      <div className="w-full h-auto 1500:h-screen overflow-hidden bg-slate-200  dark:bg-[black] ">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div className="w-full h-auto 1500:h-full fcc 1500:frc justify-between ">
          <div className="w-full 1500:w-[75%] h-auto 1000:h-full fcc  justify-between">
            <ProgressCircleComponents />
            <div className="w-full h-auto 1000:h-[60%]  frc items-start  justify-between">
              <div className="w-full h-auto 1000:h-[85%]  frc">
                <Daily startDate={startDate} endDate={endDate} />
              </div>
            </div>
          </div>
          <div className="w-full 1500:w-[25%] h-full fcc bg-slate-200  dark:bg-[black]  1500:bg-transparent justify-between px-[20px] ">
            <div className="w-full h-[50%] hidden 1500:inline">
              <RecentUpdate />
            </div>
            <SalesAnalytics />
            <div className="w-full h-[50%] inline 1500:hidden  ">
              <RecentUpdate2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
