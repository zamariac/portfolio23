import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import HeroImage from '../assets/heroImage.png';

function Home() {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hi! I'm a Front End Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'> I have 5 years of web development experience working with tech companies, creative agencies and with private clients. I love working with designers and building beautiful things!
                </p>
                <div>
                    <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>Portfolio
                        <span className="hover:rotate-90 duration-300">
                            <MdKeyboardDoubleArrowRight size={20} className="ml-1" />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img 
                    src={HeroImage} 
                    alt='me'
                    className="rounded-2xl mx-auto w-2/3 md:w-full" 
                />
            </div>
        </div>
    </div>

  )
}

export default Home
