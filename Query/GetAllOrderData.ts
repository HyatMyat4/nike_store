export const GetAllOrderData = async () => {
  try {
    const res = await fetch(`http://localhost:4000/order/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      next: { revalidate: false },
    });
    const responsedata = await res.json();
    return responsedata;
  } catch (err) {
    console.warn(err);
  }
};
