import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { BsArrowDownCircleFill, BsCartCheck } from "react-icons/bs";
interface Props {
  Order_data: Order_data;
}
function paymentComponents2({ Order_data }: Props) {
  return (
    <div className="w-full h-[280px]  relative bg-slate-200 rounded-[10px] fcc justify-around overflow-hidden p-[20px]   ">
      <div className="w-full h-full  fcc  justify-around ">
        <div className=" absolute top-[35px] px-[30px] py-[5px] bg-orange-500 text-white left-[-35px] rotate-[-40deg]">
          <span className="text-[14px] font-medium frc">
            Total Amount : <span className="  ml-[5px]  "> $4600</span>
          </span>
        </div>
        <div className="w-auto h-auto text-center text-[20px] 480:text-[30px] font-bold  text-emerald-500 fcc 720:frc ">
          Thanks you , Your order has been comfirmed!{" "}
          <HiBadgeCheck className="ml-[5px]" />
        </div>
        <div className="w-[100px] h-auto animate-pulse">
          <img src={"/successorder.png"} className="w-full h-auto" />
        </div>
        <div className=" font-medium ">
          <span>Thanks you for Shopping us.</span>
        </div>
        <div>
          <span className=" font-normal text-center text-[14px] mt-0 480:mt-[10px]  frc animate-slideleft ">
            <BsCartCheck className="mr-[3px]" />
            Your order below{" "}
            <BsArrowDownCircleFill className="ml-[5px] text-orange-500 animate-bounce" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default paymentComponents2;
