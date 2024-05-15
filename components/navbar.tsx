"use client";

import { useEffect, useState } from "react";
import Button from "./button";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setIsVisible(isVisible);

      const isScrolledUp = prevScrollPos > currentScrollPos;
      setIsScrolledUp(isScrolledUp);

      const isAtTop = currentScrollPos === 0;
      setIsAtTop(isAtTop);

      setPrevScrollPos(currentScrollPos);
    };

    // Check if window is defined (runs only on the client-side)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      setIsMobile(window.innerWidth < 800);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  const navbarItems = [
    { url: "#home", text: "Home" },
    { url: "#about", text: "About Us" },
    { url: "#services", text: "Services" },
    { url: "#team", text: "Team" },
    { url: "#contact", text: "Contact Us" },
  ];

  return (
    <>
      <nav
        className={`flex items-center lg:items-end justify-around flex-wrap fixed top-0 left-0 w-full lg:px-10 h-24 lg:h-32 transition-all duration-300 z-50 
  ${isVisible ? "transform translate-y-0" : "-translate-y-full"}
  ${
    isMobile
      ? "bg-white"
      : isScrolledUp && !isAtTop
      ? "bg-[#A2C5F4] bg-opacity-20"
      : ""
  }
`}
      >
        <a
          className="inline-flex items-center pl-3 lg:pl-0 h-[90%] w-[50%] lg:w-[15%]"
          href=""
        >
          <img
            src="/bexxle-logo.svg"
            alt=""
            className="object-contain w-full h-full"
          />
        </a>
        <button
          className=" inline-flex p-3 hover:text-[#6554CF] rounded lg:hidden text-zinc-900 ml-auto  outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:flex lg:justify-between lg:w-[70%] bg-white lg:bg-transparent lg:h-[90%]`}
        >
          <div className="lg:flex-row lg:justify-between w-full lg:w-[65%] lg:items-center items-start flex flex-col lg:h-auto">
            {navbarItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-[11px] uppercase text-black font-Poppins font-[550] items-center justify-center relative hover:text-[#6554CF]"
                style={{ textDecoration: "none" }}
              >
                {item.text}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[45%] rounded-full h-[3px] bg-[#6554CF] transition-all duration-300 opacity-0"></span>
              </a>
            ))}
          </div>
          <div className="flex lg:justify-end items-center h-14 w-[55%] lg:h-full lg:w-[20%] pl-3 lg:pl-0">
            <Button />
          </div>
        </div>
      </nav>
    </>
  );
};
