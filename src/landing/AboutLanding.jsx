import React from "react";
import CustomHero from "../components/CustomHero";
import { IMAGE_HELPER } from "../helper/imagehelper";
import { hero_about } from "../helper/datahelper";
import DefaultHeader from "../components/DefaultHeader";
import { Divider } from "antd";
import { ICON_HELPER } from "../helper/iconhelper";
import Services from "../pages/Services";
import Blogs from "../pages/Blogs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";

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
            <p className="text-[17px] sm:text-[18px] leading-relaxed text-gray-700 text-justify">
              Sri Arasu Tex is a globally recognized manufacturer and exporter of premium home textile products. With a rich legacy spanning over <strong>36 years</strong>, we’ve built strong partnerships with clients across <strong>USA, UK, Germany, France, Italy, Australia, UAE</strong> and more.
            </p>
            <p className="text-[17px] sm:text-[18px] leading-relaxed text-gray-700 text-justify">Our expertise lies in exclusively crafting a wide range of home textile products—from curtains and bed linen to kitchen, table, and living room furnishings.</p>
            <p className="text-[17px] sm:text-[18px] leading-relaxed text-gray-700 text-justify">Dedicated to continuous improvement, we stay well-informed of global design trends and adhere to international compliance standards. This commitment ensures that every product we deliver meets stringent quality benchmarks, aligning with the evolving preferences of our global clientele.</p>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto my-10 font-primary">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex-1 px-6 py-6 rounded-2xl bg-white transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Fabric Types</h2>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Cotton/Polyester blend</li>
              <li>Cotton/Linen blend</li>
              <li>Cotton/Bamboo blend</li>
              <li>Cotton/Viscose blend</li>
              <li>Cotton/Modal blend</li>
              <li>Polyester</li>
            </ul>
          </div>

          <div className="flex-1 px-6 py-6 rounded-2xl bg-white transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Wearing Types</h2>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Plain</li>
              <li>Dobby</li>
              <li>Jacquard</li>
              <li>Waffle</li>
              <li>Terry</li>
              <li>Velvet</li>
            </ul>
          </div>

          <div className="flex-1 px-6 py-6 rounded-2xl bg-white transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Inner Filling</h2>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>Cotton</li>
              <li>Recycled Cotton</li>
              <li>Polyester</li>
              <li>Recycled Polyester</li>
              <li>Wool Polyester</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <Services dis={true} />
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
              <div className=" border border-primary rounded-xl p-6 text-lg font-primary shadow-md max-w-[612px] w-full h-[150px]">
                <p>We deliver globally trusted fabrics that balance quality, price, innovation, and on-time delivery.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 ">
              <div className=" border border-primary rounded-xl p-6 text-lg font-primary shadow-md max-w-[612px] w-full h-[150px]">
                <p>Our manufacturing is based on client specifications—highlighting our commitment to quality and client relationships.</p>
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
                <p>We have a skilled team dedicated to dying, weaving, and finishing. We handle the large volume order with precision. We consistently work to meet our deadlines</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#fff0f2] py-12 px-6 font-sans overflow-hidden !mb-[120px]">
        {/* Background Accents */}
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-pink-200 opacity-30 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-emerald-200 opacity-30 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>

        {/* Main Layout Container */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Mission + Stats */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-primary mb-4">🌱 Our Mission</h2>
              <p className="text-gray-800 leading-relaxed">‘Our goal is to create a sustainable future by addressing poverty, promoting environmental care, and empowering communities to thrive. Every donation helps plant a seed of hope and changemoting environmental care, and empowering communities to thrive. Every donation helps plant a seed of hope and change.We plant treea, we fight poverty . we change lives’</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "🌳 10,000+ Trees", desc: "Planted across rural villages." },
                { title: "🏫 50+ Scholarships", desc: "For underprivileged children." },
                { title: "💧 Clean Water", desc: "Projects funded in 15 villages." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 hover:border-primary hover:shadow-primary transition-all duration-300 rounded-xl p-5 shadow-md hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Poverty Impact Card */}
            <div className="bg-primary text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-36 h-36 bg-white opacity-30 rounded-full blur-2xl animate-ping"></div>
              <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <TbActivityHeartbeat className="text-5xl" /> 14.5%
              </h2>
              <p className="text-base text-white">of the world’s population is living in poverty</p>
              <p className="mt-3 italic text-sm text-white">“Change doesn’t happen overnight, but it starts with a single act of kindness.”</p>
              <div className="mt-5 pt-2 text-sm text-white">💚 Caring about the environment is powerful. Let’s grow together.</div>
            </div>

            {/* Foundation Info Card */}
            <div className="p-8">
              <h1 className="text-3xl font-black mb-2">N Chella Appa Foundation</h1>
              <p className="text-base font-medium text-[#083b2d]">We plant trees. We fight poverty. We change lives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
