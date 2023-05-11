export const Updateshoe = async (formdata: formdata | any, id: string) => {
  if (!formdata) return;
  const res = await fetch(`http://localhost:4000/shoes/Update/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  });
  const responsedata = await res.json();
  return responsedata;
};
