import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="bg-white fixed">
      <div className="flex h-20 w-screen px-4 my-4 text-black">
      <div className="flex flex-inline w-screen justify-between border-2 border-black">
        <div className="border-r-2 border-black p-2">
          <h1 className="text-2xl font-bold">maria zamora</h1>
        </div>
        <div className="border-l-2 border-r-2 border-black p-4 w-full mx-2"></div>
        <div className="border-l-2 border-black py-5">
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-bold text-black-800 text-2xl hover:scale-105 duration-200"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          </div>
          <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer p-6 z-10 text-black-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <div className="border-4 border-black absolute top-0 left-0 bg-white w-screen h-screen">
          <ul className="flex flex-col justify-center items-center big-white">
            {links.map(({ id, link }) => (
              
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-3xl border-t-2 border-black w-screen"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
    </div>
    
  );
};

export default NavBar;
