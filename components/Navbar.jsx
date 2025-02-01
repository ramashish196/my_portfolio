"use client";
import React, { useEffect, useState } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
import { useMyContext } from "@/context/myContext";

const Navbar = () => {
  const { dark, setDark } = useMyContext();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleDark = () => {
    setDark(!dark);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <>
      <div
        className={`fixed w-full h-20 px-14 z-100 ${
          dark ? "bg-[#15282B] text-gray-200" : "bg-zinc-300"
        } ${shadow && !dark ? "shadow-xl" : ""}`}
      >
        <div className="flex flex-row justify-between items-center h-full">
          {/* <h1>nav</h1> */}
          <div className="relative w-60 h-14 overflow-hidden cursor-pointer group flex justify-center items-center">
            <span className=" absolute transition-transform duration-500 group-hover:-translate-x-full group-hover:opacity-0 p-3 uppercase">
              Code By
            </span>
            <span className="absolute translate-x-full opacity-0 transition-transform duration-500 group-hover:translate-x-0 group-hover:opacity-100 uppercase">
              Ramashish Vishwakarma
            </span>
          </div>
          <div className="m-auto">
            <ul className="hidden md:flex flex-row gap-x-4">
              <Link href={"/#hero"}>
                <li>Home</li>
              </Link>
              <Link href={"/#projects"}>
                <li>Projects</li>
              </Link>
              <Link href={"/#skills"}>
                <li>Skills</li>
              </Link>
              <Link href={"/#contact"}>
                <li>Contact</li>
              </Link>
              <Link href={""}>
                <li>About</li>
              </Link>
              <div className="flex gap-x-2 justify-center items-center hover:cursor-pointer">
                <div className={dark ? `flex` : `hidden`} onClick={handleDark}>
                  <CiLight size={20} />
                </div>
                <div className={dark ? `hidden` : `flex`} onClick={handleDark}>
                  <FaMoon size={20} />
                </div>
              </div>
            </ul>
          </div>
          <div
            onClick={handleNav}
            className="md:hidden p-3 rounded-full shadow-lg shadow-gray-400 hover:shadow-gray-500 ease-in duration-200"
          >
            <CgMenuRightAlt />
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
              ? dark
                ? `fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45
              %] h-screen bg-[#15282b] ease-in duration-500`
                : `fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45
              %] h-screen bg-[#ecf0f3] ease-in duration-500`
              : `fixed left-[-100%] top-0 h-screen  bg-[#ecf0f3] ease-in duration-500`
          }
        >
          <div className="p-5">
            <div className="w-full h-14 flex justify-between items-center border-b border-b-emerald-500 mb-3">
              <h1 className="text-red-800 text-2xl">rv</h1>
              <div
                onClick={handleNav}
                className="text-black cursor-pointer rounded-full shadow-lg shadow-gray-400 hover:shadow-gray-500 ease-in duration-200 p-3"
              >
                <CgClose />
              </div>
            </div>
            <ul className="text-red-700 pt-3 flex flex-col px-8 gap-y-6">
              <Link
                onClick={() => {
                  setNav(false);
                }}
                href={"/#hero"}
              >
                <li>Home</li>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                href={"/#projects"}
              >
                <li>Projects</li>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                href={"/#skills"}
              >
                <li>Skills</li>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                href={"/#contact"}
              >
                <li>Contact</li>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                href={""}
              >
                <li>About</li>
              </Link>
              <div className="flex gap-x-2 items-center hover:cursor-pointer">
                <div className={dark ? `flex` : `hidden`} onClick={handleDark}>
                  <CiLight size={20} />
                </div>
                <div className={dark ? `hidden` : `flex`} onClick={handleDark}>
                  <FaMoon size={20} />
                </div>
              </div>
            </ul>
          </div>
          <div className="flex justify-center items-center max-w-[330px] m-auto py-4 gap-x-10 mt-12">
            <div className="text-sm cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="text-sm cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="text-sm cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-110 ease-in duration-300">
              <SiGmail />
            </div>
            <div className="text-sm cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-110 ease-in duration-300">
              <GrContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
