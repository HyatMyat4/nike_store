import React from "react";
import { DotSpinner } from "@uiball/loaders";
import UserComponents from "./UserComponents";

interface Props {
  USER_Data: Auth_data[];
}

function UserMapCOmponents({ USER_Data }: Props) {
  return (
    <div className="w-full h-full fcc j">
      <div className="w-full h-[80px] shadow-lg  text-white frc justify-around pr-[8px]">
        <div className="w-[50px] frc justify-center h-auto py-[7px]   rounded-[50px]    bg-black  hidden 1000:flex    font-medium">
          ID
        </div>
        <div className="w-[70px] frc justify-center h-auto py-[7px]  text-[14px] 450:text-auto  rounded-[50px]    bg-teal-500     font-medium">
          IMAGE
        </div>
        <div className="w-[180px] h-auto py-[7px]   rounded-[50px]  frc  bg-black hidden 750:flex   justify-center font-medium">
          NAME
        </div>
        <div className="w-[250px] h-auto py-[7px]  text-[14px] 450:text-auto rounded-[50px]  frc  bg-orange-500    justify-center font-medium">
          EMAIL
        </div>
        <div className="w-[100px] h-auto py-[7px]   rounded-[50px]  frc  bg-black hidden 905:flex  justify-center font-medium">
          ROLE
        </div>
        <div className="w-[100px] h-auto py-[7px]   rounded-[50px]  frc bg-sky-500 hidden  600:flex  justify-center font-medium">
          EDIT
        </div>
        <div className="w-[70px] 450:w-[100px] text-[14px] 450:text-auto h-auto py-[7px]   rounded-[50px]  frc bg-rose-600    justify-center font-medium">
          DELETE
        </div>
      </div>
      <div id="cutomscoll" className="w-full h-full overflow-scroll pb-[50px]">
        {USER_Data ? (
          USER_Data.map((data: Auth_data, index: any) => (
            <UserComponents data={data} index={index + 1} />
          ))
        ) : (
          <DotSpinner size={45} speed={0.9} color="#FF5722" />
        )}
      </div>
    </div>
  );
}

export default UserMapCOmponents;
