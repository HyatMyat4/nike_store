import React from "react";
import { getProviders } from "next-auth/react";
import SigninComponent from "./SigninComponent";
async function page() {
  const providers = await getProviders();

  return (
    <div className="w-full h-full">
      <SigninComponent providers={providers} />
    </div>
  );
}

export default page;
