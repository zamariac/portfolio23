import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: arrayDestruct,
    },
    {
      id: 5,
      src: reactParallax,
    },
    {
      id: 6,
      src: navbar,
    },
  ];

  return (
    <div
      name="portfolio"
      className="flex px-4"
    >
      <div className="border-2 border-t-0 border-black container max-w-7xl xl:mx-auto">
        <div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        <div className="pb-6">
          <h2 className="text-4xl font-bold inline border-b-2 border-black">
            Portfolio
          </h2>
          <p className="py-6">Check out some current projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="border-2 border-black">
              <img
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
