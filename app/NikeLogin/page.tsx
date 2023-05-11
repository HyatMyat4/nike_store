"use client";
import React from "react";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { LogIn } from "../../Query/User/User";
import { useState, useEffect } from "react";
import {
  HiOutlineExclamation,
  HiOutlineEyeOff,
  HiOutlineEye,
} from "react-icons/hi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
function page() {
  const router = useRouter();
  const [Email, setEmail] = useState<string>("");
  const [EmailFocus, setEmailFocus] = useState<boolean>(false);
  const [ValidEmail, setValidEmail] = useState<boolean>(false);

  const [Password, setPassword] = useState<string>("");
  const [PasswordFocus, setPasswordFocus] = useState<boolean>(false);
  const [ValidPassword, setValidPassword] = useState<boolean>(false);
  const [eye, seteye] = useState<boolean>(false);

  const Email_REGEX = /^(?=.*[a-z])(?=.*[@])(?=.*[0-9]).{8,20}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@])(?=.*[0-9]).{8,24}$/;

  const Upload = async () => {
    if (!Email || !Password) return;
    const data = {
      email: Email,
      password: Password,
    };
    const response = await LogIn(data);
    if (response.message === "Success") {
      localStorage.setItem("Token", response.token);
      router.push("/");
      toast.success("Success LogIn");
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    setValidEmail(false);
    if (Email.includes("@gmail.com")) {
      const result = Email_REGEX.test(Email);
      setValidEmail(result);
    }
  }, [Email, setEmail]);

  useEffect(() => {
    setValidPassword(false);
    const result = PWD_REGEX.test(Password);
    setValidPassword(result);
  }, [Password, setPassword]);

  return (
    <div className="w-full h-screen bg-slate-200 frc justify-center">
      <Link
        href={"/auth/signin"}
        className=" absolute left-[10px] top-[10px] active:opacity-[0.8]  active:scale-90 transition-all duration-75 "
      >
        <BsFillArrowLeftCircleFill className="text-[30px]" />
      </Link>
      <div className="w-[400px] h-auto  select-none bg-white rounded-[10px] fcc  justify-start p-[20px] animate-slideup ">
        <div className="w-full h-auto relative">
          <div className="w-full h-[60px] bg-slate-100  rounded-[10px]">
            <input
              type="email"
              placeholder="Email"
              value={Email.toLowerCase()}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-full p-[15px] outline-none bg-transparent"
            />
          </div>
          <div
            className={` ${
              EmailFocus === true && ValidEmail === false && Email.length > 3
                ? ""
                : "hidden"
            }  absolute
         bottom-[-90px] z-50 w-full h-auto bg-black rounded-[10px] mt-[10px] text-white frc items-start   p-[10px] `}
          >
            <HiOutlineExclamation className=" text-[25px] text-rose-600 mr-[5px] animate-pulse " />
            <p className=" text-[14px]">
              Must be Contain Number and letter. Must begin
              <br />
              Finish @gmail.com , 8 to 20 characters.
              <br />
              Please Fill ony Lower Case Letter
            </p>
          </div>
        </div>
        <div className="w-full h-auto relative">
          <div className="w-full h-auto mt-[10px] frc justify-start ">
            {eye ? (
              <HiOutlineEye
                onClick={() => seteye(false)}
                className=" cursor-pointer active:scale-90 transition-all duration-100 text-[20px] text-slate-300 ml-[15px] mb-[5px]"
              />
            ) : (
              <HiOutlineEyeOff
                onClick={() => seteye(true)}
                className=" cursor-pointer active:scale-90 transition-all duration-100  text-[20px] text-slate-300 ml-[15px] mb-[5px]"
              />
            )}
          </div>
          <div className="w-full h-[60px] bg-slate-100 rounded-[10px]">
            <input
              type={eye ? "email" : "password"}
              placeholder="Password"
              value={Password}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full p-[15px] outline-none bg-transparent"
            />
          </div>
          <div
            className={` ${
              PasswordFocus === true &&
              ValidPassword === false &&
              Password.length > 3
                ? ""
                : "hidden"
            } absolute
         bottom-[-90px] w-full h-auto bg-black z-50 rounded-[10px] mt-[10px] text-white frc items-start   p-[10px] `}
          >
            <HiOutlineExclamation className=" text-[25px] text-rose-600 mr-[5px] animate-pulse " />
            <p className=" text-[14px]">
              Must be Contain Number and letter. Must be
              <br />
              Contain @ , 8 to 20 characters.
              <br />
              Must be Contain Number .
            </p>
          </div>
        </div>
        <div
          onClick={() => Upload()}
          className="w-full h-[50px] bg-sky-500 rounded-[10px] frc justify-center mt-[20px] active:scale-90 transition-all duration-100 cursor-pointer"
        >
          <span className=" text-[18px] font-medium text-white ">Log in</span>
        </div>
        <Link
          href={"/NikeSign"}
          className="w-full h-auto mt-[5px] fcc items-start  font-normal cursor-pointer text-[11px] hover:underline "
        >
          <span>Not have account </span>
          <span>Sigin up</span>
        </Link>
      </div>
    </div>
  );
}

export default page;
