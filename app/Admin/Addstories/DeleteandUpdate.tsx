"use client";
import React from "react";
import StoriesCard from "./StoriesCard";
import { GetallStories } from "../../../Query/Stories/Getallstories";
import { useEffect, useState } from "react";
import { DotSpinner } from "@uiball/loaders";
import { useSelector } from "react-redux";
import { StoriesIdC, addStoriesC } from "../../../Redux/ActionSlice";
function Component2() {
  const id = useSelector(StoriesIdC);
  const storyData = useSelector(addStoriesC);
  const [stories, setstories] = useState<Stories[]>([]);

  const fetchdata = async () => {
    const data = await GetallStories();
    setstories([...data]);
  };
  const filterData = () => {
    const filterdata = stories?.filter(
      (data: Stories) => Number(data.id) !== Number(id)
    );
    setstories(filterdata);
  };

  const AddData = () => {
    setstories([storyData, ...stories]);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    filterData();
  }, [id]);

  useEffect(() => {
    if (storyData.id) {
      AddData();
    }
  }, [storyData]);

  return (
    <div
      id="scroolbar-hidden"
      className=" w-full mt-[15px]  1600:w-[950px] h-auto 1600:h-full frc  justify-around flex-wrap  overflow-y-auto 1600:overflow-y-scroll pb-[50px]"
    >
      {stories.length ? (
        stories?.map((data: Stories) => (
          <StoriesCard key={data.id} data={data} />
        ))
      ) : (
        <DotSpinner size={50} speed={0.9} color="#FF5722" />
      )}
    </div>
  );
}

export default Component2;
