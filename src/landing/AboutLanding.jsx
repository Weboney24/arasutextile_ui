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
              <div className="bg-white border border-primary rounded-xl p-6 text-lg font-primary shadow-md max-w-xl w-full">
                <p>We deliver globally trusted fabrics that balance quality, price, innovation, and on-time delivery.</p>
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
                <p>We have a skilled team dedicated to dying, weaving, and finishing. We handle the large volume order with precision. We consistently work to meet our deadlines</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0e1a1f] min-h-screen py-12 px-6 text-white font-sans space-y-20 !mb-[120px] ">
        {/* Top Section: Hero */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Impact */}
          <div className="bg-[#13262f] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-500 opacity-20 rounded-full blur-2xl animate-ping"></div>
            <h2 className="text-5xl font-extrabold text-green-400 mb-4 flex items-center gap-2">
              <TbActivityHeartbeat /> 14.5%
            </h2>
            <p className="text-xl text-gray-200 font-medium">of the world’s population is living in poverty</p>
            <p className="mt-4 italic text-sm text-green-100">“Change doesn’t happen overnight, but it starts with a single act of kindness.”</p>
            <div className="mt-8 border-t border-gray-600 pt-4 text-sm text-gray-400">💚 Caring about the environment is powerful. Let’s grow together.</div>
          </div>

          {/* Right: CTA */}
          <div className="bg-gradient-to-tr from-green-600 to-lime-400 rounded-3xl p-10 shadow-2xl text-[#0e1a1f]">
            <h1 className="text-4xl font-black mb-3">N Chella Appa Foundation</h1>
            <p className="text-lg font-medium mb-6">We plant trees. We fight poverty. We change lives.</p>

            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#13262f] to-lime-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
              💖
              <span>Donate Now</span>
            </button>

            <div className="mt-6 text-sm font-semibold">
              📞 For info, call <span className="underline">9487506551</span>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-4">🌱 Our Mission</h2>
          <p className="text-gray-300 text-lg">Our goal is to create a sustainable future by addressing poverty, promoting environmental care, and empowering communities to thrive. Every donation helps plant a seed of hope and change.</p>
        </div>

        {/* Goals Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#1a2a33] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-green-300">🌳 10,000+ Trees</h3>
            <p className="text-sm text-gray-400 mt-2">Planted across rural villages.</p>
          </div>
          <div className="bg-[#1a2a33] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-green-300">🏫 50+ Scholarships</h3>
            <p className="text-sm text-gray-400 mt-2">For underprivileged children.</p>
          </div>
          <div className="bg-[#1a2a33] p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-green-300">💧 Clean Water</h3>
            <p className="text-sm text-gray-400 mt-2">Projects funded in 15 villages.</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-green-400">🗣️ What People Say</h2>
          <div className="bg-[#1f2f37] p-6 rounded-xl">
            <p className="text-gray-200 italic">"This foundation changed the future of my village. They gave us trees, water, and most importantly, hope."</p>
            <p className="mt-2 text-sm text-gray-400">— Lakshmi, Beneficiary</p>
          </div>
        </div>

        {/* Donation Tiers */}
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-green-400">💳 Choose Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a2a33] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-lime-300">₹100</h3>
              <p className="text-sm text-gray-400 mt-1">Plant 1 tree</p>
            </div>
            <div className="bg-[#1a2a33] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-lime-300">₹500</h3>
              <p className="text-sm text-gray-400 mt-1">Fund 1 child’s monthly education</p>
            </div>
            <div className="bg-[#1a2a33] p-6 rounded-xl">
              <h3 className="text-xl font-bold text-lime-300">₹1000+</h3>
              <p className="text-sm text-gray-400 mt-1">Support full village initiative</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm pt-12 border-t border-gray-700">N Chella Appa Foundation © {new Date().getFullYear()} | Together for a greener tomorrow 🌍</div>
      </div>
    </div>
  );
};

export default AboutLanding;
