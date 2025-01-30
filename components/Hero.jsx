"use client";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { useMyContext } from "@/context/myContext";
const Hero = () => {
  const { dark, setDark } = useMyContext();
  return (
    <>
      <div
        id="hero"
        className={
          dark
            ? `w-full h-screen px-14 text-center bg-[#15282b] text-gray-200`
            : "w-full h-screen px-14 text-center"
        }
      >
        <div className="w-full h-full flex justify-center items-center m-auto">
          <div>
            <p className="text-base uppercase">
              let's design something together
            </p>
            <h1 className="text-4xl py-4">Hi, I'm Ramashish Vishwakarma</h1>
            <h1 className="text-4xl py-2">A MERN Developer</h1>
            <p className="max-w-[70%] m-auto py-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              explicabo, mollitia totam blanditiis repudiandae nemo inventore
              numquam consequuntur, sint vero cum enim amet rerum id? Corrupti
              possimus dolore reprehenderit dignissimos.
            </p>
            <div className="flex justify-center items-center max-w-[330px] m-auto py-4 gap-x-10">
              <div className="text-xl cursor-pointer rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="text-xl cursor-pointer rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
              <div className="text-xl cursor-pointer rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-110 ease-in duration-300">
                <SiGmail />
              </div>
              <div className="text-xl cursor-pointer rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-110 ease-in duration-300">
                <GrContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
