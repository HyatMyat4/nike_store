"use client";
import React from "react";
import SideBar from "../SideBar";
import DarhboardNavbar from "../DarhboardNavbar";
import { toprateslaes } from "../../../constants";
import DeleteShoeCard from "./DeleteShoeCard";
import { Getallshoes } from "../../../Query/Shoes/Getallshoes";
import { useEffect, useState } from "react";
import { DotSpinner } from "@uiball/loaders";
import { useSelector } from "react-redux";
import { DeleteIdC } from "../../../Redux/ActionSlice";
function page() {
  const id = useSelector(DeleteIdC);
  const Headtitle = "Edit Shoe";
  const [Carddata, setCarddata] = useState<any>();

  const Fetchdata = async () => {
    const data = await Getallshoes();
    setCarddata(data);
  };

  const filterfunction = () => {
    const filterdata = Carddata?.filter((data: ShoeCardData) => data.id !== id);
    setCarddata(filterdata);
  };

  useEffect(() => {
    Fetchdata();
  }, []);

  useEffect(() => {
    filterfunction();
  }, [id]);

  return (
    <div className="w-full h-screen frc justify-between bg-slate-200  dark:bg-[black]">
      <div className="w-full h-screen overflow-hidden">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div
          id="cutomscoll"
          className="w-full h-full  frc  justify-around flex-wrap overflow-y-scroll pb-[100px]"
        >
          {Carddata ? (
            Carddata?.map((data: ShoeCardData) => (
              <DeleteShoeCard key={data.id} data={data} />
            ))
          ) : (
            <DotSpinner size={45} speed={0.9} color="#FF5722" />
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
