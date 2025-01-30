"use client";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { useMyContext } from "@/context/myContext";

const Footer = () => {
  const { dark, setDark } = useMyContext();
  return (
    <div
      className={
        dark
          ? "w-full h-full px-14 bg-[#15282b] text-gray-200"
          : "w-full h-full px-14"
      }
    >
      <div className="flex flex-col">
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
        <p className="tracking-widest uppercase text-center p-2">
          code by ramashish vishwakarma
        </p>
      </div>
    </div>
  );
};

export default Footer;
