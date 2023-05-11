"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { SessionProvider } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
