"use client";
import React from "react";
import { useSelector } from "react-redux";
import { SidebarC } from "../../Redux/ActionSlice";
import SideBar from "./SideBar";
function NewSideBar() {
  const openclose = useSelector(SidebarC);
  return (
    <div
      className={`w-[90%] 400:w-[350px] h-screen  bg-slate-200  dark:bg-[black]  shadow-lg z-10 ${
        openclose
          ? "  fixed top-0 left-0 z-50   animate-slideleft"
          : "hidden 1800:inline"
      } `}
    >
      <SideBar />
    </div>
  );
}

export default NewSideBar;
