"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { BsImageFill, BsCloudUpload } from "react-icons/bs";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import toast from "react-hot-toast";
import {
  IoEllipsisVerticalSharp,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../FirebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addStoriesEngin } from "../../../../Redux/ActionSlice";
import { UpdateStories } from "../../../../Query/Stories/UpdateStories";
import { Delete_Img } from "../../../../Query/DeleteImage";
import { useRouter } from "next/navigation";
interface Props {
  Stories: Stories;
}
function InputComponent({ Stories }: Props) {
  const router = useRouter();
  const ImageRef = React.useRef<HTMLInputElement>(null);
  const [title, settitle] = useState<string>("");
  const [blog, setblog] = useState<string>("");
  const [URL, setURL] = useState<string>("");
  const [Image, setImage] = useState<any>();
  const dispatch = useDispatch();
  const [Progress, setProgress] = useState<number>(0);
  const [EditImage, setEditImage] = useState<boolean>(false);

  const ChooseImage = () => {
    if (URL) return;
    ImageRef.current?.click();
  };

  useEffect(() => {
    UploadImage();
  }, [Image]);

  const UploadImage = () => {
    setEditImage(false);
    try {
      if (!Image) return;

      // Create the file metadata

      const metadata: any = {
        contentType: Image.type,
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(
        storage,
        `stories${uuidv4()}.` + Image.type.slice(6)
      );
      const uploadTask = uploadBytesResumable(storageRef, Image, metadata);

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
          });
        }
      );
    } catch (err) {
      console.warn(err);
    }
  };

  const handleUpload = async () => {
    try {
      if (!title || !blog || !URL || !Stories) return;
      const fromdata = {
        id: Stories.id,
        title: title,
        text: blog,
        img: URL,
        likecount: Math.floor(Math.random() * (9999 - 100 + 1) + 100),
      };
      const response = await UpdateStories(fromdata);
      if (response.message === "Success") {
        router.push("/Admin/Addstories/");
        dispatch(addStoriesEngin(response.data));
        settitle("");
        setblog("");
        setURL("");
        setProgress(0);
        toast.success("Update Success..");
      } else {
        toast.error(`Update Failed Please try again`);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    settitle(Stories?.title);
    setblog(Stories?.text);
    setURL(Stories?.img);
  }, [Stories]);

  const DeleteImage = () => {
    if (!URL) return;
    Delete_Img(URL);
    setURL("");
    setImage("");
  };

  return (
    <div className="w-full h-full frc justify-center mt-[50px] 1000:mt-0">
      <div className="w-[500px] h-auto bg-slate-200 rounded-[10px] p-[15px] shadow-lg frc justify-between mb-[70px] ">
        <input
          type="file"
          accept="image/*"
          ref={ImageRef}
          onChange={(e: any) => setImage(e.target.files[0])}
          className=" absolute hidden bottom-0 right-0 "
        />
        <div className="w-full h-full fcc items-start  rounded-[10px] overflow-hidden">
          <div className="w-full h-auto relative ">
            <img
              src={
                URL
                  ? URL
                  : "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1"
              }
              className={`w-full h-auto rounded-[10px] ${
                Progress > 0 && !URL ? "hidden" : " "
              }`}
            />
            <div
              className={`w-full h-[290px] frc justify-center ${
                Progress > 0 && !URL ? "" : " hidden"
              } text-sky-500`}
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
                onClick={() => ChooseImage()}
                className="w-full h-[40px]  z-[20] frc justify-around rounded-[10px] bg-indigo-100 dark:bg-[#171717] mb-[10px] active:scale-90 transition-all duration-100 cursor-pointer  "
              >
                <BsImageFill className="text-[25px] text-emerald-500" />
                <span className=" font-medium">Upload Image </span>
              </div>
              <div
                onClick={() => ChooseImage()}
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

          <div className="w-full h-auto   fcc  items-start mt-[20px]  ">
            <span className="text-[14px] font-medium ml-[2px]">
              Stories title :
            </span>
            <div className="w-full h-[50px]  text-black rounded-[5px]  overflow-hidden">
              <input
                type="text"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                placeholder="Stories title"
                className="w-full h-full outline-none px-[15px] py-[8px] font-medium "
              />
            </div>
          </div>
          <div className="w-full h-[200px] rounded-[5px] mt-[20px] overflow-hidden">
            <span className=" font-medium">Blog : </span>
            <textarea
              value={blog}
              onChange={(e) => setblog(e.target.value)}
              placeholder="Blog..."
              className="w-full h-full text-[16px]  text-black font-medium resize-none outline-none p-[15px] rounded-[5px] "
            ></textarea>
          </div>
          <div
            onClick={() => handleUpload()}
            className="w-full h-[50px] bg-sky-500 rounded-[10px] frc justify-center mt-[20px] active:scale-90 transition-all duration-100 cursor-pointer"
          >
            <span className=" text-[18px] font-medium text-white ">Upload</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputComponent;
