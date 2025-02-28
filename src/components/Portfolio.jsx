import React from "react";

import HomePage from'../assets/HomePage.png'

import ReactLayout from'../assets/ReactLayout.png'

import Spotify from '../assets/portfolio/SpotifyCopy.jpg'
import NasaVerse from '../assets/NasaVerse.png'
import Earthquake from '../assets/Earthquakedata.png'


const Portfolio= () => {
    const portfolios= [
        {
            id:1,
            src: Earthquake,
            href:"",
            link:"https://github.com/lizzard2003/Earthquake1970",

        },
        {
            id:2,
            src: HomePage,
            href:"https://bibleapp.fly.dev/login",
            link:"https://github.com/lizzard2003/Bible.git",


        },
        {
            id:3,
            src: ReactLayout,
            href:"",
            link:"https://github.com/lizzard2003/reactlayout.git",

        },
        {
            id:4,
            src: Spotify,
            href:"",
            link:"https://github.com/lizzard2003/spotifyClone.git",


        },
        {
            id:5,
            src: NasaVerse,
            href:"https://nasa-verse.fly.dev/",
            link:"https://github.com/lizzard2003/NasaPic.git",


        },

    ]
    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full
        text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className= "pb-8">
                <p className="text-4xl font-bold inline
                 border-b-4 border-gray-800">Portfolio</p>
                <p className="py-6"> Check out some of my work here :</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm: px-0">
                {
                    portfolios.map(({id,src,href,link}) =>(

                        <div key={id} className="shadow-md shadow-gray-800 rounded-lg">
                            <img src={src} alt="" className="rounded-md
                   duration-200 hover:scale-105"/>
                            <div className=" flex items-center justify-center">
                                <a href={href} className="w-1/2 px-6 py-3 duration-200 scale-105">
                                    <button className="w-1/2 px-6 py-3 duration-200 scale-105">Demo</button></a>
                                <a href={link} className="w-1/2 px-6 py-3 duration-200 scale-105">
                                    <button className="w-1/2 px-6 py-3 duration-200 scale-105">Code</button></a>

                            </div>
                        </div>

                    ))}
            </div>
        </div>
    </div>
    );
};

export default Portfolio;
