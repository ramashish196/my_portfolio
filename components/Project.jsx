"use client";
import React from "react";
import ProjectItems from "./ProjectItems";
import { useMyContext } from "@/context/myContext";
const Project = () => {
  const { dark, setDark } = useMyContext();
  return (
    <>
      <div
        id="projects"
        className={
          dark
            ? "w-full h-full px-14 bg-[#15282b] text-gray-200"
            : "w-full h-full px-14"
        }
      >
        <div className="w-full h-full py-16">
          <p className="text-xl tracking-widest uppercase">Project</p>
          <h2 className="text-2xl font-bold py-4">What I've built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItems title="my_Project" projectURL="/myProject" />
            <ProjectItems title="my_Project" projectURL="/myProject" />
            <ProjectItems title="my_Project" projectURL="/myProject" />
            <ProjectItems title="my_Project" projectURL="/myProject" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
