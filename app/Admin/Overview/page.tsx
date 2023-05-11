"use client";
import React from "react";
import Daily from "../Daily";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SideBar from "../SideBar";
import DarhboardNavbar from "../DarhboardNavbar";
import Overview from "./Overview";
import { useState } from "react";
function page() {
  const Headtitle = "OverView";

  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2021-02-01")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2021-03-01"));

  return (
    <div className="w-full h-screen frc justify-between bg-slate-200  dark:bg-[black]">
      <div className="w-full h-screen overflow-hidden  select-none">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div className="w-full h-[90%] fcc  justify-between  ">
          <div className="w-full h-auto frc justify-end">
            <div className="w-auto h-auto 480:h-[60px] mt-[10px]  480:mt-0  flex flex-col 480:flex-row items-center justify-end mr-[15px] ">
              <DatePicker
                className=" mr-0 480:mr-[10px] mb-[10px] 480:mb-[0px] outline-none py-[4px] px-[8px] rounded-[5px]  dark:bg-[#21295C]"
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <DatePicker
                className=" mr-0 480:mr-[10px] mb-[10px] 480:mb-[0px] outline-none py-[4px] px-[8px] rounded-[5px]  dark:bg-[#21295C]"
                selected={endDate}
                onChange={(date: any) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
          </div>
          <Overview isDashboard={true} view={"units"} />
        </div>
      </div>
    </div>
  );
}

export default page;
