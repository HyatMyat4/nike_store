"use client";
import React from "react";
import Image from "next/image";
import { SiShopify } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Darkmode from "../(components)/Darkmode";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartopencloseEngin, UserCartC } from "../../Redux/ActionSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import jwt_decode from "jwt-decode";
import { addUser } from "../../Query/User/User";

export default function Navbar() {
  const dispatch = useDispatch();
  const ItemsCount = useSelector(UserCartC);
  const [onScroll, setonScroll] = useState<boolean>(false);
  const [Role, setRole] = useState<string | null>("");
  const [authData, setauthData] = useState<Auth_data>();
  const { data } = useSession();

  const addUser_data = async () => {
    if (!data?.user?.image) return;
    const response = await addUser(data?.user);
    if (response.message === "Success") {
      localStorage.setItem("Token", response.token);
    }
  };

  useEffect(() => {
    if (!authData) {
      addUser_data();
    }
    const Token_data = localStorage.getItem("Token") as any;
    if (!Token_data) return;
    const data: User_data = jwt_decode(Token_data);
    const role = data.role;
    setauthData(data);
    setRole(role);
  }, [data]);

  const onScrollChange = () => {
    if (window.scrollY > 30) {
      setonScroll(true);
    } else {
      setonScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScrollChange);
    return () => {
      window.removeEventListener("scroll", onScrollChange);
    };
  }, []);

  const LogOut = () => {
    localStorage.removeItem("Token");
    signOut();
  };

  return (
    <div
      className={`w-full h-[8vh] transition-all duration-75   ${
        onScroll
          ? "fixed animate-slidedown  top-0 left-0 right-0 opacity-5 z-[5] blur-effect-theme "
          : " bg-[#1B4CE0]"
      }  `}
    >
      <div className="w-[93%] h-full m-auto frc justify-between">
        <div
          className={` animate-slowfade ${
            onScroll ? "dark:hidden" : " hidden"
          } `}
        >
          <Image
            className=""
            src="/logo2.png"
            width={90}
            height={90}
            alt="Nike"
          />
        </div>
        <div
          className={` animate-slowfade  ${
            onScroll ? "hidden dark:inline" : " inline"
          }  `}
        >
          <Image
            className=""
            src="/logo.png"
            width={90}
            height={90}
            alt="Nike"
          />
        </div>
        <div className="w-auto h-auto frc animate-slideright">
          <div
            onClick={() => dispatch(CartopencloseEngin(true))}
            className={` ${
              onScroll
                ? " dark:text-slate-100 text-slate-800"
                : "text-slate-100 "
            } text-[35px] mr-[15px] relative 
          cursor-pointer z-1 hover:scale-110 transition-all  duration-100  `}
          >
            <SiShopify className=" cursor-pointer  " />
            <div
              className="px-[5px] cursor-pointer rounded-full  group-hover:bg-orange-400
             bg-orange-500 text-white absolute text-[10px] bottom-[-6px] right-[-4px]"
            >
              {ItemsCount.length}
            </div>
          </div>
          {authData ? (
            <div
              onClick={() => LogOut()}
              className="w-[40px] h-auto rounded-full cursor-pointer border-[2px] border-slate-200  "
            >
              <Image
                src={authData.img ? authData.img : "/user.png"}
                width={90}
                height={90}
                alt="Nike"
                id="linerColour"
                className="w-[40px] sm:w-[55px] h-auto rounded-full p-[1px] "
              />
            </div>
          ) : (
            <Link
              href={"/auth/signin"}
              className={` ${
                onScroll
                  ? " dark:text-slate-100 text-slate-800"
                  : "text-slate-100  "
              }  active:scale-95   text-[35px] hover:scale-110 transition-all duration-100 cursor-pointer `}
            >
              <FaUserCircle />
            </Link>
          )}

          <Darkmode onScroll={onScroll} />
          <Link
            href={"/Admin"}
            className={` ${Role === "0479Admin0004" ? "" : " hidden"} ${
              onScroll
                ? " dark:text-slate-100 text-slate-800"
                : "text-slate-100  "
            } ml-[15px]  rounded-full   text-[40px] hover:scale-110 transition-all duration-100 cursor-pointer `}
          >
            <MdOutlineAdminPanelSettings />
          </Link>
        </div>
      </div>
    </div>
  );
}
