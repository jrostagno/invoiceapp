import React, { FC } from "react";
import { FaCameraRetro } from "react-icons/fa";

interface UploadImagesProps {
  className: string;
}
const UploadImages: FC<UploadImagesProps> = ({ className }) => {
  return (
    <label className={className} htmlFor="dataimg">
      <input
        className="hidden"
        type="file"
        accept="image/*"
        name="file"
        id="dataimg"
      />
      <div className="flex items-center justify-center w-32 h-32 overflow-hidden border border-gray-400 rounded-full cursor-pointer">
        <FaCameraRetro
          style={{ fontSize: "45px", color: "gray" }}
        ></FaCameraRetro>
      </div>
    </label>
  );
};

export default UploadImages;
