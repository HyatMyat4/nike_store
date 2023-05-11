"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
function Darkmode({ onScroll }: any) {
  const [mounted, setmounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setmounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className={`Header-icon cursor-pointer  ${
        onScroll ? "dark:bg-slate-100 bg-slate-800 " : "bg-slate-100"
      }  rounded-full p-[6px]   hover:scale-100 z-[99] ml-[15px] `}
    >
      {currentTheme === "dark" ? (
        <FiSun
          onClick={() => setTheme("light")}
          className="  text-orange-500 text-[24px] hover:scale-110 transition-all  duration-100"
        />
      ) : (
        <FiMoon
          onClick={() => setTheme("dark")}
          className="  text-cyan-400 text-[24px] hover:scale-110 transition-all  duration-100"
        />
      )}
    </div>
  );
}

export default Darkmode;
