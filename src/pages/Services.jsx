import React from "react";
import DefaultHeader from "../components/DefaultHeader";
import { servicesData } from "../helper/datahelper";
import { IMAGE_HELPER } from "../helper/imagehelper";

const Services = () => {
  return (
    <div className="w-[80%] mx-auto mb-20 font-primary">
      <DefaultHeader title="Our Process" content="Exclusive Quality" />

      <div className="flex flex-wrap justify-center gap-10 bg-contain bg-no-repeat bg-center py-5" style={{ backgroundImage: `url(${IMAGE_HELPER.BG_IMAGE})`, backgroundPosition: "center 20%" }}>
        {servicesData.map((item, index) => (
          <div key={index} className={`flex flex-col items-center max-w-[250px] group ${index % 2 === 0 ? "mt-16" : "mt-4"}`}>
            <div className="relative">
              <div className="rounded-full overflow-hidden transition duration-300 w-[150px] h-[150px] shadow-lg hover:border-4 hover:border-primary">
                <img src={item.icon} alt={item.title || `Service ${index + 1}`} className="w-full h-full object-cover" />
              </div>

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-md">{String(index + 1).padStart(2, "0")}</div>
            </div>

            <h3 className="text-center mt-6 font-semibold group-hover:text-primary transition duration-300">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
