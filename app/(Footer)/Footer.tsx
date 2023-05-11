import React from "react";
import { footerAPI } from "../../constants";
function Footer() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="w-full 1000:w-[90%] h-auto frc flex-wrap justify-around p-[20px] ">
        {footerAPI.titles.map((data, i: any) => (
          <div key={`${data.title}/${i}`} className="min-w-[160px] fcc justify-between  text-start   mb-[35px] ">           
            <div id="italy" className="w-full h-auto mb-[10px] text-[18px] font-bold ">
              {data.title}
            </div>     
            {
              data.link.map((link , j : any ) => (
                <div className="w-full h-auto my-[5px] ">
                <span key={`${link}/${i}`} 
                className=" hover:underline cursor-pointer font-medium   text-start">
                   {link}
                </span>
                </div>
              ))
            }     
          
          </div>
        ))}
        <div className="min-w-[160px] fcc justify-between flex dark:hidden">
            <div className=" animate-bounce cursor-pointer">
               <img src="/logo3.png" 
                className="w-[150px] h-auto"
               />
            </div>      
        </div>
        <div className="min-w-[160px] fcc justify-between hidden  dark:flex">
            <div className=" animate-bounce cursor-pointer">
               <img src="/logo.png" 
                className="w-[150px] h-auto"
               />
            </div>      
        </div>
      </div>
    </div>
  );
}

export default Footer;
