export const UpdateStories = async (formdata: StoriesProps) => {
  if (!formdata) return;
  const res = await fetch(`http://localhost:4000/stories/updateStories`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  });
  const responsedata = await res.json();
  return responsedata;
};
