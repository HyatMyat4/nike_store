import React from "react";
import SelsItemsMap from "./SelsItemsMap";
interface Props {
  popularsales: ShoeCardData[];
}

function PopularSeals({ popularsales }: Props) {
  return (
    <div className="w-full h-auto mt-[20px] 480:mt-[10px] ">
      <div className="w-[97%] 500:w-[90%] h-auto m-auto fcc items-start justify-between">
        <h1
          id="italy"
          className=" text-[40px] 500:text-5xl font-extrabold filter drop-shadow-sm text-black text-start"
        >
          Popular Sales
        </h1>
        <SelsItemsMap popularsales={popularsales} />
      </div>
    </div>
  );
}

export default PopularSeals;
