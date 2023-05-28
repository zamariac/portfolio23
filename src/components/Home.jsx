import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div 
      name="home" 
    >
      <div className="flex px-4">
        <div className="mb-5 border-2 border-t-0 border-black container md:columns-2 max-w-7xl xl:mx-auto"> 
                <div className="p-4 border-2 border-black m-6">
                  <img
                    src={HeroImage}
                    alt="my profile"
                    className="rounded-2xl mx-auto w-2/3 "
                  />
                </div>
                <div className="md:border-l-2 border-black">
                    <div>hello</div>
                   
                    <div className="md:border-t-2 border-black">
                    <div className="p-4">
                      <h2 className="text-6xl md:text-5xl font-bold text-black">
                        I'm a Full Stack Developer
                      </h2>
                      <p className="text-gray-500 py-4 max-w-md">
                        I have 8 years of experience building and desgining software.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Next JS and GraphQL.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-2 border-black flex flex-row justify-between">
                    <span className="left">hello</span>
                    <span className="bg-black cursor-pointer">
                      <Link
                      to="portfolio"
                      smooth
                      duration={500}
                      className="group text-orange-50 w-fit px-4 py-2 my-2 flex items-center"
                    >
                      Portfolio
                      <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} />
                      </span>
                    </Link>
                    </span>
                  </div>
              </div>  
        </div>
      </div>
  </div> 
  );
};

export default Home;
