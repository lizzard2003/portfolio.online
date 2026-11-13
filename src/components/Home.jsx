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
                        Data Analyst
                    </h3>
                    <p className=" text-gray-300 py-4 max-w-md">
                        Data Analyst with a background in operations, sales, and retail, bringing a unique combination of analytical, technical,
                        and business skills. As a Computer Science graduate pursuing a Master’s in Information Science,
                        I am passionate about leveraging data and technology to improve processes, solve problems, and support informed decision-making.
                        I take a holistic approach to analysis, translating complex data into actionable insights tailored to diverse audiences. A collaborative team player who values innovation and knowledge sharing,
                        I also enjoy independent projects that allow me to explore new technologies and expand my technical expertise.

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