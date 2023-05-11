import React from "react";
import SideBar from "../SideBar";
import DarhboardNavbar from "../DarhboardNavbar";
import ProductsComponents from "./ProductsComponents";
import { Getallshoes } from "../../../Query/Shoes/Getallshoes";

export const revalidate = 60;

async function page() {
  const SHoes_Data: any = await Getallshoes();
  const Headtitle = `PRODUCT ${SHoes_Data.length}`;
  return (
    <div className="w-full h-screen frc justify-between">
      <div className="w-full h-screen overflow-hidden ">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div className="w-full h-full frc  justify-around  select-none ">
          <ProductsComponents SHoes_Data={SHoes_Data} />
        </div>
      </div>
    </div>
  );
}

export default page;
