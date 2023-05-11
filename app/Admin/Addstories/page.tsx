import React from "react";
import SideBar from "../SideBar";
import DarhboardNavbar from "../DarhboardNavbar";
import AddStoriesdata from "./Addstory";
import Component2 from "./DeleteandUpdate";
function page() {
  const Headtitle = "ADDSTORIES";

  return (
    <div className="w-full h-auto 1600:h-screen frc justify-between">
      <div className="w-full h-auto 1600:h-screen overflow-hidden ">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div className="w-full h-full  fcc 1600:frc  justify-around  select-none hidden 905:flex ">
          <Component2 />
          <AddStoriesdata />
        </div>
        <div className="w-full h-full  fcc 1600:frc  justify-around  select-none inline  905:hidden  ">
          <AddStoriesdata />
          <Component2 />
        </div>
      </div>
    </div>
  );
}

export default page;
