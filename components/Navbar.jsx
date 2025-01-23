import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-24 bg-red-400 px-20">
        <div className="flex flex-row justify-between items-center h-full">
          <h1>nav</h1>
          <div className="m-auto">
            <ul className="flex flex-row gap-x-4">
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
