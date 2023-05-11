import Image from "next/image";
import Navbar from "./(NavBar)/Navbar";
import Main from "./(components)/Main";
import PopularSeals from "./(components)/PopularSeals";
import { heroapi } from "../constants";
import Higlights from "./(components)/Higlights";
import TopRatedSels from "./(components)/TopRatedSels";
import Higlights2 from "./(components)/Higlights2";
import ShoesSlied from "./(components)/ShoesSlied";
import Footer from "./(Footer)/Footer";
import Stories from "./(components)/Stories";
import Cart from "./(Cart)/Cart";
import { Getallshoes } from "../Query/Shoes/Getallshoes";
import { GetallStories } from "../Query/Stories/Getallstories";

export const revalidate = 60;

export default async function Home() {
  const stories: Stories[] = await GetallStories();
  const popularsales: ShoeCardData[] = await Getallshoes();
  return (
    <main className="w-full h-auto overflow-hidden ">
      <Cart />
      <Navbar />
      <Main heroapi={heroapi} />
      <PopularSeals popularsales={popularsales} />
      <Higlights />
      <TopRatedSels />
      <Higlights2 />
      <ShoesSlied />
      <Stories stories={stories} />
      <Footer />
    </main>
  );
}
