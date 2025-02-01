"use client";
import React, { useState } from "react";
import { useMyContext } from "@/context/myContext";
import { RiContactsLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { IoIosCall } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import VerticalTimeline from "./VerticalTimeline";
const About = () => {
  const { dark } = useMyContext();
  const btnInfo = ["personal info", "experiences"];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleBtnActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div
        id="contact"
        className={
          dark
            ? "w-full h-full px-14 bg-[#15282b] text-gray-200"
            : "w-full h-full px-14 "
        }
      >
        <div className="w-full h-full py-2 ">
          <p className="text-2xl tracking-widest uppercase text-center p-3 text-sky-800">
            about me
          </p>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left section */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <img
                    src="/mypic.jpg"
                    alt="/"
                    className="rounded-xl hover:scale-105 ease-in duration-200"
                  />
                </div>
              </div>
            </div>

            {/* right section */}
            <div className="col-span-3 rounded-xl shadow-xl shadow-gray-400 w-full h-auto lg:p-4">
              <div className="p-4 ">
                <div>
                  <div className="w-full flex sm:rounded-full shadow-xl items-center">
                    <div className="m-auto flex flex-col sm:flex-row gap-4 justify-center p-3">
                      {btnInfo.map((text, index) => (
                        <div key={index} onClick={() => handleBtnActive(index)}>
                          <p
                            className={
                              activeIndex === index
                                ? "flex-1 rounded-full bg-sky-950 p-3 uppercase text-gray-200 cursor-pointer"
                                : "flex-1 p-3 uppercase cursor-pointer"
                            }
                          >
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* content div */}
                  {activeIndex === 0 && (
                    <div className="w-full p-3 mt-4 flex flex-col gap-y-4">
                      <h2>Personal Info</h2>
                      <p>
                        I specilize in crafting intuitive websites with
                        top-notch technology, delivering dynamic and engaging
                        user experiences.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-x-6">
                          <RiContactsLine />
                          <p>ramashish vishwakarma</p>
                        </div>
                        <div className="flex items-center gap-x-6">
                          <IoMail />
                          <p>ramashishvishwakarma1@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-x-6">
                          <PiCertificateFill />
                          <p>B.Tech ECE</p>
                        </div>
                        <div className="flex items-center gap-x-6">
                          <IoIosCall />
                          <p>8840235925</p>
                        </div>
                        <div className="flex items-center gap-x-6">
                          <HiHome />
                          <p>Gorakhpur UP</p>
                        </div>
                        <div className="flex items-center gap-x-6">
                          <IoLocationSharp />
                          <p>India</p>
                        </div>
                      </div>
                      <div className="mt-2 px-2">
                        <p className="uppercase -tracking-wider text-sky-900">
                          languages
                        </p>
                        <p className="uppercase -tracking-wider">
                          english, hindi
                        </p>
                      </div>
                    </div>
                  )}
                  {activeIndex === 1 && (
                    <div className="w-full p-3 mt-4">
                      <h2>Experiences</h2>
                      <div>
                        <VerticalTimeline />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
