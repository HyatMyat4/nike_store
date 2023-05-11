"use client";
import React from "react";
import SideBar from "../SideBar";
import DarhboardNavbar from "../DarhboardNavbar";
import {
  IoEllipsisVerticalSharp,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { BsImageFill, BsCloudUpload } from "react-icons/bs";
import { useState, useRef, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../FirebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { Delete_Img } from "../../../Query/DeleteImage";
import { addShoe } from "../../../Query/Shoes/AddShoes";
import toast from "react-hot-toast";
import Image from "next/image";
import { Updateshoe } from "../../../Query/Shoes/Updateshoes";
import { useRouter } from "next/navigation";
type Props = {
  Responseshoe_data: ShoeCardData;
  id: string;
};
export default function Component({ Responseshoe_data, id }: Props) {
  const router = useRouter();
  const ImageRef = React.useRef<HTMLInputElement>(null);
  const [EditImage, setEditImage] = useState<boolean>(false);
  const [IsUpload, setIsUpload] = useState<boolean>(false);
  const [Progress, setProgress] = useState<number>(0);
  const [BgColour, setBgColour] = useState<string>("");
  const [ShadowColour, setShadowColour] = useState<string>("");
  const [shoeName, setshoeName] = useState<string>("");
  const [shoePrice, setshoePrice] = useState<number>();
  const [shoeTitle, setshoeTitle] = useState<string>("");
  const [shoeImformation, setshoeImformation] = useState<string>("");
  const [URL, setURL] = useState<string>("");
  const [ImageFile, setImageFile] = useState<any>();
  const Headtitle = `UPDATESHOE${id}`;
  const HandleChooseImage = () => {
    if (URL || ImageFile) return;
    ImageRef.current?.click();
  };
  const HandleImage = (e: any) => {
    setImageFile(e.target.files[0]);
    setEditImage(false);
  };

  useEffect(() => {
    UploadImage();
  }, [ImageFile]);

  const UploadImage = () => {
    try {
      if (!ImageFile) return;
      setIsUpload(true);

      // Create the file metadata

      const metadata: any = {
        contentType: ImageFile.type,
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, `${uuidv4()}.` + ImageFile.type.slice(6));
      const uploadTask = uploadBytesResumable(storageRef, ImageFile, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(Math.floor(progress));
          switch (snapshot.state) {
            case "paused":
              break;
            case "running":
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;
            // ...
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setURL(downloadURL);
            toast.success(`Image Upload Success`);
            setIsUpload(false);
          });
        }
      );
    } catch (err) {
      console.warn(err);
    }
  };

  const UploadData = async () => {
    if (
      !URL ||
      !BgColour ||
      !ShadowColour ||
      !shoeName ||
      !shoePrice ||
      !shoeTitle ||
      !shoeImformation
    )
      return;
    const formdata: formdata = {
      Image: URL,
      BgColour: BgColour,
      ShadowColour: ShadowColour,
      shoeName: shoeName,
      shoePrice: shoePrice,
      shoeTitle: shoeTitle,
      shoeImformation: shoeImformation,
      Rating: Math.floor(Math.random() * (5 - 2 + 1) + 2),
    };
    const responsedata = await Updateshoe(formdata, id);
    if (responsedata.message === "Success") {
      setURL("");
      setBgColour("");
      setShadowColour("");
      setshoeName("");
      setshoeTitle("");
      setshoeImformation("");
      setshoePrice(0);
      setImageFile("");
      setProgress(0);
      router.push("/Admin/Removeshoe");
      toast.success(`Update Success...`);
    } else {
      toast.error(`Update Failed Please try again`);
    }
  };

  const DeleteImage = () => {
    if (!URL) return;
    Delete_Img(URL);
    setURL("");
    setImageFile("");
  };

  useEffect(() => {
    setURL(Responseshoe_data.image);
    setBgColour(Responseshoe_data.backgroundcolour);
    setShadowColour(Responseshoe_data.shadow);
    setshoeName(Responseshoe_data.shoename);
    setshoeTitle(Responseshoe_data.title);
    setshoeImformation(Responseshoe_data.shoeimformation);
    setshoePrice(Responseshoe_data.price);
  }, [Responseshoe_data]);

  return (
    <div className="w-full h-auto 1000:h-screen frc justify-between bg-slate-200  dark:bg-[black]">
      <div className="w-full h-auto 1000:h-screen overflow-hidden  select-none">
        <DarhboardNavbar key={Headtitle} Headtitle={Headtitle} />
        <div className="w-full h-full frc justify-center  ">
          <div
            className="w-[1000px] h-auto rounded-[10px]  bg-sky-200  dark:bg-[#181818f5] shadow-lg  
            fcc 1000:frc justify-between p-[15px]"
          >
            <div className="w-full 600:w-[80%] 1000:w-[49%] h-full fcc  justify-start ">
              <div
                className={`w-full h-auto p-[30px] bg-gradient-to-b shadow-lg ${
                  (ImageFile && IsUpload) || URL
                    ? BgColour || ShadowColour
                      ? `${BgColour} ${ShadowColour} `
                      : "bg-white"
                    : "from-yellow-500 to-yellow-500"
                }  rounded-[10px] relative `}
              >
                <Image
                  src={` ${
                    URL || Progress > 0
                      ? URL
                      : "https://firebasestorage.googleapis.com/v0/b/nike-48347.appspot.com/o/85904d0c-8cf6-4256-8c67-6a36e51209de.png?alt=media&token=226361c3-c43a-40a6-b974-9f91bd6736d2"
                  }`}
                  alt={shoeName}
                  width={1920}
                  height={1080}
                  className={`w-full h-auto z-0 ${
                    ImageFile && IsUpload ? "hidden" : ""
                  }`}
                />
                <div
                  className={`${
                    ImageFile && IsUpload ? "" : " hidden "
                  } w-full h-[220px] text-sky-500 rounded-[10px] relative frc justify-center`}
                >
                  <BsCloudUpload className="text-[30px]  animate-pulse" />
                  <div className="text-[16px] font-medium ml-[5px] ">
                    {Progress}%
                  </div>
                </div>
                <div
                  onClick={() => setEditImage(!EditImage)}
                  className=" absolute top-[8px] right-[8px] p-[4px]  z-50 rounded-full bg-black cursor-pointer active:scale-90 transition-all duration-100 "
                >
                  {EditImage ? (
                    <IoEllipsisHorizontalSharp className="text-slate-100 text-[17px] " />
                  ) : (
                    <IoEllipsisVerticalSharp className="text-slate-100 text-[17px] " />
                  )}
                </div>
                <div
                  className={`w-[200px] h-auto bg-black  absolute top-[45px]  right-[0px] rounded-[10px] p-[10px]  
                ${EditImage ? "" : "hidden"} `}
                >
                  <div className="absolute top-[-20px] right-[5px] z-[0] text-black ">
                    <GoTriangleUp className="text-[30px]" />
                  </div>
                  <div
                    onClick={() => HandleChooseImage()}
                    className="w-full h-[40px]  z-[20] frc justify-around rounded-[10px] bg-indigo-100 dark:bg-[#171717] mb-[10px] active:scale-90 transition-all duration-100 cursor-pointer  "
                  >
                    <BsImageFill className="text-[25px] text-emerald-500" />
                    <span className=" font-medium">Upload Image </span>
                  </div>
                  <div
                    onClick={() => HandleChooseImage()}
                    className="w-full h-[40px]  z-[20] frc justify-around rounded-[10px] bg-indigo-100 dark:bg-[#171717] mb-[10px] active:scale-90 transition-all duration-100 cursor-pointer  "
                  >
                    <BsImageFill className="text-[25px] text-sky-500" />
                    <span className=" font-medium">Update Image</span>
                  </div>
                  <div
                    onClick={() => DeleteImage()}
                    className="w-full h-[40px]  z-[20] frc justify-around rounded-[10px] bg-indigo-100 dark:bg-[#171717]  active:scale-90 transition-all duration-100  cursor-pointer "
                  >
                    <BsImageFill className="text-[25px] text-rose-500" />
                    <span className=" font-medium">Delete Image</span>
                  </div>
                </div>
              </div>
              <div className=" absolute hidden ">
                <input
                  type="file"
                  accept="image/*"
                  ref={ImageRef}
                  onChange={(e) => HandleImage(e)}
                  className=" absolute hidden bottom-0 right-0 "
                />
              </div>
              <div className="w-full h-auto frc justify-between mt-[20px]">
                <div className="w-full h-auto">
                  <span className="  text-[14px] font-medium">Colour :</span>
                  <div className="w-full h-[60px]  bg-slate-200 rounded-[5px] overflow-hidden  ">
                    <input
                      type="text"
                      value={BgColour}
                      onChange={(e) => setBgColour(e.target.value)}
                      className="w-full h-full outline-none px-[15px] py-[10px] text-[15px] font-medium"
                      placeholder="Background"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-auto   fcc items-start mt-[20px] ">
                <span className="  text-[14px] font-medium">Shadow :</span>
                <div className="w-full h-[60px] bg-slate-200 rounded-[5px] overflow-hidden">
                  <input
                    type="text"
                    value={ShadowColour}
                    onChange={(e) => setShadowColour(e.target.value)}
                    className="w-full h-full outline-none px-[15px] py-[10px] text-[15px] font-medium"
                    placeholder="Shadow"
                  />
                </div>
              </div>
            </div>

            <div className="w-full 600:w-[80%] 1000:w-[49%] h-full  fcc justify-start  ">
              <div className="w-full h-auto   fcc items-start   ">
                <span className="  text-[14px] font-medium">Shoe Name :</span>
                <div className="w-full h-[60px] bg-slate-200 rounded-[5px] overflow-hidden">
                  <input
                    type="text"
                    value={shoeName}
                    onChange={(e) => setshoeName(e.target.value)}
                    className="w-full h-full outline-none px-[15px] py-[10px] text-[15px] font-medium"
                    placeholder="Shoe Name"
                  />
                </div>
              </div>
              <div className="w-full h-auto   fcc items-start  mt-[20px]  ">
                <span className="  text-[14px] font-medium">Shoe Price :</span>
                <div className="w-full h-[60px] bg-slate-200 rounded-[5px] overflow-hidden">
                  <input
                    type="text"
                    value={shoePrice}
                    onChange={(e) => setshoePrice(Number(e.target.value))}
                    className="w-full h-full outline-none px-[15px] py-[10px] text-[15px] font-medium"
                    placeholder="Shoe Price"
                  />
                </div>
              </div>
              <div className="w-full h-auto   fcc items-start  mt-[20px]  ">
                <span className="  text-[14px] font-medium">Shoe Title :</span>
                <div className="w-full h-[60px] bg-slate-200 rounded-[5px] overflow-hidden">
                  <input
                    type="text"
                    value={shoeTitle}
                    onChange={(e) => setshoeTitle(e.target.value)}
                    className="w-full h-full outline-none px-[15px] py-[10px] text-[15px] font-medium"
                    placeholder="Shoe Title"
                  />
                </div>
              </div>
              <div className="w-full h-auto   fcc items-start  mt-[20px]  ">
                <span className="  text-[14px] font-medium">
                  Shoe Information :
                </span>
                <div className="w-full h-[110px] bg-slate-200 dark:bg-black rounded-[5px] overflow-hidden">
                  <textarea
                    value={shoeImformation}
                    onChange={(e) => setshoeImformation(e.target.value)}
                    className="w-full h-full outline-none px-[15px] rounded-[5px] py-[10px] text-[15px] font-medium resize-none"
                    placeholder="Shoe Information"
                  ></textarea>
                </div>
              </div>
              <div
                onClick={() => UploadData()}
                className="w-full h-[50px] bg-sky-500 rounded-[10px] frc justify-center mt-[20px] active:scale-90 transition-all duration-100 cursor-pointer"
              >
                <span className=" text-[18px] font-medium text-white ">
                  Upload
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
