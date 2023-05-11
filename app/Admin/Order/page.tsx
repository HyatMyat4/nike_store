"use client";
import React from "react";
import { GetAllOrderData } from "../../../Query/GetAllOrderData";
import OrderComponents from "./OrderComponents";
import { useEffect, useState } from "react";

function page() {
  const [Order_data, setOrder_data] = useState<Order_data[] | any>();
  const fetch_data = async () => {
    const Response = await GetAllOrderData();
    setOrder_data(Response);
  };

  useEffect(() => {
    fetch_data();
  }, []);

  return (
    <div>
      <OrderComponents Order_data={Order_data} />
    </div>
  );
}

export default page;
