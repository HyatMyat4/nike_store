"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { UserCartC } from "../../Redux/ActionSlice";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
const stripePromise = loadStripe(
  "pk_test_51MaXlbHoeF6UWdekiFGpvVMKudF7rTt5YYNZm1IRBiXFyyt6isQU4mYNYAI4AhWSAcxQX0HAVtVHoArHzQy9YAPg00we3OWs7e"
);

function Checkout() {
  const UserOrder = useSelector(UserCartC);
  const [authData, setauthData] = useState<User_data>();
  useEffect(() => {
    const Token_data = localStorage.getItem("Token") as any;
    if (!Token_data) return;
    const data_user: User_data = jwt_decode(Token_data);
    setauthData(data_user);
  }, []);

  const createCheckoutSession = async () => {
    try {
      const stripe = await stripePromise;
      console.log(
        {
          Items: UserOrder,
          Email: authData?.email,
          Name: authData?.name,
          Image: authData?.img,
        },
        "🍟"
      );
      const CheckoutSession = await fetch("http://localhost:4000/checkout/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Items: UserOrder,
          Email: authData?.email,
          Name: authData?.name,
          Image: authData?.img,
        }),
      });
      const { message, id, order_id } = await CheckoutSession.json();
      if (message === "Success") {
        localStorage.setItem("UserLastOrder_id", order_id);
        const Check_outdata = await stripe?.redirectToCheckout({
          sessionId: id,
        });
      }
    } catch (err) {
      toast.error("Some thing  wrong Please try again");
      console.warn(err);
    }
  };

  return (
    <div
      id="italy"
      className="w-full h-[40px] mb-[5px] rounded frc justify-center cursor-pointer bg-slate-900 active:scale-90 transition-all duration-100 text-slate-100"
      onClick={() => createCheckoutSession()}
    >
      Check Out
    </div>
  );
}

export default Checkout;
