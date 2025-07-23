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
      <div className="w-[80%] mx-auto py-0 mb-[40px] font-primary">
        <div className="flex flex-col lg:flex-row items-center gap-10 ">
          {/* Image Left - Bigger Height */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={IMAGE_HELPER.ABOUT_IMAGE} alt="Sri Arasu Tex" className="w-full max-w-[650px] h-[550px] lg:h-[550px] object-cover rounded-md shadow-md border-4 border-white" />
          </div>

          {/* Text Right */}
          <div className="w-full lg:w-1/2 space-y-0 !-mt-[60px]">
            <DefaultHeader title="About Us" position="start" />

            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Exporting Excellence Since 1989</h2>

            <p className="text-[17px] sm:text-[18px] leading-relaxed text-gray-700">
              Sri Arasu Tex is a globally recognized manufacturer and exporter of premium home textile products. With a rich legacy spanning over <strong>36 years</strong>, we’ve built strong partnerships with clients across <strong>USA, UK, Germany, France, Italy, Australia, UAE</strong> and more.
            </p>

            <p className="text-[17px] sm:text-[18px] leading-relaxed text-gray-700">Our expertise lies in exclusively crafting a wide range of home textile products—from curtains and bed linen to kitchen, table, and living room furnishings.</p>

            <p className="text-[17px] sm:text-[18px] leading-relaxed text-gray-700">With a commitment to innovation, we stay updated with global design trends and compliance standards, ensuring every product we ship meets international quality benchmarks.</p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
              <button className="bg-primary !text-white px-6 py-2 rounded-md hover:bg-primary/90 transition">Know More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto my-10 font-primary">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex-1 px-6 py-6 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Fabric Types</h2>
            <p className="text-gray-600 leading-relaxed line-clamp-2">Cotton, Cotton or Polyester, Cotton or Linen, Cotton or Bamboo, Cotton or Viscose, Cotton or Modal, Polyester, Linen, Bamboo, Viscose, Modal, Woolen</p>
          </div>

          <div className="flex-1 px-6 py-6 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Wearing Types</h2>
            <p className="text-gray-600 leading-relaxed line-clamp-2">Plain, Dobby, Jacquard, Waffle, Terry, and Velvet</p>
          </div>

          <div className="flex-1 px-6 py-6 rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Inner Filling</h2>
            <p className="text-gray-600 leading-relaxed line-clamp-2">Cotton, Recycled Cotton, Polyester, Recycled Polyester, Wool Polyester</p>
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
      <div className="flex items-center justify-between w-[80%] mx-auto gap-10 my-10 !mb-[120px]">
        {/* Image Section */}
        <div className="w-1/2">
          <img src={IMAGE_HELPER.FOUNDATION_IMAGE} alt="Foundation" className="rounded-xl shadow-lg w-full h-auto object-cover" />
        </div>

        {/* Content Section */}
        <div className="w-1/2 space-y-6">
          {/* Top Heading: Foundation Name in Two Lines */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight font-primary">
              N <span className="text-green-700 ">CHELLA</span> APPA
              <br />
              FOUNDATION
            </h1>
          </div>

          {/* Subheading: Live Green */}
          <div>
            <h2 className="text-3xl font-bold text-green-600 font-primary mb-2">LIVE GREEN</h2>
            <p className="text-gray-700 font-medium text-lg">Caring about the environment is beautiful.</p>
          </div>

          {/* Quote */}
          <p className="text-[18px] text-gray-800 font-semibold italic leading-relaxed">"Instead of being keen on making money, plant some trees to flourish the disease-free generation."</p>

          {/* Donate Button */}
          <div className="bg-green-600 text-white py-4 px-6 rounded-xl text-center shadow-md hover:bg-green-700 transition-all duration-300 w-max">
            <button className="font-bold text-xl tracking-wide">DONATE YOUR CONTRIBUTION</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
