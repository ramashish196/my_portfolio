import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItems = ({ title, projectURL }) => {
  return (
    <>
      <div className="relative w-full h-auto flex justify-center items-center shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] z-10">
        <Image
          src={"/image/Docker.svg"}
          width={200}
          height={200}
          alt="/"
          className="rounded-xl group-hover:opacity-25"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:ease-in duration-300 z-10">
          <h2 className="text-2xl text-white -tracking-wider text-center">
            {title}
          </h2>
          <p className="text-center text-white pb-4 pt-2">react JS</p>
          <Link href={projectURL}>
            <p className="bg-white py-2 text-center rounded-lg text-gray-700 font-bold cursor-pointer">
              more info
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectItems;
