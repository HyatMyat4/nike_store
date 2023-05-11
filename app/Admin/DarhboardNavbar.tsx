"use client";
import React from "react";
import Darkmode from "../(components)/Darkmode";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GETLogIndata } from "../../Query/User/User";
import jwt_decode from "jwt-decode";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { SidebarEngin } from "../../Redux/ActionSlice";
import { useDispatch } from "react-redux";
export default function DarhboardNavbar({ Headtitle }: any) {
  const dispatch = useDispatch();
  const { data } = useSession();
  const [Role, setRole] = useState<string | null>();
  const [authData, setauthData] = useState<Auth_data>();
  const sideeffect: any = true;
  useEffect(() => {
    const Token_data = localStorage.getItem("Token") as any;
    if (!Token_data) return;
    const data_user: User_data = jwt_decode(Token_data);
    const role = data_user.role;
    setauthData(data_user);
    setRole(role);
  }, []);

  return (
    <div className="w-full h-[70px]  frc justify-between shadow-lg ">
      <div className=" text-3xl font-bold ml-[15px] frc justify-between">
        <span className=" hidden 670:inline">{Headtitle}</span>
        <div
          onClick={() => dispatch(SidebarEngin(sideeffect))}
          className="ml-[10px] hover:opacity-[0.9] hover:text-[#818CF8] active:scale-90 transition-all duration-100  inline 1800:hidden  "
        >
          <AiOutlineAlignLeft className=" cursor-pointer" />
        </div>
      </div>

      <div className="w-auto h-auto frc justify-between">
        <div>
          <Darkmode />
        </div>
        <div className="w-auto h-auto frc justify-between mr-[20px] ml-[15px] ">
          <div className="fcc  items-end ">
            <span className="text-[12px] frc text-slate-600 dark:text-slate-300 ">
              <span className=" hidden 300:flex mr-[5px]">Hey,</span>
              <span className="font-bold text-black dark:text-slate-200">
                {authData?.name}
              </span>
            </span>
            <span className="text-[13px] text-slate-600 dark:text-slate-300">
              {Role === "0479Admin0004"
                ? "Admin"
                : Role === "4357Mananger"
                ? "Mananger"
                : ""}
            </span>
          </div>
          <div className="w-[40px] rounded-full  mx-[10px] overflow-hidden dark:hidden cursor-pointer active:scale-90 transition-all duration-100 ">
            {authData ? (
              <Image
                src={authData.img ? authData.img : "/user.png"}
                width={90}
                height={90}
                alt="Nike"
                className="w-full h-auto  bg-cover"
              />
            ) : (
              <img src="/user.png" className="w-full h-auto  bg-cover" />
            )}
          </div>
          <div className="w-[40px] rounded-full  mx-[10px]  overflow-hidden hidden dark:inline cursor-pointer active:scale-90 transition-all duration-100">
            {authData ? (
              <Image
                src={authData ? authData.img : "/userblack.png"}
                width={90}
                height={90}
                alt="Nike"
                className="w-full h-auto  bg-cover"
              />
            ) : (
              <img src="/userblack.png" className="w-full h-auto  bg-cover" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
