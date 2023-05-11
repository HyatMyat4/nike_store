"use client";
import React from "react";
import DarhboardNavbar from "../DarhboardNavbar";
import { useState, useEffect } from "react";
import Ordercard from "./Ordercard";
import { DeleteOrder } from "../../../Query/DeleteOrder";
import toast from "react-hot-toast";
interface Props {
  Order_data: Order_data[];
}

function OrderComponents({ Order_data }: Props) {
  const [Order_data2, setOrder_data2] = useState<Order_data[]>();
  const Headtitle = "User Order";

  useEffect(() => {
    setOrder_data2(Order_data);
  }, [Order_data]);

  const Delete_Order = async (id: number) => {
    const response = await DeleteOrder(id);
    const filter_data = Order_data2?.filter((data) => data.id !== id);
    setOrder_data2(filter_data);
    if (response.message === "Success") {
      toast.success("Order deleted..");
    } else {
      toast.error("Order deleted Failed!");
    }
  };

  return (
    <div className="w-full h-screen frc justify-between bg-slate-200  dark:bg-[black]">
      <div className="w-full h-screen overflow-hidden ">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div
          id="cutomscoll"
          className="w-full h-full fcc  justify-start select-none overflow-y-scroll pb-[80px] "
        >
          {Order_data2
            ? Order_data2.map((data: Order_data) => (
                <Ordercard data={data} Delete_Order={Delete_Order} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default OrderComponents;
