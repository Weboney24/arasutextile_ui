import React from "react";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { ICON_HELPER } from "../helper/iconhelper";

const Contact = () => {
  return (
    <div className="relative w-full overflow-hidden bg-primary_color text-white">
      <div className="flex flex-col lg:flex-row items-center justify-start py-10 relative z-10 font-primary">
        <div className="relative lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-10 z-20 bg-primary text-white  overflow-hidden shadow-xl">
          <div className="absolute inset-0 flex justify-center items-center opacity-10 text-[250px] text-white pointer-events-none">
            <ICON_HELPER.YARN_ICON />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Any Textiles Services Help?</h2>
            <p className="text-lg">+123-2600-777, +123-2535-789</p>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-start z-20">
          <img src={IMAGE_HELPER.BLOG_2} alt="Sewing Machine" className="w-[400px] max-w-xl !h-[177px] object-cover" />
        </div>
      </div>

      {/* Diagonal slash divider */}
      <div className="hidden lg:block absolute top-0 right-1/2 w-[200%] h-full bg-primary_color -skew-x-12 origin-left z-0"></div>
    </div>
  );
};

export default Contact;
