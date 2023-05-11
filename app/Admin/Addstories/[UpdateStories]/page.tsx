import React from "react";
import { GetSIngleStories } from "../../../../Query/Stories/GetSingleStories";
import { GetallStories } from "../../../../Query/Stories/Getallstories";
import UpdateComponent from "./UpdateComponent";
interface Props {
  params: {
    UpdateStories: string;
  };
}

async function page({ params: { UpdateStories } }: Props) {
  const id = UpdateStories;
  const stories_data: Promise<ResponseStories> = GetSIngleStories(id);
  const Stories = await stories_data;
  return (
    <>
      <UpdateComponent Stories={Stories?.data[0]} />
    </>
  );
}

export default page;

export async function generateStaticParams() {
  const StoriesData: Promise<Stories[]> = GetallStories();
  const stories = await StoriesData;
  return stories.map((data: Stories) => ({ id: data.id }));
}
