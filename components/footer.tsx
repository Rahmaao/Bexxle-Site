"use client";
import { Mail, MapPin, Smartphone } from "lucide-react";

export const Footer = () => {
  return (
    <>
      <div className="w-full h-96 bg-white flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row w-[85%] h-[90%]">
          <div className="w-full lg:w-[50%] h-[60%] lg:h-full flex flex-col justify-around">
            <div className="h-[45%] w-[65%] md:w-[50%] lg:w-[75%] xl:w-[55%]">
              <a href="">
                <div className="h-[80%] md:w-[60%] w-[75%] lg:w-[85%]">
                  <img
                    src="/bexxle-logo.svg"
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
              </a>
              <div className="h-[20%] w-full">
                <p className="text-[9px] md:text-sm font-semibold text-[#361163]">
                  Empowering businesses through software.
                </p>
              </div>
            </div>
            <div className="h-[45%] w-[85%] md:w-[55%] lg:w-[70%] flex flex-col justify-around">
              <div className="h-[25%] w-full  flex">
                <div className="h-full w-[12%] lg:w-[10%] flex justify-start items-center">
                  <Mail className="text-[#9D60EB] w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]" />
                </div>
                <div className="h-full w-full lg:w-[80%] flex items-center">
                  <p className="text-xs lg:text-sm xl:text-[16px] font-medium text-[#777777]">
                    hello@bexxletech.com
                  </p>
                </div>
              </div>
              <div className="h-[25%] w-full flex">
                <div className="h-full w-[12%] lg:w-[10%] flex justify-start items-center">
                  <Smartphone className="text-[#9D60EB] w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]" />
                </div>
                <div className="h-full w-full lg:w-[80%] flex items-center">
                  <p className="text-xs lg:text-sm xl:text-[16px] font-medium text-[#777777]">
                    +(290) 520-7927, +(290) 520-7927
                  </p>
                </div>
              </div>
              <div className="h-[25%] w-full flex">
                <div className="h-full w-[12%] lg:w-[10%] flex justify-start items-center">
                  <MapPin className="text-[#9D60EB] w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]" />
                </div>
                <div className="h-full w-full lg:w-[80%] flex items-center">
                  <p className="text-xs lg:text-sm xl:text-[16px] font-medium text-[#777777]">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t lg:border-none lg:w-[50%] h-[40%] lg:h-full flex flex-col lg:items-end justify-evenly lg:justify-around">
            <div className="w-[95%] lg:w-[75%] h-[30%] flex justify-between items-center">
              <a
                href=""
                className="lg:pb-2 text-[9px] md:text-[11px] text-[#777777] font-Poppins font-[550] items-center justify-center hover:text-[#6554CF]"
                style={{ textDecoration: "none" }}
              >
                HOME
              </a>
              <a
                href=""
                className="lg:pb-2 text-[9px] md:text-[11px] text-[#777777] font-Poppins font-[550] items-center justify-center hover:text-[#6554CF]"
                style={{ textDecoration: "none" }}
              >
                ABOUT US
              </a>
              <a
                href=""
                className="lg:pb-2 text-[9px] md:text-[11px] text-[#777777] font-Poppins font-[550] items-center justify-center hover:text-[#6554CF]"
                style={{ textDecoration: "none" }}
              >
                SERVICES
              </a>

              <a
                href=""
                className="lg:pb-2 text-[9px] md:text-[11px] text-[#777777] font-Poppins font-[550] items-center justify-center hover:text-[#6554CF]"
                style={{ textDecoration: "none" }}
              >
                TEAM
              </a>
              <a
                href=""
                className="lg:pb-2 text-[9px] md:text-[11px] text-[#777777] font-Poppins font-[550] items-center justify-center hover:text-[#6554CF]"
                style={{ textDecoration: "none" }}
              >
                CONTACT
              </a>
            </div>
            <div className="w-[22%] md:w-[10%] lg:w-[20%] xl:w-[14%] h-[25%] flex justify-between items-center">
              <a href="">
                <img
                  src="/ig.svg"
                  alt="Image"
                  className="w-[28px] lg:w-[36px] h-[28px] lg:h-[36px] object-contain object-center"
                />
              </a>

              <a href="">
                <img
                  src="/in.svg"
                  alt="Image"
                  className="w-[28px] lg:w-[36px] h-[28px] lg:h-[36px] object-contain object-center"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="h-8 w-full flex justify-center items-center">
          <div className="h-[50%] w-[60%] lg:w-[35%]">
            <p className="text-[8px] lg:text-xs text-center text-[#CECECE] underline">
              Copyright © Bexxle Tech 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
