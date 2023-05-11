"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
interface Props {
  data: Sidebase;
  index: any;
  dispatch: any;
  SidebarEngin: any;
  bool: any;
}

function Linkcomponent({ data, index, dispatch, SidebarEngin, bool }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const LogOut = () => {
    router.push("/");
    localStorage.removeItem("Token");
  };

  return (
    <>
      {data.Name === "Logout" ? (
        <div
          onClick={() => LogOut()}
          key={index + data.Link}
          className={`h-[60px] w-[90%] m-auto rounded frc transition  cursor-pointer group select-none relative
       justify-center overflow-hidden ${
         pathname === data.Link ? "bg-indigo-200 dark:bg-indigo-500" : ""
       } hover:bg-indigo-200 dark:hover:bg-indigo-500`}
        >
          <div className="w-[60%] h-full frc  justify-start">
            <div className="mr-[15px]">
              {<data.Icon className="text-[25px]" />}
            </div>
            <div className=" font-medium ">{data.Name}</div>
            <div
              className={` absolute left-0 h-full w-[10px]  ${
                pathname === data.Link ? "" : "hidden group-hover:inline"
              } bg-indigo-400 dark:bg-indigo-600  `}
            ></div>
          </div>
        </div>
      ) : (
        <Link
          onClick={() => dispatch(SidebarEngin(bool))}
          href={data.Link}
          key={index + data.Link}
          className={`h-[60px] w-[90%] m-auto rounded frc transition  cursor-pointer group select-none relative
     justify-center overflow-hidden ${
       pathname === data.Link ? "bg-indigo-200 dark:bg-indigo-500" : ""
     } hover:bg-indigo-200 dark:hover:bg-indigo-500`}
        >
          <div className="w-[60%] h-full frc  justify-start">
            <div className="mr-[15px]">
              {<data.Icon className="text-[25px]" />}
            </div>
            <div className=" font-medium ">{data.Name}</div>
            <div
              className={` absolute left-0 h-full w-[10px]  ${
                pathname === data.Link ? "" : "hidden group-hover:inline"
              } bg-indigo-400 dark:bg-indigo-600  `}
            ></div>
          </div>
        </Link>
      )}
    </>
  );
}

export default Linkcomponent;
