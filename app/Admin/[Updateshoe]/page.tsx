import React from 'react'
import { Getallshoes } from '../../../Query/Shoes/Getallshoes'
import { Getsingleshoe } from '../../../Query/Shoes/Getsingleshoe'
import Component from './Component'
type Props = {
    params : {
        Updateshoe : string
    }
  }
export default async function page( {params : { Updateshoe }} : Props) {
    const id = Updateshoe
    const Single_shoeData : Promise<ShoeCardDataResponse > = Getsingleshoe(id)
    const Responsedata =  await Single_shoeData
  return (
    <>
      <Component Responseshoe_data = {Responsedata.data[0]} id={id}/>
    </>
  )
}


export async function generateStaticParams() {
    const shoeData : Promise<ShoeCardData[]> = Getallshoes()
    const shoes = await shoeData
  
    return shoes.map((data : ShoeCardData) => (
       { id : data.id }
    ))
  }