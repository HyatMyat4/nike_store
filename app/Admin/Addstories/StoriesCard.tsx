"use client";
import React from "react";
import { BsFillSuitHeartFill, BsTrash3, BsBoxes } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import ReactTimeAgo from "react-time-ago";
import toast from "react-hot-toast";
import { DeleteStories } from "../../../Query/Stories/DeleteStories";
import { Delete_Img } from "../../../Query/DeleteImage";
import { useDispatch } from "react-redux";
import { StoriesIdEngin } from "../../../Redux/ActionSlice";
import Link from "next/link";
interface Props {
  data: Stories;
}

function StoriesCard({ data }: Props) {
  const dispatch = useDispatch();
  TimeAgo.addDefaultLocale(en);
  TimeAgo.addLocale(ru);

  const Handledelete = async (id: any, URI: string) => {
    if (!id) return;
    const response = await DeleteStories(id);
    if (response.message === "Success") {
      dispatch(StoriesIdEngin(id));
      toast.success(`Success Delete...`);
    } else {
      toast.error(`Delete Failed Please try again`);
    }
  };

  return (
    <div
      key={data.id}
      className=" relative  bg-slate-100 dark:bg-slate-900 w-[100%] 905:max-w-[450px] h-auto 905:h-[520px]   rounded-[10px]  p-[10px] 
    bg-gradient-to-b fcc justify-between mb-[30px] "
    >
      <div className="w-full h-auto rounded-[8px]  overflow-hidden">
        <img src={data.img} className="w-full h-auto" />
      </div>
      <div className="fcc w-full h-auto">
        <div className="w-full h-[60px] frc justify-between ">
          <div className="frc ">
            <div id="italy" className="frc mr-[15px]">
              <BsFillSuitHeartFill className="text-rose-600 text-[20px] mr-[5px]" />{" "}
              {data.likecount}
            </div>
            <div id="italy" className="frc hidden 400:flex">
              <FaRegClock className="mr-[5px] text-[20px]" />
              <ReactTimeAgo date={data.time} locale="en-US" />
            </div>
          </div>
          <div className="frc justify-between">
            <Link
              href={`/Admin/Addstories/${data.id}`}
              className=" frc justify-between bg-sky-500 active:scale-90 
          transition-all duration-100 text-slate-200 px-[7px] py-[2px] rounded-[5px] cursor-pointer mr-[15px] "
            >
              <BsBoxes className="  text-[20px] mr-[5px]" />
              <span>Update</span>
            </Link>
            <div
              onClick={() => Handledelete(Number(data.id), data.img)}
              className=" frc justify-between active:scale-90 mr-[5px] 
          transition-all duration-100 bg-rose-600 text-slate-200 px-[7px] cursor-pointer py-[2px] rounded-[5px] "
            >
              <BsTrash3 className="  text-[20px] mr-[5px]" />
              <span>Delete</span>
            </div>
          </div>
        </div>
        <div id="italy" className="w-full h-auto frc">
          <h1 className=" text-[17px] font-bold dark:text-slate-100  text-slate-900">
            {data.title}
          </h1>
          <div id="italy" className="frc flex 400:hidden ml-[10px] ">
            <FaRegClock className="mr-[5px] text-[20px]" />
            <ReactTimeAgo date={data.time} locale="en-US" />
          </div>
        </div>
        <div>
          <p className="text-[15px] dark:text-slate-100  text-slate-900 hidden 905:inline">
            {data.text.slice(0, 200)}...
          </p>
          <p className="text-[15px] dark:text-slate-100  text-slate-900 inline  905:hidden ">
            {data.text}
          </p>
        </div>
      </div>
      <a
        href={
          "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/"
        }
        id="italy"
        className="w-full active:scale-90 transition-all mt-[5px] duration-100 cursor-pointer h-[45px] frc justify-center rounded-[5px] text-slate-100 
       dark:text-slate-900 dark:bg-slate-100 bg-slate-900"
      >
        ReadMore
      </a>
    </div>
  );
}

export default StoriesCard;
