/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaHandPointDown } from "react-icons/fa";
import Title from "../Text/Title";
import Subtitle from "../Text/Subtitle";

const AddCategoryLimit = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div>
        <Title>First Add your invoice Category Limits</Title>
        <Subtitle>
          You could check it by clicking on 'All categories'...
        </Subtitle>
      </div>
      <div className="animate-bounce">
        <FaHandPointDown style={{ fontSize: "1.5em", color: "orange" }} />
      </div>
    </div>
  );
};

export default AddCategoryLimit;
