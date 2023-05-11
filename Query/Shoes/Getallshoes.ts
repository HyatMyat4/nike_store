export const Getallshoes = async () => {
  try {
    const res = await fetch(`http://localhost:4000/shoes/getallShoes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      next: { revalidate: 60 },
    });
    const responsedata = await res.json();
    return responsedata;
  } catch (err) {
    console.warn(err);
  }
};
