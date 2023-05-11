"use client"
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsTrash , BsBoxes } from "react-icons/bs";
import toast from "react-hot-toast";
import Image from "next/image";
import { Deleteshoecard } from '../../../Query/Shoes/DeleteShoeCard'
import { Delete_Img } from '../../../Query/DeleteImage'
import { DeleteIdEngin } from '../../../Redux/ActionSlice'
import { useDispatch } from "react-redux";
import Link from "next/link";
function DeleteShoeCard({ data }: any) {  
     const dispatch = useDispatch()

    const HandleDelete = async (e : any , URI : any) => {      
     Delete_Img(URI)  
     const responsedata = await Deleteshoecard(e)          
     if(responsedata.message === 'Success'){
      dispatch(DeleteIdEngin(e))
      toast.success(`Success Delete...`)
     }else{
      toast.error(`Delete Failed Please try again`)
     }
    }

  

  
  return (
    <div
      className={`w-[350px] h-[300px] rounded-[10px] bg-gradient-to-b shadow-lg ${data.backgroundcolour} ${data.shadow} mt-[25px] fcc justify-around `}
    >
         <div id="italy" className="fcc select-none  text-slate-200 ">
        <h3 className=" text-lg font-bold filter drop-shadow-sm ">
          {data.shoename}
        </h3>
        <div className="frc justify-center mt-[5px]">
          <span className="px-[12px] py-[3px] rounded-[5px] bg-slate-200 text-black">
            ${data.price}
          </span>
          <div className="ml-[15px] frc justify-center">
            <AiOutlineStar className="text-[20px] " />
            <span className="ml-[4px]">{data.rating} + </span>
          </div>
        </div>
        <div className="frc mt-[10px] justify-center text-black">          
          <Link href={`/Admin/${data.id}`}  className="px-[15px] py-[4px] frc active:scale-90 
          transition-all duration-100 text-slate-200 cursor-pointer bg-sky-500 rounded ml-[12px]">
          <BsBoxes className="text-[18px] mr-[5px]" /> Update 
          </Link>
          <div onClick={() => HandleDelete(data.id , data.image)} className="px-[15px] py-[4px] frc active:scale-90 transition-all duration-100 text-slate-200 cursor-pointer bg-rose-600 rounded ml-[12px]">
          <BsTrash className="text-[18px] mr-[5px]" /> Remove 
          </div>
        </div>
      </div>
      <div className="">
         <div className=" cursor-pointer rotate-0 hover:rotate-[-12deg]  transition-all  duration-700 ease-in-out">
            <Image 
             alt={data.shoename}
             src={data.image} 
             width={1920}
             height={1080}
             className="w-[95%] 350:w-[280px] h-auto m-auto"
            />
         </div>
      </div>
    </div>
  );
}

export default DeleteShoeCard;
