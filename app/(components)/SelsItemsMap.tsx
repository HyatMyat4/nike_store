"use client";
import React from "react";
import SelsItems from "./SelsItems";
import { useEffect, useState } from "react";
interface Props {
  popularsales: ShoeCardData[];
}
function SelsItemsMap({ popularsales }: Props) {
  const [randomElements, setrandomElements] = useState<ShoeCardData[]>();

  useEffect(() => {
    function selectRandomElements(arr: ShoeCardData[], numElements: number) {
      const shuffled = arr.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, numElements);
    }

    const randomElements = selectRandomElements(popularsales, 3);
    setrandomElements(randomElements);
  }, [popularsales]);

  return (
    <div className="w-full h-auto frc justify-around 1550:justify-between flex-wrap mt-[30px]">
      {randomElements?.map((data: ShoeCardData) => (
        <SelsItems data={data} />
      ))}
    </div>
  );
}

export default SelsItemsMap;
