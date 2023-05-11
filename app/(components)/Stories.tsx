"use client";
import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { toprateslaes } from "../../constants";
// eslint-disable-next-line
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import ReactTimeAgo from "react-time-ago";
interface Props {
  stories: Stories[];
}

function Stories({ stories }: Props) {
  TimeAgo.addDefaultLocale(en);
  TimeAgo.addLocale(ru);
  return (
    <div className="w-full auto">
      <div className="w-[95%] h-auto m-auto">
        <div className="w-full h-[80px] frc   justify-start mb-[15px] ">
          <h1
            id="italy"
            className=" text-[40px] font-bold dark:text-slate-100 text-slate-900 filter
            drop-shadow-lg ml-[46px]"
          >
            Top Stories
          </h1>
        </div>
        <div>
          <Splide
            options={{
              perPage: 4,
              perMove: 1,
              type: "loop",
              rewind: true,
              keyboard: "global",
              gap: "1rem",
              pagination: false,
              padding: {
                left: 0,
                right: 0,
              },
              margin: 0,
              arrows: false,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: false,
                speed: -1,
              },
              breakpoints: {
                1200: { perPage: 3 },
                991: { perPage: 2.3 },
                768: { perPage: 2 },
                500: { perPage: 1.3 },
                425: { perPage: 1 },
              },
            }}
            extensions={{ AutoScroll }}
            className="w-full  h-auto"
          >
            {stories.map((data) => (
              <SplideSlide
                key={data.id}
                className=" relative bg-slate-100 dark:bg-slate-900  min-w-[300px] h-[500px]   rounded-[10px]  p-[10px] 
                bg-gradient-to-b fcc justify-between "
              >
                <div className="w-full h-auto rounded-[8px] overflow-hidden">
                  <img src={data.img} />
                </div>
                <div className="fcc w-full h-auto">
                  <div className="w-full h-[60px] frc justify-between ">
                    <div id="italy" className="frc">
                      <BsFillSuitHeartFill className="text-rose-600 text-[20px] mr-[5px]" />{" "}
                      {data.likecount}
                    </div>
                    <div id="italy" className="frc">
                      <FaRegClock className="mr-[5px] text-[20px]" />
                      <ReactTimeAgo date={data.time} locale="en-US" />
                    </div>
                  </div>
                  <div id="italy" className="w-full h-auto">
                    <h1 className=" text-[17px] font-bold dark:text-slate-100  text-slate-900">
                      {data.title}
                    </h1>
                  </div>
                  <div>
                    <p className="text-[15px] dark:text-slate-100  text-slate-900">
                      {data.text.slice(0, 140)}...
                    </p>
                  </div>
                </div>
                <a
                  href={
                    "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001"
                  }
                  id="italy"
                  className="w-full active:scale-90 transition-all duration-100 cursor-pointer h-[40px] frc justify-center rounded-[5px] text-slate-100 
                   dark:text-slate-900 dark:bg-slate-100 bg-slate-900"
                >
                  ReadMore
                </a>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Stories;
