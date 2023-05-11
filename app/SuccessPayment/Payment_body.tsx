"use client";
import React from "react";
import Order_dataComponents from "./Order_data";
import { BsClockHistory } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import ReactTimeAgo from "react-time-ago";
import { HiBadgeCheck } from "react-icons/hi";
interface Props {
  Order_data: Order_data;
}
function Payment_body({ Order_data }: Props) {
  TimeAgo.addDefaultLocale(en);
  TimeAgo.addLocale(ru);
  return (
    <div className="w-full h-auto bg-slate-200 rounded-[10px] mt-[20px] p-0 500:p-[20px]">
      <div className="w-full h-auto fcc bg-white rounded-[10px] p-[10px] 500:px-[20px]">
        <div className="w-full h-[60px] frc justify-between">
          <div className="frc">
            <span className=" frc font-bold mr-[5px]">
              Total <span className=" hidden 480:flex">Amount</span>:{" "}
            </span>
            <span className=" font-medium frc  text-emerald-500">
              ${Order_data.totalamount}{" "}
              <HiBadgeCheck className="ml-[2px] text-[18px]" />
            </span>
          </div>
          <div className="frc">
            <BsClockHistory className="mr-[5px] text-[25px] hidden 330:flex" />
            <ReactTimeAgo date={Order_data.time} locale="en-US" />
          </div>
        </div>
        {Order_data
          ? Order_data.orderdata?.map((data: Items) => (
              <Order_dataComponents data={data} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Payment_body;
