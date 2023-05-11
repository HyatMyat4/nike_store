"use client";
import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import Link from "next/link";
type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};
function SigninComponent({ providers }: Props) {  
  return (
    <div className="w-full h-screen fcc justify-center bg-slate-200   ">   
       <Link  href={'/'} className=" absolute left-[10px] top-[10px] active:opacity-[0.8]  active:scale-90 transition-all duration-75 ">
         <BsFillArrowLeftCircleFill className="text-[30px]"/>
       </Link> 
      <div className="w-auto h-auto p-[20px] rounded-[10px]  bg-slate-100 fcc  justify-around animate-slidedown2 ">
      <img
         src="/logo3.png"
         className="w-[150px] h-auto mb-[20px]   "
       /> 
        <div
          key={providers?.google.name}
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000",
            })
          }
          className="w-[300px] px-[15px] frc animate-slowfade   active:scale-95 transition-all shadow-lg duration-100 justify-around py-[13px] cursor-pointer   font-bold  text-[black]  bg-white rounded-[5px] mb-[10px]"
        >
          <img src="/Google.png" className="w-[35px] h-auto ml-[25px]" />
          <span className="w-[85%] ml-[30px] text-start font-medium text-black ">
            Sign in with Google
          </span>
        </div>
        <Link href={"/NikeSign"}     
          className="w-[300px] px-[25px] frc   active:scale-95 transition-all shadow-lg duration-100 mt-[10px] justify-around py-[14px] cursor-pointer   font-bold  text-[black]  bg-white rounded-[5px] mb-[10px]"
        >
          <img src="/logo3.png" className="w-[50px] h-auto ml-[15px]" />
          <span className="w-[85%] ml-[15px] text-start font-medium text-black">
            Sign in with Nike
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SigninComponent;
