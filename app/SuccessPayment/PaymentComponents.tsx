"use client";
import React from "react";
import { Getuser_Order } from "../../Query/Getuser_Order";
import { useEffect, useState } from "react";
import PaymentComponents2 from "./PaymentComponents2";
import Payment_body from "./Payment_body";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";
function paymentComponents() {
  const [Order_data, setOrder_data] = useState<Order_data[] | any>();
  const fetch_data = async (email: string) => {
    const response: Order_data[] = await Getuser_Order(email);
    setOrder_data(response);
  };

  useEffect(() => {
    const order_id = localStorage.getItem("UserLastOrder_id");
    if (!order_id) return;
    fetch_data(order_id);
  }, []);

  return (
    <div className=" w-full 1244:w-[1200px] h-auto fcc m-auto  pt-[20px] select-none">
      <Link href={"/"} className=" absolute top-[15px] left-[15px] z-50 ">
        <BsFillArrowLeftCircleFill className=" text-[40px] hover:opacity-[0.8] active:scale-90 transition-all duration-100 cursor-pointer" />
      </Link>
      <PaymentComponents2 Order_data={Order_data} />
      {Order_data
        ? Order_data.map((order_data: Order_data) => (
            <Payment_body Order_data={order_data} />
          ))
        : ""}
    </div>
  );
}

export default paymentComponents;
