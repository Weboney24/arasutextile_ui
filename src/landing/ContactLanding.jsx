import React from "react";
import { Input, Button, Checkbox, Divider } from "antd";
import CustomHero from "../components/CustomHero";
import DefaultHeader from "../components/DefaultHeader";
import "antd/dist/reset.css";
import { ICON_HELPER } from "../helper/iconhelper";
import { IMAGE_HELPER } from "../helper/imagehelper";

const ContactLanding = () => {
  return (
    <div>
      <CustomHero title=" " imagurl={IMAGE_HELPER.INSIDE_HERO1} />

      {/* Contact Form */}
      <div className="bg-white shadow-lg relative z-30 -mt-[250px] h-auto mb-20 w-full md:w-[90%] xl:w-[80%] mx-auto p-5 md:p-10 rounded-lg">
        <div className="pt-[20px] mb-6">
          <DefaultHeader title="Contact Form" content="Feel free to contact us through Twitter or Facebook if you prefer." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input placeholder="Your Name*" className="!h-[50px] !rounded-none !bg-gray-100 hover:!border-primary" />
          <Input placeholder="Your Email*" className="!h-[50px] !rounded-none !bg-gray-100 hover:!border-primary" />
          <Input placeholder="Phone Number*" className="!h-[50px] !rounded-none !bg-gray-100 hover:!border-primary" />
          <Input placeholder="Company Name*" className="!h-[50px] !rounded-none !bg-gray-100 hover:!border-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Input placeholder="Subject*" className="!h-[50px] !rounded-none !bg-gray-100 hover:!border-primary" />
        </div>

        <div className="mt-6">
          <Input.TextArea rows={4} placeholder="Message*" className="!h-[150px] !rounded-none !bg-gray-100 hover:!border-primary" />
        </div>

        <div className="mt-4 flex items-start gap-2">
          <Checkbox />
          <span className="text-gray-500 text-sm">I agree that my submitted data is being collected and stored.</span>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Button type="primary" className="!bg-primary font-bold !rounded-none text-white w-[140px] h-12">
            SEND NOW!
          </Button>
        </div>
      </div>

      {/* Contact Info + Map Section */}
      <div className="w-full xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-0 !mb-[200px]">
        {/* Google Map */}
        <div className="w-full h-[400px]">
          <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3544.662484428933!2d78.06712927504458!3d10.964915889195582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU3JzUzLjciTiA3OMKwMDQnMTAuOSJF!5e1!3m2!1sen!2sin!4v1747457215313!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col justify-center gap-10 font-primary">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Get In <span className="text-primary">Touch!</span>
            </h1>

            {/* Head Office */}
            <div className="mb-6">
              <h3 className="text-xl font-bold">Head Office</h3>
              <Divider className="!border-primary" />

              <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <ICON_HELPER.LOCATION_ICON className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p>19, Kamarajapuram west, 1st Street Karur - 639002.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <ICON_HELPER.MAIL_ICON className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us / Email</h4>
                    <p>0091-4324-233551</p>
                    <p>vijayan@sriarasutex.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Office */}
            <div>
              <h3 className="text-xl font-bold">Branch Office</h3>
              <Divider className="!border-primary" />

              <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <ICON_HELPER.LOCATION_ICON className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p>19, Kamarajapuram west, 1st Street Karur - 639002.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <ICON_HELPER.MAIL_ICON className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us / Email</h4>
                    <p>0091-4324-233551</p>
                    <p>vijayan@sriarasutex.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLanding;
