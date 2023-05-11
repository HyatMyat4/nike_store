"use client";
import React from "react";
import SideBar from "../../SideBar";
import DarhboardNavbar from "../../DarhboardNavbar";
import InputComponent from "./InputComponent";
interface Props {
  Stories: Stories;
}

function UpdateStories({ Stories }: Props) {
  const Headtitle = "UPDATE STORIES";
  return (
    <div className="w-full h-auto 1000:h-screen frc justify-between">
      <div className="w-full h-auto 1000:h-screen overflow-hidden ">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div className="w-full h-full frc   justify-center  text-black  ">
          <InputComponent Stories={Stories} />
        </div>
      </div>
    </div>
  );
}

export default UpdateStories;
