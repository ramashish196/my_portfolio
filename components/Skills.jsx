"use client";
import Image from "next/image";
import React from "react";

const imageData = [
  { src: "/image/CSS3.svg", name: "CSS" },
  { src: "/image/Docker.svg", name: "Docker" },
  { src: "/image/Git.svg", name: "Git" },
  { src: "/image/Graphql.svg", name: "GraphQL" },
  { src: "/image/HTML5.svg", name: "HTML" },
  { src: "/image/JavaScript.svg", name: "JavaScript" },
  { src: "/image/MongoDB.svg", name: "MongoDB" },
  { src: "/image/Next.js.svg", name: "Next.js" },
  { src: "/image/NGINX.svg", name: "NGINX" },
  { src: "/image/Node.js.svg", name: "Node.js" },
  { src: "/image/PostgresSQL.svg", name: "PostgresSQL" },
  { src: "/image/React.svg", name: "React" },
  { src: "/image/Redis.svg", name: "Redis" },
  { src: "/image/Socket.io.svg", name: "Socket.io" },
  { src: "/image/Tailwind CSS.svg", name: "Tailwind CSS" },
  { src: "/image/TypeScript.svg", name: "TypeScript" },
];

const Skills = () => {
  return (
    <div className="w-full h-full px-14">
      <div className="w-full h-full flex flex-col justify-center items-center mx-auto py-2">
        <p className="text-xl tracking-widest uppercase text-purple-800">
          Skills
        </p>
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
