import React, { useEffect, useState } from "react";
import { IMAGE_HELPER } from "../helper/imagehelper";
import DefaultHeader from "../components/DefaultHeader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const HERO_IMAGES = [
    {
      image: IMAGE_HELPER.hero1,
      title: "Decades of industry knowledge in",
      subtitle: "delivering precision-crafted textiles.",
    },
    {
      image: IMAGE_HELPER.hero2,
      title: "We use only premium fabrics and",
      subtitle: "maintain strict quality control at every stage.",
    },
    {
      image: IMAGE_HELPER.hero3,
      title: "Get tailored designs to suit your",
      subtitle: "brand, market, and customer needs.",
    },
    {
      image: IMAGE_HELPER.hero4,
      title: "Eco-conscious processes and fair labor",
      subtitle: "practices are at the heart of what we do.",
    },
  ];

  const goToPrev = () => {
    setCurrentImage((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
  };

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
      <div className="relative min-h-[400px] md:min-h-[550px] lg:min-h-[650px] overflow-hidden font-primary">
        <img src={image} alt="Hero" className="absolute w-full h-full object-cover object-center brightness-110 transition-opacity duration-1000" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 bg-black/20">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{title}</h1>
          <h2 className="text-lg sm:text-2xl md:text-4xl font-medium drop-shadow-md">{subtitle}</h2>
        </div>

        {/* Navigation Arrows */}
        <button onClick={goToPrev} className="absolute top-1/2 left-3 transform -translate-y-1/2 hover:bg-black/50 text-white p-3 rounded-full z-10 transition">
          <FaArrowLeft size={20} className="!text-white" />
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-3 transform -translate-y-1/2 hover:bg-black/50 text-white p-3 rounded-full z-10 transition">
          <FaArrowRight size={20} className="!text-white" />
        </button>
      </div>

      {/* About Section */}
      <div className="relative bg-white mb-10 sm:mb-20 mt-10 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto shadow-lg p-5 sm:p-10 font-primary">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative flex flex-col justify-center items-center gap-2">
            <div className="bg-primary text-white text-xs sm:text-sm font-bold px-3 py-1 w-fit">36+ Years Of Experience!</div>
            <img src={IMAGE_HELPER.ABOUT_IMAGE} alt="Textile Machinery" className="w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover border-white border-[6px] sm:border-[10px] shadow-lg" />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-5">
            <DefaultHeader title="About Us" position="start" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl">
              <span className="font-normal">One Of The Leaders in Textile</span>
              <br />
              <span className="text-black font-normal text-lg sm:text-[28px]">
                Market Since <span className="text-primary font-bold">1989</span>
              </span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg text-justify">A professionally managed export company M/S Sri Arasu Tex has got exclusive manufacturing home textile furnishing items for many international buyers.</p>
            <p className="text-gray-600 text-base sm:text-lg text-justify">Sri Arasu Tex is a globally recognized manufacturer and exporter of premium home textile products. Established in 1989 and based in Karur, Tamil Nadu, a renowned textile hub of India, our company has leveraged over 36 years of expertise to serve international markets.</p>
            <p className="text-gray-600 text-base sm:text-lg text-justify">We have cultivated robust and enduring partnerships across Europe, the USA, the UK, Germany, France, Italy, Australia, the UAE, and more, supplying bespoke textile products that meet exacting client specifications.</p>
            <Link to={"/aboutus"} className="bg-primary px-5 py-2 text-white inline-block hover:bg-primary/80 transition">
              KNOW MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
