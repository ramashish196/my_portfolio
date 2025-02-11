"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useMyContext } from "@/context/myContext";

const Contact = () => {
  const { dark, setDark } = useMyContext();
  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0 });
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
          <p className="text-2xl tracking-widest uppercase">Contact</p>
          <h2 className="py-4">Get in touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left section */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <img
                    src="/image/contact.jpg"
                    alt="/"
                    className="rounded-xl hover:scale-105 ease-in duration-200"
                  />
                </div>
                <div>
                  <h2 className="py-4">name here</h2>
                  <p>mern developer</p>
                  <p className="py-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    totam minima
                  </p>
                </div>
                <div>
                  <p className="text-xl uppercase pt-6">connet with me</p>
                  <div className="flex justify-evenly items-center py-4">
                    <div className="text-xl cursor-pointer rounded-full shadow-lg shadow-gray-400 p-5 hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                    <div className="text-xl cursor-pointer rounded-full shadow-lg shadow-gray-400 p-5 hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                    <div className="text-xl cursor-pointer rounded-full shadow-lg shadow-gray-400 p-5 hover:scale-110 ease-in duration-300">
                      <SiGmail />
                    </div>
                    <div className="text-xl cursor-pointer rounded-full shadow-lg shadow-gray-400 p-5 hover:scale-110 ease-in duration-300">
                      <GrContactInfo />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div className="col-span-3 rounded-xl shadow-xl shadow-gray-400 w-full h-auto lg:p-4">
              <div className="p-4">
                <form>
                  <div className="grid md:grid-cols-2 gap-4 py-2 w-full">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">name</label>
                      <input
                        type="text"
                        className="border-2 rounded-lg flex border-gray-300 p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        phone number
                      </label>
                      <input
                        type="text"
                        className="border-2 rounded-lg flex border-gray-300 p-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">email</label>
                    <input
                      type="email"
                      className="border-2 rounded-lg flex border-gray-300 p-2"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">subject</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg flex border-gray-300 p-2"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">message</label>
                    <textarea
                      rows={10}
                      className={
                        dark
                          ? "rounded-lg shadow-xl border-gray-300 border-2 p-4 bg-[#15282b]"
                          : "rounded-lg shadow-xl border-gray-300 border-2 p-4"
                      }
                    ></textarea>
                  </div>
                  <button className="uppercase p-4 w-full mt-4 border-2 rounded-xl bg-gradient-to-r from-sky-950 to-sky-600">
                    send message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href={""}>
              <div
                className="text-xl cursor-pointer rounded-full shadow-lg shadow-gray-400 p-4 hover:scale-110 ease-in duration-300"
                onClick={handleScroll}
              >
                <MdKeyboardDoubleArrowUp size={30} onClick={handleScroll} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
