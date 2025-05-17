import React, { useEffect, useState } from "react";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Divider } from "antd";
import { hero_about } from "../helper/datahelper";
import { ICON_HELPER } from "../helper/iconhelper";
import DefaultHeader from "../components/DefaultHeader";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const HERO_IMAGES = [IMAGE_HELPER.HERO_IMAGE, IMAGE_HELPER.HERO_IMAGE2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="relative min-h-[700px] overflow-hidden   font-primary">
        {HERO_IMAGES.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <div className="h-full w-full bg-center bg-cover filter brightness-110 contrast-105" style={{ backgroundImage: `url(${image})` }}></div>
          </div>
        ))}

        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

        {/* Text Content */}
        <div className="relative z-30 text-white space-y-5 text-center items-center flex flex-col justify-center mt-[200px]">
          <div>
            <div className="text-lg  flex items-start  px-4 ">
              <p className="">Discover premium textiles crafted for comfort and style.</p>
            </div>
            <div className="bg-primary h-[15px] !-mt-[32px]"></div>
          </div>

          <div className="relative w-full flex justify-center items-center">
            <span className="text-6xl font-bold relative z-10 px-4">
              Experience the <span className=" font-primary font-extrabold">Fabric of Life</span>
            </span>
          </div>

          <button className="border-white mt-5 cursor-pointer border-2 px-5 py-2 font-bold bg-transparent">Explore More</button>
        </div>
      </div>

      <div className="relative bg-white mb-20 -mt-[150px] z-50 w-[80%] mx-auto h-[700px] shadow-lg p-10 font-primary">
        <div className="flex items-center justify-between  ">
          <div className="w-1/2 relative ">
            <div className="absolute right-[215px] top-[400px] -translate-y-1/2 -translate-x-full bg-primary text-white text-sm font-bold px-2 py-1 rotate-[-90deg] origin-top-left">25 Years Of Experience!</div>

            <img src={IMAGE_HELPER.ABOUT_IMAGE} alt="Textile Machinery" className="w-[500px] h-[600px] object-cover border-white border-[10px] ml-[20px] shadow-lg" />
          </div>

          <div className="w-1/2 space-y-[20px] top-0 -mt-[50px] ">
            <DefaultHeader title="About Us" />
            <h2 className="text-4xl -mt-[50px]">
              <span className="font-normal">One Of The Leaders in Textile</span> <br />
              <span className="text-black font-bold text-[30px]">
                Market Since <span className="text-primary">1989</span>
              </span>
            </h2>

            <p className="text-gray-600 text-lg">A professionally managed export company M/S Sri Arasu Tex has got exclusive manufacturing home textile furnishing items for many international buyers.</p>
            <Divider className="!border-primary" />
            <div className="flex items-center justify-between">
              {hero_about.map((res, index) => {
                const Icon = res.icon;
                return (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-start justify-center  space-x-2">
                      <Icon className="text-[40px] text-primary" />
                      <div>
                        <p className="font-bold">{res.heading}</p>
                        <p>{res.content}</p>
                      </div>
                    </div>
                    {index !== hero_about.length - 1 && <Divider type="vertical" className="!border-primary !h-[50px] mx-4" />}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-5 mt-10">
              <p className="text-4xl text-primary">
                <ICON_HELPER.COTTON_ICON />
              </p>
              <p className="text-lg text-gray-700">we’ve recently launched the ability to shop fabrics online and shop poles & tracks online from our website too</p>
            </div>

            <div className="flex items-center justify-start gap-6 mt-10">
              <button className="bg-primary p-3 !text-white">KNOW MORE</button>
              <p className="flex items-center justify-center gap-3 font-bold  ">
                <ICON_HELPER.phone_icon className="text-2xl" />
                0091-4324-233551
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
