"use client";
import React from "react";
import { BsFillArrowLeftCircleFill, BsCloudUploadFill } from "react-icons/bs";

import { BiImageAdd } from "react-icons/bi";
import {
  HiOutlineExclamation,
  HiOutlineEyeOff,
  HiOutlineEye,
} from "react-icons/hi";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import CropperComponents from "./CropperComponents";
import { getCroppedImg } from "../../lib/cropimage";
import { dataURLtoFile } from "../../lib/dataUrltoFile";
import { storage } from "../../FirebaseConfig";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { MdAdminPanelSettings } from "react-icons/md";
import { addUser } from "../../Query/User/User";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
export default function page() {
  const router = useRouter();
  const ImageRef = React.useRef<HTMLInputElement>(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [cropArea, setCropArea] = React.useState(null);
  const [IMAGE, setIMAGE] = useState<any>();
  const [readAsDataURL, setreadAsDataURL] = useState<any>();
  const [Process, setProcess] = useState<number>();
  const [URL, setURL] = useState<string>();
  const [Permission, setPermission] = useState<boolean>(false);
  const [Permission1, setPermission1] = useState<boolean>(false);
  const [FirstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [ValidFirstName, setValidFirstName] = useState<boolean>(false);
  const [ValidLastName, setValidLastName] = useState<boolean>(false);

  const [Email, setEmail] = useState<string>("");
  const [EmailFocus, setEmailFocus] = useState<boolean>(false);
  const [ValidEmail, setValidEmail] = useState<boolean>(false);

  const [RoleCode, setRoleCode] = useState<string>("");

  const [Password, setPassword] = useState<string>("");
  const [PasswordFocus, setPasswordFocus] = useState<boolean>(false);
  const [ValidPassword, setValidPassword] = useState<boolean>(false);

  const [Adminrole, setAdminrole] = useState<string | null>("");

  const [eye, seteye] = useState<boolean>(false);

  const Name_REGEX = /^(?=.*[a-z]).{3,10}$/;
  const Email_REGEX = /^(?=.*[a-z])(?=.*[@])(?=.*[0-9]).{8,30}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@])(?=.*[0-9]).{8,24}$/;

  const HandleCHoose = () => {
    ImageRef.current?.click();
  };

  const onCropComplete = (
    croppedAreaPercentage: any,
    croppedAreaPixels: any
  ) => {
    setCropArea(croppedAreaPixels);
  };
  console.log(IMAGE);

  const HaldleSelectIMAGE = (e: any) => {
    if (!e.target.files[0]) return;
    setIMAGE(e.target.files[0]);
    const Reader = new FileReader();
    Reader.readAsDataURL(e.target.files[0]);
    Reader.addEventListener("load", () => {
      setreadAsDataURL(Reader.result);
    });
  };

  const handleImageUpload = async () => {
    if (!readAsDataURL || !IMAGE) {
      toast.error("Soorty Something Wroung Please try again");
      return;
    }
    try {
      const canvas = await getCroppedImg(readAsDataURL, cropArea);
      const canvasDataUrl = canvas.toDataURL(IMAGE.type);
      const convertedUrlToFile = dataURLtoFile(canvasDataUrl, IMAGE.name);

      const storageRef = ref(
        storage,
        `${uuidv4()}` + convertedUrlToFile.type.slice(6)
      );
      // @ts-ignore
      const metadata = { contentType: convertedUrlToFile.type };
      const uploadTask = uploadBytesResumable(
        storageRef,
        convertedUrlToFile,
        metadata
      );
      // ${uuidv4()}
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProcess(Math.floor(progress));
        },
        (err) => {
          console.log(err.message);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            if (downloadURL) {
              setURL(downloadURL);
              setreadAsDataURL(undefined);
              setIMAGE("");
              toast.success("Success Upload Image");
            } else {
              toast.error("Soort Something Wroung Please try again");
            }
          });
        }
      );
    } catch (err) {
      console.log(err);
      toast.error("Soorty Image Upload Failed. Please try again");
    }
  };

  const handleClear = () => {
    setreadAsDataURL("");
    setIMAGE(null);
  };

  const Uploaddata = async () => {
    if (!ValidFirstName || !ValidEmail || !ValidPassword || !URL) return;
    const Userdata: SendUserdataNike = {
      email: Email,
      password: Password,
      image: URL,
      name: FirstName + " " + LastName,
      roleCode: RoleCode,
    };
    const Responsedata = await addUser(Userdata);
    if (Responsedata.message === "Success") {
      router.push("/NikeLogin");
      localStorage.setItem("Token", Responsedata.token);
      setEmail("");
      setPassword("");
      setURL("");
      setFirstName("");
      setLastName("");
      setRoleCode("");
      setIMAGE("");
      setreadAsDataURL("");
    }
  };

  useEffect(() => {
    const Adminrole = localStorage.getItem("Role");
    setAdminrole(Adminrole);
  }, []);

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

  useEffect(() => {
    setValidFirstName(false);
    const result = Name_REGEX.test(FirstName);
    setValidFirstName(result);
  }, [FirstName, setFirstName]);

  useEffect(() => {
    setValidLastName(false);
    const result = Name_REGEX.test(FirstName);
    setValidLastName(result);
  }, [LastName, setLastName]);

  return (
    <div className="w-full h-screen bg-slate-200 frc justify-center">
      <Link
        href={"/auth/signin"}
        className=" absolute left-[10px] top-[10px] active:opacity-[0.8]  active:scale-90 transition-all duration-75 "
      >
        <BsFillArrowLeftCircleFill className="text-[30px]" />
      </Link>
      <div
        onClick={() => setPermission(true)}
        className={` ${
          Permission1 ? "" : " hidden"
        } absolute   opacity-0 cursor-pointer hover:opacity-5 left-[10px] top-[50px] active:opacity-[0.8]  active:scale-90 transition-all duration-75 `}
      >
        <MdAdminPanelSettings className="text-[30px]" />
      </div>
      <div
        onClick={() => setPermission1(true)}
        className=" absolute   opacity-0 cursor-pointer hover:opacity-5  right-[10px]  bottom-[10px] active:opacity-[0.8]  active:scale-90 transition-all duration-75 "
      >
        <MdAdminPanelSettings className="text-[30px]" />
      </div>
      <div className="w-[400px] h-auto select-none bg-white rounded-[10px] fcc  justify-start p-[20px] animate-slideup ">
        <input
          type="file"
          accept="image/*"
          ref={ImageRef}
          onChange={(e: any) => HaldleSelectIMAGE(e)}
          className=" absolute hidden bottom-0 right-0 "
        />
        <div
          className={`w-full h-[200px]  overflow-hidden  relative ${
            URL ? "" : "bg-slate-100"
          }   rounded-[10px] frc justify-center `}
        >
          {IMAGE && !Process ? (
            <CropperComponents
              handleClear={handleClear}
              handleImageUpload={handleImageUpload}
              readAsDataURL={readAsDataURL}
              crop={crop}
              zoom={zoom}
              setCrop={setCrop}
              setZoom={setZoom}
              onCropComplete={onCropComplete}
            />
          ) : Process ? (
            URL ? (
              <div className="w-full h-[200px] frc justify-center">
                <img src={URL} className="w-auto h-[200px] rounded-full" />
              </div>
            ) : (
              <div className="frc justify-between">
                <BsCloudUploadFill className=" text-[30px] text-yellow-500 mr-[5px]  animate-bounce " />
                <span className=" font-normal text-teal-500 ">{Process} %</span>
              </div>
            )
          ) : (
            <BiImageAdd
              onClick={() => HandleCHoose()}
              className={` ${
                IMAGE ? " hidden" : ""
              } text-[40px]  text-emerald-500 cursor-pointer active:opacity-[0.8] active:scale-90 transition-all duration-100 `}
            />
          )}
        </div>
        <div className="w-full h-[60px]  mt-[20px] frc justify-between ">
          <div className="w-[49%] h-[60px] bg-slate-100 mt-[20px] rounded-[10px]">
            <input
              type="text"
              placeholder="First Name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-full p-[15px] outline-none bg-transparent"
            />
          </div>
          <div className="w-[49%] h-[60px] bg-slate-100 mt-[20px] rounded-[10px]">
            <input
              type="text"
              placeholder="Last Name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full h-full p-[15px] outline-none bg-transparent"
            />
          </div>
        </div>
        <div
          className={` ${
            Permission && Adminrole === "0479Admin0004"
              ? ""
              : " hidden absolute "
          }w-full h-[60px] bg-slate-100 mt-[20px] rounded-[10px]`}
        >
          <input
            type="text"
            placeholder="Role Code ( Opctional ) ?"
            value={RoleCode}
            onChange={(e) => setRoleCode(e.target.value)}
            className={`w-full h-full ${
              Permission ? "" : " hidden"
            } p-[15px] outline-none bg-transparent`}
          />
        </div>
        <div className="w-full h-[60px] bg-slate-100 mt-[20px] rounded-[10px]">
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
          } w-full h-auto bg-black rounded-[10px] mt-[10px] text-white frc items-start   p-[10px] `}
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
        <div className="w-full h-[60px] bg-slate-100  rounded-[10px]">
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
          } w-full h-auto bg-black rounded-[10px] mt-[10px] text-white frc items-start   p-[10px] `}
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
        <div
          onClick={() => Uploaddata()}
          className="w-full h-[50px] bg-sky-500 rounded-[10px] frc justify-center mt-[20px] active:scale-90 transition-all duration-100 cursor-pointer"
        >
          <span className=" text-[18px] font-medium text-white ">Sigin up</span>
        </div>
        <Link
          href={"/NikeLogin"}
          className="w-full h-auto mt-[5px] fcc items-start  font-normal cursor-pointer text-[11px] hover:underline "
        >
          <span>Already have account </span>
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
}
