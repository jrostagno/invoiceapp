/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { UploadImagesProps } from "../../types";

const UploadImages: FC<UploadImagesProps> = ({ className, avatar }) => {
  return (
    <label className={className} htmlFor="dataimg">
      <input
        className="hidden"
        type="file"
        accept="image/*"
        name="file"
        id="dataimg"
      />
      <div
        className={`flex items-center justify-center w-32 h-32 overflow-hidden ${
          avatar ? "border-none" : "boder"
        }  border-gray-400 rounded-full cursor-pointer`}
      >
        {avatar ? (
          <img
            className="object-cover w-full h-full cursor-not-allowed"
            alt=""
            src={avatar}
          />
        ) : (
          <FaCameraRetro
            style={{ fontSize: "45px", color: "gray" }}
          ></FaCameraRetro>
        )}
      </div>
    </label>
  );
};

export default UploadImages;
