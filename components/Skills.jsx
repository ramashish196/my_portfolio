"use client";
import Image from "next/image";
import React from "react";
import { useMyContext } from "@/context/myContext";
import { imageData } from "@/utils/imageData";

const Skills = () => {
  const { dark, setDark } = useMyContext();
  return (
    <div
      id="skills"
      className={
        dark
          ? "w-full h-full px-14 bg-[#15282b] text-gray-200 pt-6"
          : "w-full h-full px-14 pt-6"
      }
    >
      <div className="w-full h-full flex flex-col justify-center items-center mx-auto py-2">
        <p className="text-xl tracking-widest uppercase text-sky-800">Skills</p>
        <h2>What I can do</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {imageData.map((skill) => (
            <div
              key={skill.name}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    alt={skill.name}
                    src={skill.src}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
