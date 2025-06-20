import React from "react";
import CustomHero from "../components/CustomHero";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { hero_about } from "../helper/datahelper";
import DefaultHeader from "../components/DefaultHeader";
import { Divider } from "antd";
import { ICON_HELPER } from "../helper/iconhelper";
import Services from "../pages/Services";
import Blogs from "../pages/Blogs";

const AboutLanding = () => {
  return (
    <div>
      <CustomHero title="Know us" imagurl={IMAGE_HELPER.INSIDE_HERO2} />
      <div className="relative !bg-white mb-20 -z-50 w-[90%] mx-auto h-auto !shadow-lg p-5 sm:p-10 font-primary">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative flex justify-center mb-10 lg:mb-0">
            <div className="hidden lg:block absolute right-[215px] top-[400px] -translate-y-1/2 -translate-x-full bg-primary text-white text-sm font-bold px-2 py-1 rotate-[-90deg] origin-top-left">25 Years Of Experience!</div>
            <img src={IMAGE_HELPER.ABOUT_IMAGE} alt="Textile Machinery" className="w-full max-w-[500px] h-[500px] sm:h-[600px] object-cover border-white border-[10px] shadow-lg" />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-[20px] -mt-5">
            <DefaultHeader title="About Us" position="start" />
            <h2 className="text-2xl sm:text-4xl !-mt-[30px]">
              <span className="font-normal">One Of The Leaders in Textile</span> <br />
              <span className="text-black font-bold text-[24px] sm:text-[30px]">
                Market Since <span className="text-primary">1989</span>
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg">A professionally managed export company M/S Sri Arasu Tex has got exclusive manufacturing home textile furnishing items for many international buyers.</p>

            <Divider className="!border-primary" />

            {/* Icons Row */}
            <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-start sm:justify-between gap-6">
              {hero_about.map((res, index) => {
                const Icon = res.icon;
                return (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-start justify-center space-y-1">
                      <Icon className="text-[30px] sm:text-[40px] text-primary" />
                      <p className="font-bold">{res.heading}</p>
                      <p className="text-sm sm:text-base">{res.content}</p>
                    </div>
                    <div className="!sm:hidden !block">{index !== hero_about.length - 1 && <Divider type="vertical" className=" !border-primary !h-[50px] mx-4" />}</div>
                  </React.Fragment>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-10">
              <p className="text-3xl sm:text-4xl text-primary">
                <ICON_HELPER.COTTON_ICON />
              </p>
              <p className="text-base sm:text-lg text-gray-700">we’ve recently launched the ability to shop fabrics online and shop poles & tracks online from our website too</p>
            </div>

            {/* Button + Contact */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 mt-10">
              <button className="bg-primary px-4 py-2 !text-white">KNOW MORE</button>
              <p className="flex items-center gap-3 font-bold text-lg sm:text-xl">
                <ICON_HELPER.phone_icon className="text-xl sm:text-2xl" />
                0091-4324-233551
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative h-[400px] w-full bg-cover bg-center font-primary flex items-center !mb-[100px] justify-center text-center text-white"
        style={{
          backgroundImage: `url(${IMAGE_HELPER.INSIDE_HERO1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <div className=" bg-primary p-4 rounded-full mb-6">
            <ICON_HELPER.YARN_ICON className="text-white text-8xl" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold max-w-[800px]">
            The Highest Quality Work <br />
            That Meets Your Expectation
          </h2>
        </div>
      </div>
      <div>
        <Services />
      </div>
      <div>
        <div className="w-[80%] mx-auto !mb-[120px] ">
          <DefaultHeader title="Our Commitment " content="" />
          <div className="flex flex-col gap-12 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-1/2 h-[150px]">
                <img src={IMAGE_HELPER.ZIG_ZAG_IMAGES1} alt="Fabric selection" className="w-full h-[150px] object-cover rounded-xl shadow-lg brightness-60" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white px-6 py-2 rounded-md text-2xl font-bold shadow-md">Global Fabric Needs</div>
              </div>
              <div className="bg-white border border-primary rounded-xl p-6 text-lg font-primary shadow-md max-w-xl w-full">
                <p>International clients have varied needs in fabric selection, style, design, colors, and finish. But all demand: quality, price, and delivery.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 ">
              <div className=" border border-primary bg-primary text-white rounded-xl p-6 text-lg font-primary shadow-md max-w-[612px] w-full h-[150px]">
                <p>85% of our manufacturing is based on client specifications—highlighting our commitment to quality and client relationships.</p>
              </div>
              <div className="relative w-full md:w-1/2 h-[150px]">
                <img src={IMAGE_HELPER.ZIG_ZAG_IMAGES2} alt="Client satisfaction" className="w-full h-[150px] object-cover rounded-xl shadow-lg brightness-60" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  !text-white px-6 py-2 rounded-md text-2xl font-bold shadow-md ">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-1/2 h-[150px]">
                <img src={IMAGE_HELPER.ZIG_ZAG_IMAGES3} alt="Production" className="w-full h-[150px] object-cover rounded-xl shadow-lg brightness-60" />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white px-6 py-2 rounded-md text-2xl font-bold shadow-md ">Reliable Production</div>
              </div>

              <div className="bg-white border border-primary rounded-xl p-6 text-lg font-primary shadow-md max-w-xl w-full">
                <p>With a strong workforce, we handle dyeing, weaving, and finishing of large volume orders, delivering on time with precision.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
