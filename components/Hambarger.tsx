"use client";
import { useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      <button
        className="focus:outline-none w-8 h-8 cursor-pointer overflow-hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-6 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-6  my-0.5 ${
            isOpen ? "-translate-x-5 opacity-0" : "translate-x-0  opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-6 rounded-sm  ${
            isOpen ? " -rotate-45 -translate-y-1" : "translate-y-1"
          } `}
        ></span>
      </button>
    </div>
  );
};

export default Hamburger;
