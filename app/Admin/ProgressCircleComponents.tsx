import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { HiXCircle, HiOutlineChartPie } from "react-icons/hi";
import { BsFillBoxFill, BsCart2 } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { startDateEngin, endDateEngin } from "../../Redux/ActionSlice";
function ProgressCircleComponents() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState<Date | any>(
    new Date("2021-02-01")
  );
  const [endDate, setEndDate] = useState<Date | any>(new Date("2021-03-01"));

  useEffect(() => {
    dispatch(startDateEngin(startDate));
  }, [startDate, setStartDate]);
  useEffect(() => {
    dispatch(endDateEngin(endDate));
  }, [endDate, setEndDate]);

  return (
    <div className="w-full h-auto 1500:h-[40%] fcc justify-between">
      <div className="w-full h-auto 670:h-[60px] fcc  670:frc  items-center 1500:items-end text-black dark:text-white justify-between px-[15px] ">
        <div className=" fcc  500:frc justify-between mt-[10px] 670:mt-0">
          <DatePicker
            className="mr-0 500:mr-[10px] mb-[10px] 500:mb-0  outline-none py-[4px] px-[8px] rounded-[5px]  dark:bg-[#21295C]"
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            className="mr-0 500:mr-[10px]  outline-none py-[4px] px-[8px] rounded-[5px]  dark:bg-[#21295C]"
            selected={endDate}
            onChange={(date: any) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
        <div className=" px-[24px] 500:px-[20px] py-[8px] m-[10px] 670:m-0 rounded-[10px]  bg-white hover:opacity-[0.8] cursor-pointer transition-all duration-75 frc hover:bg-indigo-300 dark:bg-indigo-500 font-medium">
          Dowload Repoter <FaDownload className="ml-[5px]" />
        </div>
      </div>
      <div className="w-full h-full frc justify-around 1000:justify-between flex-wrap 1000:flex-nowrap p-[10px] ">
        <div className=" w-[100%] 500:w-[350px] mb-[15px] 1000:mb-0 1000:w-[33%] h-[280px] rounded-[25px] ml-0 500:ml-[18px] bg-white dark:bg-slate-800 frc justify-between p-[20px] ">
          <div className="w-[55%] h-full fcc items-start  justify-around">
            <div className="p-[8px] rounded-full bg-indigo-400">
              <BsFillBoxFill className=" text-white text-[25px]" />
            </div>
            <span className=" font-bold">Total Sales</span>
            <span className=" font-bold text-[35px] ">$25024</span>
            <span className="  text-gray-500  ">Last 24 Hours</span>
          </div>
          <div className="w-[45%] h-full frc   justify-start">
            <CircularProgressbar
              value={81}
              text={`${81}%`}
              styles={buildStyles({
                textColor: "#4DB6AC",
                pathColor: "#818CF8",
                trailColor: "gold",
              })}
            />
          </div>
        </div>
        <div className="  w-[100%] 500:w-[350px] mb-[15px] 1000:mb-0 1000:w-[33%] h-[280px] rounded-[25px] ml-0 500:ml-[18px] bg-white dark:bg-slate-800 frc justify-between p-[20px] ">
          <div className="w-[55%] h-full fcc items-start  justify-around">
            <div className="p-[8px] rounded-full bg-rose-500">
              <HiOutlineChartPie className=" text-white text-[25px]" />
            </div>
            <span className=" font-bold">Total Expenses</span>
            <span className=" font-bold text-[35px] ">$16410</span>
            <span className="  text-gray-500  ">Last 24 Hours</span>
          </div>
          <div className="w-[45%] h-full frc   justify-start">
            <CircularProgressbar
              value={62}
              text={`${62}%`}
              styles={buildStyles({
                textColor: "#4DB6AC",
                pathColor: "#F43F5E",
                trailColor: "gold",
              })}
            />
          </div>
        </div>{" "}
        <div className="  w-[100%] 500:w-[350px] mb-[15px] 1000:mb-0 1000:w-[33%] h-[280px] rounded-[25px] mx-0 500:mx-[18px]  bg-white dark:bg-slate-800  frc justify-between p-[20px] ">
          <div className="w-[55%] h-full fcc items-start  justify-around">
            <div className="p-[8px] rounded-full bg-teal-400">
              <AiOutlineLineChart className=" text-white text-[25px]" />
            </div>
            <span className=" font-bold">Total Income</span>
            <span className=" font-bold text-[35px] ">$12864</span>
            <span className="  text-gray-500  ">Last 24 Hours</span>
          </div>
          <div className="w-[45%] h-full frc   justify-start">
            <CircularProgressbar
              value={44}
              text={`${44}%`}
              styles={buildStyles({
                textColor: "#4DB6AC",
                pathColor: "turquoise",
                trailColor: "gold",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressCircleComponents;
