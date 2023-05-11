import React from "react";
import SideBar from "../SideBar";
import DarhboardNavbar from "../DarhboardNavbar";
import { Get_ALL_USER } from "../../../Query/User/User";
import UserMapCOmponents from "./UserMapCOmponents";

export const revalidate = 60;

export default async function page() {
  const USER_Data: Auth_data[] = await Get_ALL_USER();
  const Headtitle = `TOTAL COUSTMER ${USER_Data.length}`;
  return (
    <div className="w-full h-screen frc justify-between overflow-hidden">
      <div className="w-full h-full overflow-hidden ">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div className="w-full h-full frc  justify-around  select-none ">
          <UserMapCOmponents USER_Data={USER_Data} />
        </div>
      </div>
    </div>
  );
}
