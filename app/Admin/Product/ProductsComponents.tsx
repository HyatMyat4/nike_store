import React from 'react'
import { DotSpinner } from '@uiball/loaders'
import ShoeCard from '@/app/(components)/ShoeCard'
function ProductsComponents({ SHoes_Data } : any) {
   
  return (
    <div id='cutomscoll' className='w-full h-full frc justify-around flex-wrap overflow-y-scroll  pt-[40px] pb-[80px] '>
          { SHoes_Data ?
                SHoes_Data.map((data : ShoeCardData , index : any) => (
                    <ShoeCard  key={data.id} data={data}/>
                ) )
                :  <DotSpinner 
                size={45}
                speed={0.9} 
                color="#FF5722" 
                />
            }
    </div>
  )
}

export default ProductsComponents