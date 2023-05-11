export const Getuser_Order = async (email: string) => {
  try {
    const res = await fetch(
      `http://localhost:4000/order/GetUserOrder/${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        next: { revalidate: false },
      }
    );
    const responsedata = await res.json();
    return responsedata;
  } catch (err) {
    console.warn(err);
  }
};
