"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { useMyContext } from "@/context/myContext";

const Footer = () => {
  const { dark, setDark } = useMyContext();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={
        dark
          ? "w-full h-full px-14 bg-[#15282b] text-gray-200"
          : "w-full h-full px-14"
      }
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex justify-center items-center max-w-[330px] m-auto py-4 gap-x-10">
          <div className=" cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-110 ease-in duration-300">
            <FaLinkedinIn />
          </div>
          <div className=" cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-110 ease-in duration-300">
            <FaGithub />
          </div>
          <div className=" cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-110 ease-in duration-300">
            <SiGmail />
          </div>
          <div className=" cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-110 ease-in duration-300">
            <GrContactInfo />
          </div>
        </div>
        {/* <p className="tracking-widest uppercase text-center p-2">
          code by ramashish vishwakarma
          </p> */}
        <div className="relative w-60 h-14 overflow-hidden cursor-pointer group flex justify-center items-center">
          <span className=" absolute transition-transform duration-500 group-hover:-translate-x-full group-hover:opacity-0 p-3 uppercase">
            Code By
          </span>
          <span className="absolute translate-x-full opacity-0 transition-transform duration-500 group-hover:translate-x-0 group-hover:opacity-100 uppercase">
            Ramashish Vishwakarma
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
