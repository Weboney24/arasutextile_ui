import React, { useEffect, useState } from "react";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { Divider } from "antd";
import { hero_about } from "../helper/datahelper";
import { ICON_HELPER } from "../helper/iconhelper";
import DefaultHeader from "../components/DefaultHeader";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const HERO_IMAGES = [
    {
      image: IMAGE_HELPER.HERO_IMAGE,
      title: "Decades of industry knowledge in",
      subtitle: "delivering precision-crafted textiles..",
    },
    {
      image: IMAGE_HELPER.HERO_IMAGE1,
      title: "We use only premium fabrics and ",
      subtitle: "maintain strict quality control at every stage.",
    },
    {
      image: IMAGE_HELPER.HERO_IMAGE2,
      title: "Get tailored designs to suit your",
      subtitle: " brand, market, and customer needs",
    },
    {
      image: IMAGE_HELPER.HERO_IMAGE3,
      title: "Eco-conscious processes and fair labor",
      subtitle: "practices are at the heart of what we do.",
    },
  ];

  const { image, title, subtitle } = HERO_IMAGES[currentImage];

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
        {/* Bright Image */}
        <img src={image} alt="Hero" className="absolute w-full h-full object-cover object-center brightness-125 transition-opacity duration-1000" />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 bg-black/10">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{title}</h1>
          <h1 className="text-lg md:text-6xl font-extrabold drop-shadow-md">{subtitle}</h1>
        </div>
      </div>
      {/* About Section */}
      <div className="relative bg-white mb-10 sm:mb-20 mt-[40px] z-50 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto min-h-[500px] md:h-[700px] shadow-lg p-5 sm:p-10 font-primary">
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
            {/* <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
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
            </div> */}
            <div className="space-y-1 text-gray-700 text-base sm:text-lg leading-tight">
              <p>Our specialization in home textiles — including curtains, cushions, bed linen, kitchen and table linens — sets us apart from general textile units.</p>
              <p>
                We proudly export to international markets including <strong>USA, UK, Germany, France, Italy, Australia, UAE</strong> and continue to stay ahead of design and market trends.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-10">
              <p className="text-3xl sm:text-4xl text-primary">
                <ICON_HELPER.COTTON_ICON />
              </p>
              <p className="text-base sm:text-lg text-gray-700 text-center sm:text-left">we’ve recently launched the ability to shop fabrics online and shop poles & tracks online from our website too</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 -mt-[25px]">
              <button className="bg-primary px-5 py-2 !text-white">KNOW MORE</button>
              <p className="flex items-center gap-2 font-bold text-lg sm:text-2xl !mt-[25px] sm:mt-7 ">
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
