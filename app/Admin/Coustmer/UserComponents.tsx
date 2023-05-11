"use client";
import React from "react";
import { Delete_User } from "../../../Query/User/User";
import { Delete_Img } from "../../../Query/DeleteImage";
import toast from "react-hot-toast";
import Image from "next/image";

interface Props {
  data: Auth_data;
  index: any;
}

function UserComponents({ data, index }: Props) {
  const Delete_User_data = async (id: any, URI: string) => {
    Delete_Img(URI);
    const response = await Delete_User(id);
    if (response.message === "Success") {
      toast.success("User deleted success...");
    } else {
      toast.error("Delete Failed Please try Again...");
    }
  };
  return (
    <div
      className={`${
        data.role === "0479Admin0004" ? "  hidden" : " "
      } w-full h-[65px]  shadow-lg frc justify-around `}
    >
      <div className=" hidden 1000:flex w-[50px] frc justify-center font-medium">
        {index}
      </div>
      <div className="w-[70px] frc justify-center h-auto rounded-full ">
        <Image
          src={data.img}
          width={90}
          height={90}
          alt="Nike"
          id="linerColour"
          className="w-[50px] h-auto rounded-full  "
        />
      </div>
      <div className="w-[180px] hidden 750:flex frc justify-center  font-medium">
        {data.name}
      </div>
      <div className="w-[250px] frc justify-center font-medium text-[13px] 450:text-auto ">
        {data.email}
      </div>
      <div className="w-[100px] frc justify-center font-medium hidden 905:flex ">
        {data.role}
      </div>
      <div className="w-[100px] h-[35px] hidden  600:flex rounded-[10px] hover:scale-110 transition-all  duration-75 cursor-pointer bg-sky-500 frc justify-center font-medium text-slate-100">
        Edit
      </div>
      <div
        onClick={() => Delete_User_data(data.id, data.img)}
        className=" w-[70px] 450:w-[100px] h-[35px] active:scale-90 rounded-[10px] hover:scale-110
         transition-all text-[13px]  450:text-auto  duration-75 cursor-pointer bg-rose-600 frc justify-center font-medium text-slate-100"
      >
        Delete
      </div>
    </div>
  );
}

export default UserComponents;
