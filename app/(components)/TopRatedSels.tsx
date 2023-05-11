"use client"
import React from "react";
import ShoeCard from "./ShoeCard";
import { Getallshoes } from '../../Query/Shoes/Getallshoes'
import { DotSpinner } from '@uiball/loaders'
import { useEffect , useState } from "react";
  function TopRatedSels() {
     const [toprateslaes , settoprateslaes] = useState<ShoeCardData[]>()
    

     const fetchdata = async () => {
      const toprateslaes : any = await Getallshoes()
       settoprateslaes(toprateslaes)
     } 

useEffect(() => {
  fetchdata()
}, [])


  return (
    <div className="w-full h-auto">
      <div className="w-full 350:w-[98%] 500:w-[90%] h-auto m-auto">
        <div className='w-full h-[80px] frc   justify-start mb-[15px] '>
            <h1 id='italy' className=' text-2xl 300:text-3xl 500:text-4xl 600:text-5xl lg:text-4xl md:text-3xl font-bold dark:text-slate-100 text-slate-900 filter
            drop-shadow-lg'>Top Rated Sales</h1>
        </div>
        <div className="w-full h-auto frc  justify-around flex-wrap">
            { toprateslaes ?
                toprateslaes?.map((data : ShoeCardData , index : any) => (
                    <ShoeCard  key={data.id} data={data}/>
                ) )
                :  <DotSpinner 
                size={45}
                speed={0.9} 
                color="#FF5722" 
                />
            }
        </div>
      </div>
    </div>
  );
}

export default TopRatedSels
