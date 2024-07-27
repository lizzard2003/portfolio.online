import React from "react";
import HeroImage from '../assets/heroImage.png'
import {FaArrowRight} from 'react-icons/fa'
import {Link} from 'react-scroll';
const Home = () => {
    return(
        <div name="home" className= "h-screen w-full bg-gradient-to-b
        from-black to-gray-800 via-black ">

            <div className= "max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row">
                <div className= "flex flex-col justify-center h-full">
                    <h2 className=" text-4xl sm:text-7xl font-bold text-white">
                        I'm a Ship dock Area Manager at Amazon
                    </h2>
                    <p className=" text-gray-300 py-4 max-w-md">
                        As an alumni of Texas State University, I have recently graduated with a distinguished academic background in Computer Science.
                        With a keen focus on collaborative work, I have cultivated a strong skill set as an effective team member, capable of seamlessly integrating within diverse groups.
                        Presently, my enthusiasm lies in the realm of website development, where I harness cutting-edge technologies such as React, Tailwind CSS, MongoDB, and Flask.
                        By leveraging these advanced tools, I strive to create innovative and dynamic web solutions that seamlessly merge functionality with aesthetic appeal.
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500}
                              className="group text-white w-fit px-6 py-3 my-2
                        flex items-center rounded-md bg-gradient-to-r from-violet-500 to-cyan-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover: rotate-90 duration-300">
                            <FaArrowRight size={15} className="ml-1"/>
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="my profile"
                    className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>

            </div>
    </div>
    );
};

export default Home;