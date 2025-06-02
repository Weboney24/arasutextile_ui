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
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden font-primary">
        {HERO_IMAGES.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <div className="h-full w-full bg-center bg-cover filter brightness-110 contrast-105" style={{ backgroundImage: `url(${image})` }}></div>
          </div>
        ))}

        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

        {/* Text Content */}
        <div className="relative z-30 text-white space-y-5 text-center items-center flex flex-col justify-center mt-[100px] sm:mt-[150px] md:mt-[200px] px-4">
          <div>
            <div className="text-sm sm:text-base flex items-start px-2 sm:px-4">
              <p>Discover premium textiles crafted for comfort and style.</p>
            </div>
            <div className="bg-primary h-[10px] sm:h-[15px] !-mt-[20px] sm:!-mt-[32px]"></div>
          </div>

          <div className="relative w-full flex justify-center items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold relative z-10 px-2 sm:px-4">
              Experience the <span className="font-primary font-extrabold">Fabric of Life</span>
            </span>
          </div>

          <button className="border-white mt-3 sm:mt-5 cursor-pointer border-2 px-4 sm:px-5 py-1.5 sm:py-2 font-bold bg-transparent">Explore More</button>
        </div>
      </div>

      {/* About Section */}
      <div className="relative bg-white mb-10 sm:mb-20 -mt-[80px] sm:-mt-[100px] md:-mt-[150px] z-50 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto min-h-[500px] md:h-[700px] shadow-lg p-5 sm:p-10 font-primary">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute right-[20px] sm:right-[100px] lg:right-[215px] top-[300px] lg:top-[400px] -translate-y-1/2 -translate-x-full bg-primary text-white text-xs sm:text-sm font-bold px-2 py-1 rotate-[-90deg] origin-top-left">25 Years Of Experience!</div>
            <img src={IMAGE_HELPER.ABOUT_IMAGE} alt="Textile Machinery" className="w-full max-w-[500px] h-[400px] md:h-[500px] lg:h-[600px] object-cover border-white border-[6px] sm:border-[10px] mx-auto shadow-lg" />
          </div>

          <div className="w-full lg:w-1/2 space-y-5 sm:space-y-[20px] -mt-4 sm:-mt-[28px]">
            <DefaultHeader title="About Us" position="start" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl !-mt-[20px] sm:!-mt-[50px]">
              <span className="font-normal">One Of The Leaders in Textile</span> <br />
              <span className="text-black font-bold text-xl sm:text-[30px]">
                Market Since <span className="text-primary">1989</span>
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg">A professionally managed export company M/S Sri Arasu Tex has got exclusive manufacturing home textile furnishing items for many international buyers.</p>
            <Divider className="!border-primary" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              {hero_about.map((res, index) => {
                const Icon = res.icon;
                return (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-start justify-center space-y-2">
                      <Icon className="text-[30px] sm:text-[40px] text-primary" />
                      <div>
                        <p className="font-bold mt-1">{res.heading}</p>
                        <p className="text-sm sm:text-base">{res.content}</p>
                      </div>
                    </div>
                    <div className="lg:block hidden">{index !== hero_about.length - 1 && <Divider type="vertical" className="!border-primary !h-[90px] hidden sm:block mx-4" />}</div>
                  </React.Fragment>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-10">
              <p className="text-3xl sm:text-4xl text-primary">
                <ICON_HELPER.COTTON_ICON />
              </p>
              <p className="text-base sm:text-lg text-gray-700 text-center sm:text-left">we’ve recently launched the ability to shop fabrics online and shop poles & tracks online from our website too</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6">
              <button className="bg-primary px-5 py-2 !text-white">KNOW MORE</button>
              <p className="flex items-center gap-2 font-bold text-lg sm:text-2xl mt-2 sm:mt-7">
                <ICON_HELPER.phone_icon className="text-xl sm:text-2xl" />
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
