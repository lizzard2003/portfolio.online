import React from "react";



const About = () =>{
    return(
    <div name="about" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full">

            <div className="pb-6">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
                I graduated from Texas State University with a Bachelor's degree in Computer Science.
                I then started working at Amazon as an Area Manager, where I was taught the leadership principles and how to handle various situations as a leader.
                I have decided to continue pursuing my passion for technology by enrolling in a Master's program at Texas A&M International University.
                In my spare time, I have been focusing on completing my Google Cybersecurity certification.

            </p>
            <br/>
            <p className="text-xl">

            </p>

        </div>
    </div>

    );
};
export default About;