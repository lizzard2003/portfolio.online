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
                    <h3 className=" text-4xl sm:text-7xl font-bold text-white">
                        I'm a Ship dock Area Manager at Amazon
                    </h3>
                    <p className=" text-gray-300 py-4 max-w-md">
                        To further my professional and academic growth, I have enrolled in the Master of Science in Information Science program at Texas A&M International University.
                        This advanced degree will deepen my passion for technology and continuous learning, providing me with specialized knowledge in data mining, data visualization, and data management.
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