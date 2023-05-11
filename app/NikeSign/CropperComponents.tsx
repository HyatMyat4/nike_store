"use client";
import React from "react";
import Cropper from "react-easy-crop";
import { HiXMark } from "react-icons/hi2";
import { GoCheck } from "react-icons/go";

function CropperComponents({
  readAsDataURL,
  crop,
  zoom,
  setCrop,
  setZoom,
  onCropComplete,
  handleImageUpload,
  handleClear
}: any) {
  return (
    <>
      <div onClick={() => handleClear()}
        className={` absolute top-[5px] right-[5px] cursor-pointer ${
            readAsDataURL ? "" : "hidden" 
        } p-[4px] z-50 hover:scale-110 active:scale-90 transition-all duration-100
          trasition shadow-lg bg-[black] rounded-full`}
      >
        <HiXMark className="text-[20px] text-red-500" />
      </div>
      <div onClick={() => handleImageUpload()}
        className={` absolute top-[40px] right-[5px] cursor-pointer ${
            readAsDataURL ? "" : "hidden"
        } p-[4px]
           z-50 hover:scale-110 active:scale-90 transition-all duration-100 trasition shadow-lg bg-[white] rounded-full `}
      >
        <GoCheck className="text-[20px] text-emerald-500 " />
      </div>
      <Cropper
        image={readAsDataURL}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    </>
  );
}

export default CropperComponents;
