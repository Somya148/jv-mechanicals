import React from 'react';
import { HERO_IMAGE, HERO_NEWIMAGE } from "../assets/images"; // Importing the image

const Hero = () => {
    return (


        // <div className="relative">
        //     <div className="absolute inset-0">
        //         <h1 className="text-8xl font-semibold p-5 sm:pl-20 sm:pt-20">Top picks</h1>
        //         <h1 className="text-6xl font-thin p-5 sm:pl-24 sm:pt-10 italic">for your ride.</h1>

        //     </div>
        //     <div className="w-full h-screen bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${HERO_IMAGE})` }}></div>

        // </div>
        <div className="flex justify-center">
            <div className="w-6/12 mt-20 ml-10 sm:mt-40 sm:ml-60">
                <h3 className="font-bold text-3xl text-red-700">JV Mechanicals</h3>
                <h1 className="font-bold text-3xl sm:text-6xl">Original Equipment</h1>
                <h1 className="text-3xl sm:text-6xl">Manufacturer</h1>

                <p className="italic sm:text-3xl text-gray-800 mt-5">Quality without Compromise.</p>
                <button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mt-8 sm:w-56 sm:text-2xl">
                    Get Started
                </button>
            </div>
            <div className="w-6/12 flex mt-20 ml-10 sm:mt-20 sm:mr-28">
                <img src={HERO_NEWIMAGE} alt="hero" className="w-40 h-40 sm:w-full sm:h-full"></img>
            </div>
        </div>

    );
}

export default Hero;
