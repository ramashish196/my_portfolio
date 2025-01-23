import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen px-20 flex justify-between ">
        <div>
          <h2>hi</h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            odit nam est corporis vero quo consectetur qui voluptates voluptatum
            modi in, veritatis at! Placeat quos reiciendis nobis voluptatibus
            ratione. Quod?
          </p>
          <button>click</button>
        </div>
        <div>
          <Image src={"/mypic.jpg"} width={200} height={200} alt="mypic" />
        </div>
      </div>
    </>
  );
};

export default Hero;
