import React from "react";
import { IMAGE_HELPER } from "../helper/imagehelper";

const CustomHero = ({ title, imagurl }) => {
  return (
    <div className="mb-24">
      <div className="relative bg-cover bg-center bg-no-repeat h-[250px]  " style={{ backgroundImage: `url(${imagurl})` }}>
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

        <p className="relative z-30 flex justify-center items-center font-bold text-white font-primary text-4xl pt-[80px]">{title}</p>
      </div>
    </div>
  );
};

export default CustomHero;
