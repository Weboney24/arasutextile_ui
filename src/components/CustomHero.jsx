import React from "react";
import { IMAGE_HELPER } from "../helper/imagehelper";

const CustomHero = ({ title, imagurl, content }) => {
  return (
    <div className="mb-24">
      <div className="relative bg-cover bg-center bg-no-repeat h-[250px]  " style={{ backgroundImage: `url(${imagurl})` }}>
        <p className="relative z-30 flex justify-center items-center font-bold text-primary font-primary text-4xl pt-[100px] !mb-0">{title}</p>
        <p className="text-2xl text-primary text-center font-bold mb-10">{content}</p>
      </div>
    </div>
  );
};

export default CustomHero;
