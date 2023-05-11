import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { GiRunningShoe } from "react-icons/gi";

interface Props {
  data: Items;
}

function Shoecard({ data }: Props) {
  return (
    <div
      key={data.id}
      className={`w-[100%]  h-auto 745:h-[150px] group   cursor-pointer hover:opacity-[0.8]   bg-gradient-to-b mb-[45px]   ${
        data.backgroundcolour ? data.backgroundcolour : "PreBuildColour"
      }
relative  ${
        data.shadow
      } fcc 745:frc justify-between   rounded-[15px] p-[30px] 745:p-[20px]  `}
    >
      <div id="italy" className=" fcc select-none items-start text-slate-200 ">
        <h3 className=" text-lg fcc items-start 400:items-center 400:frc font-bold filter drop-shadow-sm ">
          {data.shoename}{" "}
          <div className="ml-[10px] frc text-[gold]">
            <AiOutlineStar className=" " />
            {data.rating}+
          </div>
        </h3>
        <div className="frc mt-[5px]">
          <span className="w-[100px] frc justify-center h-auto px-[12px] py-[3px] rounded-[5px] bg-slate-200 text-black">
            ${data.price}
          </span>
          <span className="ml-[10px] frc hidden 400:flex">
            {data.title}{" "}
            <GiRunningShoe className=" text-white text-[20px] ml-[7px]" />{" "}
          </span>
        </div>
      </div>
      <div className="">
        <div className=" w-auto 400:min-w-[280px] rotate-0 745:rotate-[-13deg] group-hover:rotate-[-18deg] 480:group-hover:rotate-[-12deg]  transition-all  duration-700 ease-in-out">
          <img src={data.image} className="w-[280px] h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Shoecard;
