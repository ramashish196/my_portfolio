"use client";
import React, { useState } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="w-full h-24 bg-red-400 px-20">
        <div className="flex flex-row justify-between items-center h-full">
          <h1>nav</h1>
          <div className="m-auto">
            <ul className="hidden md:flex flex-row gap-x-4">
              <li>Home</li>
              <li>Project</li>
              <li>Skills</li>
            </ul>
          </div>
          <div onClick={handleNav} className="md:hidden">
            <CgMenuRightAlt className="text-2xl" />
          </div>
        </div>
      </div>

      {/* aside bar */}

      <div
        className={
          nav ? `md:hidden fixed left-0 top-0 w-full h-screen bg-black/70` : ""
        }
      >
        <div
          className={
            nav
              ? `fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45
      %] h-screen bg-[#ecf0f3] ease-in duration-500`
              : `fixed left-[-100%] top-0 h-screen  bg-[#ecf0f3] ease-in duration-500`
          }
        >
          <div className="p-5">
            <div className="w-full h-14 flex justify-between items-center border-b border-b-emerald-500 mb-3">
              <h1 className="text-red-800 text-2xl">rv</h1>
              <div onClick={handleNav}>
                <CgClose className="text-black text-3xl cursor-pointer rounded-full shadow-lg shadow-gray-400 p-2" />
              </div>
            </div>
            <ul className="text-red-700 pt-3 flex flex-col px-8 gap-y-6">
              <li>Home</li>
              <li>Project</li>
              <li>Skills</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
